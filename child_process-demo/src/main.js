const electron = require("electron");

let mainWindow;

const { app, BrowserWindow } = electron;

app.on("ready", _ => {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 100,
    webPreferences: { nodeIntegration: true }
  });

  mainWindow.loadURL(`file://${__dirname}/status.html`);

  mainWindow.on("close", _ => {
    mainWindow = null;
  });
});
