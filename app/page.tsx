import ThemeToggle from "./theme-toggle";

const profile = {
  name: "Rajashekar Bommera",
  email: "your-email@example.com",
  headline: "Full-Stack Developer",
  summary:
    "I build modern web applications with Next.js, React, Node.js, and AI-powered workflows.",
};

const expertise = [
  "Next.js application architecture",
  "React interfaces with strong UX thinking",
  "Node.js APIs and backend systems",
  "Authentication, dashboards, and admin panels",
  "AI agent workflows and automation",
  "Deployment-ready full-stack products",
];

const stats = [
  { value: "Full Stack", label: "Frontend to backend delivery" },
  { value: "AI Ready", label: "Learning and building agent systems" },
  { value: "Modern Web", label: "Next.js, React, Node.js focus" },
];

const projects = [
  {
    title: "Business Web Platforms",
    description:
      "Responsive websites and web apps built for performance, clarity, and conversion using Next.js and React.",
    tags: ["Next.js", "React", "Responsive UI"],
  },
  {
    title: "Custom Backend Systems",
    description:
      "Structured backend services for APIs, authentication, dashboards, and workflow logic using Node.js.",
    tags: ["Node.js", "REST APIs", "Authentication"],
  },
  {
    title: "AI Agent Experiments",
    description:
      "Practical experiments with AI agents, prompt workflows, and coding assistants to automate useful product tasks.",
    tags: ["AI Agents", "Automation", "LLM Workflows"],
  },
];

const process = [
  {
    step: "01",
    title: "Understand the product",
    text: "I turn requirements into clear product flows, technical scope, and implementation priorities.",
  },
  {
    step: "02",
    title: "Build with modern tools",
    text: "I use Next.js, React, and Node.js to create fast, maintainable, production-friendly applications.",
  },
  {
    step: "03",
    title: "Improve with AI",
    text: "I'm actively applying AI-assisted development and agent-based workflows to ship smarter systems.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a href="#home" className="brand-mark">
          {profile.name}
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <ThemeToggle />
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <span className="eyebrow">{profile.headline}</span>
          <p className="intro-name">{profile.name}</p>
          <h1>
            I build professional web products with <em>Next.js</em>,{" "}
            <em>React</em>, <em>Node.js</em>, and a growing focus on{" "}
            <em>AI agents</em>.
          </h1>
          <p className="hero-text">
            {profile.summary} My work is focused on building products that look
            sharp, feel reliable, and solve real business problems.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              View Projects
            </a>
            <a href="#contact" className="button button-secondary">
              Let&apos;s Work Together
            </a>
          </div>
        </div>

        <aside className="hero-card">
          <p className="card-label">Core Stack</p>
          <ul>
            <li>Next.js</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>JavaScript / TypeScript</li>
            <li>REST APIs</li>
            <li>AI Agent Workflows</li>
          </ul>
        </aside>
      </section>

      <section className="stats-grid">
        {stats.map((item) => (
          <article key={item.label} className="stat-card">
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className="section-grid" id="about">
        <div className="section-heading">
          <span className="eyebrow">About Me</span>
          <h2>Development grounded in product thinking.</h2>
        </div>
        <div className="section-panel">
          <p>
            I work across the full stack, from clean UI implementation to API
            design and backend logic. My main strengths are in Next.js, React,
            and Node.js, and recently I have started learning and building AI
            agents to expand what software can do.
          </p>
          <p>
            I enjoy creating systems that are not only functional, but also
            professional in presentation, easy to maintain, and aligned with
            business goals.
          </p>
        </div>
      </section>

      <section className="section-grid" id="skills">
        <div className="section-heading">
          <span className="eyebrow">Capabilities</span>
          <h2>What I can contribute to a team or client project.</h2>
        </div>
        <div className="chips-panel">
          {expertise.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading section-heading-wide">
          <span className="eyebrow">Selected Work</span>
          <h2>Portfolio-ready project categories that reflect my experience.</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="section-heading section-heading-wide">
          <span className="eyebrow">Workflow</span>
          <h2>A practical process for shipping polished digital products.</h2>
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

      <section className="contact-section" id="contact">
        <div>
          <span className="eyebrow">Contact</span>
          <h2>Open to freelance, full-time, and product-focused opportunities.</h2>
        </div>
        <div className="contact-panel">
          <p>
            If you want a developer who can work across frontend, backend, and
            modern AI workflows, this portfolio is a strong starting point.
          </p>
          <div className="contact-list">
            <a href="tel:8897786308" className="contact-link">
              8897786308
            </a>
            <a
              href="mailto:shekerbommer123@gmail.com"
              className="contact-link"
            >
              shekerbommer123@gmail.com
            </a>
            <a
              href="mailto:shekerbommera1234@gmail.com"
              className="contact-link"
            >
              shekerbommera1234@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
