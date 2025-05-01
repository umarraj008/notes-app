// src/components/ManagerWindow.jsx
import React, { useEffect, useState } from 'react';
import { version } from '../../package.json';
import SettingsPage from './SettingsPage';

function Manager() {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSettings, setShowSettings] = useState(false);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.created.toString().includes(searchQuery.toLowerCase()) ||
    note.modified.toString().includes(searchQuery.toLowerCase())
  );

  const handleNewNote = async () => {
    
  };

  const handleOpenFile = () => {
    
  };

  const handleSettings = () => {
    setShowSettings(true);
  }

  const closeSettings = () => {
    setShowSettings(false);
  }

  if (showSettings) return <SettingsPage closeSettings={closeSettings}/>

  return (
    <div className="manager-window p-6 bg-white rounded-lg mx-auto flex flex-col gap-6 h-screen">
      {/* Title, Search Bar, and Button */}
      <div className="flex flex-row gap-4">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 my-auto">Notes App Manager</h1>
  
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search Notes..."
          className="p-2 flex-1 border border-gray-300 rounded-md my-auto h-full outline-gray-600"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
  
        {/* Create New Note Button */}
        <button
          onClick={handleNewNote}
          className="bg-blue-500 text-white font-medium my-auto py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600"
        >
          Create New Note
        </button>
        
        {/* Open File Button */}
        <button
          onClick={handleOpenFile}
          className="bg-blue-500 text-white font-medium my-auto py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600"
        >
          Open File
        </button>

        {/* Settings Button */}
        <button
          onClick={handleSettings}
          className="bg-gray-200 text-gray-800 font-medium my-auto py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-300"
        >
          Settings
        </button>
      </div>
  
      {/* Notes List */}
      <div className="note-list overflow-y-auto flex-1">
        <ul>
          {filteredNotes.map((note) => (
            <li
              key={note.id}
              onClick={() => openNote(note)}
              className="p-4 mb-2 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200"
            >
              <h2 className="font-semibold">{note.title}</h2>
              <p>Created: {new Date(note.created).toLocaleString()}</p>
              <p>Modified: {new Date(note.modified).toLocaleString()}</p>
              <p>{note.text.substring(0, 100)}...</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Version Number */}
      <div className="absolute left-0 right-0 mx-auto text-center bottom-0.5 text-sm text-gray-500">Version {version}</div>
    </div>
  );
}

export default Manager;