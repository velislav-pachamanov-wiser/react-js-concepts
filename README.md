# React Concepts Hub

Vite + React 19 + TypeScript starter scaffolded as a **learning project** for client-side rendering (CSR): routing, TanStack Query, Redux Toolkit, forms (React Hook Form + Zod), animations (Framer Motion), and build tooling.

## Where to start

Open **[PROJECT_OUTLINE.md](./PROJECT_OUTLINE.md)** — it defines the app idea, module boundaries, acceptance criteria, and study order. The `src/` tree matches that outline; files contain `TODO` markers for you to implement.

## Scripts

| Command | Purpose |
|--------|---------|
| `npm run dev` | Dev server (Vite HMR) |
| `npm run build` | Typecheck + production bundle |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint |

## Stack (dependencies you will use)

- **Routing:** `react-router-dom`
- **Server state:** `@tanstack/react-query` (+ devtools)
- **Client state:** `@reduxjs/toolkit`, `react-redux`
- **Forms:** `react-hook-form`, `@hookform/resolvers`, `zod`
- **Motion:** `framer-motion`

React Compiler is enabled via `vite.config.ts` (Babel plugin). See the outline’s **Build tools** section for deeper notes.
