const { app, BrowserWindow } = require('electron');
const path = require('path');

app.setAppUserModelId('com.pa-rss.tdl');

function createWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 700,
    minWidth: 460,
    minHeight: 400,
    title: 'TDL',
    icon: path.join(__dirname, 'icon.png'),
    backgroundColor: '#fdf9c4',
    webPreferences: { nodeIntegration: false, contextIsolation: true },
    autoHideMenuBar: true,
  });
  win.loadFile(path.join(__dirname, 'index.html'));
  win.on('page-title-updated', (e) => e.preventDefault());
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
