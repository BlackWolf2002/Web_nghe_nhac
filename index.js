const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const { autoUpdater } = require("electron-updater");
const log = require("electron-log");
const Menu = electron.Menu;
const { ipcMain} = require('electron');
const loudness = require('loudness');
const { ipcRenderer } = require('electron/renderer');

//log
log.transports.file.resolvePath = () =>
  path.join("C:\Users\duyng\OneDrive\Máy tính\musicapp", "logs/main.log");
log.info("Hello, log");
log.warn("Some problem appears");
let win;

function createWindow() {
  win = new BrowserWindow();
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file",
      slashes: true,
    })
  );

  win.webContents.openDevTools();
  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", () => {
  createWindow();
  const template = [
    {
      label: "Edit",
      submenu: [
        { label: "Undo", accelerator: "CmdOrCtrl+Z", role: "undo" },
        { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", role: "redo" },
        { type: "separator" },
        { label: "Cut", accelerator: "CmdOrCtrl+X", role: "cut" },
        { label: "Copy", accelerator: "CmdOrCtrl+C", role: "copy" },
        { label: "Paste", accelerator: "CmdOrCtrl+V", role: "paste" },
        { label: "Select All", accelerator: "CmdOrCtrl+A", role: "selectAll" },
      ],
    },
    {
      label: "Volume",
      submenu: [
        {
          label: "Max Volume",
          accelerator: "CommandOrControl+Shift+Up",
          click: () => {
            if(loudness.getMuted()){
                loudness.setMuted(false);
            }
            let currentVolume = loudness.getVolume().then(volume => volume);
            let newVolume = currentVolume *100;
            loudness.setVolume(newVolume);
          },
        },
        {
          label: "Min Volume",
          accelerator: "CommandOrControl+Shift+Down",
          click: () => {
            loudness.setMuted(true);
          },
        },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
  autoUpdater.checkForUpdatesAndNotify();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});

//autoupdate
autoUpdater.on("update-available", () => {
  log.info("update-available");
});

autoUpdater.on("checking-for-update", () => {
  log.info("checking-for-update");
});

autoUpdater.on("download-progress", () => {
  log.info("download-progress");
});

autoUpdater.on("update-downloaded", () => {
  log.info("update-downloaded");
});
  



  
  
  
  
  
  
  