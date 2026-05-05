import { Link } from 'react-router-dom'

function HomePage() {
  const services = [
    {
      title: 'Responsive Frontend Delivery',
      detail: 'Building scalable interfaces that stay clean across devices, pages, and changing client requirements.',
    },
    {
      title: 'API & Product Integration',
      detail: 'Connecting frontend flows with backend services, structured data, and product logic without losing usability.',
    },
    {
      title: 'Cross-Functional Execution',
      detail: 'Working closely with clients, teams, and stakeholders to keep scope clear and delivery dependable.',
    },
  ]
  const heroSignals = [
    { label: 'Current Role', value: 'Frontend Developer at TxLabz' },
    { label: 'Primary Stack', value: 'React, Next.js Developer' },
    { label: 'Availability', value: 'Freelance and contract friendly' },
  ]
  const focusAreas = [
    'Responsive product interfaces',
    'API-connected frontend flows',
    'Clear client communication',
  ]
  const experienceItems = [
    {
      company: 'TxLabz',
      role: 'Frontend Developer',
      period: 'Oct 2024 - Present',
      detail: 'Service-based delivery across multiple client products, responsive interfaces, and API-connected flows.',
    },
    {
      company: 'Freelance (Upwork)',
      role: 'Frontend Developer',
      period: 'Dec 2023 - Oct 2024',
      detail: 'Handled short-term and long-term builds with direct client communication and full frontend ownership.',
    },
    {
      company: 'Connect Solution',
      role: 'Frontend Developer',
      period: 'Dec 2022 - Sept 2023',
      detail: 'Worked on SmartBook, improving accounting workflows, UI usability, and transaction-related features.',
    },
  ]

  return (
    <>
      <section className="hero section" id="home">
        <p className="eyebrow reveal">Frontend Developer • Lahore, Pakistan</p>
        <h1 className="name-title reveal">Ammara Mehmood</h1>
        <h2 className="reveal delay-1 hero-subtitle">
          Frontend developer building responsive, scalable, and user-friendly web applications.
        </h2>
        <p className="hero-copy reveal delay-2">
          With 3.8+ years of experience across product teams, freelance delivery, and service-based
          projects, I focus on interfaces that are polished in the UI and reliable in real-world
          delivery.
        </p>
        <div className="hero-actions reveal delay-3">
          <Link to="/projects" className="btn btn-primary">View Projects</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
        </div>
        <div className="hero-presence reveal delay-3">
          {heroSignals.map((signal, index) => (
            <article
              className="signal-card"
              style={{ transitionDelay: `${0.14 + index * 0.08}s` }}
              key={signal.label}
            >
              <small>{signal.label}</small>
              <strong>{signal.value}</strong>
            </article>
          ))}
        </div>
        <div className="hero-focus reveal">
          <span className="hero-focus-label">Current Focus</span>
          <div className="hero-focus-list">
            {focusAreas.map((item, index) => (
              <span key={item} style={{ transitionDelay: `${0.2 + index * 0.06}s` }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-head reveal">
          <h2>Services</h2>
          <p>What I bring to client work, product teams, and fast-moving frontend projects.</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article
              className="service-card reveal"
              style={{ transitionDelay: `${index * 0.1 + 0.1}s` }}
              key={service.title}
            >
              <h3>{service.title}</h3>
              <p>{service.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-snapshot">
        <div className="section-head reveal">
          <h2>Experience Snapshot</h2>
          <p>Recent frontend roles with product delivery, client collaboration, and hands-on implementation.</p>
        </div>
        <div className="experience-list">
          {experienceItems.map((item, index) => (
            <article
              className="reveal experience-card"
              style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              key={`${item.company}-${item.period}`}
            >
              <div className="experience-dot" aria-hidden="true" />
              <div className="experience-copy">
                <div className="experience-topline">
                  <strong>{item.company}</strong>
                  <span>{item.period}</span>
                </div>
                <h3>{item.role}</h3>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
