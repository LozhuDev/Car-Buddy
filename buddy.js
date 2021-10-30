const { app, BrowserWindow } = require('electron')
const path = require('path')
const config = require('./config.json');

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: !config.devmode,
    frame: false,
    webPreferences: {
        nodeIntegration: true
    }
  })
  mainWindow.loadFile('FILES/HTML/index.html');
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})