const bs = require('browser-sync').create();

// Config params (relative to where npm/script is called from):
const PORT = 4000;
const OUTPUT_DIR = './build';

bs.watch(`${OUTPUT_DIR}/**/*.js`, function (event, file) {
    bs.reload("*.js");
})

bs.watch(`${OUTPUT_DIR}/**/*.css`, function (event, file) {
    if (event === "change") {
        bs.reload("*.css");
    }
})

bs.init({
    port: PORT,
    server: OUTPUT_DIR, 
    serveStatic: [`${OUTPUT_DIR}/static/`],
    //cors: true,
    browser: "google chrome",  // [ "google chrome", "firefox"]
    open: "local", // false
    reloadOnRestart: true,
    ui: false,
    notify: false
    //scrollProportionally: false
})
