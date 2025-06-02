# DotaPick 

A  **Dota 2** hero picker built with **React 18 + Vite** on the front‑end and an **Express 5 + TypeScript** API on the back‑end.

<p align="center">
  <img src="https://img.shields.io/github/last-commit/BuLbAsH2224/DotaPick.svg" alt="Last commit" />
  <img src="https://img.shields.io/github/stars/BuLbAsH2224/DotaPick?style=social" alt="GitHub stars" />
  <img src="https://img.shields.io/github/issues/BuLbAsH2224/DotaPick.svg" alt="Open issues" />
</p>

<p align="center">
  <img src="https://assets-v2.lottiefiles.com/a/3e45c780-10ce-11ef-8520-3f024e3cdce5/BWJOUO8tPA.gif" width="600" alt="Live demo GIF" />
</p>

<p align="center">
  <a href="https://bulbash2224.github.io/DotaProject/">🌐 Live Demo (GitHub Pages)</a><br/>
  <sub>⚠️ The first request can take up to a minute — the free API needs to wake up.</sub>
</p>

---

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Prerequisites](#prerequisites)
4. [Getting Started](#getting-started)
5. [Scripts](#scripts)
6. [Project Structure](#project-structure)
7. [Contributing](#contributing)

---

## Features

- 🎯 **Hero Roulette** — one click picks a random hero for you.  
- ⚡ **React Query** — smart caching & background updates.  
- 🧭 **React Router v6** —  routes.  
- 🛠️ **TypeScript** — strict types from front‑end to back‑end.  
- 🚀 **Vite** dev server with instant HMR.  

## Tech Stack

| Front‑end            | Back‑end                | Tooling                |
|----------------------|-------------------------|------------------------|
| React 18 + Vite      | Express 5 + TypeScript  | React Query            |
| React Router v6      | Node 18 LTS             | ESLint & Prettier      |

---

## Prerequisites

- **Node ≥ 18** *(LTS recommended)*  
- **npm ≥ 9** (or **pnpm** / **yarn**)  
- **TypeScript ≥ 5** (installed globally or added as a dev dependency)


- Default ports: **5173** (front‑end) & **5000** (back‑end)  

---

## Getting Started

Clone the repositories and install dependencies:

```bash
# Front‑end
git clone https://github.com/BuLbAsH2224/DotaPick.git
cd DotaPick
npm install

# Back‑end
git clone https://github.com/BuLbAsH2224/DotaAPI.git
cd DotaAPI
npm install
```

### Development

In two separate terminals:

```bash
# Front‑end
npm run dev         # runs on http://localhost:5173

# Back‑end
npm start           # runs on http://localhost:5000/api
```



### Production build

```bash
# Build static front‑end assets
npm run build       # in ./DotaPick

# Serve with any static file server, or let the Express API serve /dist
```

---

## Scripts

| Command         | Location   | Description                           |
|-----------------|------------|---------------------------------------|
| `npm run dev`   | `DotaPick` | Start Vite dev server with HMR        |
| `npm run build` | `DotaPick` | Create optimized production build     |
| `npm start`     | `DotaAPI`  | Start Express API (TS‑Node in dev)    |

---

## Project Structure

```
DotaPick/           ← React front‑end
├─ public/
├─ src/
│ ├─ api/
│ ├─ assets/
│ ├─ components/
│ ├─ config/
│ ├─ pages/
│ ├─ types/
│ ├─ utils/
│ ├─ App.css
│ ├─ App.tsx
│ ├─ index.css
│ ├─ main.tsx
│ └─ vite-env.d.ts
└─ vite.config.ts

DotaAPI/            ← Express back‑end
├─ src/
│  ├─ api/
│  ├─config/
│  ├─other-api/
│  ├─types/
│  ├─utils/
│  └─ server.ts
└─ tsconfig.json
```

---

## Contributing

1. Fork the project  
2. Create your feature branch (`git checkout -b feat/your-feature`)  
3. Commit your changes (`git commit -m 'feat: add your feature'`)  
4. Push to the branch (`git push origin feat/your-feature`)  
5. Open a Pull Request  

