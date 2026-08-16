<div align="center">

```
╔══════════════════════════════════════════════════════╗
║                                                      ║
║ ███╗  ██╗  ██████╗  ██████╗  ██╗ ████████╗  █████╗   ║
║ ████╗ ██║ ██╔═══██╗ ██╔══██╗ ██║ ╚══██╔══╝ ██╔══██╗  ║
║ ██╔██╗██║ ██║   ██║ ██████╔╝ ██║    ██║    ███████║  ║
║ ██║╚████║ ██║   ██║ ██╔══██╗ ██║    ██║    ██╔══██║  ║
║ ██║ ╚███║ ╚██████╔╝ ██████╔╝ ██║    ██║    ██║  ██║  ║
║ ╚═╝  ╚══╝  ╚═════╝  ╚═════╝  ╚═╝    ╚═╝    ╚═╝  ╚═╝  ║
║                                                      ║
║    ✦  N  E  T  W  O  R  K  ✦                         ║
║    ─────────────────────────                         ║
║    🎁  GIVEAWAY & VOTE BOT  v3.1.0  🏆               ║
║                                                      ║
╚══════════════════════════════════════════════════════╝
```

[![Telegram](https://img.shields.io/badge/Live%20Bot-@Nobitavotebot-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/Nobitavotebot)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](#)
[![Node.js](https://img.shields.io/badge/Runtime-Node.js%2018+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](#)
[![License](https://img.shields.io/badge/License-MIT-gold?style=for-the-badge)](#)

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/new/template?template=https://github.com/dhruvkumarray3-eng/Sukanya-music)
&nbsp;&nbsp;
[![Run on Replit](https://replit.com/badge/github/dhruvkumarray3-eng/Sukanya-music)](https://replit.com/new/github/dhruvkumarray3-eng/Sukanya-music)

</div>

---

```
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
                    OVERVIEW
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
```

**𝑵𝑶𝑩𝑰𝑻𝑨 Giveaway Bot** is a full-featured, production-ready Telegram bot for managing live giveaways, voting contests, and channel growth — built for the 𝑵𝑶𝑩𝑰𝑻𝑨 Network.

> Real-time leaderboards · Paid voting (INR/UPI + Telegram Stars) · VIP memberships · Force-join gates · Animated UI · MongoDB persistence

Complete Telegram command inventory: [`COMMANDS.md`](COMMANDS.md)

---

```
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
                    FEATURES
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
```

### 📡 &nbsp;Dynamic Log Destination *(NEW in v3.1.0)*

Owner can change where ALL bot logs go (support tickets, feedback, payment alerts, new users) at any time — no restart needed:

| Command | Effect |
|---------|--------|
| `/setlogdest` | View current destination + inline buttons to reset |
| `/setlogdest 123456789` | Route logs to any user ID |
| `/setlogdest -1001234567890` | Route logs to a channel/group |
| `/setlogdest reset` | Reset back to owner (default) |

- ✅ Persists in MongoDB — survives restarts
- ✅ Test message auto-sent to verify access before saving
- ✅ **Inline button** to reset with one tap

---

### 👁️ &nbsp;Broadcast Preview *(NEW in v3.1.0)*

See exactly how your broadcast will look **before** sending to everyone:

```
/broadcastpreview Hello everyone!
```
Or reply to any message → `/broadcastpreview`

- Shows full 𝑵𝑶𝑩𝑰𝑻𝑨 header with your stored premium emojis
- Shows recipient count + premium emoji status
- **Send Now** buttons (Silent / Loud) right from preview
- Works for text, photo, and media messages

---

### 💓 &nbsp;Fixed Heartbeat Display *(v3.1.0)*

Heartbeat report now shows cleanly inside the box:

```
╔═══════════════════════╗
║  💓  BOT HEARTBEAT  💓  ║
╠═══════════════════════╣
║ ◈ Status    ▸ 🟢 ALIVE
║ ◈ Time      ▸ 🕐 09:35:43 am IST
║ ◈ Uptime    ▸ ⏱️ 15h 51m 15s
║ ◈ Users     ▸ 👥 51
║ ◈ Giveaways ▸ 🎁 1 active / 17 total
║ ◈ Database  ▸ 💾 ✅ Connected
║ ◈ Next ping ▸ ⏳ 3 minutes
╚═══════════════════════╝
```

Commands: `/heartbeat` (manual check) · `/toggleheartbeat` (ON/OFF auto reports)

---

### 🎨 &nbsp;Colored Button UI Theme System *(NEW in v3.1.0)*

Every button across the entire bot now has a **visual color style** — no more plain grey buttons:

| Color | Style | Used For |
|-------|-------|----------|
| 🔵 **Blue** | `primary` | Navigation, back, leaderboard, channel selection, links |
| 🟢 **Green** | `success` | Confirm, join, enable, approve, automatic end, INR pay |
| 🔴 **Red** | `danger` | Cancel, stop, reject, manual end, free-only, VIP upsell |

**Theme Command (Admin only):**
- `/theme` — View current theme + switch between `default`, `red`, `blue`, `green`
- Colors update **instantly** for all future button messages
- Theme persists in MongoDB — survives bot restarts

**Screens with full color styling:**
- Main Menu, My Giveaways, Channel Selection
- Giveaway Creation (all 5 steps)
- End Type (Automatic 🟢 / Manual 🔴)
- Payment Method, Enable/Disable Paid Votes
- Admin Approve/Reject panels
- VIP Membership, Permissions, Support

---

### 🌟 &nbsp;Premium Emoji System *(NEW in v3.1.0)*
- **Permanent storage** — Admin sets premium emoji IDs via `/setpremiumemoji <emoji_id> [label]`; stored in MongoDB forever
- **Survives premium expiry** — Even if admin's Telegram Premium expires, all saved emoji IDs remain active in the bot
- **Auto-used in broadcasts** — All text-mode broadcasts automatically decorate headers with stored premium emojis
- **Compose mode preserves emojis** — Broadcasts using compose/forward mode copy messages as-is, preserving all premium emojis inside
- `/setpremiumemoji <id> [label]` — Add emoji permanently
- `/removepremiumemoji <id>` — Remove one emoji
- `/listpremiumemoji` — View all stored emoji IDs + preview tags
- `/clearallpremiumemoji` — Remove all stored emojis

### 💓 &nbsp;Auto Heartbeat & Keep-Alive System *(NEW in v3.1.0)*

Bot kabhi sleep nahi karta — 24x7 alive:

| Feature | Detail |
|---------|--------|
| **Self-ping** | Bot apne HTTP server ko har 3 min mein ping karta hai |
| **Telegram ping** | `bot.getMe()` call har 3 min — connection alive |
| **Owner report** | Compact status report owner ID pe har 3 min |
| **HTTP server** | `/ping` → `OK` · `/health` → JSON stats |
| **FloodWait safe** | Errors catch hote hain, bot rukta nahi |

**Report format (har 3 min):**
```
💓 BOT HEARTBEAT
◈ Status    ▸ 🟢 ALIVE
◈ Time      ▸ 3:45:12 IST
◈ Uptime    ▸ 2h 15m 30s
◈ Users     ▸ 1234
◈ Giveaways ▸ 5 active / 12 total
◈ Database  ▸ ✅ Connected
◈ Next ping ▸ 3 minutes
```

**Admin commands:**
- `/heartbeat` — Manual status report karo kabhi bhi
- `/toggleheartbeat` — Auto reports ON/OFF (bot alive rahega, sirf message band hoga)

**Endpoints:**
- `GET /ping` → `OK` (uptime monitoring ke liye)
- `GET /health` → JSON with full stats

### 📢 &nbsp;𝑵𝑶𝑩𝑰𝑻𝑨 Style Broadcast System *(NEW in v3.1.0)*

Full flag-based broadcast system — inspired by 𝑵𝑶𝑩𝑰𝑻𝑨 idea:

| Flag | Effect |
|------|--------|
| `-pin` | Broadcast + silently **pin** message in every chat |
| `-pinloud` | Broadcast + pin **with notification** |
| `-nobot` | Skip groups/channels → send **to users only** |
| `-user` | Same as `-nobot` — users only |

**Usage examples:**
```
/broadcast -pin Hello everyone!
/broadcast -pinloud -user Important update!
/loud -pin -user Breaking news!
```

**Reply-to + flag mode:**
> Reply to any message → `/broadcast -pin` → forwards + pins in all chats

**FloodWait smart handling (NOBITA_MUSIC style):**
- If Telegram throttles → waits automatically (up to 200s)
- If wait > 200s → skips that chat and continues
- 200ms delay between each send (flood-safe)

**Broadcast report shows:**
- ✅ Sent · ❌ Failed · 📌 Pinned · 📡 Reach % · Flags used

**Flags can be combined:** `/broadcast -pin -user -pinloud` all work together

### 📡 &nbsp;Broadcast Stats & Reach Tracking *(NEW in v3.1.0)*
- **`/broadcaststats`** — Full reach dashboard for last 20 broadcasts
- Shows: Total sent ✅ · Failed ❌ · **Reach %** per broadcast
- Aggregate overview: Total broadcasts · Total sent · Avg reach · Best reach ever
- Color-coded reach indicators: 🟢 80%+ · 🟡 50%+ · 🔴 below 50%
- Each entry shows: date · target · mode · sent/failed/total count
- **"🗑️ Clear Stats"** button to wipe history
- Reach % added to every broadcast report after each send
- Stats persist across restarts in MongoDB

### 🎭 &nbsp;Premium Sticker Broadcast *(NEW in v3.1.0)*
- Admin can send **any Telegram sticker** (including animated & premium stickers) in compose mode
- Bot detects sticker type: `🎭 Sticker` or `🌟 Premium Sticker`
- Uses `copyMessage` API to forward sticker **exactly as-is** — same animation, same quality
- Premium sticker packs are preserved in full fidelity to all broadcast targets
- `/broadcast` → then send sticker → select target → done!

### 🎨 &nbsp;Button Color Themes *(NEW in v3.1.0)*
- Set a **Red / Blue / Green / Default** color theme for all bot buttons
- `/setbuttontheme red` → all buttons show ❤️ 🔴 🟥 colored emoji indicators
- `/setbuttontheme blue` → 💙 🔵 🔷 theme
- `/setbuttontheme green` → 💚 🟢 🟡 theme
- `/setbuttontheme default` → no extra color indicators
- `/setbuttontheme` (no args) → interactive picker with preview
- Theme persists across restarts via MongoDB

### 🗳️ &nbsp;Vote via Share Link *(NEW in v3.0.6)*
- Participants get a **dedicated vote link**: `https://t.me/bot?start=v_gId_userId`
- Anyone who clicks it → **must join the channel first**, then votes for that participant
- **Two separate links** shown in "Your Links" panel:
  - 🗳️ **Vote Link** — share to collect votes
  - 📋 **Join Link** — for new participants to register in the giveaway
- **Channel join enforced before voting** — "Join Channel → Verify → Vote" flow:
  1. Voter clicks vote link
  2. If not in channel → shown join button + "I Joined — Cast Vote" verify button
  3. Bot re-checks membership on verify tap
  4. Only after confirmed join → vote is registered
- Self-vote blocked with clear error message
- Vote toggle & switch supported (click again = remove vote, click another = switch)
- Channel vote card updates live after every vote
- All vote logic identical to channel button votes (velocity alerts, admin notify, etc.)

### 🗑️ &nbsp;Clear Channel Posts *(NEW in v3.0.5)*
- **Deletes ALL bot messages** from the giveaway channel in one tap
- Covers: giveaway announcement, every participant vote card, winner post
- **Confirmation step** before deleting — shows exact count of messages to be deleted
- Tracks announcement + winner message IDs automatically from creation
- Shows result: how many deleted, how many failed (already removed / not found)
- 50ms delay between deletes — respects Telegram rate limits
- Available via "🗑️ CLEAR CHANNEL POSTS" button in giveaway management

### 📡 &nbsp;Log Destination Control *(NEW in v3.0.5)*
- Route **all user logs, support messages, feedback & payment notifications** to any destination
- Supports **private user ID** or **any channel** (public or private)
- Bot tests access before saving — fails safely with an error if bot is not admin in the channel
- **`/setlogdest <user_id>`** — redirect logs to another user
- **`/setlogdest <channel_id>`** — redirect logs to a channel (bot must be admin)
- **`/setlogdest reset`** — restore logs back to your own admin ID
- Setting persists across restarts via MongoDB

### 🎁 &nbsp;Giveaway System
- Step-by-step wizard to create giveaways in DMs
- End by **countdown timer** or **manual control**
- **Participation open/close** toggle in real time
- Auto-expiry with scheduled reminders (30min · 10min · 5min before end)
- Free tier — limited giveaways for non-VIP users
- Wizard asks Stars paid voting option even when INR-only is selected

### 🗳️ &nbsp;Voting System
- Live vote cards posted directly to your channel
- **Paid votes** — INR/UPI or Telegram Stars
- Auto vote-deduction when a user leaves the channel *(VIP)*
- Only channel members can vote — enforced automatically

### 💰 &nbsp;Paid Votes System — Full Flow

Giveaway participants can buy extra votes using real money (INR/UPI) or Telegram Stars.

#### Setting Rates (Admin Commands)

| Command | Example | What it does |
|---|---|---|
| `/setinr <gId> <votes>` | `/setinr ABC123 5` | 1 rupee = 5 votes (INR rate) |
| `/setstar <gId> <votes>` | `/setstar ABC123 3` | 1 Star = 3 votes (Stars rate) |

> Run `/allgiveaways` to find the giveaway ID (gId).

#### INR/UPI Payment Flow (Manual)

```
User clicks "💰 Buy Paid Votes" in the giveaway menu
         ↓
Selects "🇮🇳 Pay via INR/UPI (QR)"
         ↓
Bot asks: "Kitna paisa dena chahte ho? (₹ amount type karo)"
  e.g. type "50"  →  Bot shows: ₹50 = 250 votes
         ↓
Bot shows QR code with full summary:
  ◈ Amount  : ₹50
  ◈ Votes   : +250 votes milenge ✅
  ◈ UPI ID  : shown if set
  Steps 1–4 clearly listed
         ↓
User pays ₹50 via UPI/QR → takes screenshot → sends it to bot
         ↓
User gets confirmation:
  ◈ Amount  ▸  ₹50
  ◈ Votes   ▸  +250 (pending approval)
  ◈ Pay ID  ▸  5
         ↓
Admin/Owner gets notification with screenshot + details:
  ◈ Name     ▸  User Name (@handle)
  ◈ User ID  ▸  123456789
  ◈ Giveaway ▸  Summer Giveaway (ABC123)
  ◈ Amount   ▸  ₹50          ← user ne jo likha
  ◈ Expected ▸  +250 votes   ← calculated from rate
  ◈ Pay ID   ▸  5
  [✅ Approve] [❌ Reject]
         ↓
Admin taps amount button (₹50 = 250 votes) → ONE TAP → done!
  OR types custom number for any override
         ↓
User gets "✅ Payment Approved!" DM
Channel gets "💰 Paid Votes Purchased!" announcement
```

**On Rejection:**
- User gets a DM: giveaway name + Pay ID + reason
- Channel gets "❌ Payment Rejected" notification

#### Stars Payment Flow (Automatic — Telegram handles it)

```
User selects "⭐ Pay via Telegram Stars"
         ↓
Bot shows rate + asks: "How many Stars to spend?"
  → User types number (e.g. 10)
  → Bot launches Telegram's native Stars payment
         ↓
On successful payment → Votes added automatically (no admin needed)
         ↓
User gets "⭐ Stars Payment Successful!" summary
Channel gets "⭐ Stars Votes Purchased!" announcement
Admin gets notification log
```

#### Channel Notifications (Automatic)

All paid vote events send a public announcement to the giveaway channel:

| Event | Channel Message |
|---|---|
| INR Approved | `💰 Paid Votes Purchased! · Participant · Votes Added · Method: INR/UPI` |
| Stars Paid | `⭐ Stars Votes Purchased! · Participant · Stars Spent · Votes Added` |
| INR Rejected | `❌ Payment Rejected · User ID · Giveaway name` |

### 🚨 &nbsp;Anti-Cheat & Fake Vote Detection

The bot has a built-in automatic system to detect vote panels (bots/services that send many votes rapidly).

#### How Detection Works

- **Default threshold:** 15 votes in 90 seconds for one participant = alert triggered
- Alert is sent to giveaway **owner + admin** with full details
- Detection window resets every 90 seconds (catches repeated bursts)
- Each giveaway can have its own custom threshold

#### Admin Alert Buttons (one tap action)

When a panel is detected, you get these buttons instantly:

| Button | Action |
|---|---|
| **➖ Votes Minus Karo** | Type how many to deduct — removes from participant's total |
| **🗑️ Hatao Participant** | Removes from giveaway + sends DM to participant explaining removal |
| **🚫 Ban + Remove** | Permanently bans user from bot + removes from giveaway |
| **⚠️ Warn Karo** | Sends a "fair play" warning DM to the participant |
| **✅ Dismiss (Ignore)** | Alert closed — no action (for legitimate spikes) |

#### Commands for Anti-Cheat

| Command | Usage | Description |
|---|---|---|
| `/setpanelthreshold` | `/setpanelthreshold <gId> <votes> [seconds]` | Custom threshold per giveaway |
| `/removevotes` | `/removevotes <gId> <userId> <count>` | Manually deduct votes |
| `/addvotes` | `/addvotes <gId> <userId> <count>` | Manually add votes |
| `/flaguser` | `/flaguser <userId> [reason]` | Flag user for monitoring (no ban, just a label) |
| `/warnuser` | `/warnuser <userId> [reason]` | Send manual warning |
| `/ban` | `/ban <userId> [reason]` | Permanently ban from bot |

#### Setting a Custom Threshold

```
/setpanelthreshold ABC123 20 60
→ Alert when 20+ votes in 60 seconds for one participant

/setpanelthreshold ABC123 30
→ Alert when 30+ votes in 90 seconds (default window)
```

- Only giveaway owner or admin can set the threshold
- Change takes effect immediately — no restart needed

### 🔧 &nbsp;Critical Bug Fixes *(v3.0.8)*
- **`/blockedwords` fixed** — same crash (177 words over limit). Now **paginated**: `/blockedwords [page]`, 60 words per page  
- **`/allgiveaways` paginated** — `/allgiveaways [page]`, 20 per page
- **`/listmem` paginated** — `/listmem [page]`, 10 per page with cleaner compact layout
- **`setMyCommands` fixed** — was 109 commands (Telegram max = 100) → trimmed to exactly 100, resolving startup error and restoring the command menu for admin
- All list commands wrapped in `try-catch` — errors now show descriptive message instead of silent crash
- Version bumped to **v3.0.8**

### 📡 &nbsp;Auto Leaderboard Broadcast *(NEW — v3.0.7)*
- **Auto-post live top-10 leaderboard** to the giveaway channel every X hours
- `/setlbbroadcast <gId> <hours>` — start auto-broadcast (0.5h to 24h interval)
- Sends one leaderboard card **immediately** on activation, then every X hours
- **Stops automatically** when giveaway ends — no cleanup needed
- `/stoplbbroadcast <gId>` — manually stop at any time
- `/listlbbroadcast` — see all active broadcasts with next post time (IST)
- Each card shows: giveaway title · participant count · top 10 ranked with medals · live timestamp

```
  ✦━━━━━━━━━━━━━━━━━━━━━✦
    🏆  LIVE LEADERBOARD
  ✦━━━━━━━━━━━━━━━━━━━━━✦

  📌 Summer Giveaway 2026
  👥 Participants: 48

  🥇 Rahul (@rahulxyz) — 312 votes
  🥈 Priya — 278 votes
  🥉 Amit (@amitnobita) — 201 votes
  4.  Sneha — 145 votes
  ...

  🕐 Updated: 25 Jun 2026 · 08:30 pm IST
```

### 🏆 &nbsp;Leaderboard & Results
- Live leaderboard viewable anytime during a giveaway
- Full post-giveaway leaderboard — all participants ranked 1st to last
- 🥇 🥈 🥉 Medal display for top 3
- Winner DMs sent automatically on giveaway end
- Results card posted to channel + private card to creator

### 💳 &nbsp;Payment System
- **INR / UPI** — user pays, uploads screenshot, giveaway owner OR admin approves
- **Telegram Stars** — fully automated payment flow
- Giveaway owner receives payment screenshot directly (not just admin)
- Approval/rejection available to giveaway owner and admin
- Payment IDs for full audit trail

### 👑 &nbsp;VIP Membership
- **3 Plans** — 1 Day · 7 Days · 30 Days *(prices configurable)*
- Purchase via INR/UPI (QR code) or Telegram Stars
- Admin can grant / revoke / extend via commands
- Shows **exact start datetime + expiry datetime + time remaining** (IST, real-time)
- **Membership survives bot restarts** — MongoDB-backed, never lost

```
  ┌─────────────────────────────────────────────┐
  │  VIP PERKS                                  │
  │  ◈ Custom thumbnail on vote post image      │
  │  ◈ Auto vote-deduction on channel leave     │
  │  ◈ 1 extra Force-Join gate per giveaway     │
  │  ◈ Global Force-Join for all users (7D+)    │
  └─────────────────────────────────────────────┘
```

### 📋 &nbsp;/myplan Command
- Any user can check their own VIP status anytime
- Shows plan name, start date, expiry date, time remaining — all in IST
- Visual progress bar showing % of plan used
- Non-VIP users see a prompt to upgrade

```
  ✦━━━━━━━━━━━━━━━━━━━━━✦
     👑  MERA PLAN
  ✦━━━━━━━━━━━━━━━━━━━━━✦

  ✅ VIP Active Hai!
  ⭐ Plan  :  30 Days
  📅 Shuru :  20 Jun 2026 · 01:40 pm IST
  ⏳ Khatam:  20 Jul 2026 · 01:40 pm IST
  ⏱️ Baki  :  29d 22h 15m baki
  ░░░░░░░░░░ 3% used
```

### ⚠️ &nbsp;Auto Expiry Warning
- Bot automatically sends a **1-day-before warning** to every VIP member
- Message shows plan name, exact expiry time (IST), time remaining
- One-tap **Renew Membership** button included
- Warning sent only once (not spammy) — tracked in DB

```
  ✦━━━━━━━━━━━━━━━━━━━━━✦
    ⚠️  MEMBERSHIP EXPIRY
  ✦━━━━━━━━━━━━━━━━━━━━━✦

  🔔 Kal teri VIP membership khatam ho rahi hai!
  ⭐ Plan   ▸  30 Days
  ⏳ Khatam ▸  20 Jul 2026 · 01:40 pm IST
  ⏱️ Baki   ▸  23h 45m baki

  [ 👑 Renew Membership ]
```

### 📩 &nbsp;Support System
- Users can send support messages via `/support`
- Supports **all media types**: Text · Photo · Document · Video · Voice · Audio · Sticker · Video Note
- Admin receives an info card with user name, handle, ID, VIP status, media type
- Media files sent **directly** (not forwarded) with user info in caption
- Admin can mark ticket as ✅ Resolved or ❌ Not Resolved
- Admin can reply directly with `/reply <text>` (reply to forwarded support card)

```
  ✦━━━━━━━━━━━━━━━━━━━━━✦
    📩  SUPPORT REQUEST
  ✦━━━━━━━━━━━━━━━━━━━━━✦

  ◈ Name    ▸  Rahul 👑 VIP
  ◈ Handle  ▸  @rahulxyz
  ◈ User ID ▸  123456789
  ◈ Type    ▸  📄 Document / File

  [ ✅ Resolved ]  [ ❌ Not Resolved ]
```

### 📢 &nbsp;Advanced Broadcast System
- **3 broadcast modes** — Text-only · Reply-copy · Compose (new!)
- **Compose mode** — admin sends any media (photo/doc/video + caption) → picks target
- **4 targets** — Users only · Channels only · Groups only · All
- `/broadcast` = Silent · `/loud` = With sound notification
- Delivery report shows sent ✅ / failed ❌ count + mode used

```
  ◈━━━━━━━━━━━━━━━━━━━━━━◈
    📢  BROADCAST — 🔕 Silent
  ◈━━━━━━━━━━━━━━━━━━━━━━◈

  Mode: 📎 Composed — 📷 Photo
  Caption: Aaj ki update...

  [ 👥 Users ]  [ 📢 Channels ]
  [ 🏘️ Groups ]  [ 🌐 All ]
```

### 🚫 &nbsp;Ban System
- Admin can ban any user with `/ban <userId> [reason]`
- Banned users instantly blocked from all bot interactions
- User receives notification with the ban reason
- Admin can unban with `/unban <userId>`
- Ban list persists across restarts (MongoDB-backed)

### 🗳️ &nbsp;Admin Vote Control
- **`/addvotes <gId> <userId> <count>`** — Manually credit votes to any participant
- **`/removevotes <gId> <userId> <count>`** — Remove votes (cheating correction)
- Works even for users not yet in the giveaway (auto-adds them)
- Instantly saves to MongoDB — no data loss on restart

### 🔧 &nbsp;Maintenance Mode
- `/maintenance on` — Blocks all non-admin users instantly
- Users see a friendly "Bot update mein hai" message
- `/maintenance off` — Re-opens the bot to everyone
- State persists across restarts (MongoDB-backed)

### 📋 &nbsp;Custom Welcome Message
- `/setwelcomemsg` — Set a fully custom welcome text (HTML formatting supported)
- `/clearwelcomemsg` — Restore original default welcome
- Custom text shown instead of default when users run `/start`
- Survives bot restarts (MongoDB-backed)

### 📁 &nbsp;User Export
- `/exportusers` — Downloads a `.txt` file with all bot users
- Shows: User ID · Name · Username · VIP status · Ban status
- Ready for external use, marketing, or audit

### 💰 &nbsp;Payment Stats
- `/paystats` — Dashboard for pending vote payments and membership payments
- Breakdown by giveaway (for vote payments) and by plan (for memberships)
- Also shows: Active VIP count · Banned user count · Maintenance status

### 📊 &nbsp;Giveaway Report
- `/giveawayreport <giveawayId>` — Downloads a `.txt` file with full giveaway data
- Includes: title, status, winner count, total votes, payment summary
- Full ranked leaderboard (all participants by vote count)
- Winner list if giveaway has ended
- Generated in IST timestamp

### 📢 &nbsp;Participant Announcement
- `/announce <gId> <text>` — Send a custom message to all participants of a specific giveaway
- Shows preview + confirmation step before sending
- Delivery report sent to admin (sent/failed counts)

### ⚙️ &nbsp;Change Winner Count
- `/setwinner <gId> <count>` — Update winner count of any giveaway (active or ended)
- Range: 1 to 100 winners
- Saves to MongoDB immediately

### 🌍 &nbsp;Global Vote Leaderboard
- `/voteleaderboard` — Top 20 voters across **all** giveaways combined
- Shows rank, name, username, user ID, total votes

### 🔔 &nbsp;Vote Reminder
- `/remindvote <gId>` — Send a push reminder to all participants of an active giveaway
- Includes the current top 3 leaderboard for motivation
- Delivery report sent to admin

### 🔁 &nbsp;Giveaway Clone
- `/clonegiveaway <giveawayId>` — Clone any giveaway with same settings
- New giveaway created in draft (inactive) state — zero participants
- Admin can activate it from My Giveaways menu

### ⏰ &nbsp;Scheduled Broadcasts
- `/schedule 22:00 Aaj ki update` — Auto-sends message to all users at the given IST time
- Time is in **24h IST format** (HH:MM)
- If the time has already passed today, message sends **tomorrow** at that time
- Each schedule gets a unique ID (e.g. `SC001`) for easy tracking/cancellation
- `/schedulelist` — View all pending scheduled broadcasts with ID + time + preview
- `/cancelschedule <ID>` — Cancel any pending schedule by its ID
- Admin gets a **delivery report** (sent/failed counts) after the message fires
- Multiple schedules can be queued at the same time

### 🔗 &nbsp;Force Join System
- Per-giveaway force join — voters must join a specific channel first
- Global force join — applies to all bot users (VIP 7D+)
- Private channel support via invite links

### 🛡️ &nbsp;Auto Security Defaults *(NEW — v3.0.2)*
- **177 blocked words** — Hindi (Devanagari), Hinglish transliterated, and English abuses all blocked automatically
- Traps and words are seeded to MongoDB once and **treated like manually added ones** — `/removetrap` permanently removes them
- `/listtraps [page]` — paginated, 50 traps per page (e.g. `/listtraps 2` for page 2)
- `/blockedwords [page]` — paginated, 60 words per page (e.g. `/blockedwords 2` for page 2)
- Any user who types a blocked word → **warning logged + message blocked**

### 🎨 &nbsp;Animated UI
- Every button click: smooth **delete → animate → appear** flow
- Multiple styles: loading · leaderboard · payment · vote · success · cancel
- Premium `✦━━━` borders and blockquote formatting throughout

### 🎨 &nbsp;UI Text Customizer *(NEW — v3.0.1 · expanded v3.0.2)*
- **65+ customizable keys** — every visible text, emoji, button & link in the bot
- `/customize` — Paginated interactive menu (tap any key to edit it)
- `/settext <key> <value>` — Set any text directly, HTML supported
- `/resettext <key>` — Restore default instantly
- `/listtext` — See all keys with current values at a glance
- All changes saved to MongoDB — **survive restarts**

**Welcome Screen Keys** *(every element you see on /start)*

| Key | What it controls |
|-----|-----------------|
| `welcome.title` | Big bold title — "𝐍𝐎𝐁𝐈𝐓𝐀 𝐆𝐈𝐕𝐄𝐀𝐖𝐀𝐘 𝐁𝐎𝐓! 🎁" |
| `welcome.feature1` | Blockquote line 1 — "✨ FULLY AUTOMATED…" |
| `welcome.feature2` | Blockquote line 2 — "⚡ FAST & TRANSPARENT…" |
| `welcome.feature3` | Blockquote line 3 — "🛡 SECURE, RELIABLE…" |
| `welcome.feature4` | Blockquote line 4 — "🎊 HOST GIVEAWAYS…" |
| `welcome.tip1` | Instruction line 1 — "🔺 TAP 🎁 NEW GIVEAWAY…" |
| `welcome.tip2` | Instruction line 2 — "🔺 TAP 📂 MY GIVEAWAYS…" |
| `welcome.divider` | Divider text — "✈️━━━━━ 𝐍𝐎𝐁𝐈𝐓𝐀 ━━━━━✈️" |
| `welcome.divider_url` | Divider hyperlink URL |
| `welcome.powered_name` | Powered-by name inside link |
| `welcome.powered_url` | Powered-by URL |
| `welcome.support_name` | Support person name inside link |
| `welcome.support_url` | Support person URL |
| `welcome.btn_new_giveaway` | "🎁 NEW GIVEAWAY ✦" button |
| `welcome.btn_my_giveaways` | "✦ MY GIVEAWAYS 📂" button |
| `welcome.btn_add_channel` | "📢 ADD CHANNEL ⚡" button |
| `welcome.btn_add_group` | "⚡ ADD GROUP 👥" button |
| `welcome.btn_vip` | "👑 VIP MEMBERSHIP 💎" button |
| `welcome.btn_create_post` | "🚀 CREATE POST ✍️" button |
| `welcome.btn_guide` | "🌟 ─── GUIDE & HELP ─── 🌟" button |

```
  /settext welcome.title 🎉 MY BOT NAME 🎉
  /settext welcome.feature1 ✨ Custom feature line 1
  /settext welcome.powered_name MY NETWORK
  /settext welcome.powered_url https://t.me/mychannel
  /settext welcome.btn_new_giveaway 🎁 Start Giveaway
  /settext welcome.btn_guide ✦ Help & Support ✦
  /settext giveaway.btn_vote 🔥 Vote Karo!
  /settext pay.btn_inr 💰 UPI se Pay Karo
  /resettext welcome.title
```

### 🏥 &nbsp;Health Monitor *(NEW — v3.0.1)*
- `/health` — Real-time bot diagnostics in one command
- Shows: uptime · MongoDB status · active giveaways · users · VIP · memory · security mode · pending payments · scheduled broadcasts

### 🚀 &nbsp;GitHub Push from Telegram *(NEW — v3.0.1)*
- `/pushgithub [commit message]` — Push `vote-bot.mjs` to your GitHub repo directly from Telegram
- Requires `GITHUB_TOKEN` + `GITHUB_REPO_URL` set as environment variables
- All commits made as author **mystricman0-cell**

### 👑 &nbsp;Sub-Admin Management *(NEW — v3.0.2)*
- Add trusted sub-admins with specific permission sets — no need to share main admin access
- `/addadmin <userId> <perms>` — Grant sub-admin with selected permissions
- `/removeadmin <userId>` — Revoke sub-admin access instantly
- `/listadmins` — View all sub-admins and their permission sets
- `/editadminperms <userId>` — Edit permissions via interactive button UI
- **Available permissions:** `all` · `approve_payments` · `broadcast` · `ban_users` · `manage_giveaways`

### 🔄 &nbsp;Security Reset *(NEW — v3.0.2)*
- `/resetsecurity` — Full security state reset with one command
- Clears: bans · warnings · mutes · shadow bans · flags  · audit log
- **Keeps safe:** blocked words · security mode · max warnings setting · trusted users

### 👁️ &nbsp;Welcome Preview *(NEW — v3.0.2)*
- `/previewwelcome` — See exactly how your welcome screen looks right now (image + buttons)
- `/setwelcomemsg` — Set welcome text — **jo bhejo waisa hi dikhe** (exact text, emojis, symbols preserved)
- After setting, `/previewwelcome` instantly shows you the result

### 📊 &nbsp;Memory Stats Live Monitor *(NEW — v3.0.4)*
- `/memstats` — Real-time RAM breakdown in one command
  - Node.js heap used / total / RSS / external (in MB)
  - Count of every in-memory Map: giveaways (active vs ended), users, VIP, channels, payments, custom texts, sub-admins, warnings, muted, shadow-banned, scheduled messages
  - Quick tip linking to `/autoclean` if memory is high

### 🧹 &nbsp;Auto Memory & DB Cleanup *(NEW — v3.0.4)*

**Memory Management (automatic — every 30 min):**
- Ended giveaways older than 7 days are automatically evicted from RAM
- They stay in MongoDB — history preserved, memory freed
- Prevents RAM from filling up on long-running bots

**MongoDB Auto-Cleanup (automatic — every 24 hours):**
- SecurityLog trimmed to last 500 entries (old logs deleted)
- Resolved pending payments older than 30 days deleted
- Ended giveaways older than 60 days compressed — participant/vote data wiped, metadata kept
- **👥 User data (BotUser, VIP), active giveaways — NEVER touched**

**`/autoclean` — Manual Trigger:**
```
/autoclean
→ Runs memory eviction + full DB cleanup instantly
→ Shows exactly what was freed: RAM, logs, payments, giveaways compressed
```

> Also runs automatically once 3 minutes after every bot restart.

### 🔄 &nbsp;ResetUI — Full UI Reset with Confirmation *(NEW — v3.0.3)*
- `/resetui` — Resets **all** custom UI texts back to default in one tap
- Shows a **confirmation step** before doing anything — accidental reset impossible
- Tells you exactly how many custom texts will be deleted before you confirm
- After reset, bot shows restore tip: `/cloneui import <json>` to bring settings back
- **Tip:** Always run `/cloneui export` first to save a backup before resetting

### 📦 &nbsp;CloneUI — Settings Backup & Transfer *(NEW — v3.0.3)*
- `/cloneui export` — Export **all** UI customizations as a single JSON snapshot
  - Includes: all custom texts/emojis/buttons · welcome message · welcome image URL · membership plans & pricing · free giveaway limits
  - Large exports (>3800 chars) are sent as a downloadable `.json` file automatically
- `/cloneui import <json>` — Paste the exported JSON to instantly restore all settings
  - Safe: only known UI keys are applied; unknown keys are silently skipped
  - Live confirmation showing how many texts were applied + what was restored
- **Use cases:** backup before a big change · transfer settings to a new bot instance · share your theme with someone else

```
  /cloneui export
  → Bot sends full JSON snapshot of all settings

  /cloneui import {"version":1,"ui":{...},"membershipPlans":{...},...}
  → All settings restored in one shot ✅
```

---

```
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
                    DEPLOY
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
```

### ▸ &nbsp;Railway &nbsp;*(Recommended)*

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/new/template?template=https://github.com/dhruvkumarray3-eng/Sukanya-music)

```
1. Click Deploy on Railway
2. Set: TELEGRAM_BOT_TOKEN  ·  ADMIN_ID  ·  MONGODB_URI
3. Done — Railway handles hosting automatically
```

### ▸ &nbsp;Replit

[![Run on Replit](https://replit.com/badge/github/dhruvkumarray3-eng/Sukanya-music)](https://replit.com/new/github/dhruvkumarray3-eng/Sukanya-music)

```
1. Click Run on Replit
2. Open Secrets tab → add TELEGRAM_BOT_TOKEN  ·  ADMIN_ID  ·  MONGODB_URI
3. Hit Run
```

### ▸ &nbsp;Manual / VPS

```bash
git clone https://github.com/dhruvkumarray3-eng/Sukanya-music.git
cd telegram-vote-bot
npm install
TELEGRAM_BOT_TOKEN=xxx ADMIN_ID=xxx MONGODB_URI=xxx npm start
```

---

```
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
               FIRST-TIME SETUP
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
```

After deploying, send these to your bot in DM:

```
/setmembershipqr       → Upload your UPI QR code image
/setplan 1d 5          → 1-day plan = ₹5
/setplan 7d 30         → 7-day plan = ₹30
/setplan 30d 150       → 30-day plan = ₹150
```

Then add the bot as **Admin** to your Telegram channel — it registers automatically.

---

```
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
               COMMAND REFERENCE
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
```

#### User Commands

| Command | Description |
|---|---|
| `/start` | Open main menu — ding-dong animation + spoiler image |
| `/help` | Full user guide & all commands |
| `/membership` | View / purchase VIP membership |
| `/myplan` | Check your own VIP status, expiry & time remaining |
| `/leaderboard` | Live leaderboard of your active giveaway |
| `/mystats` | Your personal giveaway stats (total giveaways, participants, votes) |
| `/active` | List all live giveaways with participants, votes & time remaining |
| `/winners` | View winners of the last (or specified) ended giveaway |
| `/glink` | Get participation link for the active (or specified) giveaway |
| `/botstatus` | Quick bot health & stats (users, giveaways, channels, pending) |
| `/ping` | Check bot response time in ms |
| `/myid` | Show your Telegram user ID, username & language |
| `/createpost` | Create and send a post to your registered channel |
| `/topvoters` | View top participants in your active giveaway |
| `/support` | Send a support message to admin (text, photo, file, video, voice) |

#### Admin Commands — User Management

| Command | Usage | Description |
|---|---|---|
| `/userinfo` | `/userinfo <userId>` | Full user profile — VIP, giveaways, votes, perms, ban status |
| `/listusers` | `/listusers [page]` | Paginated list of all bot users (👑 VIP · 🚫 Banned shown) |
| `/ban` | `/ban <userId> [reason]` | Ban user — blocks bot + notifies user with reason |
| `/unban` | `/unban <userId>` | Remove ban from a user |
| `/dm` | `/dm <userId> <message>` | Send a direct message to any user |
| `/reply` | `/reply <text>` | Reply to a support ticket (reply to forwarded support card) |

#### Admin Commands — Membership

| Command | Usage | Description |
|---|---|---|
| `/givemem` | `/givemem <id> <1d\|7d\|30d>` | Grant VIP membership |
| `/extendmem` | `/extendmem <id> <1d\|7d\|30d>` | Add days to existing VIP |
| `/removemem` | `/removemem <id>` | Revoke VIP immediately |
| `/deductmem` | `/deductmem <id> <days> [silent]` | Deduct days from VIP |
| `/listmem` | `/listmem` | List all active VIP members |
| `/meminfo` | `/meminfo <id>` | Check any user's membership status |
| `/setplan` | `/setplan <1d\|7d\|30d> <price>` | Update plan pricing |

#### Admin Commands — Giveaways

| Command | Usage | Description |
|---|---|---|
| `/allgiveaways` | `/allgiveaways` | List all giveaways (active + past) |
| `/addvotes` | `/addvotes <gId> <userId> <count>` | Manually add votes to any participant |
| `/removevotes` | `/removevotes <gId> <userId> <count>` | Remove votes (cheating fix) |
| `/setwinner` | `/setwinner <gId> <count>` | Change winner count of any giveaway (1–100) |
| `/endgiveaway` | `/endgiveaway <giveawayId>` | Force-close any giveaway + announce winners |
| `/cancelgiveaway` | `/cancelgiveaway <giveawayId>` | Cancel giveaway silently — no winners announced |
| `/resetvotes` | `/resetvotes <giveawayId>` | Reset all votes in a giveaway to zero |
| `/clonegiveaway` | `/clonegiveaway <giveawayId>` | Clone giveaway with same settings |
| `/giveawayreport` | `/giveawayreport <gId>` | Download full giveaway report as .txt file |
| `/announce` | `/announce <gId> <text>` | Send custom message to all giveaway participants |
| `/remindvote` | `/remindvote <gId>` | Send vote reminder + top 3 to all participants |
| `/voteleaderboard` | `/voteleaderboard` | Global top 20 voters across all giveaways |
| `/setstar` | `/setstar <giveawayId> <votes>` | Votes per Telegram ⭐ Star |
| `/setinr` | `/setinr <giveawayId> <votes>` | Votes per ₹1 INR paid |
| `/setpanelthreshold` | `/setpanelthreshold <gId> <votes> [seconds]` | Anti-cheat: custom vote-panel detection threshold (default: 15 votes / 90s) |

#### Admin Commands — Broadcast & Messaging

| Command | Usage | Description |
|---|---|---|
| `/broadcast` | `/broadcast` | Compose photo/doc/video+text, pick target (silent) |
| `/broadcast` | `/broadcast <text>` | Image + styled text broadcast (silent) |
| `/loud` | `/loud` | Same as /broadcast with notification sound |
| `/schedule` | `/schedule <HH:MM> <text>` | Schedule a broadcast for a specific IST time |
| `/schedulelist` | `/schedulelist` | View all pending scheduled broadcasts |
| `/cancelschedule` | `/cancelschedule <ID>` | Cancel a pending scheduled broadcast |
| `/send` | `/send <chatId> <text>` | Send to specific chat/channel |
| `/pin` | `/pin <chatId> <text>` | Send and pin a message |

#### Admin Commands — Config & Maintenance

| Command | Usage | Description |
|---|---|---|
| `/stats` | `/stats` | Full bot dashboard |
| `/paystats` | `/paystats` | Pending payments (with payIds) + VIP + ban + maintenance status |
| `/removepay` | `/removepay <payId>` | Remove any pending payment (vote or membership) by ID — notifies user |
| `/clearallpending` | `/clearallpending` | Clear ALL pending payments at once (vote + membership) — notifies all users |
| `/setstartimage` | `/setstartimage <url>` | Set start/welcome image in one line — no wizard needed |
| `/clearstates` | `/clearstates` | Clear all stuck user conversation states |
| `/gcount` | `/gcount` | Quick giveaway count breakdown — active, ended, totals, participants, votes |
| `/topusers` | `/topusers` | Top 10 users ranked by number of giveaways created |
| `/maintenance` | `/maintenance on\|off` | Block all non-admin users during updates |
| `/health` | `/health` | Real-time bot diagnostics — uptime, DB, memory, giveaways, VIP, security, payments |
| `/previewwelcome` | `/previewwelcome` | Preview the current welcome screen exactly as users see it (image + buttons) |
| `/setwelcomemsg` | `/setwelcomemsg` | Set custom welcome message — jo bhejo waisa hi dikhe (exact text preserved) |
| `/clearwelcomemsg` | `/clearwelcomemsg` | Restore default welcome message |
| `/exportusers` | `/exportusers` | Download all bot users as .txt file |
| `/setmembershipqr` | `/setmembershipqr` | Upload UPI QR code photo |
| `/setwelcomeimageurl` | `/setwelcomeimageurl` | Set welcome spoiler image URL |
| `/setforcejoin` | `/setforcejoin <channelId>` | Configure force-join channel |
| `/setfreelimit` | `/setfreelimit <n\|unlimited>` | Set free giveaway quota |
| `/perms` | `/perms <userId>` | Toggle user permissions (button UI) |
| `/allchannels` | `/allchannels` | List all registered channels + groups |
| `/cleandb` | `/cleandb` | Interactive selective cleanup — choose giveaways/payments/memberships/VIP/seclogs |
| `/adminhelp` | `/adminhelp` | Full admin command reference (4 parts including security) |
| `/pushgithub` | `/pushgithub [message]` | Push vote-bot.mjs to GitHub directly from Telegram |
| `/setownerid` | `/setownerid <userId>` | Transfer bot ownership to a new admin ID — saved to DB, persists across restarts |

#### Admin Commands — UI Customizer

| Command | Usage | Description |
|---|---|---|
| `/customize` | `/customize` | Paginated interactive UI text customizer — tap any key to edit |
| `/settext` | `/settext <key> <value>` | Set any UI text, emoji, or button label directly |
| `/resettext` | `/resettext <key>` | Reset one UI text to its default value |
| `/listtext` | `/listtext` | List all UI text keys with current values |
| `/preview` | `/preview <key>` | Preview exactly how any UI key looks with premium emojis |
| `/cloneui` | `/cloneui export` · `/cloneui import <json>` | Export all UI settings as JSON backup · Import to restore or transfer to another bot |
| `/resetui` | `/resetui` | Reset ALL custom UI texts to default in one tap (confirmation step included) |
| `/autoclean` | `/autoclean` | Manually trigger RAM eviction + MongoDB cleanup — shows exact bytes freed |
| `/memstats` | `/memstats` | Live RAM breakdown — heap used/total/RSS + size of every in-memory Map |

#### Admin Commands — Sub-Admin Management

| Command | Usage | Description |
|---|---|---|
| `/addadmin` | `/addadmin <userId> <perms>` | Add sub-admin with permissions — `all` or `approve_payments,broadcast,ban_users,manage_giveaways` |
| `/removeadmin` | `/removeadmin <userId>` | Remove sub-admin access |
| `/listadmins` | `/listadmins` | List all sub-admins and their permission sets |
| `/editadminperms` | `/editadminperms <userId>` | Edit sub-admin permissions via interactive button UI |

#### Security & Protection Commands *(NEW — v3.0)*

| Command | Usage | Description |
|---|---|---|
| `/securityhelp` | `/securityhelp` | Full 40-command security reference (600+ words, 3 parts) |
| `/warnuser` | `/warnuser <id> [reason]` | Manually warn a user |
| `/warnings` | `/warnings <id>` | Check user's warning count + reasons |
| `/clearwarnings` | `/clearwarnings <id>` | Clear all warnings for a user |
| `/setmaxwarns` | `/setmaxwarns <n>` | Set auto-ban threshold (1–20, default 3) |
| `/autoban` | `/autoban on\|off` | Toggle auto-ban when max warnings reached |
| `/muteuser` | `/muteuser <id>` | Mute a user (bot ignores their messages) |
| `/unmuteuser` | `/unmuteuser <id>` | Unmute a user |
| `/mutedlist` | `/mutedlist` | List all muted users |
| `/shadowban` | `/shadowban <id>` | Ghost ban — user gets no response, doesn't know they're banned |
| `/unshadowban` | `/unshadowban <id>` | Remove shadow ban |
| `/shadowlist` | `/shadowlist` | List all shadow-banned users |
| `/trustuser` | `/trustuser <id>` | Whitelist user (bypasses rate limit) |
| `/untrustuser` | `/untrustuser <id>` | Remove from trusted list |
| `/trustedlist` | `/trustedlist` | View all trusted users |
| `/flaguser` | `/flaguser <id> [reason]` | Flag suspicious user for monitoring |
| `/unflaguser` | `/unflaguser <id>` | Remove flag |
| `/flaggedlist` | `/flaggedlist` | List all flagged users |
| `/securitymode` | `/securitymode strict\|normal\|off` | Set rate-limit mode |
| `/antispam` | `/antispam on\|off` | Toggle flood/spam protection |
| `/emergencylock` | `/emergencylock` | Block ALL non-admin users instantly |
| `/emergencyunlock` | `/emergencyunlock` | Restore normal access |
| `/securitystats` | `/securitystats` | Full security dashboard |
| `/suspicious` | `/suspicious` | Last 20 security log events |
| `/auditlog` | `/auditlog` | Last 30 detailed audit log entries |
| `/clearaudit` | `/clearaudit` | Clear security + audit log |
| `/resetsecurity` | `/resetsecurity` | Reset ALL security state (bans, warnings, mutes, shadow bans, flags) — keeps traps & config |
| `/userhistory` | `/userhistory <id>` | Last 30 commands sent by a user |
| `/blockword` | `/blockword <word>` | Block a word/phrase from all messages |
| `/unblockword` | `/unblockword <word>` | Unblock a word/phrase |
| `/blockedwords` | `/blockedwords [page]` | List blocked words — paginated, 60 per page |
| `/ratelimitreset` | `/ratelimitreset <id>` | Reset user's rate limit counter |
| `/securityreport` | `/securityreport` | Download full security report as .txt — includes summary, banned/muted/shadow/flagged/warned/trusted users, blocked words, and last 100 security log events |

#### New User Commands *(NEW — v3.0)*

| Command | Description |
|---|---|
| `/about` | About this bot (𝑵𝑶𝑩𝑰𝑻𝑨 Network info, features, version) |
| `/version` | Bot version, uptime, runtime info |
| `/uptime` | Bot uptime in days/hours/minutes/seconds |
| `/rules` | Bot usage rules (7 rules — fair play, no spam, payments, etc.) |
| `/faq` | 7 frequently asked questions with answers |
| `/terms` | Terms of service |
| `/countdown` | Timer countdown for your active auto-end giveaways |
| `/rank` | Your global rank by number of giveaways created |
| `/invite` | Step-by-step guide to invite bot to channel |
| `/notify` | Info about bot notification events |
| `/refer` | Your personal referral link |
| `/feedback` | Send feedback/suggestions to admin |

---

```
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
                 ARCHITECTURE
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
```

```
vote-bot.mjs
│
├── 🗄️  Mongoose Schemas      Giveaway · Channel · Vip · Payment · BotConfig · BotUser
├── ⚡  In-Memory Maps         Fast access: giveaways · vipUsers · channels · payments
├── 🎞️  Animation Functions    animLoading · animFresh · animCreate · animVote
├── 🔧  Core Helpers           safeFormatDateTime · timeRemaining · getMembership
├── 📡  Bot Commands           /start · /membership · /myplan · /support · /stats …
├── 🖱️  Callback Handlers      All inline button actions
├── 💬  Message Handlers       State machine: giveaway wizard · support · payments
└── ⏱️  Schedulers             Auto-end timers · heartbeat · reminders · VIP expiry + warning
```

> **Data flow:** All writes go to both the in-memory Map *(instant)* and MongoDB *(persistent)*.  
> On startup, all data is loaded from MongoDB into memory. VIP expiry + 1-day warning runs every 30 minutes.

---

```
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
                  TECH STACK
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
```

| Layer | Technology |
|---|---|
| Runtime | Node.js 18+ (ES Modules) |
| Bot Framework | node-telegram-bot-api |
| Database | MongoDB via Mongoose |
| Architecture | Single-file · long-polling |
| Deployment | Railway · Replit · VPS ready |

---

```
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
                FORK & CUSTOMIZE
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
```

```bash
# 1. Fork this repo on GitHub
# 2. Clone your fork
git clone https://github.com/dhruvkumarray3-eng/Sukanya-music.git
cd telegram-vote-bot

# 3. Install dependencies
npm install

# 4. Set your secrets and run
npm start
```

All bot logic lives in a **single file** — `vote-bot.mjs` — making it easy to read and customize.

---

<div align="center">

```
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
         Built with ❤️  for the 𝑵𝑶𝑩𝑰𝑻𝑨 Network
✦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✦
```

[![Telegram](https://img.shields.io/badge/Bot-@Nobitavotebot-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/Nobitavotebot)
[![Developer](https://img.shields.io/badge/Developer-@xvilucifer-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/xvilucifer)
[![GitHub](https://img.shields.io/badge/Owner-dhruvkumarray3--eng-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dhruvkumarray3-eng)

</div>
