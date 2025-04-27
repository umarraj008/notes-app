# 📝 (Notes App) – A Simple, Customizable Notes App

(Notes App) is a lightweight, customizable, and user-focused note-taking app designed for **Windows**. Inspired by Notepad's simplicity but enhanced with powerful features, QuickNote allows users to take notes quickly, organize them, and manage them in a way that fits their workflow.

This app is open-source and built to give you control over your notes, appearance, and experience.

---

## 🚀 Features

### Core Features

- **Instant note creation**: Press a global hotkey (e.g. `Ctrl+Shift+N`) to create a new note.
- **Autosave**: Notes are automatically saved to a user-defined folder.
- **Markdown Support**: Write in Markdown and toggle between editor and preview modes.
- **Notes Manager**: Open, delete, rename, and export notes easily.
- **Customizable Settings**: Control font, theme, window behavior, and keybinds.

### Advanced Features

- **Inline Scripting**: Add dynamic content to your notes using custom scripting (e.g., `{{ sum(5, 3) }}`).
- **Security**: Lock notes with password protection and encrypt them with AES.
- **Support for Multiple File Formats**: .txt, .md, .json, and more.
- **Version History**: Optional versioning for notes via Git integration.
- **Cloud Sync (Future)**: Sync your notes across devices (planned for future updates).

---

## 🔧 Getting Started

### Prerequisites

- **Node.js** (LTS version) and **npm** installed on your system.
- **Electron** (auto-installed via npm).

### Installation

1. Clone this repository:

```Bash
   git clone https://github.com/yourusername/quicknote.git
```

2. Install dependencies:

```Bash
cd quicknote
npm install

```

3. Run the app in development mode:

```Bash
npm start

```

4. (Optional) Build the app for Windows:

```Bash
npm run build
```

---

## 🛠️ Usage

### Key Features

- **Create a New Note**: Press `Ctrl+Shift+N` to open a new note.
- **Toggle Markdown Preview**: Press `Ctrl+M` to switch between Markdown edit and preview modes.
- **Manage Notes**: Use the Notes Manager to view, rename, delete, and export your notes.

### Customization:

- **Customize Keybinds**: Go to Settings → Keybindings to change shortcuts.
- **Themes**: Change themes between light and dark, or set your custom theme.
- **Window Behavior**: Set how the app behaves on launch, including size and position on the screen.

---

## 📁 Project Structure

```Tree
QuickNote/
├── public/                  # Static files (icons, assets)
├── src/                     # Source code
│   ├── components/          # React components
│   ├── views/               # Views like NotesManager, Editor, etc.
│   ├── utils/               # Utility functions
│   ├── styles/              # CSS or Tailwind styles
│   ├── App.jsx              # Main React component
│   ├── main.js              # Electron entry point
│   └── config.json          # User settings/config
├── notes/                   # Default notes folder
├── package.json             # App dependencies and scripts
├── README.md                # Project documentation
└── LICENSE                  # Open-source license (MIT or other)
```

---

## ⚙️ Configuration

QuickNote settings are stored in a JSON file (`config.json`) located in your app data directory. You can easily customize the app's behavior, theme, and keybindings through this file.

### Example config.json

```json
{
  "editor": {
    "defaultFont": "Fira Code",
    "fontSize": 14,
    "theme": "dark",
    "toolbarEnabled": true
  },
  "window": {
    "defaultWidth": 800,
    "defaultHeight": 600,
    "startupPosition": "center"
  },
  "keybinds": {
    "newNote": "Ctrl+Shift+N",
    "toggleMarkdownPreview": "Ctrl+M"
  }
}
```

You can change the settings directly in the `config.json` or through the in-app Settings UI.

---

## 🚀 Roadmap

Check out the [full roadmap](./ROADMAP.md) for upcoming features and planned updates, including:

- **Phase 1: MVP**: Basic Electron app setup, minimal note editor, autosave notes, Markdown toggle, and more.
- **Phase 2: User Customization**: Personalization options like font size, theme, and keybindings.
- **Phase 3: Security**: AES-encrypted notes, auto-lock, and support for multiple file formats like `.md`, `.txt`, and `.json`.
- **Phase 4: Smart Features**: Inline scripting engine, templates, auto-linking between notes, and dynamic variables.
- **Phase 5: Search & Power Tools**: Full-text search, tags, categories, and Git integration.
- **Phase 6: Plugins & Extensions**: Plugin system and CLI tool for note creation.
- **Phase 7: Cloud & Sync**: User accounts, multi-device sync, cloud backup, and collaboration features.
- **Phase 8: Distribution & Monetization**: Auto-update system, documentation, GitHub Sponsors, and optional "Pro" account.

Looking for more details? Check out the [roadmap page](./ROADMAP.md)!

---

## 💡 Contributing

We welcome contributions! If you'd like to contribute to QuickNote, feel free to:
Fork the repository.

1. Create a new branch.
2. Submit a pull request with your changes.
3. Please follow the standard code of conduct and keep the app simple and user-focused.

---

## 🤖 License

QuickNote is open-source software released under the MIT License. See the LICENSE file for more information.

---

## 💬 Support

If you encounter issues, please open a GitHub issue, or check out the documentation wiki.

---

## 🌟 Acknowledgments

- [Electron](https://www.electronjs.org/) for building cross-platform apps.
- [React](https://react.dev/) for a fast and flexible UI.
- [VS Code](https://code.visualstudio.com/) Editor for the code editing experience.
- [Cmder](https://cmder.app/) for better terminal experience.

---

### Next Steps:

- Try it out: Download and test the app yourself.
- Contribute: Report bugs, suggest features, or help with code.
- Spread the Word: If you like the app, share it with others!
