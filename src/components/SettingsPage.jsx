import React, { useRef, useState } from 'react';

function SettingsPage({ closeSettings }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('Light');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const themeSelectRef = useRef(null);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleThemeChange = (e) => {
    setSelectedTheme(e.target.value);
  };

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleSelectFocus = () => {
    if (themeSelectRef.current) {
      themeSelectRef.current.focus();
      themeSelectRef.current.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    }
  };

  const onClose = () => {
    closeSettings();
  }

  return (
    <div className="settings-page p-6 bg-white rounded-lg mx-auto flex flex-col gap-6 h-screen select-none">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800 my-auto">Settings</h1>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="bg-gray-200 px-4 py-2 rounded-lg text-gray-500 hover:text-gray-700 font-semibold text-xl cursor-pointer hover:bg-red-300"
        >
          &times;
        </button>
      </div>

      {/* Settings List */}
      <div className="settings-list flex-1 overflow-y-auto">
        <ul>
          {/* Dark Mode */}
          <li 
            className="p-4 mb-2 bg-gray-100 rounded-md cursor-pointer"
            onClick={handleDarkModeToggle}
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold">Enable Dark Mode</span>
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={handleDarkModeToggle}
                className="cursor-pointer"
              />
            </div>
          </li>

          {/* Theme Selection */}
          <li 
            className="p-4 mb-2 bg-gray-100 rounded-md cursor-pointer"
            onClick={handleSelectFocus}
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold">Select Theme</span>
              <select
                ref={themeSelectRef}
                value={selectedTheme}
                onChange={handleThemeChange}
                className="p-2 border border-gray-300 rounded-md select-none"
              >
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
                <option value="System">System Default</option>
              </select>
            </div>
          </li>

          {/* Notifications */}
          <li 
            className="p-4 mb-2 bg-gray-100 rounded-md cursor-pointer"
            onClick={handleNotificationsToggle}
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold">Enable Notifications</span>
              <input
                type="checkbox"
                checked={notificationsEnabled}
                onChange={handleNotificationsToggle}
                className="cursor-pointer"
              />
            </div>
          </li>
        </ul>
      </div>

      {/* Version Number */}
      <div className="absolute left-0 right-0 mx-auto text-center bottom-1 text-sm text-gray-500">
        Version 1.0.0
      </div>
    </div>
  );
}

export default SettingsPage;