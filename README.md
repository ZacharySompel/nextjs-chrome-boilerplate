# 🚀 Next.js Chrome Extension Boilerplate

A modern **Next.js-based Chrome Extension Boilerplate** using **ShadCN, TailwindCSS**. This is designed to streamline building Chrome extensions with Next.js.

## 💂️ Folder Structure
```
💚 nextjs-chrome-boilerplate
📂 public          # Chrome extension assets (manifest, icons, service worker)
📂 src
📌 📂 components  # UI components
📌 📂 context     # Global state management (PokeDataProvider, etc.)
📌 📂 pages       # Next.js pages (popup, newtab, etc.)
📌 📂 styles      # CSS and Tailwind styles
📝 manifest.json   # Chrome extension configuration
📝 next.config.js  # Next.js configuration
📝 out.js          # Post-build script to fix Chrome extension paths
📝 README.md       # Project documentation
```

---

## 🚀 Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/ZacharySompel/nextjs-chrome-boilerplate.git
cd nextjs-chrome-boilerplate
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Run in Development Mode**
```sh
npm run dev
```
- Open `http://localhost:3000` to test the extension UI.

### **4️⃣ Build the Chrome Extension**
```sh
npm run build
```
- This will generate the extension in the `out/` folder.

---

## 🌟 Features
✅ **Next.js 15+** – Uses `output: "export"` for static export  
✅ **ShadCN UI** – Modern UI components  
✅ **TailwindCSS** – Fully customizable styles  
✅ **Chrome Storage API Integration**  

---

## 🎨 Customization
### **Modify Extension Icons**
Replace the images in `public/icons/`:
```
public/icons/icon16.png
public/icons/icon32.png
public/icons/icon48.png
public/icons/icon128.png
```

### **Modify Manifest (Extension Settings)**
Edit `public/manifest.json` to configure:
- **Name & Description**
- **Permissions**
- **Default Popup / New Tab**

**Important:** Since Next.js exports pages into subfolders (e.g., `out/newtab/index.html`), you must specify the folder paths in `manifest.json`. Example:
```json
"action": {
    "default_popup": "popup/index.html"
},
"chrome_url_overrides": {
    "newtab": "newtab/index.html"
}
```

### **Modify UI Components**
Customize UI components inside `src/components/`.

---

## 🐜 License
This project is **MIT Licensed**.

---