# 🎙️ Turminha do Bem - Podcast Infantil & Diálogo Inclusivo

### *Um projeto transmidiático universitário integrando Direitos da Infância (ECA), Acessibilidade Auditiva e Inteligência Artificial*

---

## 📝 Apresentação do Projeto

O **Turminha do Bem** é um ecossistema transmidiático de extensão universitária e pesquisa científica, liderado pela **Universidade Estadual de Goiás (UEG) no campus UnU Iporá**. O projeto foi desenhado sob a premissa de aproximar a comunidade infanto-juvenil do **Estatuto da Criança e do Adolescente (ECA)**, utilizando formatos modernos, acessíveis e altamente interativos para consolidar o ensino de direitos fundamentais em escolas públicas e privadas da região.

O coração do projeto está no seu **Podcast Pedagógico** autoprodutivos de 8 episódios estruturados com sonoplastia de alta complexidade (**Foley Realista**) desenvolvido em parceria com o **Laboratório NAUFO** e o **CriaLab**.

Para além da escuta passiva, a plataforma estende a experiência através do **Dispositivo de Diálogo Extensionista** (onde as crianças conversam diretamente com os personagens do podcast por meio de IA generativa segura baseada no Gemini 3.5-Flash) e do **Desafio do ECA** (um jogo educativo interativo de 20 perguntas com feedback lúdico personalizado).

---

## 🎨 Funcionalidades em Destaque

Nossa plataforma centraliza as seguintes soluções interativas e metodológicas:

1. **Dispositivo de Diálogo Extensionista (Chat IA Seguro):**
   - Diálogos guiados com as personificações do podcast: **Ana** (Direitos no dia a dia), **Biel** (Saúde mental e tempos de tela), **Léia** (Inclusão e combate ao Bullying), **Otto** (Acessibilidade física e cadeirante), **Cauê** (Aluno indígena e orgulho de raízes) e **Prof. Dandara** (Educadora e guia jurídica).
   - Tecnologia de ponta conectada ao servidor via API SDK `@google/genai` (Gemini 3.5-Flash) de forma 100% segura contra vazamento de credenciais.

2. **Desafio Interativo do ECA (Jogo de 20 Perguntas):**
   - Quizz dinâmico e gamificado cobrindo desde regras físicas convencionais do ECA até a nova regulamentação inovadora do **ECA Digital (Lei 15.211/2025)** (regulando proteção de perfis infantis, loot boxes de jogos eletrônicos e designs aditivos).
   - Balões virtuais de feedback positivo associados individualmente a cada personagem após acertos ou tentativas de superação, fixando o conhecimento de maneira muito acolhedora.

3. **Pesquisa Global Inteligente (Site-Wide Filtering):**
   - Uma barra unificada posicionada no cabeçalho permite ao usuário de qualquer idade pesquisar termos-chave (como *"educação"*, *"indígena"*, *"bullying"*, *"leis"*, *"foley"*).
   - O filtro varre instantaneamente todas as divisões do site em tempo real (Filtragem de Episódios na aba de Podcast, filtragem da cronologia de marcos pedagógicos na Visão Geral, e matriz categorizada de links e leis).

4. **Análises de Dados e Métricas Visualizadoras:**
   - Gráficos analíticos renderizados dinamicamente via **Recharts** demonstrando a dispersão de artigos trabalhados nos episódios e a minutagem do podcast.

5. **Matriz Educativa e Governamental de Recursos (Links Úteis):**
   - Curadoria profunda dividida em eixos interativos: **Sites Governamentais Oficiais** (como o ECA ilustrado do Plenarinho da Câmara e portais do Ministério da Justiça), **Jogos e Plataformas Lúdicas** (como o jogo Aventureca e Escola Games) e **Análises Pedagógicas** (do Instituto Alana e Conjur).

6. **Compromisso de Acessibilidade de Foley:**
   - Detalhamento exclusivo no rodapé ou popovers de cada card de episódio demonstrando de qual forma os efeitos e sons industriais reais de Foley facilitam a absorção cognitiva e o processamento para crianças com TDAH, Transtorno do Espectro Autista e Distúrbio de Déficit de Atenção.

---

## ⚙️ Tecnologias e Arquitetura

Este portal Web foi construído utilizando os padrões mais rígidos de excelência de desenvolvimento fullstack em TypeScript:

- **Framework Principal:** Next.js 15+ (App Router para total escalabilidade e otimização).
- **Estilização e Responsividade:** Tailwind CSS (Arquitetura mobile-first fluida, paletas de cores infantis harmônicas e de alto contraste).
- **Animações Fluidas:** Framer Motion (Transições nativas para menus e estados de perguntas).
- **Biblioteca de Visualização de Dados:** Recharts e D3 integrado às métricas de episódios.
- **Biblioteca de Ícones:** Lucide React unificado.
- **Inteligência Artificial de Servidor:** Google GenAI SDK (`@google/genai`) integrada à chave secreta do Google AI Studio.

---

## 🔒 Segurança de Chaves de API (Segurança Padrão de Produção)

Seguindo as diretrizes rigorosas da nuvem e boas práticas contra abusos ou vazamentos de fundos em contas gratuitas do Google Cloud:

- **Nenhuma chave está visível no código público (Hardcoded).**
- O processamento de Inteligência Artificial opera via **API Routes do Next.js** no lado do servidor (`/app/api/chat/route.ts`).
- Apenas a infraestrutura de backend tem acesso à variável `GEMINI_API_KEY`.
- O navegador do cliente apenas recebe por transmissão `fetch` segura o retorno JSON gerado pela inteligência, sem nunca tomar conhecimento do token de conexão original.

---

## ⚡ Como Configurar e Rodar Localmente em Minutos

Para testar o potencial completo da aplicação incluindo o chat interativo com os personagens no seu computador local usando o plano oficial e livre de custos do Gemini:

### 1. Obtenha sua chave de API no Google AI Studio
1. Visite o portal do [Google AI Studio](https://aistudio.google.com/).
2. Conecte-se com sua conta Google padrão.
3. Clique no botão de destaque superior **"Get API Key"** (Obter Chave API).
4. Gere sua chave confidencial gratuita em um projeto de teste.

### 2. Prepare seu Ambiente de Desenvolvimento
Baixe os arquivos e configure o arquivo de leitura de variáveis local a partir do nosso modelo pré-estendido:

```bash
# Copia o modelo de exemplo configurando o arquivo lido pelo Next.js
cp .env.example .env.local
```

Abra o arquivo `.env.local` gerado na pasta raiz e preencha-o:
```env
GEMINI_API_KEY="COLE_AQUI_SUA_CHAVE_OBTIDA_NO_AI_STUDIO"
```

### 3. Instale Dependências e Rode o Projeto

```bash
# Instala todos os pacotes definidos no package.json de forma segura
npm install

# Inicia o servidor local de desenvolvimento
npm run dev
```

Abra em seu navegador o endereço fornecido: [http://localhost:3000](http://localhost:3000).

---

## 🚀 Guia de Publicação Gratuito na Nuvem (Deploy na Vercel)

Se você deseja disponibilizar a plataforma para as escolas da sua comunidade, professores, alunos ou coordenação avaliativa do projeto de forma 100% online e sem custos:

1. Faça o commit deste projeto para o seu repositório pessoal do **GitHub** (Público ou Privado).
2. Acesse a plataforma oficial de hospedagem [Vercel](https://vercel.com/) e crie uma conta (integrada ao seu GitHub).
3. Selecione a opção de "New Project" e escolha importar seu repositório do **Turminha do Bem**.
4. No painel de importação, expanda o diretório **Environment Variables** (Variáveis de Ambiente) e adicione o seguinte chaveamento de segurança:
   - **Key:** `GEMINI_API_KEY`
   - **Value:** *Sua chave gerada no Google AI Studio.*
5. Clique em **Deploy**! A Vercel executará automaticamente todos os comandos de build do Next.js e injetará sua chave de forma segura e protegida em servidores Serverless do Google Cloud/AWS, fornecendo um link público seguro com certificado SSL (`https://...vercel.app`) totalmente funcional.

---

## 🤝 Créditos e Entidades Promotoras

- **Realização Primária:** Universidade Estadual de Goiás (UEG) - Unidade Universitária de Iporá.
- **Apoio Tecnológico:** CriaLab (Laboratório de Transmídias e P&D Universitário).
- **Engenharia e Qualidade Sonora:** NAUFO (Núcleo Audiovisual de Sonoplastia e Efeitos Foley).
- **Relações Públicas e Rádio:** Rádio UEG Educativa.
- **Fomento Legislativo e Pesquisas Lúdicas:** Portal Plenarinho da Câmara dos Deputados (Programa Aventureca) & Instituto Alana.

---

*Desenhado com carinho como modelo de inclusão digital e acessibilidade para o desenvolvimento saudável de uma infância brilhante.*
