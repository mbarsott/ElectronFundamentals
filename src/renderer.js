const electron = require("electron");

const ipc = electron.ipcRenderer;

document.getElementById("start").addEventListener("click", _ => {
  console.log("sending countdown-start notification");
  ipc.send("countdown-start");
});

ipc.on("countdown", (theEvent, count) => {
  document.getElementById("count").innerHTML = count;
});
