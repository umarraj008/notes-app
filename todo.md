# Todo

## Todo list

[x] Create Manager UI
[x] Create Note UI
[x] Create single instance of notes manager
[x] Keep system tray active at all times so app is always open
[x] System tray click should open  manager

[ ] Config and app settings:
    - should be saved in config.json in app data
    - App.jsx should load config so that its in the whole app - maybe make separate file for handling
    - listen for config changes and reload if changed

[ ] Settings update config

[ ] Database setup:
    - on start it tries to connect and load db
    - if cannot find db, create one
    - load db

[ ] Get open file to work so that:
    - file dialog allows you to select file
    - meta entry is created in db
    - id is passed to Note
    - Note loads file data from db using id

[ ] Manager should show recent/db entries in list:
    - get/sort by date and display notes list

[ ] Tags and other meta data for notes in db

[ ] Save note:
    - if file is marked as temp then prompt user on save location
    - Saves text content to file
    - Updates db entry

[ ] Create new note:
    - Create empty file in temp dir
    - Add meta entry for temp file
    - Open temp file in Note

[ ] Delete note:
    - prompt user if they want to delete
    - prompt if they want to delete text file as well
    - delete file if yes
    - delete db entry

[ ] Rename note:
    - textbox or input prompt for new file name
    - rename file
    - update db entry

[ ] Note history for undo:
    - Changes should be tracked in memory through stack
    - Undo functionality
    - Redo functionality

[ ] Global shortcuts:
    - Ctrl+Alt+N -> Create New Note
    - Ctrl+Alt+M -> Open Note Manger
    - Ctrl+Alt+L -> Open Last/Recent Note

[ ] Editor shortcuts

[ ] Markdown preview renderer:
    - split pane render
    - live updates to md
    - toggle through shortcut 
  
[ ] UI Themes and setting to choose

[ ] Autosave option using debouncing

[ ] Autosave session to temp file for session recovery

---

## Flows

open note -> passes ID to Note -> Note takes ID and gets data from database -> check for unsaved sessions -> uses path to load file
create new note -> creates file in temp -> adds note entry to db -> open note
delete note -> deletes file -> delete entry from db
save note -> saves text content to file -> updates db entry
note onChange -> changes are debounced to temp file

---

## Keybinds

### Global Shortcuts

Ctrl + Shift + N | New Note
Ctrl + Shift + L | Open Last Note
Ctrl + Shift + M | Open Manager

### Editor Shortcuts

Ctrl + M         | Toggle Markdown Mode
Ctrl + F         | Search text (contains, exact, match case, regex)
Ctrl + G         | Go to Line
Ctrl + S         | Save Note
Ctrl + P         | Settings
Ctrl + O         | Open
Ctrl + Tab       | Note Switcher
Ctrl + W         | Exit
Ctrl + R         | Rename
Ctrl + T         | Toggle Toolbar
Alt + Arrow      | Multi-line Cursor
Ctrl + D         | Duplicate Selection
Ctrl + A         | Select All
Ctrl + Shift + S | Save As
Ctrl + Z         | Undo
Ctrl + Y         | Redo
Ctrl + Shift + F | Toggle Full-Screen Mode
Ctrl + Q         | Quick Note Creation
Ctrl + Shift + E | Edit Metadata
Ctrl + H         | Toggle Highlighting
Ctrl + Shift + P | Pin Note