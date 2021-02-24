"use strict";

import { app, BrowserWindow } from "electron";

let mainWindow;
const winURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : `file://${__dirname}/index.html`;

async function createWindow() {
  mainWindow = new BrowserWindow({
    height: 600,
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
