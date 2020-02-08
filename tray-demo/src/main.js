const electron = require("electron");
const path = require("path");

const { app, Tray, Menu } = electron;

app.on("ready", _ => {
  const tray = new Tray(path.join("src", "tick.png"));
  const contextMenu = Menu.buildFromTemplate([
    {
      label: "Wow",
      click: _ => console.log("wow")
    },
    {
      label: "Awesome",
      click: _ => console.log("Awesome")
    }
  ]);
  tray.setContextMenu(contextMenu);
  tray.setToolTip("Awesome Tickitee");
});
