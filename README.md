# Website

Personal portfolio / resume site: bio, experience, projects, education, resume link, and contact.

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # optional: preview production output
```

Output is in `dist/`.

## Edit content

Change copy and lists in **`src/content.ts`** (name, bio, jobs, projects, schools, links, optional logos).

Logo files go in **`public/logos/`** and use paths like `/logos/example.png` in `content.ts`.

## Deploy

Configured for **[Vercel](https://vercel.com/)** (or any static host): build command `npm run build`, output directory `dist`.
