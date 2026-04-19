const experiences = [
  {
    company: 'Iconit',
    role: 'Desenvolvedor Full Stack Sênior',
    period: 'Dez/2025 → Mar/2026',
    current: false,
    stack: ['PHP', 'Python', 'React', 'Next.js', 'MongoDB', 'PostgreSQL', 'Datadog', 'GCP'],
    highlights: ['Análise e desenvolvimento de sistema', 'Infraestrutura GCP e monitoramento com Datadog'],
  },
  {
    company: 'ConnectTrend',
    role: 'Desenvolvedor Full Stack Sênior',
    period: 'Jan/2025 → Abr/2025',
    current: false,
    stack: ['Python', 'Next.js', 'PostgreSQL'],
    highlights: [
      'Sistema de gestão de carteira de clientes',
      'Integração de pagamentos PIX, Cartão de Crédito e Boleto',
    ],
  },
  {
    company: 'Anota AI / iFood',
    role: 'Engenheiro de Software',
    period: 'Set/2024 → Nov/2024',
    current: false,
    stack: ['Python', 'AWS', 'DynamoDB', 'TypeScript'],
    highlights: [
      'Manutenção e novos recursos para IA de pedidos',
      'Implementação de soluções AWS com foco em DynamoDB',
      'Relatórios de comportamento da IA para melhorias contínuas',
      'Testes unitários e E2E',
    ],
  },
  {
    company: 'Ingresse',
    role: 'Desenvolvedor Backend Sênior',
    period: 'Jul/2023 → Ago/2024',
    current: false,
    stack: ['Python', 'FastAPI', 'Django', 'PHP', 'Phalcon', 'Symfony', 'AWS', 'PostgreSQL', 'MySQL', 'MongoDB', 'Elasticsearch', 'Docker'],
    highlights: [
      'APIs e microsserviços de alta performance',
      'Processamento de 500k+ eventos/dia',
      'Redução de 22% nos custos AWS via otimização',
      'Automação CI/CD e containerização com Docker',
    ],
  },
  {
    company: 'SolarView América Latina',
    role: 'Desenvolvedor Full Stack',
    period: 'Dez/2022 → Jun/2023',
    current: false,
    stack: ['Python', 'Django', 'React.js', 'GraphQL', 'Docker', 'PHP', 'Node.js'],
    highlights: [
      'Refatoração e modernização de sistemas legados',
      'Dashboards em tempo real para monitoramento de usinas solares',
      'Treinamentos em Lean e Agile',
    ],
  },
  {
    company: 'SevenSys Soluções em TI',
    role: 'Desenvolvedor Full Stack',
    period: 'Abr/2022 → Nov/2022',
    current: false,
    stack: ['PHP', 'Symfony', 'AngularJS', 'Oracle', 'Docker', 'jQuery'],
    highlights: ['Sistemas corporativos com Symfony e Oracle', 'Frontend moderno com AngularJS'],
  },
]

export default function Experience() {
  return (
    <section id="experiencia" className="section" style={{ width: '100%', overflow: 'hidden' }}>
      <div className="container" style={{ width: '100%' }}>
        <div className="section-label">// trajetória profissional</div>
        <h2 className="section-title">Experiência</h2>
        <div className="section-line" />

        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 2,
            background: 'linear-gradient(to bottom, var(--accent) 0%, rgba(0, 229, 255, 0.4) 40%, transparent 100%)',
            boxShadow: '0 0 10px rgba(0, 229, 255, 0.3)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {experiences.map((exp, i) => (
              <div key={exp.company} style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: 40,
                paddingBottom: 48,
              }}>
                {/* Left: period */}
                <div style={{ paddingLeft: 24, position: 'relative' }}>
                  {/* Dot */}
                  <div style={{
                    position: 'absolute',
                    left: -4,
                    top: 6,
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: exp.current ? 'var(--accent)' : 'var(--text-muted)',
                    boxShadow: exp.current ? '0 0 12px var(--accent)' : 'none',
                    border: '2px solid var(--bg-primary)',
                  }} />
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: exp.current ? 'var(--accent)' : 'var(--text-muted)',
                    lineHeight: 1.5,
                    letterSpacing: '0.05em',
                  }}>
                    {exp.period}
                  </div>
                </div>

                {/* Right: content */}
                <div className="card" style={{ marginBottom: 0 }}>
                  <div style={{ marginBottom: 12 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>
                      {exp.role}
                    </h3>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 13,
                      color: 'var(--accent)',
                    }}>
                      @ {exp.company}
                    </span>
                  </div>

                  <ul style={{ marginBottom: 16, paddingLeft: 0, listStyle: 'none' }}>
                    {exp.highlights.map(h => (
                      <li key={h} style={{
                        fontSize: 14,
                        color: 'var(--text-secondary)',
                        paddingLeft: 16,
                        position: 'relative',
                        marginBottom: 6,
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: 'var(--accent)',
                          fontFamily: 'var(--font-mono)',
                        }}>›</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {exp.stack.map(s => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experiencia .container > div > div > div {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            padding-bottom: 40px !important;
          }
          .card { padding: 20px !important; }
        }

        @media (max-width: 600px) {
          #experiencia .container > div > div > div {
            padding-bottom: 36px !important;
          }
        }

        @media (max-width: 480px) {
          #experiencia .container > div {
            position: relative;
          }
          #experiencia .container > div > div {
            gap: 0 !important;
          }
          #experiencia .container > div > div > div {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
            padding-bottom: 28px !important;
          }
          #experiencia .container > div > div > div:last-child {
            padding-bottom: 0 !important;
          }
          .card {
            padding: 14px !important;
          }
          .card h3 { font-size: 16px !important; }
          .card ul { margin-bottom: 12px !important; }
          .tag { font-size: 10px !important; padding: 4px 8px !important; }
        }
      `}</style>
    </section>
  )
}
