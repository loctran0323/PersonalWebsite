import type { JSX } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  site,
  experiences,
  projects,
  education,
  skillGroups,
  type Experience,
} from "./content";

const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v));

const sections = [
  { id: "about",    label: "About",      eyebrow: "prologue" },
  { id: "notebook", label: "Experience", eyebrow: "the notebook" },
  { id: "studio",   label: "Projects",   eyebrow: "the corkboard" },
  { id: "shelf",    label: "Education",  eyebrow: "the bookshelf" },
  { id: "letter",   label: "Contact",    eyebrow: "a letter" },
];

// ─── Reveal helper ─────────────────────────────────────────
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({
  as: Tag = "div",
  className = "",
  stagger = false,
  children,
  ...rest
}: {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  stagger?: boolean;
  children: React.ReactNode;
  [k: string]: unknown;
}) {
  const ref = useReveal<HTMLElement>();
  const cls = `${stagger ? "reveal-stagger" : "reveal"} ${className}`.trim();
  // @ts-expect-error - dynamic tag
  return <Tag ref={ref} className={cls} {...rest}>{children}</Tag>;
}

// ─── Scroll FX: per-section scale + depth + motion blur ──
function useScrollFx() {
  useEffect(() => {
    let lastY = window.scrollY;
    let lastT = performance.now();
    let blurTimer: number | null = null;
    let ticking = false;

    function update() {
      const els = document.querySelectorAll<HTMLElement>(".fx-section");
      const vh = window.innerHeight;
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = (center - vh / 2) / vh;
        const absDist = Math.min(Math.abs(dist), 1.4);
        const scale = clamp(1 - absDist * 0.15, 0.82, 1);
        const tz = -absDist * 60;
        const op = clamp(1 - absDist * 0.55, 0.4, 1);
        el.style.setProperty("--fx-scale", scale.toString());
        el.style.setProperty("--fx-tz", `${tz}px`);
        el.style.setProperty("--fx-op", op.toString());
      });
      ticking = false;
    }

    function onScroll() {
      const now = performance.now();
      const dt = Math.max(now - lastT, 1);
      const dy = window.scrollY - lastY;
      const v = Math.abs(dy / dt);
      const blur = clamp(v * 1.2 - 0.4, 0, 4);
      document.documentElement.style.setProperty("--scroll-blur", `${blur}px`);
      lastY = window.scrollY;
      lastT = now;
      if (blurTimer) window.clearTimeout(blurTimer);
      blurTimer = window.setTimeout(() => {
        document.documentElement.style.setProperty("--scroll-blur", "0px");
      }, 90);
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (blurTimer) window.clearTimeout(blurTimer);
    };
  }, []);
}

// ─── Bedroom (layered fixed background) ───────────────────
function Bedroom() {
  return (
    <div className="bedroom" aria-hidden>
      <div className="bd-wall" />
      <div className="bd-window">
        <div className="bd-window-glow" />
        <div className="bd-window-frame" />
      </div>
      <div className="bd-shelf" />
      <div className="bd-frame" />
      <div className="bd-desk" />
      <div className="bd-lamp" />
      <div className="bd-vignette" />
    </div>
  );
}

// ─── Active section observer ───────────────────────────────
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(id);
          }),
        { rootMargin: "-40% 0px -55% 0px" },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);
  return active;
}

// ─── Keyboard (rendered keys, not just dots) ──────────────
function Keyboard() {
  return (
    <div className="kb" aria-hidden>
      {/* Function row */}
      <div className="kb-row kb-row-fn">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className="kb-key" />
        ))}
      </div>
      {/* Number row */}
      <div className="kb-row">
        {Array.from({ length: 13 }).map((_, i) => (
          <span key={i} className="kb-key" />
        ))}
        <span className="kb-key kb-key-1-5" />
      </div>
      {/* Q row */}
      <div className="kb-row">
        <span className="kb-key kb-key-1-25" />
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="kb-key" />
        ))}
        <span className="kb-key kb-key-1-25" />
      </div>
      {/* A row */}
      <div className="kb-row">
        <span className="kb-key kb-key-1-5" />
        {Array.from({ length: 11 }).map((_, i) => (
          <span key={i} className="kb-key" />
        ))}
        <span className="kb-key kb-key-1-75" />
      </div>
      {/* Z row */}
      <div className="kb-row">
        <span className="kb-key kb-key-1-75" />
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="kb-key" />
        ))}
        <span className="kb-key kb-key-1-75" />
      </div>
      {/* Bottom row */}
      <div className="kb-row">
        <span className="kb-key kb-key-1-25" />
        <span className="kb-key" />
        <span className="kb-key kb-key-1-25" />
        <span className="kb-key kb-key-space" />
        <span className="kb-key kb-key-1-25" />
        <span className="kb-key" />
        <span className="kb-key kb-key-1-25" />
      </div>
    </div>
  );
}

// ─── Cinema (laptop intro) ─────────────────────────────────
type Phase = 0 | 1 | 2 | 3 | 4;

function Cinema() {
  const [phase, setPhase] = useState<Phase>(0);
  const [isOpen, setIsOpen] = useState(false);
  const [rx, setRx] = useState(15);
  const [ry, setRy] = useState(0);
  const [typed, setTyped] = useState("");
  const [contentReady, setContentReady] = useState(false);

  const drag = useRef({
    active: false,
    sx: 0,
    sy: 0,
    rx: 15,
    ry: 0,
    moved: false,
  });

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1000);
    const t2 = setTimeout(() => setPhase(2), 2600);
    const t3 = setTimeout(() => {
      setIsOpen(true);
      setPhase(3);
    }, 3200);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (phase !== 3) return;
    const start = setTimeout(() => {
      let i = 0;
      const it = setInterval(() => {
        i++;
        setTyped(site.name.slice(0, i));
        if (i >= site.name.length) {
          clearInterval(it);
          setTimeout(() => {
            setContentReady(true);
            setPhase(4);
          }, 600);
        }
      }, 95);
    }, 2000);
    return () => clearTimeout(start);
  }, [phase]);

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (phase < 4) return;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    drag.current = {
      active: true,
      sx: e.clientX,
      sy: e.clientY,
      rx,
      ry,
      moved: false,
    };
  }
  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.sx;
    const dy = e.clientY - drag.current.sy;
    if (Math.hypot(dx, dy) > 4) drag.current.moved = true;
    setRx(clamp(drag.current.rx - dy * 0.4, -25, 65));
    setRy(clamp(drag.current.ry + dx * 0.4, -55, 55));
  }
  function onPointerUp(e: React.PointerEvent<HTMLDivElement>) {
    if (!drag.current.active) return;
    drag.current.active = false;
    (e.target as Element).releasePointerCapture?.(e.pointerId);
  }
  function toggleLid() {
    if (phase < 4) return;
    if (drag.current.moved) return;
    setIsOpen((o) => !o);
  }
  function resetView() {
    setRx(15);
    setRy(0);
  }

  const stageClass = `cinema-stage ${phase >= 1 ? "zoomed" : ""}`;
  const laptopClass = `laptop ${phase >= 4 ? "interactive" : ""} ${
    drag.current.active ? "dragging" : ""
  }`;
  const laptopStyle = {
    transform: `rotateX(${rx}deg) rotateY(${ry}deg)`,
  };

  return (
    <section id="about" className={stageClass}>
      <div className="laptop-camera">
        <div
          className={laptopClass}
          style={laptopStyle}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <div
            className={`laptop-lid ${isOpen ? "is-open" : ""}`}
            onClick={toggleLid}
          >
            <div className="laptop-screen">
              <div className="terminal">
                <div className="terminal-header">
                  <span className="tdot tdot-r" />
                  <span className="tdot tdot-y" />
                  <span className="tdot tdot-g" />
                  <span className="terminal-title">~/loctran — bash</span>
                </div>
                <div className="terminal-body">
                  <div className="term-line">
                    <span className="prompt">$</span>{" "}
                    <span className="command">whoami</span>
                  </div>
                  <div className="output name">
                    {typed}
                    {phase === 3 && <span className="caret">▍</span>}
                  </div>
                  {contentReady && (
                    <>
                      <div className="term-line fade-up fade-up-1">
                        <span className="prompt">$</span>{" "}
                        <span className="command">role</span>
                      </div>
                      <div className="output fade-up fade-up-2">
                        {site.tagline}
                      </div>
                      <div className="term-line fade-up fade-up-3">
                        <span className="prompt">$</span>{" "}
                        <span className="command">status</span>
                      </div>
                      <div className="output amber fade-up fade-up-4">
                        ● {site.status}
                      </div>
                      <div className="term-line fade-up fade-up-5">
                        <span className="prompt">$</span>{" "}
                        <span className="command">links</span>
                      </div>
                      <div className="output term-links fade-up fade-up-5">
                        {site.links.github && (
                          <a
                            href={site.links.github}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            onPointerDown={(e) => e.stopPropagation()}
                          >
                            github
                          </a>
                        )}
                        {site.links.linkedin && (
                          <a
                            href={site.links.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            onPointerDown={(e) => e.stopPropagation()}
                          >
                            linkedin
                          </a>
                        )}
                        <a
                          href={`mailto:${site.email}`}
                          onClick={(e) => e.stopPropagation()}
                          onPointerDown={(e) => e.stopPropagation()}
                        >
                          email
                        </a>
                        <a
                          href={site.resumeUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          onPointerDown={(e) => e.stopPropagation()}
                        >
                          resume
                        </a>
                      </div>
                      <div className="term-line fade-up fade-up-5">
                        <span className="prompt">$</span>{" "}
                        <span className="command">_</span>
                        <span className="caret">▍</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="laptop-base">
            <Keyboard />
            <div className="laptop-trackpad" />
          </div>
        </div>
      </div>

      <div className={`cinema-hint ${phase >= 4 ? "visible" : ""}`}>
        <span><kbd>drag</kbd> rotate</span>
        <span>·</span>
        <span><kbd>click</kbd> {isOpen ? "close" : "open"} lid</span>
        <span>·</span>
        <button onClick={resetView} className="cinema-reset">reset view</button>
      </div>

      <div className={`scroll-cue ${phase >= 4 ? "visible" : ""}`}>
        <span>SCROLL</span>
        <span className="arrow">↓</span>
      </div>
    </section>
  );
}

function FloatingBrand() {
  return (
    <a href="#about" className="float-brand">
      <span className="brand-name">{site.name}</span>
    </a>
  );
}

function FloatingResume() {
  return (
    <a
      href={site.resumeUrl}
      target="_blank"
      rel="noreferrer"
      className="float-resume"
    >
      Resume <span className="arrow">↗</span>
    </a>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="scroll-progress">
      <span style={{ width: `${progress}%` }} />
    </div>
  );
}

// ─── About section ─────────────────────────────────────────
function About() {
  return (
    <section className="section fx-section">
      <Reveal className="chapter">
        <div className="chapter-meta">
          <span className="chapter-eyebrow">prologue</span>
          <h2 className="chapter-title">A short <em>introduction</em>.</h2>
        </div>
      </Reveal>

      <div className="about-grid">
        <Reveal className="about-lead">
          <p className="lead">
            I'm a sophomore <em>student</em> at Princeton studying <em>Operations Research & Financial Engineering</em>. I spend my time at the intersection of markets, technology, and businesses — building tools, writing about what I find, and collecting reps in trading and M&A.
          </p>
        </Reveal>

        <Reveal as="ul" stagger className="facts-grid">
          {site.facts.map((f) => (
            <li key={f.k} className="fact">
              <div className="fact-k">{f.k}</div>
              <div className="fact-v">{f.v}</div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

// ─── Notebook (Experience) ─────────────────────────────────
function Notebook() {
  const [activeId, setActiveId] = useState<string>(experiences[0].id);
  const active = useMemo(
    () => experiences.find((e) => e.id === activeId) ?? experiences[0],
    [activeId],
  );

  return (
    <section id="notebook" className="section fx-section scroll-mt-16">
      <Reveal className="chapter">
        <div className="chapter-meta">
          <span className="chapter-eyebrow">the notebook · 2021—2026</span>
          <h2 className="chapter-title">Where I've <em>worked</em>.</h2>
        </div>
        <div className="chapter-counter">
          {experiences.length.toString().padStart(2, "0")} entries
        </div>
      </Reveal>

      <Reveal className="notebook">
        <div className="notebook-spine" aria-hidden />

        {/* Left page — index */}
        <div className="page page-left">
          <div className="page-header">
            <span className="page-num">i.</span>
            <span className="page-eyebrow">contents</span>
          </div>
          <ul className="nb-index">
            {experiences.map((e, i) => (
              <li key={e.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(e.id)}
                  className={`nb-index-row ${active.id === e.id ? "is-active" : ""}`}
                >
                  <span className="nb-row-n">{(i + 1).toString().padStart(2, "0")}</span>
                  <span className="nb-row-text">
                    <span className="nb-row-role">{e.role}</span>
                    <span className="nb-row-co">{e.company}</span>
                  </span>
                  <span className="nb-row-period">{e.period}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="page-footer">
            <span className="page-foot-num">— 1 —</span>
          </div>
        </div>

        {/* Right page — flips on selection (key forces re-mount → animation) */}
        <ExperienceDetailPage key={active.id} exp={active} />
      </Reveal>
    </section>
  );
}

function ExperienceDetailPage({ exp }: { exp: Experience }) {
  return (
    <div className="page page-right page-flip">
      <div className="page-header">
        <span className="page-num">{exp.id}.</span>
        <span className="page-eyebrow">{exp.period}</span>
      </div>

      <div className="nb-detail">
        <div className="nb-detail-head">
          {exp.logo && (
            <img src={exp.logo} alt="" className="nb-detail-logo" referrerPolicy="no-referrer" />
          )}
          <div>
            <h3 className="nb-detail-role">{exp.role}</h3>
            <p className="nb-detail-co">
              {exp.company}
              {exp.location ? <span className="nb-detail-loc"> — {exp.location}</span> : null}
            </p>
          </div>
        </div>

        <p className="nb-detail-summary">{exp.detail}</p>

        {exp.details && exp.details.length > 0 && (
          <ul className="nb-detail-bullets">
            {exp.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        )}

        {exp.tags && exp.tags.length > 0 && (
          <div className="nb-detail-tags">
            {exp.tags.map((t) => (
              <span key={t} className="nb-tag">{t}</span>
            ))}
          </div>
        )}
      </div>

      <div className="page-footer">
        <span className="page-foot-num">— 2 —</span>
      </div>
    </div>
  );
}

// ─── Studio (Projects + Skills as polaroids/sticky notes) ──
function Studio() {
  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <section id="studio" className="section fx-section">
      <Reveal className="chapter">
        <div className="chapter-meta">
          <span className="chapter-eyebrow">the corkboard · pinned</span>
          <h2 className="chapter-title">Projects & a <em>toolkit</em>.</h2>
        </div>
      </Reveal>

      <Reveal className="corkboard reveal-stagger" stagger>
        {/* Polaroid projects */}
        {projects.map((p, i) => {
          const rot = i % 2 === 0 ? -2.4 : 1.8;
          const accent = p.accent ?? "amber";
          return (
            <a
              key={p.id}
              href={p.url || "#"}
              target={p.url ? "_blank" : undefined}
              rel={p.url ? "noreferrer" : undefined}
              className={`polaroid pinned accent-${accent}`}
              style={{ "--rot": `${rot}deg` } as React.CSSProperties}
              onMouseMove={onMouseMove}
            >
              <span className="pin" aria-hidden />
              <div className="polaroid-photo">
                <span className="polaroid-tag">{p.id}</span>
                <span className="polaroid-title">{p.name}</span>
                <span className="polaroid-link">
                  {p.url ? "↗ open" : "private"}
                </span>
              </div>
              <div className="polaroid-caption">
                <p className="caption-blurb">{p.blurb}</p>
                <p className="caption-meta">{p.date}</p>
                {p.stack && p.stack.length > 0 && (
                  <p className="caption-stack">{p.stack.join(" · ")}</p>
                )}
              </div>
            </a>
          );
        })}

        {/* Sticky-note skill groups */}
        {skillGroups.map((g, i) => {
          const colors = ["amber", "cream", "sage", "rose"] as const;
          const color = colors[i % colors.length];
          const rot = i % 2 === 0 ? 2 : -1.8;
          return (
            <div
              key={g.title}
              className={`sticky-note pinned color-${color}`}
              style={{ "--rot": `${rot}deg` } as React.CSSProperties}
            >
              <span className="tape" aria-hidden />
              <div className="sticky-title">{g.title}</div>
              <ul className="sticky-list">
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}

// ─── Education (book card) ─────────────────────────────────
function Shelf() {
  return (
    <section id="shelf" className="section fx-section">
      <Reveal className="chapter">
        <div className="chapter-meta">
          <span className="chapter-eyebrow">the bookshelf</span>
          <h2 className="chapter-title">Where I'm <em>learning</em>.</h2>
        </div>
      </Reveal>

      <Reveal as="ul" stagger className="shelf-list">
        {education.map((edu) => (
          <li key={edu.id} className="book-card">
            <div className="book-spine" />
            {edu.logo && (
              <img
                src={edu.logo}
                alt=""
                className="book-logo"
                referrerPolicy="no-referrer"
              />
            )}
            <div className="book-body">
              <div className="book-meta">
                <span>{edu.id}</span>
                <span>·</span>
                <span>{edu.years}</span>
              </div>
              <h3 className="book-title">{edu.school}</h3>
              <p className="book-degree">{edu.degree}</p>
              {edu.detail && <p className="book-detail">{edu.detail}</p>}
            </div>
          </li>
        ))}
      </Reveal>
    </section>
  );
}

// ─── Letter (Contact) ──────────────────────────────────────
function Letter() {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }
  return (
    <section id="letter" className="section fx-section">
      <Reveal className="chapter">
        <div className="chapter-meta">
          <span className="chapter-eyebrow">a letter</span>
          <h2 className="chapter-title">Let's <em>talk</em>.</h2>
        </div>
      </Reveal>

      <Reveal className="envelope">
        <div className="envelope-stamp">
          <span className="stamp-num">USPS</span>
          <span className="stamp-yr">2026</span>
        </div>
        <div className="envelope-body">
          <p className="envelope-greeting">Hi —</p>
          <p className="envelope-text">
            I'm open to roles, collaborations, and coffee chats. The fastest
            way to reach me is by email. I usually reply within a day.
          </p>

          <div className="envelope-sign">
            — Loc
          </div>

          <div className="envelope-actions">
            <a href={`mailto:${site.email}`} className="btn-amber">
              {site.email} <span>→</span>
            </a>
            <button onClick={copy} className="btn-ghost">
              {copied ? "Copied ✓" : "Copy email"}
            </button>
          </div>

          <div className="envelope-links">
            {site.links.github && (
              <a className="link-underline" href={site.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {site.links.linkedin && (
              <a className="link-underline" href={site.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

// ─── App ──────────────────────────────────────────────────
function App() {
  // active section ids tracked by useActiveSection, currently unused since side rail is gone
  void useActiveSection(sections.map((s) => s.id));
  useScrollFx();

  return (
    <>
      <Bedroom />
      <ScrollProgress />
      <FloatingBrand />
      <FloatingResume />

      <Cinema />

      <main className="page-wrap fx-stage">
        <About />
        <Notebook />
        <Studio />
        <Shelf />
        <Letter />
      </main>

      <footer className="site-footer">
        © {new Date().getFullYear()} · {site.name} · Built with React + Tailwind
      </footer>
    </>
  );
}

export default App;
