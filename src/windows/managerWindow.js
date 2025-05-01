// /src/windows/managerWindow.js
import { BrowserWindow } from 'electron';
import path from 'path';
import { getDirname } from '../utils/pathUtils.js';
import logger from '../utils/logger.js';

const __dirname = getDirname(import.meta.url);

const createManagerWindow = (managerWin) => {
  if (managerWin) {
    managerWin.show();
    logger.log('Manager window already exists, showing the existing window');
    return managerWin;
  }

  logger.log('Creating a new manager window');

  let newManagerWin = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, '../preload.js'),
    },
  });

  if (process.env.NODE_ENV === 'development') {
    newManagerWin.loadURL('http://localhost:5173');
    logger.log('Development environment detected, loading URL: http://localhost:5173');
  } else {
    newManagerWin.loadFile(path.join(__dirname, '../../dist/index.html'));
    logger.log('Production environment detected, loading file: ../../dist/index.html');
  }

  newManagerWin.on('close', (e) => {
    e.preventDefault();
    newManagerWin.hide();
    logger.log('Manager window closed, but hiding the window instead of quitting');
  });

  newManagerWin.setMenuBarVisibility(false);
  logger.log('Manager window created successfully');

  return newManagerWin;
};

export default createManagerWindow;