import { useState } from 'react'

function ProjectsPage() {
  const projects = [
    {
      title: 'Shortimize',
      url: 'https://www.shortimize.com/',
      previewType: 'iframe',
      description:
        'A performance-minded SaaS marketing site with sharp product messaging and a clean, fast onboarding feel.',
      stack: 'Product Marketing, SaaS, Conversion Design',
    },
    {
      title: 'Swoodle',
      url: 'https://swoodle.com.au/',
      previewType: 'iframe',
      description:
        'An Australian web experience with strong visual hierarchy, polished branding, and commerce-friendly structure.',
      stack: 'Brand Site, UX, Responsive Frontend',
    },
    {
      title: 'Paaq',
      url: 'https://paaq.app/',
      previewType: 'iframe',
      description:
        'A focused app landing page built to explain the product clearly and move visitors toward action quickly.',
      stack: 'App Landing Page, UI, Product Storytelling',
    },
    {
      title: 'OpoFinance',
      url: 'https://opofinance.com/',
      previewType: 'image',
      previewImage:
        'https://image.thum.io/get/width/1400/crop/900/noanimate/https://opofinance.com/',
      description:
        'A finance-led experience with dense information architecture, trust signals, and conversion-driven page sections.',
      stack: 'Fintech, Information Design, CRO',
    },
    {
      title: 'LearnUp AI',
      url: 'https://www.learnupai.com/',
      previewType: 'iframe',
      description:
        'An AI-focused learning experience with a modern landing page, clear product framing, and conversion-led content flow.',
      stack: 'AI Product, Education, Marketing Site',
    },
  ]
  const [selectedProject, setSelectedProject] = useState(projects[0])

  return (
    <section className="section page">
      <div className="section-head reveal">
        <h1>Projects</h1>
        <p>Selected live work displayed directly in an embedded browser-style showcase.</p>
      </div>
      <div className="project-showcase reveal">
        <div className="project-preview card">
          <div className="project-preview-bar">
            <span />
            <span />
            <span />
            <a href={selectedProject.url} target="_blank" rel="noreferrer">
              {selectedProject.url}
            </a>
            <strong>{selectedProject.title}</strong>
          </div>
          <div className="project-preview-frame">
            {selectedProject.previewType === 'iframe' ? (
              <>
                <iframe
                  key={selectedProject.url}
                  src={selectedProject.url}
                  title={`${selectedProject.title} preview`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  allowFullScreen
                />
                <div className="project-preview-fallback">
                  <p>
                    If this site blocks iframe embedding in your browser, use the direct link to
                    open it in a new tab.
                  </p>
                  <a
                    className="btn btn-secondary"
                    href={selectedProject.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open {selectedProject.title}
                  </a>
                </div>
              </>
            ) : (
              <a
                className="project-preview-image-link"
                href={selectedProject.url}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="project-preview-image"
                  src={selectedProject.previewImage}
                  alt={`${selectedProject.title} website preview`}
                  loading="lazy"
                />
                <div className="project-preview-note">
                  <p>This site blocks iframe embeds, so this preview uses a live screenshot.</p>
                  <span className="btn btn-secondary">Open {selectedProject.title}</span>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-grid project-grid-full">
        {projects.map((project, index) => (
          <article
            className={`card reveal project-card ${selectedProject.title === project.title ? 'active' : ''}`}
            style={{ transitionDelay: `${index * 0.06 + 0.1}s` }}
            key={project.title}
            onClick={() => setSelectedProject(project)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <small>{project.stack}</small>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage
