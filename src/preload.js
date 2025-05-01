// /src/preload.js
const { contextBridge, ipcRenderer } = require('electron');

// Expose ipcRenderer to the renderer process via contextBridge
contextBridge.exposeInMainWorld('electron', {
});