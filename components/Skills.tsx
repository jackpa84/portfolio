const skillGroups = [
  {
    category: 'Backend',
    icon: '⚙',
    skills: ['Python', 'Node.js', 'PHP', 'FastAPI', 'Django', 'Laravel', 'Symfony', 'Phalcon'],
  },
  {
    category: 'Frontend',
    icon: '◈',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'GraphQL', 'AngularJS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁',
    skills: ['AWS', 'Docker', 'CI/CD', 'Linux', 'Git', 'GitFlow', 'GCP', 'Datadog'],
  },
  {
    category: 'Banco de Dados',
    icon: '⬡',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Elasticsearch', 'Oracle', 'Redis'],
  },
  {
    category: 'AI & Data',
    icon: '◉',
    skills: ['LangChain', 'OpenAI API', 'Machine Learning', 'ETL', 'Web Scraping', 'Automação'],
  },
  {
    category: 'Pagamentos',
    icon: '◈',
    skills: ['PIX', 'Cartão de Crédito', 'Boleto', 'Débito Automático', 'Stripe', 'Gateways'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section" style={{
      background: 'linear-gradient(180deg, transparent 0%, rgba(13, 17, 23, 0.5) 50%, transparent 100%)',
      borderTop: '1px solid rgba(0, 229, 255, 0.05)',
      borderBottom: '1px solid rgba(0, 229, 255, 0.05)',
      width: '100%',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ width: '100%' }}>
        <div className="section-label">// stack tecnológica</div>
        <h2 className="section-title">Ferramentas & Tecnologias</h2>
        <div className="section-line" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
        }} className="skills-grid">
          {skillGroups.map(group => (
            <div key={group.category} className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <span style={{ fontSize: 20, color: 'var(--accent)' }}>{group.icon}</span>
                <h3 style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 13,
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  {group.category}
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, maxWidth: '100%' }}>
                {group.skills.map(skill => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tag {
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important; gap: 14px !important; }
          .card { padding: 20px !important; }
        }

        @media (max-width: 480px) {
          .skills-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
          .card { padding: 16px !important; }
          .tag { font-size: 10px !important; padding: 4px 10px !important; }
        }
      `}</style>
    </section>
  )
}
