// src/main.js (Electron main process)
import { app, BrowserWindow } from 'electron';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

let win;

function createWindow() {
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`)

  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  
  win.setMenuBarVisibility(false)

  // If in development, load Vite's dev server
  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools();
    win.loadURL('http://localhost:5173');
  } else {
    // In production, load the built React app from Vite's dist folder
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});