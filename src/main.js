import { app, globalShortcut, Menu } from 'electron';
import { loadConfig } from './services/configService.js';
import { setupIpcHandlers } from './ipc/ipc.js';
import { initDatabase } from './services/databaseService.js';
import setupTray from './tray/tray.js';
import createManagerWindow from './windows/managerWindow.js';
import createNoteWindow from './windows/noteWindow.js';
import logger from './utils/logger.js'

let tray = null;
let config = null;
let managerWin = null;

// Function to initialize the database and config
const initializeApp = async () => {
  try {
    // Initialize the Database (this will ensure the config and notes tables are created)
    await initDatabase();
    logger.log('Database initialized successfully');
    
    // Now load Config from Database or File
    config = await loadConfig();
    if (!config) {
      logger.warn('Config not found, using default config');
    } else {
      logger.log('Config loaded successfully');
    }
  } catch (error) {
    logger.error('Failed to initialize app:', error);
    app.quit();
  }
};

// Register your global shortcuts
const registerGlobalShortcuts = () => {
  // Register Ctrl+Alt+N to create a new note window
  globalShortcut.register('Ctrl+Alt+N', () => {
    logger.log('Ctrl+Alt+N shortcut triggered');

    const newNote = {
      id: Date.now().toString(),
      title: 'Untitled',
      text: '',
      filePath: null,
      created: Date.now(),
      modified: Date.now(),
    };

    createNoteWindow(newNote);
  //   saveNote(newNote).then(() => {
  //   }).catch((error) => {
  //     logger.error('Error saving new note:', error);
  //   });
  });

  // Register Ctrl+Alt+M to open the manager window
  globalShortcut.register('Ctrl+Alt+M', () => {
    logger.log('Ctrl+Alt+M shortcut triggered');
    if (managerWin) {
      if (managerWin.isVisible()) {
        managerWin.hide();
      } else {
        managerWin.show();
      }
    }
  });
};

// Setup the tray menu
const setupAppTray = () => {
  const trayMenu = Menu.buildFromTemplate([
    {
      label: 'Open Notes Manager',
      click: () => { 
        logger.log('Opening Notes Manager from tray menu');
        createManagerWindow(managerWin); 
      },
    },
    {
      label: 'Create New Note',
      click: () => {
        logger.log('Creating new note from tray menu');
        const newNote = {
          id: Date.now().toString(),
          title: 'Untitled',
          text: '',
          filePath: null,
          created: Date.now(),
          modified: Date.now(),
        };

        createNoteWindow(newNote);
        // saveNote(newNote).then(() => {
        // }).catch((error) => {
        //   logger.error('Error saving new note:', error);
        // });
      },
    },
    {
      label: 'Quit',
      click: () => {
        logger.log('Quitting the app from tray menu');
        app.quit();
      },
    },
  ]);

  // Setup tray menu
  tray = setupTray(trayMenu, managerWin);

  // Tray click behavior
  tray.on('click', () => {
    if (managerWin && managerWin.isVisible()) {
      logger.log('Hiding Notes Manager window from tray click');
      managerWin.hide();
    } else {
      logger.log('Showing Notes Manager window from tray click');
      managerWin.show();
      managerWin.restore();
    }
  });
};

// Main app lifecycle
app.whenReady().then(async () => {
  // Initialize the application (load config, initialize DB)
  await initializeApp();

  // Setup IPC handlers
  setupIpcHandlers();

  // Setup the tray
  setupAppTray();

  // Create Manager Window
  managerWin = createManagerWindow(managerWin);

  // Register global shortcuts
  registerGlobalShortcuts();
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
  logger.log('Unregistered all global shortcuts');
});