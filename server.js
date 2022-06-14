// npm install browser-sync --save-dev

const server = require("browser-sync")

server.init({
  ui: false,
  // files: ['public'],
  server: 'public',
  port: 8000,
  logLevel: 'debug',
  logPrefix: 'SpeedFeed',
  logConnections: true,
  logFileChanges: true,
  // tunnel: 'SpeedFeed',
  online: true,
  open: true,
  browser: 'default',
  reloadOnRestart: true,
  notify: false,
  watch: true
})
