function ContactPage() {
  const contactItems = [
    {
      label: 'Email',
      value: 'ammaramehmood41@gmail.com',
      href: 'mailto:ammaramehmood41@gmail.com',
    },
    {
      label: 'Phone',
      value: '+92 309 1685704',
      href: 'tel:+923091685704',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/ammara-mehmood-696232218',
      href: 'https://www.linkedin.com/in/ammara-mehmood-696232218/',
    },
    {
      label: 'Location',
      value: 'Lahore, Pakistan',
    },
  ]

  return (
    <section className="section page contact reveal" id="contact">
      <p className="eyebrow">Contact</p>
      <h1>Open to freelance, contract, and long-term frontend roles.</h1>
      <p>
        If you need a frontend developer who can handle responsive interfaces, client
        communication, and delivery across real product requirements, I’d be happy to connect.
      </p>

      <div className="hero-actions">
        <a className="btn btn-primary" href="mailto:ammaramehmood41@gmail.com">
          ammaramehmood41@gmail.com
        </a>
        <a className="btn btn-secondary" href="https://www.linkedin.com/in/ammara-mehmood-696232218/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>

      <div className="contact-grid">
        {contactItems.map((item, index) => (
          <article
            className="card reveal contact-card"
            style={{ transitionDelay: `${0.08 + index * 0.08}s` }}
            key={item.label}
          >
            <small>{item.label}</small>
            {item.href ? (
              <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                {item.value}
              </a>
            ) : (
              <strong>{item.value}</strong>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default ContactPage
