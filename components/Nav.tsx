'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'sobre', href: '#sobre' },
  { label: 'skills', href: '#skills' },
  { label: 'experiência', href: '#experiencia' },
  { label: 'projetos', href: '#projetos' },
  { label: 'contato', href: '#contato' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(8, 11, 16, 0.75)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0, 229, 255, 0.08)' : 'none',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>
        {/* Logo / monogram */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            fontSize: 14,
            color: 'var(--bg-primary)',
            boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)',
          }}>
            JP
          </div>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            color: 'var(--text-secondary)',
            letterSpacing: '0.08em',
          }} className="logo-text">
            jackson<span style={{ color: 'var(--accent)' }}>_pacheco</span>
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 34, alignItems: 'center' }} className="desktop-nav">
          {links.map((link, i) => (
            <a key={link.href} href={link.href} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              letterSpacing: '0.1em',
              color: 'var(--text-secondary)',
              transition: 'color 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <span style={{ color: 'var(--accent)', opacity: 0.5 }}>0{i+1}.</span>
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--accent)',
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? '[ fechar ]' : '[ menu ]'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(8, 11, 16, 0.98)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid var(--border)',
          padding: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}>
          {links.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-secondary)' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .logo-text { display: none; }
        }
      `}</style>
    </nav>
  )
}
