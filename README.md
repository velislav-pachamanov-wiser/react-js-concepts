# React Concepts Hub

Vite + React 19 + TypeScript starter scaffolded as a **learning project** for client-side rendering (CSR): routing, TanStack Query, Redux Toolkit, forms (React Hook Form + Zod), animations (Framer Motion), and build tooling.

## Where to start

Open **[PROJECT_OUTLINE.md](./PROJECT_OUTLINE.md)** — it defines the app idea, module boundaries, acceptance criteria, and study order. The `src/` tree matches that outline; files contain `TODO` markers for you to implement.

## Scripts

| Command | Purpose |
|--------|---------|
| `npm run dev` | Dev server (Vite HMR) |
| `npm run api` | Local JSON API from `db.json` (port 3001, writes persist to file) |
| `npm run dev:all` | API + Vite together |
| `npm run build` | Typecheck + production bundle |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint |

## Local API (persistent `db.json`)

**my-json-server.typicode.com** only serves a read-only copy of `db.json` from GitHub. POST/PUT do not update your local file.

For real persistence during development:

1. Run **`npm run dev:all`** (or `npm run api` in one terminal and `npm run dev` in another).
2. The app uses `VITE_API_URL=/api` (see `.env.development`). Vite proxies `/api` → `http://localhost:3001`.
3. Creates/updates/deletes are written into **`db.json`** on disk (with `--watch`).

To use the remote mock again, set `VITE_API_URL` in `.env.development` to the typicode URL (see `.env.example`).

## Stack (dependencies you will use)

- **Routing:** `react-router-dom`
- **Server state:** `@tanstack/react-query` (+ devtools)
- **Client state:** `@reduxjs/toolkit`, `react-redux`
- **Forms:** `react-hook-form`, `@hookform/resolvers`, `zod`
- **Motion:** `framer-motion`

React Compiler is enabled via `vite.config.ts` (Babel plugin). See the outline’s **Build tools** section for deeper notes.
