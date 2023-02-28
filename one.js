console.log("Renderer 1 is running")

const BrowserWindow=require("electron").remote.BrowserWindow;
const path = require("path")
const url=require("url")

const newWindowBtn=document.getElementById("newWindowBtn");
newWindowBtn.addEventListener("click",function(event){
  winThree = new BrowserWindow({width: 800, height: 600})
    winThree.loadURL(url.format({
        pathname: path.join(__dirname,'three.html'),
        protocol: 'file:',
        slashes: true
      }));
    
    winThree.webContents.openDevTools()
      winThree.on('closed', () => {
        winThree = null
      });
})