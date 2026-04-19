'use client'

import { useEffect, useState } from 'react'

const roles = [
  'Full Stack Developer',
  'Cloud Engineer',
  'AI & Python Dev',
  'Systems Architect',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: NodeJS.Timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIndex((roleIndex + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 80,
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '100vw',
    }}>
      {/* Decorative accent orbs */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '-15%',
        width: 620,
        height: 620,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        filter: 'blur(20px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '5%',
        left: '-10%',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 128, 255, 0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        filter: 'blur(30px)',
      }} />

      <div className="container" style={{ width: '100%' }}>
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: 60,
          alignItems: 'center',
          width: '100%',
        }}>
          {/* LEFT: text */}
          <div style={{ maxWidth: 680, width: '100%' }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(11px, 2.5vw, 13px)',
              color: 'var(--accent)',
              marginBottom: 24,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '6px 14px',
              borderRadius: 999,
              border: '1px solid rgba(0, 229, 255, 0.25)',
              background: 'rgba(0, 229, 255, 0.05)',
              backdropFilter: 'blur(10px)',
            }}>
              <span style={{
                display: 'inline-block',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 10px var(--accent)',
                animation: 'pulse 2s infinite',
              }} />
              Disponível para novos projetos
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 6vw, 82px)',
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: 6,
              color: 'var(--text-primary)',
              letterSpacing: '-0.03em',
            }}>
              Jackson
            </h1>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 6vw, 82px)',
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: 28,
              background: 'linear-gradient(120deg, #00e5ff 0%, #00b8d9 40%, #0080ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.03em',
              filter: 'drop-shadow(0 0 30px rgba(0, 229, 255, 0.2))',
            }}>
              Pacheco
            </h1>

            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(16px, 2.5vw, 22px)',
              color: 'var(--text-secondary)',
              marginBottom: 28,
              height: 32,
              display: 'flex',
              alignItems: 'center',
            }}>
              <span style={{ color: 'var(--accent)', marginRight: 8 }}>&gt;</span>
              <span>{displayed}</span>
              <span style={{
                display: 'inline-block',
                width: 2,
                height: '1.1em',
                background: 'var(--accent)',
                marginLeft: 3,
                animation: 'blink 1s step-end infinite',
              }} />
            </div>

            <p style={{
              fontSize: 'clamp(14px, 3vw, 17px)',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              maxWidth: 580,
              marginBottom: 44,
            }}>
              16+ anos construindo sistemas robustos, APIs escaláveis e interfaces modernas.
              Especializado em <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Python, React, Next.js</span> e
              infraestrutura <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>AWS/Docker/GCP</span>.
              Atualmente explorando o espaço de <span style={{ color: 'var(--accent)', fontWeight: 500 }}>IA aplicada</span>.
            </p>

          </div>

          {/* RIGHT: photo */}
          <div className="hero-photo-wrap" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}>
            {/* Outer dashed rotating ring */}
            <div className="rotating-ring" style={{
              position: 'absolute',
              width: 470,
              height: 470,
              borderRadius: '50%',
              border: '1px dashed rgba(0, 229, 255, 0.22)',
              animation: 'spin 30s linear infinite',
            }} />

            {/* Middle counter-rotating solid ring with gaps */}
            <div className="rotating-ring-2" style={{
              position: 'absolute',
              width: 420,
              height: 420,
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, transparent 0deg, rgba(0, 229, 255, 0.35) 20deg, transparent 70deg, transparent 180deg, rgba(0, 229, 255, 0.35) 200deg, transparent 250deg, transparent 360deg)',
              WebkitMask: 'radial-gradient(circle, transparent 207px, #000 208px, #000 210px, transparent 211px)',
              mask: 'radial-gradient(circle, transparent 207px, #000 208px, #000 210px, transparent 211px)',
              animation: 'spin 20s linear infinite reverse',
              filter: 'drop-shadow(0 0 4px rgba(0, 229, 255, 0.5))',
            }} />

            {/* Orbiting data dots */}
            <div className="orbit-dots" style={{
              position: 'absolute',
              width: 470,
              height: 470,
              animation: 'spin 18s linear infinite',
              pointerEvents: 'none',
            }}>
              {[0, 72, 144, 216, 288].map((deg, i) => (
                <span key={i} style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: 6,
                  height: 6,
                  marginTop: -3,
                  marginLeft: -3,
                  borderRadius: '50%',
                  background: i === 0 ? 'var(--accent)' : 'rgba(0, 229, 255, 0.5)',
                  boxShadow: '0 0 10px var(--accent), 0 0 20px rgba(0, 229, 255, 0.6)',
                  transform: `rotate(${deg}deg) translateX(235px)`,
                }} />
              ))}
            </div>

            {/* Outer glow */}
            <div style={{
              position: 'absolute',
              width: 380,
              height: 380,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 229, 255, 0.18) 0%, transparent 70%)',
              filter: 'blur(30px)',
              animation: 'breathe 4s ease-in-out infinite',
            }} />

            {/* Holographic animated border */}
            <div className="holo-border" style={{
              position: 'absolute',
              width: 360,
              height: 360,
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #00e5ff, #0080ff, #00e5ff, #00b8d9, #00e5ff)',
              animation: 'spin 6s linear infinite',
              filter: 'blur(1px)',
              opacity: 0.9,
            }} />

            {/* Photo frame */}
            <div className="photo-frame" style={{
              position: 'relative',
              width: 340,
              height: 340,
              borderRadius: '50%',
              padding: 3,
              background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.6) 0%, rgba(0, 128, 255, 0.2) 50%, rgba(0, 229, 255, 0.05) 100%)',
              boxShadow: '0 0 80px rgba(0, 229, 255, 0.35), inset 0 0 20px rgba(0, 229, 255, 0.15)',
            }}>
              <div className="photo-inner" style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                background: 'var(--bg-card)',
                position: 'relative',
              }}>
                {/* RGB split layers for glitch effect (hover) */}
                <img
                  className="photo-glitch-r"
                  src="/profile.png"
                  alt=""
                  aria-hidden="true"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/profile.svg' }}
                />
                <img
                  className="photo-glitch-b"
                  src="/profile.png"
                  alt=""
                  aria-hidden="true"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/profile.svg' }}
                />
                <img
                  className="photo-main"
                  src="/profile.png"
                  alt="Jackson Pacheco"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/profile.svg' }}
                />

                {/* Duotone cyan tint gradient for cohesion */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.18) 0%, transparent 45%, rgba(0, 80, 180, 0.2) 100%)',
                  mixBlendMode: 'color',
                  pointerEvents: 'none',
                }} />

                {/* Top-right cyan highlight */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at 70% 15%, rgba(0, 229, 255, 0.22) 0%, transparent 50%)',
                  pointerEvents: 'none',
                  mixBlendMode: 'screen',
                }} />

                {/* Scan lines texture */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 3px)',
                  pointerEvents: 'none',
                  mixBlendMode: 'overlay',
                }} />

                {/* Moving horizontal scanner beam */}
                <div className="scanner-beam" style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: 60,
                  background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 229, 255, 0.08) 40%, rgba(0, 229, 255, 0.5) 50%, rgba(0, 229, 255, 0.08) 60%, transparent 100%)',
                  pointerEvents: 'none',
                  mixBlendMode: 'screen',
                  animation: 'scanMove 3.5s ease-in-out infinite',
                  filter: 'blur(0.5px)',
                }} />

                {/* Vignette for depth */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle, transparent 55%, rgba(0, 0, 0, 0.35) 100%)',
                  pointerEvents: 'none',
                }} />
              </div>

              {/* HUD corner brackets */}
              {[
                { top: -6, left: -6, rotate: 0 },
                { top: -6, right: -6, rotate: 90 },
                { bottom: -6, right: -6, rotate: 180 },
                { bottom: -6, left: -6, rotate: 270 },
              ].map((pos, i) => {
                const { rotate, ...posStyle } = pos;
                return (
                  <div key={i} className="hud-corner" style={{
                    position: 'absolute',
                    width: 26,
                    height: 26,
                    ...posStyle,
                    transform: `rotate(${rotate}deg)`,
                    borderTop: '2px solid var(--accent)',
                    borderLeft: '2px solid var(--accent)',
                    filter: 'drop-shadow(0 0 6px rgba(0, 229, 255, 0.7))',
                  }} />
                );
              })}

              {/* Tick marks around frame */}
              <svg
                className="tick-marks"
                viewBox="0 0 360 360"
                style={{
                  position: 'absolute',
                  top: -10,
                  left: -10,
                  width: 360,
                  height: 360,
                  pointerEvents: 'none',
                  animation: 'spin 40s linear infinite',
                }}
              >
                {Array.from({ length: 60 }).map((_, i) => {
                  const angle = (i * 6) * (Math.PI / 180)
                  const outer = 178
                  const inner = i % 5 === 0 ? 168 : 173
                  const cx = 180
                  const cy = 180
                  return (
                    <line
                      key={i}
                      x1={cx + Math.cos(angle) * inner}
                      y1={cy + Math.sin(angle) * inner}
                      x2={cx + Math.cos(angle) * outer}
                      y2={cy + Math.sin(angle) * outer}
                      stroke="rgba(0, 229, 255, 0.35)"
                      strokeWidth={i % 5 === 0 ? 1.5 : 0.8}
                    />
                  )
                })}
              </svg>
            </div>

            {/* Status chip below photo */}
            <div className="status-chip" style={{
              position: 'absolute',
              bottom: -12,
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(8, 11, 16, 0.92)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(0, 229, 255, 0.35)',
              borderRadius: 999,
              padding: '6px 14px',
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.15em',
              color: 'var(--accent)',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              boxShadow: '0 4px 20px rgba(0, 229, 255, 0.25)',
              zIndex: 3,
            }}>
              <span style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 8px var(--accent)',
                animation: 'pulse 1.5s infinite',
              }} />
              ID_JP · ONLINE
            </div>

            {/* Floating badges */}
            <div className="floating-badge" style={{
              position: 'absolute',
              top: 20,
              right: -10,
              background: 'rgba(15, 21, 32, 0.88)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(0, 229, 255, 0.3)',
              borderRadius: 10,
              padding: '10px 14px',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.05em',
              animation: 'floatY 4s ease-in-out infinite',
              boxShadow: '0 6px 24px rgba(0, 229, 255, 0.12)',
              zIndex: 2,
            }}>
              <div style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: 2 }}>{'{ AI }'}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: 10 }}>LangChain</div>
            </div>
            <div className="floating-badge" style={{
              position: 'absolute',
              bottom: 40,
              left: -20,
              background: 'rgba(15, 21, 32, 0.88)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(0, 229, 255, 0.3)',
              borderRadius: 10,
              padding: '10px 14px',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.05em',
              animation: 'floatY 4s ease-in-out infinite 1.5s',
              boxShadow: '0 6px 24px rgba(0, 229, 255, 0.12)',
              zIndex: 2,
            }}>
              <div style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: 2 }}>&lt;/cloud&gt;</div>
              <div style={{ color: 'var(--text-muted)', fontSize: 10 }}>AWS · GCP</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: 28,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.2em',
        animation: 'float 2s ease-in-out infinite',
      }}>
        <span>SCROLL</span>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.7; }
          50% { transform: translateX(-50%) translateY(-6px); opacity: 1; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.06); }
        }
        @keyframes scanMove {
          0% { top: -60px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes glitchR {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          20%, 80% { opacity: 0.55; }
          25% { transform: translate(-3px, 1px); }
          50% { transform: translate(2px, -1px); }
          75% { transform: translate(-2px, 2px); }
        }
        @keyframes glitchB {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          20%, 80% { opacity: 0.55; }
          25% { transform: translate(3px, -1px); }
          50% { transform: translate(-2px, 1px); }
          75% { transform: translate(2px, -2px); }
        }
        @keyframes mainFlicker {
          0%, 100% { filter: contrast(1.08) saturate(1.15) brightness(1); }
          50% { filter: contrast(1.12) saturate(1.25) brightness(1.05); }
        }

        .photo-frame .photo-main,
        .photo-frame .photo-glitch-r,
        .photo-frame .photo-glitch-b {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
        .photo-frame .photo-main {
          filter: contrast(1.08) saturate(1.15);
          transition: filter 0.4s ease;
        }
        .photo-frame .photo-glitch-r {
          mix-blend-mode: screen;
          filter: sepia(1) saturate(8) hue-rotate(-50deg) brightness(1.1);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .photo-frame .photo-glitch-b {
          mix-blend-mode: screen;
          filter: sepia(1) saturate(8) hue-rotate(180deg) brightness(1.1);
          opacity: 0;
          transition: opacity 0.3s;
        }

        /* Hover: trigger glitch */
        .photo-frame:hover .photo-glitch-r {
          animation: glitchR 1.6s infinite;
        }
        .photo-frame:hover .photo-glitch-b {
          animation: glitchB 1.6s infinite;
        }
        .photo-frame:hover .photo-main {
          animation: mainFlicker 0.3s infinite;
        }
        .photo-frame:hover .scanner-beam {
          animation-duration: 1.2s !important;
        }

        /* Holographic border sits behind photo frame */
        .holo-border {
          z-index: 0;
        }
        .photo-frame {
          z-index: 1;
        }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-photo-wrap { order: -1; margin-top: 20px; }
          .hero-photo-wrap .photo-frame { width: 260px !important; height: 260px !important; }
          .rotating-ring { width: 320px !important; height: 320px !important; }
          .rotating-ring-2 { width: 300px !important; height: 300px !important; }
          .orbit-dots { width: 340px !important; height: 340px !important; }
          .orbit-dots span { transform-origin: center; }
          .holo-border { width: 276px !important; height: 276px !important; }
          .tick-marks { width: 280px !important; height: 280px !important; top: -10px !important; left: -10px !important; }
          .floating-badge { display: none; }
        }

        @media (max-width: 600px) {
          .hero-photo-wrap .photo-frame { width: 180px !important; height: 180px !important; }
          .rotating-ring { width: 220px !important; height: 220px !important; }
          .rotating-ring-2 { width: 200px !important; height: 200px !important; }
          .orbit-dots { width: 240px !important; height: 240px !important; }
          .holo-border { width: 190px !important; height: 190px !important; }
          .tick-marks { width: 200px !important; height: 200px !important; }
        }

        @media (max-width: 480px) {
          .hero-grid { gap: 24px !important; }
          .hero-photo-wrap { margin-bottom: 20px !important; }
          .hero-photo-wrap .photo-frame { width: 140px !important; height: 140px !important; }
          .rotating-ring { width: 170px !important; height: 170px !important; }
          .rotating-ring-2 { width: 150px !important; height: 150px !important; }
          .orbit-dots { width: 190px !important; height: 190px !important; }
          .holo-border { width: 150px !important; height: 150px !important; }
          .tick-marks { width: 160px !important; height: 160px !important; top: -8px !important; left: -8px !important; }
          .status-chip { bottom: -8px !important; font-size: 8px !important; padding: 4px 10px !important; }
        }
      `}</style>
    </section>
  )
}
