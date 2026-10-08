# Andrew Photinakis — Portfolio & Engineering Showcase

A personal portfolio and software engineering showcase built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **TanStack Start**. Designed for high performance, type safety, and automated deployment as a static site on **GitHub Pages**.

**Live Site**: [https://acp7795.github.io/](https://acp7795.github.io/)

---

## Tech Stack

| Category            | Technologies                                                                                                                             |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend Core**   | [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)                                                            |
| **Routing & SSG**   | [TanStack Router](https://tanstack.com/router) (file-based routing), [TanStack Start](https://tanstack.com/start) (static prerendering)  |
| **State & Caching** | [TanStack Query](https://tanstack.com/query) (React Query)                                                                               |
| **Styling & UI**    | [Tailwind CSS v4](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/) primitives, [Lucide React](https://lucide.dev/) icons |
| **Build & Bundler** | [Vite 8](https://vitejs.dev/),                                                                                                           |
| **Code Quality**    | ESLint 9 (Flat Config), Prettier                                                                                                         |
| **CI/CD & Hosting** | GitHub Actions, GitHub Pages                                                                                                             |

---

## Features

- **Static Site Generation (SSG)**: Prerenders pages at build time into pure HTML, CSS, and client-side JavaScript for zero-latency hosting on GitHub Pages.
- **Type-Safe Routing**: Full route safety and preloading powered by TanStack Router.
- **Live GitHub Integration**: Direct, client-side fetching from the GitHub REST API cached with React Query to display real-time repository stars, forks, and recent activity.
- **Accessible & Responsive UI**: Built with unstyled Radix UI primitives and utility-first Tailwind CSS v4, supporting mobile drawers, carousels, and responsive layouts.
- **Automated CI/CD**: Automatic linting, code formatting verification, and production deployment via GitHub Actions.

---

## Project Structure

```text
├── .github/
│   └── workflows/
│       ├── deploy-prod.yml    # GitHub Pages deployment workflow (triggers on push to main)
│       └── test-deploy.yml    # CI workflow (linting, Prettier, build test on PRs)
├── public/                    # Static public assets (PDF resume, images, favicon)
├── src/
│   ├── components/            # Reusable UI components and Radix primitives
│   │   └── ui/                # Buttons, dialogs, cards, badges, navigation
│   ├── lib/                   # Utilities, error reporting, and GitHub API helpers
│   ├── routes/                # File-based TanStack routes
│   │   ├── __root.tsx         # Root HTML layout and shell
│   │   └── index.tsx          # Main portfolio page
│   ├── routeTree.gen.ts       # Generated TanStack router tree
│   ├── router.tsx             # TanStack Router instance & QueryClient provider
│   ├── start.ts               # TanStack Start configuration
│   └── styles.css             # Tailwind CSS entrypoint and theme variables
├── index.html                 # Fallback template
├── package.json               # Dependencies and npm scripts
├── tsconfig.json              # TypeScript compiler configuration
└── vite.config.ts             # Vite & TanStack Start build configuration
```

---

## Getting Started Locally

### Prerequisites

- **Node.js**: v20 or higher
- **npm**: v10 or higher

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/acphotinakis/resume-craft-site-12.git
   cd resume-craft-site-12
   ```

2. Install dependencies:

   ```bash
   npm install --legacy-peer-deps
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:8080` (or the terminal-provided local URL) to view the site.

---

## Available Scripts

| Command            | Description                                                 |
| :----------------- | :---------------------------------------------------------- |
| `npm run dev`      | Starts Vite dev server with hot module replacement (HMR)    |
| `npm run build`    | Compiles and prerenders the static site into `dist/client/` |
| `npm run preview`  | Starts a local server to preview the production build       |
| `npm run lint`     | Runs ESLint across the codebase                             |
| `npm run prettier` | Checks code formatting against Prettier rules               |
| `npm run format`   | Automatically formats all files using Prettier              |

---

## Deployment (GitHub Pages)

Deployment is completely automated via GitHub Actions in [`.github/workflows/deploy-prod.yml`](.github/workflows/deploy-prod.yml).

When changes are pushed to `main`:

1. Node 20 is configured in an Ubuntu runner.
2. Dependencies are installed (`npm ci --legacy-peer-deps`).
3. `npm run build` prerenders the site into `dist/client/`.
4. The `dist/client/` directory is packaged and deployed to **GitHub Pages**.

---
