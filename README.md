# Jackson Pacheco — Portfolio

Portfólio pessoal em Next.js 14 (App Router), TypeScript e CSS puro, com estética cyber-monospaced cyan.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Adicionar sua foto real

O site já está pronto com um avatar placeholder (`public/profile.svg`).
Para usar sua foto real:

1. Salve sua foto como `public/profile.jpg` (recomendado: 800×800px, quadrada)
2. Faça novo deploy — o `<img>` do Hero tenta `profile.jpg` primeiro e faz fallback para o SVG se não existir

## Deploy na Vercel

### Opção 1 — CLI (mais rápido, a partir do seu Mac)

```bash
cd /Users/jaxph/Projects/portfolio
npx vercel login        # primeira vez apenas
npx vercel --prod --yes
```

Ou simplesmente:

```bash
npm run deploy
```

### Opção 2 — GitHub + Vercel Dashboard (recomendado para CI/CD)

```bash
cd /Users/jaxph/Projects/portfolio
git init
git add .
git commit -m "feat: elegant redesign + photo"
git branch -M main
git remote add origin git@github.com:jackpa84/portfolio.git
git push -u origin main
```

Depois em https://vercel.com/new → Import Project → selecione o repo. Framework será detectado como Next.js automaticamente.

## Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- CSS puro (variáveis CSS + gradientes)
- Space Mono + Sora (Google Fonts)
