import { site, experiences, projects, education } from "./content";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function App() {
  return (
    <div className="gradient-mesh min-h-screen">
      <header className="fixed top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-medium tracking-tight text-zinc-100">
            {site.name}
          </a>
          <ul className="hidden items-center gap-8 sm:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-xs font-medium uppercase tracking-widest text-[var(--color-muted)] transition hover:text-zinc-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.resumeUrl}
            className="rounded-full border border-[var(--color-border)] bg-white/5 px-4 py-2 text-xs font-medium text-zinc-200 transition hover:border-cyan-400/40 hover:bg-white/10"
          >
            Resume
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-24 pt-28">
        <section id="about" className="mb-32 scroll-mt-28">
          {(site.title || site.location) && (
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]">
              {site.title}
              {site.title && site.location ? " · " : ""}
              {site.location}
            </p>
          )}
          <h1 className="font-serif text-5xl font-normal leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            {site.name.split(" ").map((w, i) => (
              <span key={i} className={i > 0 ? "italic text-zinc-300" : ""}>
                {i > 0 ? " " : ""}
                {w}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
            {site.tagline}
          </p>
          <p className="mt-4 max-w-none text-base leading-relaxed text-zinc-400">{site.bio}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-cyan-400/90 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300"
            >
              Get in touch
            </a>
            <a
              href={site.resumeUrl}
              className="rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/5"
            >
              Download CV
            </a>
          </div>
        </section>

        <section id="experience" className="mb-32 scroll-mt-28">
          <h2 className="mb-12 font-serif text-3xl italic text-white sm:text-4xl">Experience</h2>
          <ul className="space-y-0">
            {experiences.map((job) => (
              <li
                key={job.id}
                className="group grid gap-4 border-t border-[var(--color-border)] py-10 sm:grid-cols-[auto_1fr] sm:gap-12"
              >
                <span className="font-mono text-xs text-[var(--color-muted)]">{job.id}</span>
                <div>
                  <div className="flex gap-4 sm:gap-5">
                    {job.logo ? (
                      <img
                        src={job.logo}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="mt-0.5 h-11 w-11 shrink-0 rounded-md border border-[var(--color-border)] bg-white object-contain p-1"
                      />
                    ) : null}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                          <p className="text-[var(--color-muted)]">{job.company}</p>
                        </div>
                        <time className="shrink-0 text-sm text-zinc-500">{job.period}</time>
                      </div>
                      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">{job.detail}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="mb-32 scroll-mt-28">
          <h2 className="mb-12 font-serif text-3xl italic text-white sm:text-4xl">Projects</h2>
          <ul className="grid gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <li
                key={p.id}
                className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)]/50 p-6 transition hover:border-cyan-400/20"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <span className="font-mono text-xs text-[var(--color-muted)]">{p.id}</span>
                  <span className="text-xs text-zinc-500">{p.date}</span>
                </div>
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link text-xl font-semibold text-white"
                  >
                    {p.name}
                    <span className="ml-1 inline-block text-cyan-400 transition group-hover/link:translate-x-0.5">
                      →
                    </span>
                  </a>
                ) : (
                  <span className="text-xl font-semibold text-white">{p.name}</span>
                )}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{p.blurb}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="education" className="mb-32 scroll-mt-28">
          <h2 className="mb-12 font-serif text-3xl italic text-white sm:text-4xl">Education</h2>
          <ul>
            {education.map((edu) => (
              <li
                key={edu.id}
                className="grid gap-4 border-t border-[var(--color-border)] py-10 sm:grid-cols-[auto_1fr] sm:gap-12"
              >
                <span className="font-mono text-xs text-[var(--color-muted)]">{edu.id}</span>
                <div className="flex gap-4 sm:gap-5">
                  {edu.logo ? (
                    <img
                      src={edu.logo}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="mt-0.5 h-11 w-11 shrink-0 rounded-md border border-[var(--color-border)] bg-white object-contain p-1"
                    />
                  ) : null}
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-white">{edu.school}</h3>
                    <p className="text-[var(--color-muted)]">{edu.degree}</p>
                    <p className="mt-2 text-sm text-zinc-500">{edu.years}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="contact"
          className="scroll-mt-28 rounded-3xl border border-[var(--color-border)] bg-[var(--color-elevated)]/40 p-10 sm:p-14"
        >
          <h2 className="font-serif text-3xl italic text-white sm:text-4xl">Contact</h2>
          <p className="mt-4 max-w-md text-[var(--color-muted)]">
            Say hi. Open to roles, collabs, coffee chats.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-block text-lg font-medium text-cyan-400 underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            {site.links.github && (
              <a
                href={site.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 transition hover:text-white"
              >
                GitHub
              </a>
            )}
            {site.links.linkedin && (
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 transition hover:text-white"
              >
                LinkedIn
              </a>
            )}
            {site.links.twitter && (
              <a
                href={site.links.twitter}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 transition hover:text-white"
              >
                Twitter
              </a>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--color-border)] py-8 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </div>
  );
}

export default App;
