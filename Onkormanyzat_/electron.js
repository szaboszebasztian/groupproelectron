const { app, BrowserWindow } = require("electron");

function createWindow(){
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 680,
        frame: false,
        fullscreen: true,
        webPreferences:{
            nodeIntegration:true
        }
    })

    mainWindow.loadFile('./src/app/app.component.html')

    mainWindow.on('closed', function(){
        app.quit()
    })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', function(){
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', function(){
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow()
    }
})