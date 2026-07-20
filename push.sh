#!/bin/bash
set -e

if [ -z "$GITHUB_TOKEN" ] || [ -z "$GITHUB_REPO_URL" ]; then
  echo "❌ GITHUB_TOKEN or GITHUB_REPO_URL not set in secrets"
  exit 1
fi

COMMIT_MSG="${1:-chore: update via agent [$(date -u +%Y-%m-%dT%H:%M:%SZ)]}"

REPO_PATH="${GITHUB_REPO_URL#https://github.com/}"
AUTH_URL="https://nobita:${GITHUB_TOKEN}@github.com/${REPO_PATH}.git"

git -c user.name="mystricman0-cell" -c user.email="mystricman0-cell@users.noreply.github.com" add -A
git -c user.name="mystricman0-cell" -c user.email="mystricman0-cell@users.noreply.github.com" commit -m "$COMMIT_MSG" || echo "ℹ️ Nothing to commit"
git push "$AUTH_URL" HEAD:main
echo "✅ Pushed to GitHub as mystricman0-cell"
