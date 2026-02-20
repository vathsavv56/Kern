# Kern

Kern is a React UI component library and resource website that provides beautifully designed, copy-paste-ready components and hand-picked fonts for your React projects.

## What is Kern?

Kern gives you a curated set of UI building blocks — from buttons and navigation bars to avatars and spinners — all styled with Tailwind CSS and written in TypeScript. Browse the live showcase, copy the source code for any component, and drop it straight into your project.

## Features

- **Ready-to-use components** — Browse and copy source code for each component directly from the UI.
- **Font explorer** — Discover and preview hand-picked fonts for your next project.
- **Built for React** — All components are written in TypeScript and target React 19.
- **Tailwind CSS styling** — Every component is styled exclusively with Tailwind CSS for easy customisation.
- **Fast & lightweight** — Powered by Vite for instant dev-server startup and optimised production builds.

## Available Components

| Component | Description |
|-----------|-------------|
| **TextArea** | Responsive text area with good typography, suitable for articles and long-form content |
| **Buttons** | A collection of button variants for actions and call-to-actions |
| **SearchBar** | Responsive search input for filtering lists or site-wide search |
| **Avatar** | Circular avatar for user profile pictures or initials |
| **Spinner** | Loading indicator for async data fetching or processing |
| **NavBars** | Five navigation bar layouts (standard, dashboard, minimal, centred, feature-rich) |
| **Card** | Container for grouping related content such as blog posts or product details |

## Tech Stack

- [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build tool & dev server
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling
- [React Router v7](https://reactrouter.com/) — client-side routing
- [TanStack Query](https://tanstack.com/query) — async state management
- [Motion](https://motion.dev/) — animations

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
src/
├── App.tsx                  # Route definitions
├── main.tsx                 # Application entry point
└── client/
    ├── assets/              # Static assets
    ├── cn.ts                # Class name utility
    └── components/
        ├── Hero.tsx         # Landing page hero section
        ├── ComponentPage.tsx# Component browser
        ├── FontPage.tsx     # Font browser
        └── kernC/           # Individual UI components
```

## Author

Built by [@vathsavv56](https://github.com/vathsavv56).
