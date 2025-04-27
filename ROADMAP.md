### **Notes App – Development Roadmap**

---

#### ✅ **Phase 1: MVP (Minimum Viable Product)**

Get a usable, minimal version out as soon as possible.

- **Core Features:**
  - Basic Electron app setup
  - Global hotkey to create a new note
  - Minimal note editor window (Monaco, CodeMirror, or native textarea)
  - Autosave notes to local folder
  - Notes stored as `.txt` or `.md` files
  - Markdown toggle (edit/preview)
  - Basic settings stored in `config.json`
  - Notes Manager (list, open, delete, rename, export)
  - Basic UI theme: light/dark
  - Package for Windows (via Electron Builder)

---

#### 🔧 **Phase 2: User Customization & Settings**

**Settings & Personalization**

- **User settings GUI panel**
- Customizable:
  - Font, font size
  - Theme (light/dark/custom)
  - Default note title
  - Default note size/location/monitor
  - Keybindings
  - Toolbar (enable/disable, customize buttons)
  - Notes directory

---

#### 🔐 **Phase 3: Security & Advanced File Handling**

**Security**

- Password-protected locked notes (AES encryption)
- Auto-lock notes after inactivity
- Password prompt on opening locked notes

**File & Format Support**

- Support for `.md`, `.txt`, `.json`, `.code`, etc.
- Syntax highlighting for code blocks
- Export to PDF, HTML, JSON

---

#### 🧠 **Phase 4: Smart Features & Dynamic Content**

- Inline scripting engine (e.g., `{{ sum(2, 3) }}`, `{{ today() }})`)
- Custom mini-scripting language or JS-lite
- Templates and snippets
- Auto-linking between notes (like `[[Note Title]]`)
- Custom variables in notes (`{{ username }}`, `{{ date }}`)

---

#### 🗂️ **Phase 5: Search & Power User Tools**

- Full-text search
- Tags and categories
- Sort/filter in Notes Manager
- Version history & undo/redo
- Git integration for note versioning (optional)

---

#### 🧩 **Phase 6: Plugins & Extensions (Optional)**

- Plugin system for developers
- Plugin store or registry
- CLI tool for note creation (e.g., `quicknote new "idea"`)

---

#### ☁️ **Phase 7: Cloud & Sync (Optional/Future)**

- User accounts (optional)
- Sync notes across devices
- Cloud backup
- Collaboration (shared notes or real-time)

---

#### 💼 **Phase 8: Distribution, Support & Monetization**

- Auto-update system
- Issue reporter (link to GitHub)
- Wiki/docs site
- Donation links or GitHub Sponsors
- Optional "Pro" account (for future monetization via sync, encryption, etc.)