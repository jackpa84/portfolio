const contactLinks = [
  {
    label: 'Email',
    value: 'jackpa1984@gmail.com',
    href: 'mailto:jackpa1984@gmail.com',
    icon: '✉',
  },
  {
    label: 'WhatsApp',
    value: '(41) 99251-1020',
    href: 'https://wa.me/5541992511020',
    icon: '◈',
  },
  {
    label: 'LinkedIn',
    value: 'jackson-pacheco-86901322a',
    href: 'https://linkedin.com/in/jackson-pacheco-86901322a/',
    icon: '⊞',
  },
  {
    label: 'GitHub',
    value: 'github.com/jackpa84',
    href: 'https://github.com/jackpa84',
    icon: '◉',
  },
]

export default function Contact() {
  return (
    <section id="contato" className="section">
      <div className="container">
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div className="section-label" style={{ textAlign: 'center' }}>// vamos trabalhar juntos</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Tem um projeto em mente?
          </h2>
          <div className="section-line" style={{ margin: '0 auto 40px' }} />

          <p style={{
            fontSize: 17,
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            marginBottom: 52,
          }}>
            Estou disponível para projetos freelance, consultorias e oportunidades CLT/PJ.
            Se você tem um problema complexo para resolver ou quer escalar seu produto, vamos conversar.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 64 }}>
            <a href="https://wa.me/5541992511020" target="_blank" rel="noopener noreferrer" className="btn-outline">
              WhatsApp
            </a>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
          }}>
            {contactLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 24px' }}>
                  <span style={{ fontSize: 20, color: 'var(--accent)' }}>{link.icon}</span>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: 3,
                    }}>
                      {link.label}
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                      {link.value}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #contato .container > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
