const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
//const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
 console.log("Main Process");

let winOne,winTwo;

function createWindow () {
//Window One is Created
  winOne = new BrowserWindow({width: 800, height: 600})

  //Window Two  is Created
  winTwo = new BrowserWindow({width: 800, height: 600})

//Load Url for window One
  winOne.loadURL(url.format({
    pathname: path.join(__dirname,'one.html'),
    protocol: 'file:',
    slashes: true
  }));

winOne.webContents.openDevTools()
  winOne.on('closed', () => {
    winOne = null
  });

//Load Url for window Two
  winTwo.loadURL(url.format({
    pathname: path.join(__dirname,'two.html'),
    protocol: 'file:',
    slashes: true
  }));

winTwo.webContents.openDevTools()
  winTwo.on('closed', () => {
    winTwo = null
  });


  
}


app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});