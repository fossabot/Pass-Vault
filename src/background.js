"use strict";

import { app, BrowserWindow, Menu } from "electron";

let mainWindow;
const winURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : `file://${__dirname}/index.html`;

async function createWindow() {
  mainWindow = new BrowserWindow({
    height: 560,
    width: 900,
    minWidth: 900,
    minHeight: 600,
    useContentSize: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });

  await mainWindow.loadURL(winURL);

  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  createMenu();
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

function createMenu() {
  const template = [
    {
      label: "Application",
      submenu: [
        { label: "About MyPass", selector: "orderFrontStandardAboutPanel:" },
        { type: "separator" },
        {
          label: "Quit",
          accelerator: "Command+Q",
          click: function() {
            app.quit();
          }
        }
      ]
    },
    {
      label: "Edit",
      submenu: [
        { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
        { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
        { type: "separator" },
        { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
        { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
        { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
        {
          label: "Select All",
          accelerator: "CmdOrCtrl+A",
          selector: "selectAll:"
        }
      ]
    },
    {
      label: "File",
      submenu: [
        {
          label: "Export",
          accelerator: "CmdOrCtrl+E",
          click: function() {
            mainWindow.webContents.send("export");
          }
        },
        {
          label: "Import",
          accelerator: "CmdOrCtrl+I",
          click: function() {
            mainWindow.webContents.send("import");
          }
        }
      ]
    }
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}
