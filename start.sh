#!/bin/sh
set -eu

# Railway can occasionally start a container before its dependency layer is
# available. Rebuild the production dependency tree only when a required
# package is missing, then hand control to the bot process.
if [ ! -d "node_modules/node-telegram-bot-api" ] ||
   [ ! -d "node_modules/mongoose" ] ||
   [ ! -d "node_modules/telegram" ]; then
  echo "Production dependencies are missing; installing from package-lock.json..."
  npm ci --omit=dev --ignore-scripts --no-audit --no-fund
fi

exec node vote-bot.mjs