import ThemeToggle from "./theme-toggle";

const profile = {
  name: "Rajashekar Bommera",
  headline: "Full-Stack Developer",
  summary:
    "I build modern web applications with Next.js, React, Node.js, and AI-powered workflows.",
  location: "India",
  availability: "Available for freelance and full-time roles",
  phone: "8897786308",
  emails: ["shekerbommer123@gmail.com", "shekerbommera1234@gmail.com"],
  github: "https://github.com/sindhuja1996-glitch",
  linkedin: "https://linkedin.com/in/your-linkedin",
  resume: "#",
};

const metrics = [
  { value: "Next.js", label: "Production-first frontend systems" },
  { value: "Node.js", label: "APIs, auth, and backend workflows" },
  { value: "AI Agents", label: "Learning and building useful automations" },
];

const capabilities = [
  "Responsive app interfaces",
  "Dashboard and admin panels",
  "REST API development",
  "Authentication flows",
  "Database-driven products",
  "AI workflow integration",
  "Landing pages with conversion focus",
  "Deployment and production readiness",
];

const experienceCards = [
  {
    title: "Frontend Systems",
    description:
      "Modern interfaces built with React and Next.js, focused on speed, clarity, and polished user experience.",
  },
  {
    title: "Backend Delivery",
    description:
      "Node.js services for APIs, business logic, authentication, and product workflows that need reliable structure.",
  },
  {
    title: "AI Exploration",
    description:
      "Hands-on learning and experimentation with AI agents, prompt workflows, and coding automation.",
  },
];

const projects = [
  {
    type: "Full-Stack Platform",
    title: "Business dashboard and workflow portal",
    description:
      "A production-style admin experience with authentication, structured data views, and a clean operator-friendly interface.",
    tags: ["Next.js", "Node.js", "Dashboard UI"],
    liveUrl: "#",
    repoUrl: "https://github.com/sindhuja1996-glitch/portfolio",
  },
  {
    type: "Product Website",
    title: "Marketing site with strong frontend polish",
    description:
      "A conversion-focused website built for speed, visual credibility, and responsive performance across devices.",
    tags: ["React", "Landing Page", "Responsive Design"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    type: "AI Workflow",
    title: "Agent-assisted productivity experiment",
    description:
      "An early-stage AI project exploring prompt flows, tool orchestration, and practical automation for real tasks.",
    tags: ["AI Agents", "Automation", "LLM Workflows"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

const process = [
  {
    step: "01",
    title: "Plan the product",
    text: "I start by understanding the goal, user flow, and technical shape of the project before writing code.",
  },
  {
    step: "02",
    title: "Build the system",
    text: "I deliver modern frontend and backend features with attention to maintainability, performance, and polish.",
  },
  {
    step: "03",
    title: "Improve with iteration",
    text: "I refine the result with better UX, cleaner structure, and newer AI-assisted workflows where they add value.",
  },
];

const links = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Resume", href: profile.resume },
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a href="#home" className="brand-mark">
          <span className="brand-dot" />
          {profile.name}
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a href="#contact" className="header-cta">
            Hire Me
          </a>
        </div>
      </header>

      <section className="hero reveal" id="home">
        <div className="hero-copy">
          <span className="eyebrow">{profile.headline}</span>
          <h1>
            Building modern web products with strong frontend craft, reliable
            backend systems, and a growing focus on AI.
          </h1>
          <p className="hero-text">
            {profile.summary} I focus on creating work that feels professional,
            performs well, and is ready for real clients, teams, and users.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              Explore My Work
            </a>
            <a href="#contact" className="button button-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <span className="meta-label">Based In</span>
              <strong>{profile.location}</strong>
            </div>
            <div>
              <span className="meta-label">Status</span>
              <strong>{profile.availability}</strong>
            </div>
          </div>
        </div>

        <aside className="hero-spotlight">
          <div className="spotlight-top">
            <span className="eyebrow">Profile</span>
            <h2>{profile.name}</h2>
            <p>
              Full-stack developer working across frontend, backend, and AI-led
              workflows with a practical product mindset.
            </p>
          </div>

          <div className="spotlight-stack">
            <span>Core Stack</span>
            <ul>
              <li>Next.js</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>JavaScript / TypeScript</li>
              <li>REST APIs</li>
              <li>AI Agent Workflows</li>
            </ul>
          </div>

          <div className="social-strip">
            {links.map((item) => (
              <a key={item.label} href={item.href} className="social-link">
                {item.label}
              </a>
            ))}
          </div>
        </aside>
      </section>

      <section className="metrics-row reveal">
        {metrics.map((item) => (
          <article key={item.label} className="metric-card">
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className="about-layout reveal" id="about">
        <div className="section-heading">
          <span className="eyebrow">About</span>
          <h2>A developer focused on practical products and professional execution.</h2>
        </div>

        <div className="about-content">
          <article className="about-card about-card-large">
            <p>
              I work across the full stack, from frontend UI implementation to
              backend logic and API development. My main strengths are in
              Next.js, React, and Node.js, and I&apos;m also investing time in AI
              agents and workflow automation.
            </p>
            <p>
              The goal of my work is simple: build software that looks clean,
              solves real problems, and feels ready for the real world rather
              than just a demo.
            </p>
          </article>

          <div className="experience-grid">
            {experienceCards.map((item) => (
              <article key={item.title} className="about-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-section reveal" id="skills">
        <div className="section-heading section-heading-wide">
          <span className="eyebrow">Capabilities</span>
          <h2>What I can contribute to product teams, founders, and clients.</h2>
        </div>

        <div className="skills-surface">
          {capabilities.map((item) => (
            <span key={item} className="skill-pill">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="projects-section reveal" id="projects">
        <div className="section-heading section-heading-wide">
          <span className="eyebrow">Featured Projects</span>
          <h2>Work areas that represent the kind of products I want to build.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <span className="project-type">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-actions">
                <a href={project.liveUrl} className="project-link">
                  Live Demo
                </a>
                <a href={project.repoUrl} className="project-link">
                  Source Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section reveal">
        <div className="section-heading section-heading-wide">
          <span className="eyebrow">Process</span>
          <h2>How I approach product work from idea to polished delivery.</h2>
        </div>

        <div className="process-grid">
          {process.map((item) => (
            <article key={item.step} className="process-card">
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section reveal" id="contact">
        <div className="contact-copy">
          <span className="eyebrow">Contact</span>
          <h2>Let&apos;s build something clean, useful, and genuinely professional.</h2>
          <p>
            I&apos;m open to freelance work, junior-to-mid full-stack roles, and
            opportunities where I can keep growing in modern web development
            and AI-driven product building.
          </p>
          <div className="contact-cta-row">
            <a href={`tel:${profile.phone}`} className="button button-primary">
              Call Me
            </a>
            <a
              href={`mailto:${profile.emails[0]}`}
              className="button button-secondary"
            >
              Send Email
            </a>
          </div>
        </div>

        <div className="contact-panel">
          <div className="contact-list">
            <a href={`tel:${profile.phone}`} className="contact-link">
              <span className="contact-label">Phone</span>
              <strong>{profile.phone}</strong>
            </a>
            {profile.emails.map((email) => (
              <a key={email} href={`mailto:${email}`} className="contact-link">
                <span className="contact-label">Email</span>
                <strong>{email}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer reveal">
        <div>
          <strong>{profile.name}</strong>
          <p>Full-Stack Developer building polished web and AI-powered products.</p>
        </div>
        <div className="footer-links">
          {links.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
