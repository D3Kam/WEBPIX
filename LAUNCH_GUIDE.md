# WEBPIX Launch Guide

## Quick Start

Follow these steps to launch the WEBPIX application:

### 1. Ensure You Have the Latest Code

```bash
git fetch origin
git pull origin claude/launch-guide-015SkyWLCWL7LL7VHxrezq3Y
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will be available at **http://localhost:5173** (or the port shown in your terminal).

## Troubleshooting Common Issues

### Error: "Failed to resolve import" for component files

**Symptoms:**
```
[plugin:vite:import-analysis] Failed to resolve import "../account/index.jsx" from "src/App.jsx"
```

**Causes & Solutions:**

#### 1. Missing Files (Most Common)
Your local repository might be missing component files. Verify all directories exist:

```bash
ls -la | grep -E "(home|about|contact|faq|how-it-works|legal|account)"
```

You should see these directories at the project root:
- `about/`
- `account/`
- `contact/`
- `faq/`
- `home/`
- `how-it-works/`
- `legal/`

**Fix:** Pull the latest code:
```bash
git pull origin claude/launch-guide-015SkyWLCWL7LL7VHxrezq3Y
```

#### 2. Node Modules Issues
Corrupted or incomplete node_modules.

**Fix:**
```bash
rm -rf node_modules package-lock.json
npm install
```

#### 3. Cache Issues
Vite cache might be stale.

**Fix:**
```bash
rm -rf node_modules/.vite
npm run dev
```

#### 4. File System Case Sensitivity
On macOS/Linux, file names are case-sensitive.

**Fix:** Ensure all import paths match the exact case of the files:
- `index.jsx` (not `Index.jsx` or `INDEX.jsx`)

## Project Structure

```
WEBPIX/
├── src/
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── styles.css       # Global styles
├── home/                # Home page components
│   └── index.jsx
├── about/               # About page components
│   └── index.jsx
├── contact/             # Contact page components
│   └── index.jsx
├── faq/                 # FAQ page components
│   └── index.jsx
├── how-it-works/        # How It Works page components
│   └── index.jsx
├── legal/               # Legal page components
│   └── index.jsx
├── account/             # Account page components
│   ├── index.jsx
│   └── dashboard/
│       └── index.jsx
├── components/          # Shared components
├── hooks/               # Custom React hooks
└── xframe/              # XFrame components
```

## Available Scripts

- **`npm run dev`** - Start development server (with hot reload)
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally

## Technology Stack

- **React** 18.2.0 - UI framework
- **Vite** 7.2.2 - Build tool and dev server
- **React Router** 6.20.0 - Client-side routing
- **Tailwind CSS** 3.3.6 - Styling
- **Framer Motion** 12.23.24 - Animations
- **Relume UI** - Component library

## Routes

Once launched, the following routes are available:

- `/` or `/home` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/faq` - FAQ page
- `/how-it-works` - How It Works page
- `/legal` - Legal information
- `/account` - User account dashboard

## Development Tips

1. **Hot Reload**: Changes to `.jsx` files will automatically reload in the browser
2. **Console Errors**: Check browser DevTools console for detailed error messages
3. **Port Conflicts**: If port 5173 is in use, Vite will automatically try the next available port
4. **Network Access**: To access from other devices on your network, Vite shows a network URL in the terminal

## Need Help?

If you continue to experience issues:

1. Check that you're on the correct branch:
   ```bash
   git branch --show-current
   ```

2. Verify you have the latest code:
   ```bash
   git log -1
   ```

3. Check Node.js version (should be 14+):
   ```bash
   node --version
   ```

4. Review the full error stack trace in your terminal

## Production Build

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `dist/` directory, which you can deploy to any static hosting service.

To preview the production build locally:

```bash
npm run preview
```
