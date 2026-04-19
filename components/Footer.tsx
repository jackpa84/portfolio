export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '32px 0',
      background: 'var(--bg-secondary)',
    }} className="footer">
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16,
      }}>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }} className="footer-copyright">
          &copy; {new Date().getFullYear()} Jackson Pacheco. Construído com Next.js & ❤️
        </p>

        <div style={{ display: 'flex', gap: 20 }} className="footer-links">
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

      <style>{`
        @media (max-width: 768px) {
          .footer {
            padding: 24px 0;
          }
          .footer-links { gap: 16px !important; }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 20px 0;
          }
          .footer-copyright {
            font-size: 10px !important;
            order: 2;
            flex-basis: 100%;
          }
          .footer-links {
            order: 1;
            flex-basis: 100%;
            justify-content: center;
            gap: 12px !important;
          }
          .footer-links a {
            font-size: 10px !important;
          }
        }
      `}</style>
    </footer>
  )
}
