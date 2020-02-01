const electron = require("electron");
const countdown = require("./countdown");

const ipc = electron.ipcMain;
const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

const windows = [];

app.on("ready", _ => {
  [1, 2, 3].forEach(_ => {
    let win = new BrowserWindow({
      height: 400,
      width: 400
    });

    win.loadURL(`file://${__dirname}/countdown.html`);

    win.on("closed", _ => {
      mainWindow = null;
    });

    windows.push(win);
  });
});

ipc.on("countdown-start", _ => {
  console.log("Received countdown-start ipc notification");
  countdown(count => {
    console.log("count", count);
    windows.forEach(win => {
      win.webContents.send("countdown", count);
    });
  });
});
