export interface Post {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  content: string
}

export const posts: Post[] = [
  {
    slug: 'a-origem-da-inteligencia-artificial',
    title: 'A Origem da Inteligência Artificial',
    description:
      'Da mitologia antiga aos primeiros computadores: como a humanidade sonhou em criar máquinas pensantes ao longo dos séculos.',
    date: '2026-08-30',
    author: 'Jackson Pacheco',
    tags: ['IA', 'História', 'Tecnologia'],
    content: `
## O Sonho Antigo de Criar Vidas Artificiais

A ideia de criar seres artificiais capazes de pensar não é nova — ela permeia a imaginação humana há milênios. Da mitologia grega aos autômatos medievais, a humanidade sempre buscou replicar sua própria inteligência em máquinas.

## Mitos e Lendas

Na mitologia grega, **Talos** era um gigante de bronze forjado por Hefesto, o deus ferreiro, para proteger a ilha de Creta. Embora não fosse "inteligente" no sentido moderno, Talos representava o desejo humano de criar guardiões artificiais.

Já na mitologia egípcia, **Thoth** — o deus da escrita e do conhecimento — era associado à criação de instrumentos que facilitavam o pensamento, como o sistema hieroglífico.

## Autômatos na Idade Média e Renascimento

Durante a Idade Média e o Renascimento, engenheiros e inventores começaram a construir **autômatos**: máquinas que imitavam movimentos humanos e animais.

- **Al-Jazari** (1136–1206), engenheiro islâmico, criou autômatos elaborados como um elefante mecânico que marcava as horas.
- **Leonardo da Vinci** (1452–1519) projetou um cavaleiro mecânico capaz de sentar, acenar e mover a mandíbula — o famoso **Cavaleiro Autômato** de 1495.
- **Jacques de Vaucanson** (1709–1782) construiu o **Pato Digestivo**, um pato mecânico que simulava comer, digerir e excretar.

Esses dispositivos eram impressionantes, mas não possuíam "inteligência" — eram execuções mecânicas de movimentos predeterminados.

## O Século XIX: O Nascimento da Computação

O verdadeiro marco para a inteligência artificial começa com **Charles Babbage** e **Ada Lovelace**.

### A Máquina Analítica de Babbage

Em 1837, Charles Babbage propôs a **Máquina Analítica**, um projeto de computador mecânico capaz de realizar qualquer cálculo matemático. Embora nunca construída em vida de Babbage, seu design incluía:

- Uma unidade aritmética (o "milling machine")
- Memória (o "store")
- Controle de fluxo com condicionais e loops

### Ada Lovelace: A Primeira Programadora

Ada Lovelace, filha do poeta Lord Byron, escreveu o que é considerado o **primeiro programa de computador** em 1843 — um algoritmo para a Máquina Analítica calcular números de Bernoulli. Ela também previu que máquinas poderiam ir além do cálculo:

> *"A Máquina Analítica tece padrões algebraicos assim como o tear de Jacquard tece flores e folhas."*

Lovelace percebeu que as máquinas poderiam manipular símbolos de forma geral, não apenas números — uma intuição visionária.

## Alan Turing e a Máquina Universal

Em 1936, **Alan Turing** publicou o artigo que fundamentou a computação moderna: *"On Computable Numbers"*. Nele, ele propôs a **Máquina de Turing**, um modelo abstrato de computação que poderia simular qualquer algoritmo.

### O Teste de Turing

Em 1950, Turing publicou outro artigo revolucionário: *"Computing Machinery and Intelligence"*. Nele, ele propôs o que hoje chamamos de **Teste de Turing**: se uma máquina pudesse enganar um humano fazendo-se passar por humano numa conversa, ela seria considerada "inteligente".

O artigo começa com a provocadora pergunta: **"As máquinas podem pensar?"**

## A Conferência de Dartmouth (1956): O Nascimento da IA

O termo **"Inteligência Artificial"** foi cunhado em 1956 na **Conferência de Dartmouth**, organizada por quatro cientistas:

- **John McCarthy** — quem criou o termo "Inteligência Artificial"
- **Marvin Minsky** — pioneiro em redes neurais
- **Nathaniel Rochester** — projetista do IBM 704
- **Claude Shannon** — o pai da teoria da informação

A conferência durou dois meses e reuniu pesquisadores que acreditavam que **"cada aspecto do aprendizado ou qualquer outra característica da inteligência pode ser tão precisamente descrito que uma máquina pode ser feita para simulá-lo"**.

## Os Primeiros Programas de IA

Nos anos seguintes à conferência de Dartmouth, surgiram os primeiros programas de IA:

| Programa | Ano | Autor | Descrição |
|----------|-----|-------|-----------|
| **Logic Theorist** | 1956 | Allen Newell & Herbert Simon | Resolveu problemas de lógica matemática |
| **General Problem Solver** | 1957 | Newell & Simon | Primeiro programa a resolver problemas de forma geral |
| **ELIZA** | 1966 | Joseph Weizenbaum | Chatbot que simulava um terapeuta rogeriano |
| **SHRDLU** | 1970 | Terry Winograd | Compreendia linguagem natural em um mundo de blocos |

## Os Invernos da IA

A história da IA não foi apenas de avanços — houve também períodos de frustração chamados de **invernos da IA**:

### Primeiro Inverno (1974–1980)
Após promessas exageradas e resultados decepcionantes, o financiamento governamental diminuiu drasticamente. O **Relatório Lighthill** (1973) no Reino Unido foi especialmente devastador.

### Segundo Inverno (1987–1993)
O fracasso dos **sistemas especialistas** comerciais e a queda no mercado de computadores pessoais levaram a outra redução de investimentos.

### A Renaissance: Deep Blue e Além
Em 1997, o **Deep Blue** da IBM derrotou o campeão mundial de xadrez Garry Kasparov, marcando o retorno da IA ao centro das atenções.

## O Boom Moderno da IA

A verdadeira revolução veio com:

- **Redes Neurais Profundas** (Deep Learning)
- **Big Data** — a disponibilidade massiva de dados
- **GPUs** — hardware especializado para treinamento
- **AlexNet** (2012) — que revolucionou o reconhecimento de imagens
- **GPT** e **Transformers** (2017+) — que transformaram o processamento de linguagem natural
- **ChatGPT** (2022) — que trouxe a IA para o mainstream

## Conclusão

A inteligência artificial não nasceu em 1956 — ela tem raízes que se estendem por milênios de sonhos, mitos e invenções. De Talos a ChatGPT, a humanidade sempre buscou criar algo que pensasse por si. O que antes era mitologia tornou-se engenharia, e o que era engenharia agora é parte do cotidiano.

Estamos apenas no início dessa jornada. A pergunta não é mais *"as máquinas podem pensar?"*, mas sim *"como as máquinas pensarão no futuro?"*.
    `,
  },
  {
    slug: 'arquiteto-de-software-ia-trilha-de-carreira',
    title: 'Arquiteto de Software - IA: O Que Esperamos de Você',
    description:
      'Um guia sobre as competências, vivências e o papel de um Arquiteto de Software especializado em Inteligência Artificial em uma trilha de carreira moderna.',
    date: '2026-09-01',
    author: 'Jackson Pacheco',
    tags: ['IA', 'Arquitetura', 'Carreira', 'Python', 'LLM'],
    content: `
## O Papel do Arquiteto de Software - IA

A construção de uma trilha de carreira para **Arquiteto de Software - IA** vai muito além de escrever código. É sobre liderar a modernização da arquitetura com foco em **escalabilidade** e **resiliência**, mentorar o time e definir padrões técnicos que garantam a adoção de boas práticas.

### Responsabilidades Principais

- **Liderar a modernização** da arquitetura com foco em escalabilidade e resiliência
- **Mentoriar o time** de desenvolvimento, compartilhando conhecimento e boas práticas
- **Definir padrões técnicos** e garantir sua adoção através do time
- **Colaborar com Product e Tech Leads** na definição de soluções
- **Participar das decisões estratégicas** de tecnologia

## Vivências Essenciais

### Python e Node.js

Sólida experiência com **Python** e/ou **Node.js** aplicados a sistemas de back-end de alta performance e APIs resilientes. Essa base é fundamental para construir os pilares de qualquer sistema de IA moderno.

### Arquitetura de Software

Conhecimento profundo em:

- **Padrões de projeto** (Singleton, Factory, Strategy, Observer, etc.)
- **Princípios SOLID** — aplicados diariamente no design de classes e módulos
- **DDD** (Domain-Driven Design) — modelagem de domínios complexos
- **Clean Architecture** — separação de responsabilidades e dependências

Esses princípios devem ser aplicados em **sistemas complexos**, não apenas em projetos acadêmicos.

### IA Generativa e LLMs

Experiência prática comprovada no design e implementação de soluções de **IA Generativa**, utilizando:

| Ferramenta | Uso |
|-----------|-----|
| **OpenAI API** | GPT-4, embeddings, function calling |
| **Amazon Bedrock** | Modelos gerenciados na AWS |
| **Modelos open-source** | Llama, Mistral, fine-tuning local |

### Arquiteturas RAG

Domínio de **RAG (Retrieval-Augmented Generation)**, incluindo:

- Estratégias de **indexação** de documentos
- **Recuperação** semântica e por chave
- Pipeline completo: ingestão → chunking → embedding → retrieval → geração

### Frameworks de Orquestração

Vivência obrigatória com **LangChain** para orquestração de fluxos de IA, incluindo:

- Chains e agents
- Memory e conversação
- Tool use e function calling
- Integração com bancos vetoriais

### Bancos de Dados

| Tipo | Exemplos |
|------|----------|
| **Vetoriais** | OpenSearch, Weaviate, ChromaDB, Pinecone |
| **NoSQL** | MongoDB, DynamoDB |

### Transição de Monolito para Microsserviços

Experiência na transição de arquiteturas **monolíticas** para **microsserviços** e sistemas distribuídos. Isso inclui:

- Estratégias de decomposição (Strangler Fig, Domain Decomposition)
- Comunicação entre serviços (sync e async)
- Gerenciamento de dados distribuídos
- Resiliência e tolerância a falhas

### CI/CD, DevOps e Cloud

Conhecimento sólido em:

- **CI/CD** — pipelines de build, teste e deploy automatizado
- **Docker** — containerização de aplicações
- **AWS** — serviços como Lambda, ECS, S3, SQS, Bedrock, OpenSearch

## Diferencial: O Que Será Incrível Se Você Já Tiver

### Event-Driven Architecture

Conhecimento profundo em arquiteturas orientadas a eventos e ferramentas de mensageria:

- **Kafka** — streaming de eventos em alta escala
- **RabbitMQ** — filas de mensagens tradicionais
- **Amazon SQS** — filas gerenciadas na AWS

### AI Agents

Experiência prática na construção e orquestração de **Agentes de IA**:

- Tool use e function calling
- Memória de longo prazo
- Roteamento e tomada de decisão
- Multi-agent systems

### Observabilidade

Familiaridade com ferramentas de observabilidade:

- **Logs** — registro estruturado de eventos
- **Métricas** — monitors, dashboards, alertas
- **Tracing** — rastreamento de requisições distribuídas

### Metodologias Ágeis

Experiência com metodologias ágeis em times de alta performance:

- Scrum e Kanban
- Pair programming e code review
- Retrospectivas e melhoria contínua

## Conclusão

O Arquiteto de Software - IA é mais do que um técnico — é um **líder** que combina profundidade em engenharia de software com domínio de inteligência artificial. A capacidade de transitar entre o código e a estratégia, entre o monolito e os microsserviços, entre o LLM e a experiência do usuário, é o que define essa trilha.

Se você se identifica com essas vivências, essa trilha é para você.
    `,
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
