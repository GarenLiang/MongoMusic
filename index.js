const {app, BrowserWindow} = require('electron');
let win

app.on('ready', function() {
  win = new BrowserWindow({width: 1000, height: 650});

  win.loadURL(`file://${__dirname}/index.html`);
});
