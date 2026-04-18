const projects = [
  {
    name: 'chatbot-langchain',
    description: 'Chatbot inteligente construído com LangChain. Demonstra integração de LLMs com memória de conversação, chains customizadas e RAG (Retrieval-Augmented Generation).',
    stack: ['CSS', 'LangChain', 'Python', 'AI'],
    url: 'https://github.com/jackpa84/chatbot-langchain',
    highlight: true,
  },
  {
    name: 'auth-nextjs-nestjs',
    description: 'Sistema de autenticação completo com Next.js no frontend e NestJS no backend. JWT, refresh tokens, guards e middleware de autorização.',
    stack: ['TypeScript', 'Next.js', 'NestJS', 'JWT'],
    url: 'https://github.com/jackpa84/auth-nextjs-nestjs',
    highlight: true,
  },
  {
    name: 'webscraping-and-automation',
    description: 'Suite de automação web e scraping. Coleta de dados, automação de processos repetitivos e integração com APIs.',
    stack: ['TypeScript', 'Playwright', 'Puppeteer'],
    url: 'https://github.com/jackpa84/webscraping-and-automation',
    highlight: false,
  },
  {
    name: 'ETL-0.0.1',
    description: 'Pipeline ETL (Extract, Transform, Load) em Python. Processamento e transformação de dados para análise e integração entre sistemas.',
    stack: ['Python', 'Pandas', 'ETL', 'Data'],
    url: 'https://github.com/jackpa84/ETL-0.0.1',
    highlight: false,
  },
  {
    name: 'docker-react-ts',
    description: 'Setup completo de ambiente React com TypeScript containerizado em Docker. Boas práticas de Docker para desenvolvimento frontend.',
    stack: ['TypeScript', 'React', 'Docker'],
    url: 'https://github.com/jackpa84/docker-react-ts',
    highlight: false,
  },
  {
    name: 'todo-list-ai',
    description: 'Aplicação de lista de tarefas com recursos de inteligência artificial para categorização e priorização automática.',
    stack: ['PHP', 'AI', 'CRUD'],
    url: 'https://github.com/jackpa84/todo-list-ai',
    highlight: false,
  },
]

export default function Projects() {
  return (
    <section id="projetos" className="section" style={{
      background: 'linear-gradient(180deg, transparent 0%, rgba(13, 17, 23, 0.5) 50%, transparent 100%)',
      borderTop: '1px solid rgba(0, 229, 255, 0.05)',
      borderBottom: '1px solid rgba(0, 229, 255, 0.05)',
    }}>
      <div className="container">
        <div className="section-label">// código público</div>
        <h2 className="section-title">Projetos no GitHub</h2>
        <div className="section-line" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 20,
        }}>
          {projects.map(proj => (
            <a
              key={proj.name}
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div className="card" style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: proj.highlight ? '1px solid rgba(0, 229, 255, 0.3)' : undefined,
              }}>
                {proj.highlight && (
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    color: 'var(--accent)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: 12,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}>
                    <span style={{ color: 'var(--accent)' }}>★</span>
                    destaque
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <h3 style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 15,
                    fontWeight: 700,
                    color: 'var(--accent)',
                  }}>
                    {proj.name}
                  </h3>
                  <span style={{ color: 'var(--text-muted)', fontSize: 18 }}>↗</span>
                </div>

                <p style={{
                  fontSize: 14,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  flex: 1,
                  marginBottom: 20,
                }}>
                  {proj.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {proj.stack.map(s => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="https://github.com/jackpa84" target="_blank" rel="noopener noreferrer" className="btn-outline">
            Ver todos os repositórios no GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}
