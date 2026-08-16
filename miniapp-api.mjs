import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const webDistDir = path.join(currentDir, "web", "dist");
const youtubeApiKey = process.env.YOUTUBE_API_KEY;

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(JSON.stringify(payload));
}

function formatViews(value) {
  const views = Number(value || 0);
  if (!Number.isFinite(views) || views <= 0) return "—";
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(views);
}

function parseDuration(duration) {
  if (!duration) return "—";
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return "—";
  const hours = Number(match[1] || 0);
  const minutes = Number(match[2] || 0);
  const seconds = Number(match[3] || 0);
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  if (!totalSeconds) return "—";
  const mins = Math.floor(totalSeconds / 60);
  const secs = String(totalSeconds % 60).padStart(2, "0");
  return hours ? `${hours}:${String(minutes).padStart(2, "0")}:${secs}` : `${mins}:${secs}`;
}

async function youtubeRequest(resource, params) {
  if (!youtubeApiKey) {
    throw new Error("YouTube API is not configured");
  }

  const query = new URLSearchParams({ ...params, key: youtubeApiKey });
  const response = await fetch(`https://www.googleapis.com/youtube/v3/${resource}?${query}`);
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const reason = payload?.error?.errors?.[0]?.reason || "YouTube request failed";
    throw new Error(reason);
  }
  return payload;
}

async function hydrateVideos(items) {
  if (!items.length) return [];
  const ids = items.map((item) => item.id.videoId || item.id).filter(Boolean);
  const details = await youtubeRequest("videos", {
    part: "snippet,contentDetails,statistics",
    id: ids.join(","),
  });
  const detailsById = new Map(details.items.map((item) => [item.id, item]));

  return items
    .map((item) => {
      const id = item.id.videoId || item.id;
      const detail = detailsById.get(id);
      const snippet = detail?.snippet || item.snippet || {};
      return {
        id,
        title: snippet.title || "Untitled video",
        channel: snippet.channelTitle || "YouTube",
        thumbnail:
          snippet.thumbnails?.maxres?.url ||
          snippet.thumbnails?.high?.url ||
          snippet.thumbnails?.medium?.url ||
          snippet.thumbnails?.default?.url ||
          "",
        duration: parseDuration(detail?.contentDetails?.duration),
        views: formatViews(detail?.statistics?.viewCount),
        publishedAt: snippet.publishedAt || null,
      };
    })
    .filter((item) => item.id);
}

async function getTrending() {
  const payload = await youtubeRequest("videos", {
    part: "snippet,contentDetails,statistics",
    chart: "mostPopular",
    regionCode: "IN",
    videoCategoryId: "10",
    maxResults: "12",
  });
  return {
    items: await hydrateVideos(payload.items || []),
    nextPageToken: payload.nextPageToken || null,
  };
}

async function searchVideos(query, pageToken) {
  const payload = await youtubeRequest("search", {
    part: "snippet",
    type: "video",
    maxResults: "12",
    q: query,
    ...(pageToken ? { pageToken } : {}),
  });
  return {
    items: await hydrateVideos(payload.items || []),
    nextPageToken: payload.nextPageToken || null,
  };
}

async function readBody(req) {
  let body = "";
  for await (const chunk of req) {
    body += chunk;
    if (body.length > 20_000) throw new Error("Request body is too large");
  }
  return body ? JSON.parse(body) : {};
}

function isApiPath(pathname) {
  return pathname.startsWith("/api/");
}

function serveStatic(res, pathname) {
  if (!fs.existsSync(webDistDir)) return false;
  const requested = pathname === "/" ? "/index.html" : pathname;
  const candidate = path.resolve(webDistDir, `.${requested}`);
  if (!candidate.startsWith(webDistDir) || !fs.existsSync(candidate) || fs.statSync(candidate).isDirectory()) {
    return false;
  }
  const ext = path.extname(candidate);
  res.writeHead(200, {
    "Content-Type": contentTypes[ext] || "application/octet-stream",
    "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=31536000, immutable",
  });
  res.end(fs.readFileSync(candidate));
  return true;
}

export async function handleMiniAppRequest(req, res) {
  const requestUrl = new URL(req.url || "/", "http://localhost");
  const pathname = requestUrl.pathname;

  if (pathname === "/api/youtube/trending" && req.method === "GET") {
    try {
      sendJson(res, 200, await getTrending());
    } catch (error) {
      sendJson(res, 502, { error: error.message || "Unable to load trending music" });
    }
    return true;
  }

  if (pathname === "/api/youtube/search" && req.method === "GET") {
    const query = requestUrl.searchParams.get("q")?.trim().slice(0, 100);
    if (!query) {
      sendJson(res, 400, { error: "Search query is required" });
      return true;
    }
    try {
      sendJson(
        res,
        200,
        await searchVideos(query, requestUrl.searchParams.get("pageToken")?.slice(0, 200)),
      );
    } catch (error) {
      sendJson(res, 502, { error: error.message || "Unable to search YouTube" });
    }
    return true;
  }

  if (pathname === "/api/telegram/action" && req.method === "POST") {
    try {
      const body = await readBody(req);
      const action = String(body.action || "").slice(0, 40);
      const videoId = String(body.videoId || "").slice(0, 32);
      if (!action || !videoId) {
        sendJson(res, 400, { error: "Action and videoId are required" });
        return true;
      }
      sendJson(res, 200, { ok: true, action, videoId });
    } catch (error) {
      sendJson(res, 400, { error: error.message || "Invalid request" });
    }
    return true;
  }

  if (isApiPath(pathname)) {
    sendJson(res, 404, { error: "API route not found" });
    return true;
  }

  if (req.method === "GET" && serveStatic(res, pathname)) return true;
  return false;
}