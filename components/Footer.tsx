export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '32px 0',
      background: 'var(--bg-secondary)',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16,
      }}>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>
          &copy; {new Date().getFullYear()} Jackson Pacheco. Construído com Next.js & ❤️
        </p>

        <div style={{ display: 'flex', gap: 20 }}>
          {[
            { label: 'GitHub', href: 'https://github.com/jackpa84' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/jackson-pacheco-86901322a/' },
            { label: 'Email', href: 'mailto:jackpa1984@gmail.com' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--text-muted)',
                letterSpacing: '0.1em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
