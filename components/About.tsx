export default function About() {
  return (
    <section id="sobre" className="section" style={{ width: '100%', overflow: 'hidden' }}>
      <div className="container" style={{ width: '100%' }}>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 40, alignItems: 'flex-start', width: '100%', maxWidth: '800px' }}>
          {/* Left: text */}
          <div>
            <div className="section-label" style={{ marginBottom: 12 }}>// sobre mim</div>
            <h2 className="section-title" style={{ marginBottom: 14 }}>
              Engenheiro de software apaixonado por resolver <span style={{
                background: 'linear-gradient(120deg, var(--accent), var(--accent-soft))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>problemas complexos</span>
            </h2>
            <div className="section-line" style={{ marginBottom: 32, width: '60px' }} />

            <p style={{ color: 'var(--text-secondary)', marginBottom: 16, lineHeight: 1.75, fontSize: 'clamp(13px, 2.8vw, 16px)' }}>
              Desenvolvedor Full Stack com mais de <strong style={{ color: 'var(--text-primary)' }}>16 anos de experiência</strong> em
              desenvolvimento de software. Formado em Análise de Sistemas pela UniOpet e com especialização em
              Inteligência Artificial pela Asimov Academy.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 28, lineHeight: 1.75, fontSize: 'clamp(13px, 2.8vw, 16px)' }}>
              Tenho histórico comprovado construindo sistemas de alta performance — desde portais de
              autoatendimento para grandes marcas como <strong style={{ color: 'var(--text-primary)' }}>Vivo, O Boticário e AgiBank</strong>,
              até sistemas de IA para o <strong style={{ color: 'var(--text-primary)' }}>iFood</strong> e
              arquiteturas de microsserviços processando 500k+ eventos/dia.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://github.com/jackpa84" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: 'clamp(11px, 2vw, 12px)', padding: '9px 18px' }}>
                GitHub ↗
              </a>
              <a href="https://linkedin.com/in/jackson-pacheco-86901322a/" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: 'clamp(11px, 2vw, 12px)', padding: '9px 18px' }}>
                LinkedIn ↗
              </a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { gap: 32px !important; }
        }

        @media (max-width: 600px) {
          .about-grid { gap: 28px !important; }
        }

        @media (max-width: 480px) {
          .about-grid { gap: 20px !important; }
          #sobre h2 { margin-bottom: 10px !important; font-size: 20px !important; }
          #sobre .section-label { font-size: 10px !important; margin-bottom: 8px !important; }
          #sobre .section-line { margin-bottom: 16px !important; width: 50px !important; }
          #sobre p { margin-bottom: 12px !important; line-height: 1.6 !important; }
        }
      `}</style>
    </section>
  )
}
