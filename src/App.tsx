import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import {
  site,
  experiences,
  projects,
  leadership,
  education,
  skillGroups,
  certifications,
  type Experience,
  type Education,
} from "./content";

type Page = "home" | "experience" | "projects" | "leadership" | "education" | "skills";

const PAGES: Page[] = ["experience", "projects", "leadership", "education", "skills"];

function readHash(): Page {
  if (typeof window === "undefined") return "home";
  const h = window.location.hash.slice(1) as Page;
  return (PAGES as string[]).includes(h) ? h : "home";
}

export default function App() {
  const [page, setPage] = useState<Page>(readHash);

  useEffect(() => {
    const onHash = () => setPage(readHash());
    window.addEventListener("hashchange", onHash);
    window.addEventListener("popstate", onHash);
    return () => {
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("popstate", onHash);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const go = (p: Page) => {
    if (p === "home") {
      history.pushState(null, "", window.location.pathname + window.location.search);
    } else {
      history.pushState(null, "", `#${p}`);
    }
    setPage(p);
  };

  return (
    <>
      <ThemeToggle />
      {page === "home" ? (
        <Home go={go} />
      ) : (
        <Subpage key={page} page={page} go={go} />
      )}
    </>
  );
}

/* ── home ─────────────────────────────────────────────── */
function Home({ go }: { go: (p: Page) => void }) {
  return (
    <div className="home">
      <div className="home-inner">
        <a
          className="home-mark"
          href="https://alphabrief.net"
          target="_blank"
          rel="noreferrer"
          aria-label="AlphaBrief"
          title="AlphaBrief"
        >
          <svg viewBox="0 0 64 64" width="112" height="112" aria-hidden="true">
            <path d="M32 6 L34 30 L32 32 L30 30 Z" />
            <path d="M32 58 L30 34 L32 32 L34 34 Z" />
            <path d="M10 32 L30 30 L32 32 L30 34 Z" />
            <path d="M54 32 L34 34 L32 32 L34 30 Z" />
          </svg>
        </a>
        <h1 className="home-name">{site.name.toLowerCase()}</h1>
        <p className="home-tagline">ORFE @ Princeton. Tech &times; finance.</p>
        <nav className="home-menu">
          {PAGES.map((p) => (
            <button key={p} type="button" onClick={() => go(p)}>
              {p}
            </button>
          ))}
        </nav>
        <div className="home-foot">
          <a href={site.resumeUrl} target="_blank" rel="noreferrer">
            resume
          </a>
          <a href={site.links.github} target="_blank" rel="noreferrer">
            github
          </a>
          <a href={site.links.linkedin} target="_blank" rel="noreferrer">
            linkedin
          </a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </div>
  );
}

/* ── subpages ─────────────────────────────────────────── */
function Subpage({ page, go }: { page: Page; go: (p: Page) => void }) {
  return (
    <main className="page subpage">
      <div className="subpage-nav">
        <button type="button" className="back" onClick={() => go("home")}>
          ← home
        </button>
        <div className="subpage-tabs">
          {PAGES.map((p) => (
            <button
              key={p}
              type="button"
              className={`tab${p === page ? " is-active" : ""}`}
              onClick={() => go(p)}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <h1 className="subpage-title">// {page}</h1>

      {page === "experience" &&
        experiences.map((e) => <ExperienceRow key={e.id} exp={e} />)}

      {page === "projects" &&
        projects.map((p) => (
          <div key={p.id} className="proj">
            <div className="proj-head">
              {p.url ? (
                <a className="proj-name" href={p.url} target="_blank" rel="noreferrer">
                  {p.name}
                </a>
              ) : (
                <span className="proj-name">{p.name}</span>
              )}
              <span className="proj-date">{p.date}</span>
            </div>
            <p className="proj-blurb">{p.blurb}</p>
            {p.stack && p.stack.length > 0 && (
              <p className="proj-stack">{p.stack.join(" · ")}</p>
            )}
          </div>
        ))}

      {page === "leadership" &&
        leadership.map((l) => (
          <ExperienceRow
            key={l.id}
            exp={{
              id: l.id,
              role: l.role,
              company: l.org,
              period: l.period,
              detail: l.detail,
              details: l.details,
            }}
          />
        ))}

      {page === "education" &&
        education.map((ed) => <EducationRow key={ed.id} edu={ed} />)}

      {page === "skills" && (
        <>
          {skillGroups.map((g) => (
            <div key={g.title} className="skill-row">
              <span className="skill-title">{g.title.toLowerCase()}</span>
              <span className="skill-items">{g.items.join(", ")}</span>
            </div>
          ))}
          <h2 className="subpage-subtitle">// certifications</h2>
          {certifications.map((c) => (
            <div key={c.id} className="cert-row">
              <span className="cert-name">{c.name}</span>
              {c.issuer && <span className="cert-issuer">{c.issuer}</span>}
            </div>
          ))}
        </>
      )}
    </main>
  );
}

/* ── experience row (collapsed → expandable) ──────────── */
function ExperienceRow({ exp }: { exp: Experience }) {
  const [open, setOpen] = useState(false);
  const hasBody =
    (exp.details && exp.details.length > 0) || (exp.tags && exp.tags.length > 0);
  return (
    <button
      type="button"
      className="row"
      aria-expanded={open}
      onClick={() => hasBody && setOpen((v) => !v)}
    >
      <div className="row-head">
        <span className="row-idx">{exp.id}</span>
        <div className="row-main">
          <span className="row-title">
            {hasBody && <span className="chev">›</span>}
            {exp.role}
          </span>
          <span className="row-sub">
            <span className="company">{exp.company}</span>
            {exp.location && <span className="row-sub-sep"> · {exp.location}</span>}
            <span className="row-sub-sep"> · {exp.period}</span>
          </span>
          {exp.detail && <span className="row-meta">{exp.detail}</span>}
        </div>
      </div>
      {open && exp.details && exp.details.length > 0 && (
        <div className="row-body">
          {exp.details.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </div>
      )}
      {open && exp.tags && exp.tags.length > 0 && (
        <div className="row-tags">
          {exp.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      )}
    </button>
  );
}

/* ── education row (courses always listed, low-key) ───── */
function EducationRow({ edu }: { edu: Education }) {
  const hasCourses = !!(edu.courses && edu.courses.length > 0);
  const total = edu.courses?.reduce((n, t) => n + t.items.length, 0) ?? 0;

  return (
    <div className="row edu-row">
      <div className="row-head">
        <span className="row-idx">{edu.id}</span>
        <div className="row-main">
          <span className="row-title">{edu.school}</span>
          <span className="row-sub">
            <span className="company">{edu.degree}</span>
            <span className="row-sub-sep"> · {edu.years}</span>
          </span>
          {edu.detail && <span className="row-meta">{edu.detail}</span>}
        </div>
      </div>
      {hasCourses && (
        <div className="courses">
          <div className="courses-meta">
            {total} courses across {edu.courses!.length} terms
          </div>
          {edu.courses!.map((term) => (
            <div key={term.term} className="course-term">
              <div className="course-term-name">~ {term.term}</div>
              <ul className="course-list">
                {term.items.map((c) => (
                  <li key={c.code}>
                    <span className="course-code">{c.code}</span>
                    <span className="course-title">{c.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── theme toggle ─────────────────────────────────────── */
type ThemeMode = "auto" | "light" | "dark";
const MODES: ThemeMode[] = ["auto", "light", "dark"];

function readInitialMode(): ThemeMode {
  if (typeof document === "undefined") return "auto";
  const attr = document.documentElement.getAttribute("data-theme-mode");
  return attr === "light" || attr === "dark" ? attr : "auto";
}

function applyTheme(mode: ThemeMode) {
  const sysDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = mode === "auto" ? (sysDark ? "dark" : "light") : mode;
  document.documentElement.setAttribute("data-theme", resolved);
  document.documentElement.setAttribute("data-theme-mode", mode);
}

function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>(readInitialMode);

  useEffect(() => {
    applyTheme(mode);
    try {
      localStorage.setItem("theme", mode);
    } catch {
      /* ignore */
    }
    if (mode !== "auto") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("auto");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [mode]);

  const cycle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next = MODES[(MODES.indexOf(mode) + 1) % MODES.length];
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    document.documentElement.style.setProperty("--reveal-x", `${x}px`);
    document.documentElement.style.setProperty("--reveal-y", `${y}px`);

    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { finished?: Promise<void> };
    };
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (doc.startViewTransition && !reduceMotion) {
      doc.startViewTransition(() => {
        flushSync(() => setMode(next));
      });
    } else {
      setMode(next);
    }
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={cycle}
      aria-label={`theme: ${mode} (click to change)`}
      title="cycle theme"
    >
      <span className="tt-label">theme:</span>
      <span className="tt-value">{mode}</span>
    </button>
  );
}
