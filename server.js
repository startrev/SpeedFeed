// npm install browser-sync --save-dev

const server = require("browser-sync")

server.init({
    server: 'public',
    watch: true,
    open: true,
    notify: false,
    logLevel: 'debug',
    logConnections: true,
    logFileChanges: true,
    // browser: [''],
    port: 8000
    // ui: {
    //   port: 8080
    // }
})
