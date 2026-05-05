function AboutPage() {
  const timeline = [
    {
      company: 'TxLabz',
      role: 'FrontEnd Developer',
      period: 'Oct 2024 - Present',
      detail:
        'Working across multiple client projects, building responsive interfaces, backend-connected flows, and API-driven product features.',
    },
    {
      company: 'Freelance (Upwork)',
      role: 'Frontend Developer',
      period: 'Dec 2023 - Oct 2024',
      detail:
        'Delivered short-term and long-term web applications, handled the frontend lifecycle from design to deployment, and collaborated directly with international clients.',
    },
    {
      company: 'Connect Solution',
      role: 'Frontend Developer',
      period: 'Dec 2022 - Sept 2023',
      detail:
        'Built features for SmartBook, an accounting and financial management system, with a strong focus on workflows, transactions, invoices, and usability fixes.',
    },
    {
      company: 'Codility Solution',
      role: 'Junior Frontend Developer',
      period: 'Dec 2021 - Nov 2022',
      detail:
        'Started as an intern and grew into a full-time role while sharpening component architecture, debugging, and professional frontend delivery practices.',
    },
  ]

  const projectHighlights = [
    {
      title: 'Shortimize',
      summary:
        'Built a platform for extracting and analyzing YouTube video insights including views, engagement, and metadata.',
    },
    {
      title: 'Digital Bridge Music',
      summary:
        'Developed a platform that helps content creators browse and download non-copyright music across multiple platforms.',
    },
  ]

  return (
    <section className="section page">
      <div className="about-panel reveal">
        <div>
          <p className="eyebrow">About Me</p>
          <h1>Frontend experience shaped by real delivery.</h1>
          <p>
            I’m a frontend developer with 3.8+ years of experience building responsive, scalable,
            and user-friendly web applications. My background includes product companies,
            freelance delivery, and service-based projects where communication and reliability
            matter just as much as the interface itself.
          </p>
        </div>
        <ul className="stats">
          <li>
            <span>3.8+</span>
            Years of frontend development experience
          </li>
          <li>
            <span>4</span>
            Roles across product, freelance, and service environments
          </li>
          <li>
            <span>API</span>
            Frontend work paired with backend and integration needs
          </li>
          <li>
            <span>LHR</span>
            Based in Lahore with remote collaboration experience
          </li>
        </ul>
      </div>

      <section className="about-section">
        <div className="section-head reveal">
          <h2>Career Timeline</h2>
          <p>Progression from junior frontend work into client-facing, scalable product delivery.</p>
        </div>
        <div className="timeline-list">
          {timeline.map((item, index) => (
            <article
              className="timeline-card reveal"
              style={{ transitionDelay: `${0.08 + index * 0.08}s` }}
              key={`${item.company}-${item.period}`}
            >
              <div className="timeline-meta">
                <strong>{item.company}</strong>
                <span>{item.period}</span>
              </div>
              <h3>{item.role}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section">
        <div className="section-head reveal">
          <h2>Highlighted Resume Projects</h2>
          <p>Selected work explicitly called out in the CV.</p>
        </div>
        <div className="service-grid">
          {projectHighlights.map((project, index) => (
            <article
              className="service-card reveal"
              style={{ transitionDelay: `${0.12 + index * 0.08}s` }}
              key={project.title}
            >
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default AboutPage
