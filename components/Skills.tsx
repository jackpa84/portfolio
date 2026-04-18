const skillGroups = [
  {
    category: 'Backend',
    icon: '⚙',
    skills: ['Python', 'FastAPI', 'Django', 'PHP', 'Symfony', 'Phalcon', 'Node.js', 'Laravel'],
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
    }}>
      <div className="container">
        <div className="section-label">// stack tecnológica</div>
        <h2 className="section-title">Ferramentas & Tecnologias</h2>
        <div className="section-line" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
        }}>
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
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {group.skills.map(skill => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
