// /src/tray/tray.js
import { nativeImage, Tray } from 'electron';
import path from 'path';
import { getDirname } from '../utils/pathUtils.js';
import logger from '../utils/logger.js'; // Import the custom logger

// Get the current directory path using the utility function
const __dirname = getDirname(import.meta.url);

const getTrayIconPath = () => {
  let iconPath = null;
  if (process.env.NODE_ENV === 'development') {
    iconPath = path.join(__dirname, '../../public/icon.png');
    logger.log('Development environment detected, using icon.png for tray');
  } else {
    // Handle platform-specific icons (e.g., use .ico for Windows, .png for macOS/Linux)
    const platform = process.platform;
    if (platform === 'win32') {
      iconPath = path.join(__dirname, '../../dist/icon.ico'); // Windows .ico
      logger.log('Windows platform detected, using icon.ico for tray');
    } else {
      iconPath = path.join(__dirname, '../../dist/icon.png'); // macOS/Linux .png
      logger.log('macOS/Linux platform detected, using icon.png for tray');
    }
  }
  return iconPath;
};

const createTray = (menu) => {
  const iconPath = getTrayIconPath();
  const trayIcon = nativeImage.createFromPath(iconPath);
  const tray = new Tray(trayIcon);

  tray.setToolTip('Notes App');
  tray.setContextMenu(menu);
  logger.log('Tray created successfully with context menu');

  return tray;
};

const setupTray = (menu) => {
  let tray = createTray(menu);
  logger.log('Tray setup complete');
  return tray;
};

export default setupTray;