# Torsa
Marketing site for TORSA — React + Vite.

---

## Running locally

```bash
# 1. install dependencies (creates node_modules/)
npm install

# 2. start the dev server with hot reload
npm run dev
```

Vite prints the local URL. This project sets `port: 3000` in `vite.config.js`, so open
**http://localhost:3000**. Press `h` + `Enter` in that terminal to see the hotkeys
(`r` restart, `o` open in browser, `q` quit).

| Command           | What it does                                              |
| ----------------- | --------------------------------------------------------- |
| `npm install`     | Install dependencies into `node_modules/`                  |
| `npm run dev`     | Dev server with hot module reloading on `localhost:5173`   |
| `npm run build`   | Production build into `dist/`                              |
| `npm run preview` | Serve the built `dist/` locally to check the real output    |
| `npm run lint`    | Run ESLint over all `.js` / `.jsx` files                   |

To test the production build locally:

```bash
npm run build
npm run preview
```

> Use `npm install` in the **project root** (`c:\websites\torsa`). On Windows PowerShell you can
> prefix with `cd c:\websites\torsa` if you are not already there.

### Troubleshooting

**`Failed to load resource: 500 (Internal Server Error)` in the browser console**

This means Vite's dev server could not transform your source. It is almost always a corrupted
`node_modules`. Fix it with a clean reinstall:

```bash
cd c:\websites\torsa
# stop any running dev server first (Ctrl+C in the terminal)
rmdir /s /q node_modules
npm cache verify
npm install
npm run dev
```

**`Cannot find module 'node-releases/...'` or `Cannot find module '.../isexe/index.js'`** in the
dev server log — same root cause, same fix (clean reinstall).

**`Port 3000 is in use`** — another process holds the port. Either stop it, or let Vite pick the
next free port automatically (it will print the new URL):

```powershell
Get-NetTCPConnection -LocalPort 3000 -State Listen
Get-Process -Id <OwningProcess> | Stop-Process -Force
```

---

## Publishing to GitHub

`node_modules/` and `dist/` are git-ignored, so they will never be uploaded to the repository.

```bash
# see what will be staged
git status

# stage only the source changes (ignored files are skipped automatically)
git add -A

# confirm nothing huge slipped in
git status

# commit
git commit -m "Fix Back to Services button and update gitignore"

# push to GitHub
git push origin main
```

If the remote is not set up yet, or to re-point it:

```bash
git remote -v
git remote add origin https://github.com/RoRo-Noa-ZOROO/Torsa.git
git branch -M main
git push -u origin main
```

Optional — untrack `dist/` (it is already ignored, but old copies are still tracked from a
previous commit, so this removes them from the index without touching your local files):

```bash
git rm -r --cached dist
git commit -m "Remove build output from version control"
git push origin main
```

> Vercel builds the site automatically from the repo, so committing `dist/` is not required.

