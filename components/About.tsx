export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          {/* Left: text */}
          <div>
            <div className="section-label">// sobre mim</div>
            <h2 className="section-title">
              Engenheiro de software apaixonado por resolver <span style={{
                background: 'linear-gradient(120deg, var(--accent), var(--accent-soft))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>problemas complexos</span>
            </h2>
            <div className="section-line" />

            <p style={{ color: 'var(--text-secondary)', marginBottom: 20, lineHeight: 1.85, fontSize: 16 }}>
              Desenvolvedor Full Stack com mais de <strong style={{ color: 'var(--text-primary)' }}>16 anos de experiência</strong> em
              desenvolvimento de software. Formado em Análise de Sistemas pela UniOpet e com especialização em
              Inteligência Artificial pela Asimov Academy.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 36, lineHeight: 1.85, fontSize: 16 }}>
              Tenho histórico comprovado construindo sistemas de alta performance — desde portais de
              autoatendimento para grandes marcas como <strong style={{ color: 'var(--text-primary)' }}>Vivo, O Boticário e AgiBank</strong>,
              até sistemas de IA para o <strong style={{ color: 'var(--text-primary)' }}>iFood</strong> e
              arquiteturas de microsserviços processando 500k+ eventos/dia.
            </p>

            <div style={{ display: 'flex', gap: 16 }}>
              <a href="https://github.com/jackpa84" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: 12, padding: '10px 22px' }}>
                GitHub ↗
              </a>
              <a href="https://linkedin.com/in/jackson-pacheco-86901322a/" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: 12, padding: '10px 22px' }}>
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right: info card */}
          <div>
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              {/* Terminal header */}
              <div style={{
                background: 'var(--bg-secondary)',
                borderBottom: '1px solid var(--border)',
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}>
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e' }} />
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', marginLeft: 10 }}>
                  jackson@portfolio:~
                </span>
              </div>

              {/* Terminal body */}
              <div style={{ padding: '28px', fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 2 }}>
                {[
                  { key: 'nome', value: 'Jackson Pacheco' },
                  { key: 'local', value: 'Curitiba, PR — Brasil' },
                  { key: 'experiência', value: '16+ anos' },
                  { key: 'foco', value: 'Full Stack + AI + Cloud' },
                  { key: 'email', value: 'jackpa1984@gmail.com' },
                  { key: 'whatsapp', value: '(41) 99251-1020' },
                  { key: 'status', value: '🟢 disponível' },
                ].map(item => (
                  <div key={item.key} style={{ display: 'flex', gap: 16 }}>
                    <span style={{ color: 'var(--accent)', minWidth: 120 }}>{item.key}</span>
                    <span style={{ color: 'var(--text-secondary)' }}>→</span>
                    <span style={{ color: 'var(--text-primary)' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
