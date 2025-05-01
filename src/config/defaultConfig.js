// Default configuration object

export const defaultConfig = {
  // UI and Theme Settings
  theme: 'light',  // Light or dark theme for the app
  fontSize: 14,  // Default font size for notes
  zoom: 100,  // Default zoom level (in percentage)
  maxZoom: 500,  // Maximum zoom level (in percentage)
  minZoom: 50,  // Minimum zoom level (in percentage)

  // Editor Settings
  editorSettings: {
    autoSaveInterval: 5, // in minutes, interval for auto-saving notes
    enableAutoSave: true, // Enable or disable auto-save functionality
    wordWrap: true, // Enable or disable word wrapping in the editor
    syntaxHighlighting: true, // Enable syntax highlighting for code (if applicable)
    lineNumbers: true, // Show line numbers in the editor
  },

  // Keyboard Shortcuts
  keyboardShortcuts: {
    newNote: 'Ctrl+Alt+N',  // Shortcut for creating a new note
    openManager: 'Ctrl+Alt+M',  // Shortcut for opening the notes manager
    saveNote: 'Ctrl+S',  // Shortcut for saving a note
    undo: 'Ctrl+Z',  // Shortcut for undoing an action
    redo: 'Ctrl+Y',  // Shortcut for redoing an action
    // Add more shortcuts as necessary
  },

  // File and Folder Settings
  folderPaths: [],  // List of folder paths to display in the manager (user-created directories)

  // Accessibility Settings
  accessibilitySettings: {
    highContrastMode: false,  // Enable high contrast mode for better accessibility
    textToSpeech: false,  // Enable text-to-speech for notes
    largeText: false,  // Enable larger font sizes for easier readability
  },

  // Platform-Specific Settings
  platformSpecificSettings: {
    osType: process.platform,  // This could help handle platform-specific behavior
    enableNotifications: true,  // Enable or disable notifications
  },

  // User Data Settings
  userData: {
    firstName: '',
    lastName: '',
    username: '',  // User's name or identifier
    email: '',  // User's email address
    recentFiles: [],  // A list of recently opened files
  },

  // Update Settings
  version: '1.0.0',
  autoUpdate: true,  // Enable or disable automatic updates
};