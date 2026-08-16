import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent } from "react";
import {
  Bookmark, Check, ChevronRight, Clock3, Disc3, Heart, History,
  ListMusic, LoaderCircle, Menu, MoreHorizontal, Pause, Play, Plus,
  Search, Share2, SkipBack, SkipForward, Sparkles, Volume2, X
} from "lucide-react";

type Track = {
  id: string; title: string; channel: string; thumbnail: string;
  duration?: string; views?: number | string;
};
type TelegramWebApp = { ready: () => void; expand: () => void; close: () => void; MainButton?: { hide: () => void } };
declare global { interface Window { Telegram?: { WebApp?: TelegramWebApp } } }

const fallbackTracks: Track[] = [
  { id: "fallback-1", title: "Aaj Jaane Ki Zid Na Karo", channel: "Farida Khanum", thumbnail: "https://i.ytimg.com/vi/7VqG5c8i2vE/hqdefault.jpg", duration: "5:33", views: 18200000 },
  { id: "fallback-2", title: "Kho Gaye Hum Kahan", channel: "Jasleen Royal", thumbnail: "https://i.ytimg.com/vi/7m7JvHk4wqI/hqdefault.jpg", duration: "3:40", views: 9430000 },
  { id: "fallback-3", title: "Iktara — The Lounge Version", channel: "Amit Trivedi", thumbnail: "https://i.ytimg.com/vi/fSS_R91Nimw/hqdefault.jpg", duration: "4:13", views: 7620000 },
  { id: "fallback-4", title: "Shaam", channel: "Aisha", thumbnail: "https://i.ytimg.com/vi/7L5LxJcX3sM/hqdefault.jpg", duration: "4:50", views: 5160000 },
  { id: "fallback-5", title: "Kasoor", channel: "Prateek Kuhad", thumbnail: "https://i.ytimg.com/vi/BPMrhQ5yA6s/hqdefault.jpg", duration: "3:17", views: 22700000 }
];

function formatViews(value?: number | string) {
  const n = Number(value || 0);
  if (!n) return "—";
  if (n > 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n > 1000) return `${Math.round(n / 1000)}K`;
  return String(n);
}

function App() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [query, setQuery] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const [selected, setSelected] = useState<Track | null>(null);
  const [favorites, setFavorites] = useState<string[]>(() => JSON.parse(localStorage.getItem("sukanya-favorites") || "[]"));
  const [queue, setQueue] = useState<Track[]>([]);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showQueue, setShowQueue] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [notice, setNotice] = useState("");
  const requestId = useRef(0);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) { tg.ready(); tg.expand(); tg.MainButton?.hide(); }
  }, []);

  const loadTracks = useCallback(async (term = "") => {
    const thisRequest = ++requestId.current;
    setLoading(true); setError("");
    try {
      const endpoint = term ? `/api/youtube/search?q=${encodeURIComponent(term)}` : "/api/youtube/trending";
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error("The room is quiet right now.");
      const result = await response.json();
      if (thisRequest !== requestId.current) return;
      setTracks(Array.isArray(result.items) ? result.items : []);
    } catch {
      if (thisRequest !== requestId.current) return;
      setError("Could not tune in. Check your connection and try again.");
      setTracks(term ? [] : fallbackTracks);
    } finally { if (thisRequest === requestId.current) setLoading(false); }
  }, []);

  useEffect(() => { loadTracks(); }, [loadTracks]);
  useEffect(() => { localStorage.setItem("sukanya-favorites", JSON.stringify(favorites)); }, [favorites]);
  useEffect(() => { if (!notice) return; const timer = setTimeout(() => setNotice(""), 2400); return () => clearTimeout(timer); }, [notice]);

  const playTrack = async (track: Track) => {
    setSelected(track); setPlaying(true);
    if (!queue.some(item => item.id === track.id)) setQueue(current => [...current, track]);
    try { await fetch("/api/telegram/action", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "play", videoId: track.id }) }); } catch { /* browser fallback */ }
  };
  const toggleFavorite = async (track: Track) => {
    const isFavorite = favorites.includes(track.id);
    setFavorites(current => isFavorite ? current.filter(id => id !== track.id) : [...current, track.id]);
    setNotice(isFavorite ? "Removed from your shelf" : "Saved to your shelf");
    try { await fetch("/api/telegram/action", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: isFavorite ? "unfavorite" : "favorite", videoId: track.id }) }); } catch { /* browser fallback */ }
  };
  const submitSearch = (event: FormEvent) => { event.preventDefault(); setActiveQuery(query.trim()); loadTracks(query.trim()); };
  const displayedTracks = useMemo(() => tracks, [tracks]);

  return (
    <div className="app-shell">
      <aside className={mobileNav ? "sidebar open" : "sidebar"}>
        <div className="brand"><div className="brand-mark"><Disc3 size={22} /></div><span>Sukanya<span className="brand-dot">.</span></span></div>
        <div className="sidebar-label">Your room</div>
        <nav>
          <button className="nav-item active" onClick={() => { setActiveQuery(""); loadTracks(); setMobileNav(false); }} data-testid="button-nav-discover"><Sparkles size={17} /> Discover</button>
          <button className="nav-item" onClick={() => { setNotice(`${favorites.length} saved ${favorites.length === 1 ? "track" : "tracks"}`); setMobileNav(false); }} data-testid="button-nav-saved"><Bookmark size={17} /> Saved <span className="nav-count">{favorites.length}</span></button>
          <button className="nav-item" onClick={() => { setShowQueue(true); setMobileNav(false); }} data-testid="button-nav-queue"><ListMusic size={17} /> Queue <span className="nav-count">{queue.length}</span></button>
          <button className="nav-item" onClick={() => setNotice("Your listening history is coming along")} data-testid="button-nav-history"><History size={17} /> History</button>
        </nav>
        <div className="sidebar-bottom"><div className="telegram-card"><span className="online-dot" /><div><strong>Telegram room</strong><small>Connected privately</small></div><Check size={15} /></div><div className="profile"><div className="avatar">S</div><div><strong>Sukanya</strong><small>Personal session</small></div><MoreHorizontal size={17} /></div></div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <button className="icon-button mobile-menu" onClick={() => setMobileNav(value => !value)} aria-label="Open navigation" data-testid="button-mobile-menu"><Menu size={21} /></button>
          <div className="breadcrumb"><span>Room</span><ChevronRight size={14} /><strong>{activeQuery ? "Search results" : "Discover"}</strong></div>
          <div className="top-actions"><span className="connection"><span className="online-dot" /> Live in Telegram</span><button className="icon-button" onClick={() => setShowQueue(true)} aria-label="Open queue" data-testid="button-open-queue"><ListMusic size={19} /></button></div>
        </header>
        <section className="hero">
          <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line" /> A private listening room</p><h1>Find a song.<br /><em>Stay awhile.</em></h1><p className="hero-sub">A softer way to discover music, made for the in-between moments.</p>
            <form className="search-wrap" onSubmit={submitSearch}><Search size={19} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search a song, artist, or mood" aria-label="Search music" data-testid="input-search" />{query && <button type="button" className="clear-search" onClick={() => setQuery("")} data-testid="button-clear-search"><X size={15} /></button>}<button type="submit" className="search-submit" data-testid="button-submit-search">Search</button></form>
          </div>
          <div className="hero-art"><div className="orb orb-one" /><div className="orb orb-two" /><div className="hero-disc"><div className="disc-groove" /><div className="disc-label">S</div></div><span className="art-caption">Tonight's<br /><strong>frequency</strong></span></div>
        </section>
        <section className="content-section">
          <div className="section-heading"><div><p className="eyebrow">Curated for this moment</p><h2>{activeQuery ? `Results for “${activeQuery}”` : "The room is yours"}</h2></div><button className="text-button" onClick={() => { setActiveQuery(""); setQuery(""); loadTracks(); }} data-testid="button-see-all">Refresh room <ChevronRight size={15} /></button></div>
          {loading ? <div className="track-list">{[1,2,3,4].map(item => <div className="track-skeleton" key={item}><span /><div><i /><i /></div></div>)}</div> : error && tracks.length === 0 ? <div className="state-card"><p>{error}</p><button className="outline-button" onClick={() => loadTracks(activeQuery)} data-testid="button-retry">Try again</button></div> : displayedTracks.length === 0 ? <div className="state-card"><div className="empty-icon"><Search size={20} /></div><h3>No songs found</h3><p>Try a different artist, title, or feeling.</p></div> : <div className="track-list">{displayedTracks.map((track, index) => <TrackRow key={track.id} track={track} index={index} selected={selected?.id === track.id} playing={playing} favorite={favorites.includes(track.id)} onPlay={playTrack} onFavorite={toggleFavorite} onQueue={trackItem => { setQueue(current => current.some(item => item.id === trackItem.id) ? current : [...current, trackItem]); setNotice("Added to your queue"); }} />)}</div>}
        </section>
        <footer><span>Sukanya Music</span><span>Made for the late hours</span><span>v1.0 / Telegram WebApp</span></footer>
      </main>
      {selected && <Player track={selected} playing={playing} setPlaying={setPlaying} onClose={() => { setPlaying(false); setSelected(null); }} onFavorite={toggleFavorite} favorite={favorites.includes(selected.id)} />}
      {showQueue && <QueuePanel queue={queue} selected={selected} onClose={() => setShowQueue(false)} onPlay={playTrack} onRemove={track => setQueue(current => current.filter(item => item.id !== track.id))} />}
      {notice && <div className="toast" data-testid="status-notice"><Check size={15} />{notice}</div>}
    </div>
  );
}

function TrackRow({ track, index, selected, playing, favorite, onPlay, onFavorite, onQueue }: { track: Track; index: number; selected: boolean; playing: boolean; favorite: boolean; onPlay: (track: Track) => void; onFavorite: (track: Track) => void; onQueue: (track: Track) => void }) {
  return <article className={selected ? "track-row selected" : "track-row"} data-testid={`card-track-${track.id}`}><span className="track-index">{selected && playing ? <span className="equalizer"><i /><i /><i /></span> : String(index + 1).padStart(2, "0")}</span><button className="cover-button" onClick={() => onPlay(track)} aria-label={`Play ${track.title}`} data-testid={`button-play-${track.id}`}><img src={track.thumbnail} alt="" /><span className="cover-play"><Play size={16} fill="currentColor" /></span></button><div className="track-meta"><h3>{track.title}</h3><p>{track.channel}</p></div><span className="track-duration">{track.duration || "—"}</span><span className="track-views">{formatViews(track.views)} plays</span><button className={favorite ? "row-action liked" : "row-action"} onClick={() => onFavorite(track)} aria-label="Save track" data-testid={`button-favorite-${track.id}`}><Heart size={17} fill={favorite ? "currentColor" : "none"} /></button><button className="row-action queue-action" onClick={() => onQueue(track)} aria-label="Add to queue" data-testid={`button-queue-${track.id}`}><Plus size={18} /></button></article>;
}

function Player({ track, playing, setPlaying, onClose, onFavorite, favorite }: { track: Track; playing: boolean; setPlaying: (value: boolean) => void; onClose: () => void; onFavorite: (track: Track) => void; favorite: boolean }) {
  return <div className="player-bar"><div className="player-track"><img src={track.thumbnail} alt="" /><div><strong>{track.title}</strong><small>{track.channel}</small></div></div><div className="player-controls"><button onClick={() => setPlaying(false)} aria-label="Previous track" data-testid="button-previous"><SkipBack size={17} /></button><button className="play-main" onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause" : "Play"} data-testid="button-toggle-play">{playing ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}</button><button onClick={() => setPlaying(false)} aria-label="Next track" data-testid="button-next"><SkipForward size={17} /></button></div><div className="player-progress"><span /><i /></div><div className="player-end"><span className="volume"><Volume2 size={16} /> 72%</span><button className={favorite ? "row-action liked" : "row-action"} onClick={() => onFavorite(track)} aria-label="Save current track" data-testid="button-player-favorite"><Heart size={17} fill={favorite ? "currentColor" : "none"} /></button><button className="row-action" onClick={onClose} aria-label="Close player" data-testid="button-close-player"><X size={17} /></button></div></div>;
}

function QueuePanel({ queue, selected, onClose, onPlay, onRemove }: { queue: Track[]; selected: Track | null; onClose: () => void; onPlay: (track: Track) => void; onRemove: (track: Track) => void }) {
  return <div className="overlay" onClick={onClose}><aside className="queue-panel" onClick={event => event.stopPropagation()}><div className="panel-head"><div><p className="eyebrow">Up next</p><h2>Your queue</h2></div><button className="icon-button" onClick={onClose} aria-label="Close queue" data-testid="button-close-queue"><X size={19} /></button></div>{queue.length === 0 ? <div className="panel-empty"><ListMusic size={24} /><p>Your queue is clear.</p><small>Add songs with the plus button.</small></div> : <div className="queue-items">{queue.map((track, index) => <div className={selected?.id === track.id ? "queue-item current" : "queue-item"} key={track.id}><span>{String(index + 1).padStart(2, "0")}</span><img src={track.thumbnail} alt="" /><button onClick={() => onPlay(track)} data-testid={`button-queue-play-${track.id}`}><strong>{track.title}</strong><small>{track.channel}</small></button><button className="row-action" onClick={() => onRemove(track)} aria-label="Remove from queue" data-testid={`button-remove-queue-${track.id}`}><X size={15} /></button></div>)}</div>}</aside></div>;
}

export default App;