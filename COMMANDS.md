# Telegram command reference

This is the complete command list extracted from the `bot.onText` handlers in
`vote-bot.mjs`. Commands that require administrator permissions will reply with
an access message when used by a regular user. Check `/help`, `/adminhelp`, and
`/securityhelp` in Telegram for the built-in descriptions and usage examples.

`/announceconfirm_` is an internal confirmation route used by the broadcast
flow; it is not intended to be typed manually.

## All handlers

```text
/about
/active
/addadmin
/addvotes
/adminhelp
/allchannels
/allgiveaways
/announce
/announceconfirm_
/antispam
/auditlog
/autoban
/autoclean
/ban
/blockedwords
/blockword
/botstatus
/broadcast
/broadcastpreview
/broadcaststats
/cancelgiveaway
/cancelschedule
/cleandb
/cleanhoneypot
/clearallpending
/clearallpremiumemoji
/clearaudit
/clearimage
/clearstates
/clearwarnings
/clearwelcomeimage
/clearwelcomemsg
/clonegiveaway
/cloneui
/countdown
/createpost
/customize
/deductmem
/dm
/editadminperms
/emergencylock
/emergencyunlock
/endgiveaway
/exportusers
/extendmem
/faq
/feedback
/flaggedlist
/flaguser
/forcejoininfo
/gcount
/giveawayreport
/givemem
/glink
/health
/heartbeat
/help
/honeypot
/honeypotlist
/honeytrap
/imageinfo
/invite
/leaderboard
/listadmins
/listlbbroadcast
/listmem
/listpremiumemoji
/listtext
/listtraps
/listusers
/loud
/maintenance
/membership
/meminfo
/memstats
/mutedlist
/muteuser
/myid
/myplan
/mystats
/notify
/paystats
/perms
/pin
/ping
/preview
/previewwelcome
/pushgithub
/rank
/ratelimitreset
/refer
/remindvote
/removeadmin
/removemem
/removepay
/removepremiumemoji
/removetrap
/removevotes
/reply
/resetsecurity
/resettext
/resetui
/resetvotes
/rules
/schedule
/schedulelist
/securityhelp
/securitymode
/securityreport
/securitystats
/send
/sendloud
/setbuttontheme
/setforcejoin
/setfreelimit
/setimage
/setinr
/setlbbroadcast
/setlogdest
/setmaxwarns
/setmembershipqr
/setownerid
/setpanelthreshold
/setperms
/setplan
/setpremiumemoji
/setprimaryemoji
/setstar
/setstartimage
/settext
/setwelcomeimageurl
/setwelcomemsg
/setwinner
/shadowban
/shadowlist
/start
/stats
/stoplbbroadcast
/support
/suspicious
/terms
/toggleheartbeat
/toggleunknowncmd
/topusers
/topvoters
/trustedlist
/trustuser
/unban
/unblockword
/unflaguser
/unmuteuser
/unshadowban
/untrustuser
/uptime
/userhistory
/userinfo
/version
/viewperms
/voteleaderboard
/warnings
/warnuser
/winners
```

## Runtime commands

```text
npm install
npm start
npm run dev
./start.sh
docker build -t sukanya-music .
docker run --env-file .env sukanya-music
```

Required environment variables:

```text
TELEGRAM_BOT_TOKEN
ADMIN_ID
MONGODB_URI
```