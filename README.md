# Isabella Gomez · Portfolio

A single-page professional site for Customer Success, CX, and Learning & Development — rebuilt in **React** from the original static mockup, pixel-faithful typography, motion, and layout.

![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white)

---

## Highlights

- **Hero + stats** with oversized display type and staggered entrance animation  
- **Marquee** strip for keywords and positioning  
- **Services**, **About**, **Experience** (timeline with featured rows), and **Contact** — same structure and copy as the reference mockup  
- **Custom cursor** (dot + trailing ring) with interactive hover states  
- **Responsive** layout: navigation collapses on smaller viewports; grids stack cleanly  

Fonts: **Playfair Display** + **Outfit** (loaded from Google Fonts).

---

## Quick start

```bash
cd isa-project
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

| Script        | What it does                |
|---------------|-----------------------------|
| `npm run dev` | Dev server with HMR         |
| `npm run build` | Typecheck + production bundle |
| `npm run preview` | Serve the built `dist` folder |

### Windows PowerShell and `npm`

If you see *“running scripts is disabled on this system”*, either:

- run **`npm.cmd install`** / **`npm.cmd run dev`**, or  
- use **Command Prompt** instead of PowerShell for that session.

---

## Project layout

```
isa-project/
├── index.html          # Root HTML + font preconnect
├── mockup.HTML         # Original static reference
├── src/
│   ├── App.tsx         # Page composition & content
│   ├── main.tsx        # React entry
│   ├── components/
│   │   └── CustomCursor.tsx
│   └── styles/
│       ├── layout.css  # Variables, nav, hero, marquee
│       └── sections.css # Sections, footer, motion, breakpoints
├── vite.config.ts
└── package.json
```

---

## Build notes

- No UI framework — just React and hand-authored CSS split for readability.  
- Contact links (`mailto`, LinkedIn) live in `App.tsx`; swap them for your own details when reusing the template.

---

## License

Private project unless you add an explicit license.
