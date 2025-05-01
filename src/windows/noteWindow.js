// /src/windows/noteWindow.js
import { BrowserWindow } from 'electron';
import path from 'path';
import { getDirname } from '../utils/pathUtils.js';
import logger from '../utils/logger.js';

const __dirname = getDirname(import.meta.url);

let noteWindows = [];

const createNoteWindow = (note) => {
  logger.log(`Creating note window for note ID: ${note.id}`);

  const noteWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false, // Security: Disable nodeIntegration
      contextIsolation: true,
      preload: path.join(__dirname, '../preload.js'), // Make sure preload.js is handling necessary functionality
    },
  });

  // Handle loading for both development and production environments
  if (process.env.NODE_ENV === 'development') {
    logger.log(`Loading note window in development mode with URL: http://localhost:5173/note/${note.id}`);
    noteWindow.loadURL(`http://localhost:5173/note/${note.id}`);
  } else {
    logger.log(`Loading note window in production mode with file: ../dist/index.html#${note.id}`);
    noteWindow.loadFile(path.join(__dirname, `../dist/index.html#${note.id}`));
  }

  // Once the page finishes loading, send the note data (including filePath) to the renderer
  // noteWindow.webContents.on('did-finish-load', () => {
  //   logger.log(`Note window for note ID: ${note.id} has finished loading. Sending note data.`);
  //   noteWindow.webContents.send('open-note', note);
  // });

  // Clean up when the window is closed
  noteWindow.on('close', () => {
    logger.log(`Closing note window for note ID: ${note.id}`);
    noteWindows = noteWindows.filter((win) => win !== noteWindow);
  });

  // Set the menu bar visibility to false for a cleaner interface
  noteWindow.setMenuBarVisibility(false);

  // Add the note window to the list of opened windows
  noteWindows.push(noteWindow);

  logger.log(`Note window for note ID: ${note.id} has been created and added to the window list.`);
};

export default createNoteWindow;