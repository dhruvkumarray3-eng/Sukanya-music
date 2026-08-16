# 𝑵𝑶𝑩𝑰𝑻𝑨 Giveaway Bot (v3.1.0)

A Telegram giveaway/voting bot with MongoDB persistence, force-join, broadcast, VIP membership, and themed buttons.

## Stack
- **Runtime:** Node.js 18+ (ES Modules)
- **Bot framework:** node-telegram-bot-api
- **Database:** MongoDB via Mongoose
- **Entry point:** `vote-bot.mjs` (single-file bot)

## How to run
```bash
npm start
```
The workflow "Start application" runs `npm start` automatically.

For Railway/Docker deployments, `start.sh` verifies the production packages
before starting the bot. The complete Telegram command inventory is in
`COMMANDS.md`.

## Required secrets
| Secret | Description |
|---|---|
| `TELEGRAM_BOT_TOKEN` | Bot token from @BotFather |
| `ADMIN_ID` | Your Telegram numeric user ID |
| `MONGODB_URI` | MongoDB Atlas connection string |
| `GITHUB_TOKEN` | GitHub PAT for pushing code changes |

## User preferences
- Keep changes minimal and scoped
- GitHub pushes should be done via workflow/script using GITHUB_TOKEN
