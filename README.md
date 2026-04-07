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

Response headers (HSTS, CSP, etc.) are set in **`vercel.json`**.

### Chrome shows “Dangerous site”

That comes from **Google Safe Browsing**, not from a normal code bug. New or rarely visited domains are sometimes flagged by mistake.

1. Check status: [Google Safe Browsing transparency](https://transparencyreport.google.com/safe-browsing/search).
2. If it’s wrong, file a review: [Report a Safe Browsing error](https://safebrowsing.google.com/safebrowsing/report_error/).
3. Prefer **real logos** in `public/logos/` instead of random hotlinked images (search thumbnails, random CDNs), which look untrustworthy to users and crawlers.
