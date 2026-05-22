"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Play, 
  Pause, 
  Send, 
  Sparkles, 
  BookOpen, 
  Star, 
  Calendar, 
  Clock, 
  Link2, 
  MessageCircle, 
  HelpCircle, 
  Volume2, 
  Share2, 
  TrendingUp, 
  GraduationCap, 
  Radio, 
  Globe, 
  ShieldCheck,
  ChevronRight,
  Bookmark,
  Users,
  Search,
  Check,
  X,
  Award
} from "lucide-react";
import { cn } from "@/lib/utils";

// Types
interface Message {
  role: "user" | "model";
  content: string;
}

interface Episode {
  id: number;
  title: string;
  date: string;
  duration: number;
  synopsis: string;
  theme: string;
  articles: string;
  articlesDetail: string;
}

// Data Sets
const episodesData: Episode[] = [
  {
    id: 1,
    title: "De volta às aulas",
    date: "12/10/2023",
    duration: 9,
    theme: "Direitos Fundamentais das Crianças",
    articles: "Artigos 3º, 4º e 5º do ECA",
    articlesDetail: "Estabelece os direitos fundamentais que garantem o desenvolvimento físico, mental, moral e social de toda criança sem nenhuma discriminação.",
    synopsis: "As férias acabaram e a turminha está super animada se reencontrando no pátio da escola! A Ana, cheia de novidades, conta para os colegas que seu tio lhe explicou de forma super simples sobre as leis mágicas que protegem todas as crianças: o Estatuto da Criança e do Adolescente (ECA)."
  },
  {
    id: 2,
    title: "Biel e a ansiedade",
    date: "20/11/2023",
    duration: 7,
    theme: "Saúde Mental e Bem-Estar",
    articles: "Artigos 11 e 13 do ECA",
    articlesDetail: "Trata da proteção à saúde e à integridade física e mental, destacando que as crianças devem receber atenção integral do Estado.",
    synopsis: "Coincidindo com o Dia Universal da Criança estabelecido pela UNICEF, o Biel começa a agir de forma estranha: está comendo fora do horário e não desgruda do celular jogando sem parar. A turminha nota que ele está ansioso e se une com carinho para ajudá-lo a encontrar equilíbrio."
  },
  {
    id: 3,
    title: "Bem-vindo, Cauê!",
    date: "22/03/2024",
    duration: 7,
    theme: "Diversidade e Cultura Indígena",
    articles: "Artigos 42 e 53 do ECA",
    articlesDetail: "Consagra o respeito aos valores culturais, artísticos e históricos próprios do contexto social das crianças, valorizando a herança indígena e tradicional.",
    synopsis: "Um novo aluno tímido chamado Cauê chega na escola. Ele é indígena e possui hábitos muito diferentes e ricos. Ao invés de o isolarem, Ana e Léia tomam a liderança para integrá-lo, descobrindo histórias mágicas da floresta e aprendendo a celebrar a pluralidade de nosso país."
  },
  {
    id: 4,
    title: "Educação Física Inclusiva",
    date: "26/04/2024",
    duration: 6,
    theme: "Inclusão e Acessibilidade",
    articles: "Artigos 7º e 54 do ECA",
    articlesDetail: "Garante o direito à educação especializada e à acessibilidade urbana e escolar para garantir o pleno convívio de crianças com deficiência.",
    synopsis: "O Otto quer muito brincar no pátio, mas relata insegurança com o piso irregular para manobrar sua cadeira de rodas. Ao perceberem, os amigos e a Professora Dandara redesenham a aula de Educação Física para que todos disputem e se divirtam juntos de forma totalmente acessível!"
  },
  {
    id: 5,
    title: "O Conselho Tutelar",
    date: "10/06/2024",
    duration: 6,
    theme: "Proteção Social das Crianças",
    articles: "Artigos 98 e 129 do ECA",
    articlesDetail: "Trata das medidas de proteção destinadas ao acolhimento e o papel protetivo do Conselho Tutelar como guardião dos direitos violados.",
    synopsis: "Durante uma tarde, a Ana pede à mãe para brincar na rua com uma amiguinha da vizinhança. A mãe aproveita a deixa para explicar sobre os guardiões das crianças: os Conselheiros Tutelares. No dia seguinte, a Professora Dandara aprofunda esse importante mecanismo de proteção social."
  },
  {
    id: 6,
    title: "Direito de Convivência",
    date: "05/11/2024",
    duration: 8,
    theme: "Convivência Familiar e Comunitária",
    articles: "Artigos 19 e 20 do ECA",
    articlesDetail: "Garante que toda criança tem o direito fundamental de ser criada e educada no seio de sua família e de uma comunidade segura.",
    synopsis: "A Léia nota que o Biel está calado e pensativo sobre problemas familiares. Ela demonstra sua alta empatia buscando o auxílio da Professora Dandara, que conversa com as crianças sobre o direito fundamental que elas têm de viver cercadas por carinho e afeto na família e na comunidade."
  },
  {
    id: 7,
    title: "Direito e Respeito ao Nome",
    date: "22/11/2024",
    duration: 5,
    theme: "Identidade e Combate ao Bullying",
    articles: "Artigos 16 e 17 do ECA",
    articlesDetail: "Protege o direito à integridade moral, identidade própria, nome de registro e o respeito à dignidade humana livre de constrangimentos.",
    synopsis: "Léia e Biel acabam tendo um mal-entendido na hora do lanche devido a apelidos bobos. Ao conversarem na coordenação, compreendem o que é o bullying e descobrem que ter sua identidade respeitada e seu nome de nascença valorizado é um direito essencial de dignidade."
  },
  {
    id: 8,
    title: "Estado Laico",
    date: "25/11/2024",
    duration: 8,
    theme: "Liberdade Religiosa",
    articles: "Artigos 5º e 6º do ECA",
    articlesDetail: "Resguarda o direito fundamental de crença, culto e liberdade de consciência religiosa nas instituições públicas e sociais.",
    synopsis: "Após assistirem a um lindo curta-metragem na sala de aula, a Turma entra em um debate muito respeitoso sobre suas diferentes religiões e crenças familiares. Com a ajuda da professora, eles descobrem a mágica do Estado Laico, onde toda manifestação de fé deve ser acolhida e respeitada!"
  }
];

const timelineData = [
  { year: "2019", title: "A Semente", desc: "A Professora Kenia Lucena, junto com alunos pioneiros do Curso de Direito da Universidade Estadual de Goiás em Iporá, começam a sonhar e projetar materiais infantis lúdicos sobre o direito das crianças." },
  { year: "Out 2023", title: "Estréia Oficial", desc: "No Dia das Crianças, impulsionado pelo CriaLab e NAUFO, é lançado o episódio número 1 'De volta às aulas' em parceria com a Rádio UEG Educativa." },
  { year: "Mar 2024", title: "Inovação e Pluralismo", desc: "Inserção do boneco e personagem indígena Cauê, pautando o Estatuto da Criança no campo da diversidade cultural brasileira." },
  { year: "Mai 2024", title: "Reconhecimento Nacional", desc: "O podcast é indicado e atinge a posição de FINALISTA Regional da Expocom Centro-Oeste na categoria de Rádio e Podcast de Ficção." },
  { year: "Jul 2024", title: "Apresentações Científicas", desc: "Defesa e apresentação no Intercom Centro-Oeste pela aluna Carol Coppe na Universidade Federal de Goiás, despertando amplo interesse." },
  { year: "Nov 2024", title: "Temporada Completa", desc: "Publicação dos 3 episódios finais do ano, sedimentando um total de 8 capítulos distribuídos e acompanhados em escolas locais de Goiás." }
];

const ecaQuestions = [
  {
    id: 1,
    question: "De acordo com o ECA, qual destes é um direito fundamental de TODAS as crianças?",
    options: [
      "Ter o brinquedo mais caro de todos",
      "Ter acesso à educação, saúde, esporte e lazer",
      "Poder faltar na aula para jogar videogame",
      "Ter o direito de dormir até meio-dia todos os dias"
    ],
    answerIndex: 1,
    characterId: "ana",
    characterFeedback: "Isso mesmo! O ECA garante que toda criança tem o direito de estudar, praticar esportes e se cuidar para crescer saudável e feliz! 🌟"
  },
  {
    id: 2,
    question: "O Otto usa cadeira de rodas. Qual direito do ECA garante que ele possa brincar no pátio e acessar as salas da escola?",
    options: [
      "O direito de comer doces na hora do lanche",
      "O direito de não fazer o dever de casa",
      "O direito de ganhar brinquedos novos da professora",
      "O direito à acessibilidade, inclusão e atendimento especializado"
    ],
    answerIndex: 3,
    characterId: "otto",
    characterFeedback: "Sensacional! É o direito de ter rampas, elevadores e um pátio acessível para que todos possamos brincar e aprender juntos sem barreiras! 🏀"
  },
  {
    id: 3,
    question: "Quando o Biel se sentiu muito ansioso e triste por usar demais as telas do celular, o que os amigos e a escola lhe ensinaram baseados no ECA?",
    options: [
      "Que ele precisava resolver o problema sozinho e em silêncio",
      "Que ele deve continuar usando jogos à noite toda",
      "Que todas as crianças têm direito a cuidados com a saúde física e mental, e tempo livre ao ar livre",
      "Que as crianças não precisam dormir cedo"
    ],
    answerIndex: 2,
    characterId: "biel",
    characterFeedback: "Certinho! Encontrar equilíbrio nas brincadeiras e conversar com quem amamos protege nossa mente. O ECA nos dá o direito à saúde integral! 🌸"
  },
  {
    id: 4,
    question: "O Cauê é o aluno indígena novo da turma. Qual direito do ECA garante que ele traga orgulho das suas raízes e cultura?",
    options: [
      "O direito ao respeito à sua herança cultural, crenças e valores tradicionais",
      "O direito de não participar das tarefas escolares",
      "O direito de mandar sozinho em toda a escola",
      "O direito de ganhar um cocar de ouro eletrônico"
    ],
    answerIndex: 0,
    characterId: "caue",
    characterFeedback: "Hara, katu! (Muito bem!) O ECA protege a nossa cultura indígena e brasileira, mostrando que nossa diversidade de crenças deve ser amada e respeitada! 🌿"
  },
  {
    id: 5,
    question: "Se alguém colocar apelidos maldosos ou rir de um colega repetidamente na internet ou na escola (o chamado bullying), o ECA protege essa criança?",
    options: [
      "Não, cada um precisa aprender a se defender sozinho",
      "Sim, toda criança tem direito à dignidade, ao respeito e a ser protegida contra qualquer crueldade ou opressão",
      "Apenas se o colega for o mais forte da sala",
      "Não, piadas maldosas não fazem mal a ninguém"
    ],
    answerIndex: 1,
    characterId: "leia",
    characterFeedback: "Perfeito! O direito ao respeito e à dignidade protege a nossa individualidade e proíbe piadas maldosas ou bullying. Somos todos especiais! 💖"
  },
  {
    id: 6,
    question: "De quem é o dever de assegurar, com prioridade absoluta, os direitos à vida, saúde, alimentação e educação de todas as crianças?",
    options: [
      "Somente das próprias crianças cuidarem de si mesmas",
      "Da família, da comunidade, da sociedade em geral e do Poder Público (governo)",
      "Apenas das escolas particulares e professores",
      "Somente dos criadores de jogos e aplicativos de internet"
    ],
    answerIndex: 1,
    characterId: "dandara",
    characterFeedback: "Excelente resposta! O ECA é claro: proteger a infância é um dever coletivo e prioritário compartilhado por toda a sociedade e pelo Estado! 🏛️"
  },
  {
    id: 7,
    question: "Segundo o ECA Digital, qual regra protege menores de 16 anos ao criarem novos perfis em redes sociais ou jogos de internet?",
    options: [
      "Podem inventar qualquer idade que desejarem sem supervisão",
      "Não há nenhuma proteção extra além das que já existiam",
      "Eles precisam de vinculação obrigatória e autorização de seus pais ou responsáveis",
      "Ficam proibidos de ler ou usar qualquer site educativo"
    ],
    answerIndex: 2,
    characterId: "ana",
    characterFeedback: "Isso mesmo! O ECA Digital proíbe a simples autodeclaração de idade e exige que contas de menores sejam protegidas sob o aval dos papais! 📱"
  },
  {
    id: 8,
    question: "O que o ECA Digital estabelece sobre a venda de 'caixas de recompensa' (loot boxes) compradas com moedas reais em jogos para crianças?",
    options: [
      "São totalmente liberadas a qualquer momento",
      "São proibidas de serem oferecidas ou vendidas para menores, protegendo-os de mecanismos viciantes de aposta",
      "Elas dão direito a pontos extras na prova de matemática da escola",
      "Qualquer criança pode comprar escondida no cartão dos pais"
    ],
    answerIndex: 1,
    characterId: "otto",
    characterFeedback: "Gol de placa! O ECA Digital baniu esse mecanismo que induz crianças a gastarem dinheiro sem saber qual prêmio virá, protegendo nossa saúde financeira e mental! 🏀"
  },
  {
    id: 9,
    question: "A classificação indicativa de idade em jogos eletrônicos e desenhos animados existe para o quê?",
    options: [
      "Para estragar a diversão e nos proibir de jogar",
      "Para mostrar qual o bicho de estimação preferido de cada jogo",
      "Para orientar a família se o conteúdo é saudável e livre de violência ou cenas impróprias para nossa faixa de idade",
      "Para decidir qual jogo é o mais caro da loja de aplicativos"
    ],
    answerIndex: 2,
    characterId: "leia",
    characterFeedback: "Isso aí! A classificação etária ajuda nossos responsáveis a escolherem jogos e vídeos divertidos que combinam direitinho com o nosso amadurecimento! 🙌"
  },
  {
    id: 10,
    question: "Se uma criança estiver trabalhando em tarefas pesadas que a impedem de frequentar a escola e brincar, de acordo com o ECA, isso é:",
    options: [
      "Uma atitude ótima para ela economizar moedas",
      "Proibido. O trabalho infantil é ilegal e toda criança deve ter direito ao estudo, ao carinho e ao lazer",
      "Permitido apenas se ela trabalhar menos de 10 horas por dia",
      "Obrigatório para ajudar a comprar jogos caros de videogame"
    ],
    answerIndex: 1,
    characterId: "caue",
    characterFeedback: "Certíssimo! Criança não trabalha, criança dá trabalho (no bom sentido) e deve ter resguardado todo tempo para brincar, criar e estudar! 🌿"
  },
  {
    id: 11,
    question: "Qual atitude ajuda a proteger seus dados pessoais e privacidade em chats e jogos na internet?",
    options: [
      "Nunca compartilhar senhas, seu nome completo, endereço da escola ou fotos pessoais com desconhecidos",
      "Enviar fotos da sua casa para todo adversário que vencer você em partidas online",
      "Colocar o seu número de telefone visível no perfil público para ganhar novas estrelas",
      "Contar para todo mundo a senha do e-mail do seu pai para provar que confia neles"
    ],
    answerIndex: 0,
    characterId: "biel",
    characterFeedback: "Mandou muito bem! A nossa segurança começa e termina em manter nossos detalhes confidenciais em segredo de estranhos! 🛡️"
  },
  {
    id: 12,
    question: "Por que brincar ao ar livre no parque com amigos traz mais saúde integral do que ficar 10 horas sem parar em frente às telas?",
    options: [
      "Porque as árvores do parque ensinam matemática mais rápido",
      "Porque o ECA garante o direito à saúde física e desenvolvimento livre de vícios em designs aditivos da tecnologia",
      "Porque brincar em telas gasta mais energia elétrica do que a bateria do celular aguenta",
      "Porque as telas fáceis causam alergia na ponta dos dedos das crianças"
    ],
    answerIndex: 1,
    characterId: "dandara",
    characterFeedback: "Sensacional! Equilíbrio é a chave. Correr sob a luz do sol, rir e chutar uma bola previne a ansiedade excessiva e cuida do nosso corpinho! 💚"
  },
  {
    id: 13,
    question: "Se uma criança precisar de remédios ou consultas médicas na rede pública de saúde, o ECA garante atendimento pelo SUS?",
    options: [
      "Sim, garante atendimento médico integral, vacinação gratuita e todo o suporte necessário para crescer com saúde",
      "Apenas se ela pagar uma taxa mensal ao posto local",
      "Não, crianças não têm prioridade no sistema público de saúde",
      "Somente se a escola aprovar os seus registros de boletim anual"
    ],
    answerIndex: 0,
    characterId: "otto",
    characterFeedback: "Com certeza! É um direito fundamental garantido. A saúde da criança sempre vem em primeiro lugar no atendimento público! 🌸"
  },
  {
    id: 14,
    question: "O Cauê fala a língua tradicional de seu povo indígena. Como a escola deve recebê-lo segundo as diretrizes de direitos humanos do ECA?",
    options: [
      "Proibindo o uso de sua língua em qualquer espaço",
      "Acolhendo sua riqueza cultural, promovendo o respeito à sua língua materna e promovendo a inclusão de todos os povos",
      "Enviando o Cauê para estudar em um local isolado da turma",
      "Dizendo que a sua história de vida e seus conhecimentos não são importantes"
    ],
    answerIndex: 1,
    characterId: "caue",
    characterFeedback: "Amizade sincera! Estudar juntos valorizando as origens de cada amigo nos ensina a ser cidadãos sem preconceitos! 🌿"
  },
  {
    id: 15,
    question: "Se você se deparar com algo feio, assustador, ou com mensagens esquisitas na internet, o que deve fazer imediatamente?",
    options: [
      "Guardar segredo e continuar lendo e jogando escondido",
      "Avisar imediatamente o papai, a mamãe, sua professora ou outro adulto responsável em quem confie",
      "Responder à mensagem com um apelido maldoso ainda pior",
      "Apagar o computador e nunca mais ir à escola"
    ],
    answerIndex: 1,
    characterId: "biel",
    characterFeedback: "Exatamente! Esconder medos só nos faz sentir mais sós. Um adulto protetor saberá bloquear o conteúdo e nos manter em segurança! 🌟"
  },
  {
    id: 16,
    question: "Qual o principal papel do Conselho Tutelar em nosso município de acordo com o Estatuto da Criança?",
    options: [
      "Prender as crianças que não tiram notas azuis nas provas",
      "Zelar pelo cumprimento diário dos direitos da criança e do adolescente estabelecidos na lei",
      "Decidir quais jogos de videogame devem ser criados no Brasil",
      "Distribuir balas e doces na porta das escolas toda sexta-feira"
    ],
    answerIndex: 1,
    characterId: "dandara",
    characterFeedback: "Na mosca! O Conselho Tutelar é um órgão encarregado pela sociedade para agir sempre que um direito da criança estiver ameaçado ou violado! 📜"
  },
  {
    id: 17,
    question: "Toda criança tem direito de opinar e de participar livremente da vida comunitária e escolar?",
    options: [
      "Não, apenas os adultos têm direito de opinar sobre qualquer assunto doméstico ou social",
      "Sim, o ECA garante o direito à liberdade de expressão, opinião e participação social de crianças e jovens",
      "Somente se a criança for a representante de classe",
      "Apenas se ela tirar notas máximas em matemática e história"
    ],
    answerIndex: 1,
    characterId: "leia",
    characterFeedback: "Muito bom! Ouvir a voz das crianças no desenho de nossa comunidade ajuda a construir um mundo muito mais acolhedor e justo! 🪁"
  },
  {
    id: 18,
    question: "Qual destas práticas ajuda a evitar o cansaço mental ou vício provocado pelos algoritmos de recomendação automática das redes sociais?",
    options: [
      "Deixar o celular ligado no autoplay rodando vídeos sem pausa a noite inteira",
      "Estabelecer horários claros de uso com a família e priorizar brincadeiras manuais, estudos e leituras físicas",
      "Abrir 15 aplicativos diferentes ao mesmo tempo para competir com outros amigos",
      "Comprar celulares mais modernos com taxas de atualização extremamente rápidas"
    ],
    answerIndex: 1,
    characterId: "ana",
    characterFeedback: "Incrível percepção! O design de recomendação tenta nos prender por horas, e estabelecer combinados com a família salva nossa criatividade natural e sono! 📕"
  },
  {
    id: 19,
    question: "Ao nascer, qual documento oficial é emitido gratuitamente para garantir que você tenha um nome, nacionalidade e seja reconhecido perante as leis?",
    options: [
      "A Certidão de Nascimento",
      "A carteirinha do fã-clube oficial de jogos eletrônicos",
      "O recibo do ingresso do cinema do shopping",
      "Um crachá provisório de estudante infantil"
    ],
    answerIndex: 0,
    characterId: "ana",
    characterFeedback: "Excelente! A Certidão de Nascimento é o primeiro registro do bebê e comprova que ele existe oficialmente, abrindo as portas do SUS e da escola pública! 📑"
  },
  {
    id: 20,
    question: "Se os pais ou responsáveis de um colega estiverem com dificuldades graves de saúde e finanças, o que a assistência do ECA prevê?",
    options: [
      "Que a criança seja expulsa da escola imediatamente para não atrapalhar",
      "A inclusão da família em programas públicos de apoio social, renda, moradia e saúde para preservar a convivência familiar unida",
      "Que os vizinhos decidam sozinhos como cuidar de toda a situação sem ajuda de ninguém",
      "Que a criança procure emprego para sustentar a casa aos 8 anos de idade"
    ],
    answerIndex: 1,
    characterId: "leia",
    characterFeedback: "Perfeito! O ECA prioriza a permanência da criança em sua comunidade familiar original, oferecendo amparo público aos pais sob as leis de assistência! 💚"
  }
];

const mediaClippings = [
  {
    category: "Prêmio Acadêmico",
    title: "Finalista do prêmio Expocom Centro-Oeste 2024",
    source: "Intercom Co / UFG",
    date: "Junho 2024",
    desc: "O projeto representou o curso de Cinema/Audiovisual e o Curso de Direito da UEG como finalista na modalidade 'Ficção em Áudio e Rádio/Podcast', consagrando a sinergia entre pesquisa acadêmica de extensão e rádio pública.",
    link: "https://intercomco.plateia.ufg.br/p/50184-premio-expocom"
  },
  {
    category: "Notícia Científica",
    title: "Aluna da UEG apresenta 'Turminha do Bem' no Intercom",
    source: "Portal de Notícias NAUFO / UEG",
    date: "10/06/2024",
    desc: "A acadêmica Carolina Coppe apresentou em detalhes os resultados sociais de engajamento do podcast na rede infantil da região. A pesquisa buscou demonstrar a força da sonoridade foley sobre os pequenos.",
    link: "https://www.ueg.br/naufo/noticia/68172_aluna_da_ueg_apresenta_turminha_do_bem_projeto_finalista_do_intercom"
  },
  {
    category: "Pesquisa Acadêmica",
    title: "Trabalho de Conclusão de Curso (TCC) focado no NAUFO",
    source: "Biblioteca Digital UEG",
    date: "2024",
    desc: "A pesquisa 'Podcast Turminha do Bem: Um Estudo do Processo de Produção por meio do Núcleo Audiovisual de Produção de Foleys (NAUFO)' de Anna Carolina Coppe mapeou as técnicas expressivas de áudio aplicadas.",
    link: "https://www.escavador.com/sobre/6834197/georgia-cynara-coelho-de-souza-santana"
  },
  {
    category: "Estreia Institucional",
    title: "CriaLab lança podcast juridico-infantil no Mês das Crianças",
    source: "Portal de Comunicação da UEG",
    date: "18/10/2023",
    desc: "A matéria realça a articulação entre as unidades acadêmicas, docentes de Iporá e técnicos audiovisuais para viabilizar um produto com estética foley que descomplica o teor jurídico do Estatuto infantil.",
    link: "https://www.ueg.br/iacsa/administracao/ccseh/noticia/63540"
  },
  {
    category: "Divulgação UEG",
    title: "Lançamento oficial em parceria com a Rádio UEG Educativa",
    source: "Sessão Informativa Rádio UEG",
    date: "Outubro 2023",
    desc: "Relato do esforço de transmissão regional e catalogação digital nos sistemas da rádio pública, com resumos didáticos.",
    link: "https://www.ueg.br/radio/noticia/63592_crialab_naufo_e_radio_ueg_educativa_lancam_o_projeto_de_podcast_infantil_turminha_do_bem"
  },
  {
    category: "Tecnologia e Futuro",
    title: "Participação e Demonstração no Campus Future 2024",
    source: "NAUFO institucional",
    date: "Março 2024",
    desc: "Destaque do podcast na exposição tecnológica estudantil, integrando inovação em narrativa de rádio e áudio sob demanda para alfabetização cidadã.",
    link: "https://www.ueg.br/naufo/noticia/68265_naufo_no_campus_future"
  }
];

const sitesData = [
  {
    category: "Sites Oficiais e Governamentais",
    title: "ECA Ilustrado para Crianças (Plenarinho)",
    link: "https://plenarinho.leg.br/index.php/2018/07/estatuto-da-crianca-e-do-adolescente/",
    desc: "Revistinha ilustrada do ECA preparada pela Câmara dos Deputados para crianças, facilitando o download e a leitura lúdica.",
    highlight: "Excelente material para impressão e leitura infantil em sala de aula.",
    tags: ["oficial", "plenarinho", "câmara", "ilustrado", "pdf", "escola"]
  },
  {
    category: "Sites Oficiais e Governamentais",
    title: "ECA Digital – Portal Oficial (Ministério da Justiça)",
    link: "https://www.gov.br/mj/pt-br/assuntos/sua-protecao/sedigi/eca-digital/eca-digital-1",
    desc: "Canal governamental oficial que detalha as regras e disposições da Lei nº 15.211/2025 (ECA Digital) para segurança na internet.",
    highlight: "Legislação e diretrizes federais primárias para a proteção de dados infantis.",
    tags: ["oficial", "eca digital", "governo", "lei", "mjsp", "dados", "internet"]
  },
  {
    category: "Sites Oficiais e Governamentais",
    title: "Cartilha ECA Digital (Defensoria Pública do RJ)",
    link: "https://defensoria.rj.def.br/uploads/arquivos/f634e315de964f5a9c934814e73d0409.pdf",
    desc: "Guia completo em PDF produzido por defensores públicos para orientar famílias e escolas no combate ao cyberbullying e vício em telas.",
    highlight: "Material muito didático com dicas para pais sobre controle parental e limites.",
    tags: ["oficial", "cartilha", "defensoria", "pdf", "cyberbullying", "telas", "família"]
  },
  {
    category: "Sites Oficiais e Governamentais",
    title: "Comitê de Proteção Digital (MDHC)",
    link: "https://www.gov.br/mdh/pt-br",
    desc: "Portal do Ministério dos Direitos Humanos e Cidadania, responsável por coordenar a proteção de crianças no ambiente tecnológico.",
    highlight: "Políticas públicas intersetoriais de cidadania digital nacional.",
    tags: ["oficial", "mdhc", "direitos humanos", "cidadania", "plataformas"]
  },
  {
    category: "Jogos e Recursos Lúdicos",
    title: "Chegou o Aventureca! (Jogo do Plenarinho)",
    link: "https://plenarinho.leg.br/index.php/2024/08/chegou-o-aventureca/",
    desc: "Jogo interativo oficial da Câmara dos Deputados onde as crianças exploram um mundo de avatar focado nos direitos da infância.",
    highlight: "Abordagem lúdica divertida e game interativo totalmente gratuito.",
    tags: ["jogos", "aventureca", "lúdico", "câmara", "interativo", "play"]
  },
  {
    category: "Jogos e Recursos Lúdicos",
    title: "Escola Games – Jogo Direitos da Criança",
    link: "https://www.escolagames.com.br/jogos/direito-da-crianca",
    desc: "Divertido game educativo que ensina o ECA com quebra-cabeças e desafios coloridos em uma das maiores plataformas de jogos escolares.",
    highlight: "Ótimo recurso gamificado de fixação e engajamento para professores.",
    tags: ["jogos", "escola games", "lúdico", "educativo", "gamificado"]
  },
  {
    category: "Jogos e Recursos Lúdicos",
    title: "ECA Digital nos Games (MPES)",
    link: "https://mpes.mp.br/noticias/2026/03/17/eca-digital-entra-em-vigor-e-busca-garantir-protecao-de-criancas-e-adolescentes-no-ambiente-de-jogos-online/",
    desc: "Informativo do Ministério Público do ES sobre as restrições de caixas de recompensa em jogos e fomento a ambientes virtuais seguros.",
    highlight: "Balanço essencial sobre o combate a práticas abusivas e apostas camufladas.",
    tags: ["jogos", "mpes", "proteção", "caixas de recompensa", "loot boxes", "leis"]
  },
  {
    category: "Jogos e Recursos Lúdicos",
    title: "Livro Digital: Virando o Jogo da Proteção (Instituto Alana)",
    link: "https://alana.org.br/wp-content/uploads/2026/03/eca-digital-protecao-online-criancas-adolescentes-livro-digital.pdf",
    desc: "Publicação infantil do Alana explicando as conquistas do ECA Digital e o combate ao design de forma criativa.",
    highlight: "Linguagem colorida, cheia de ilustrações dinâmicas para crianças de 6 a 12 anos.",
    tags: ["jogos", "alana", "livro digital", "pdf", "alegre", "infantil", "proteção"]
  },
  {
    category: "Materiais Pedagógicos e Educativos",
    title: "Imprensa e Guias de Proteção (Alana)",
    link: "https://alana.org.br/",
    desc: "Repositório completo da principal ONG brasileira defensora do 'Rights by Design' (direitos pensados desde o início das tecnologias).",
    highlight: "Biblioteca de estudos científicos e artigos de ponta sobre infância livre de telas aditivas.",
    tags: ["pedagógico", "alana", "direitos by design", "estudos", "artigos", "escolas"]
  },
  {
    category: "Materiais Pedagógicos e Educativos",
    title: "Análise dos Impactos nos Jogos Eletrônicos (Conjur)",
    link: "https://www.conjur.com.br/2025-out-22/impactos-do-eca-digital-no-segmento-de-jogos-eletronicos/",
    desc: "Estudo sobre verificação de idade por biometria e bloqueio inteligente de microtransações conforme as diretrizes do ECA Digital.",
    highlight: "Leitura jurídica avançada recomendada para desenvolvedores e produtores de mídia.",
    tags: ["pedagógico", "conjur", "análise jurídica", "biometria", "desenvolvedores", "regulamentação"]
  },
  {
    category: "Notícias e Análises",
    title: "ECA Digital entra em vigor no Brasil (G1 Notícias)",
    link: "https://g1.globo.com/tecnologia/noticia/2026/03/17/eca-digital-comeca-a-valer-e-impoe-novas-regras-para-criancas-e-jovens-em-redes-sociais-jogos-e-sites.ghtml",
    desc: "Reportagem do G1 cobrindo a entrada em vigor da lei digital, penalidades para big techs e obrigatoriedade da guarda parental ativa.",
    highlight: "Visão jornalística rápida com infográficos e análise de multas no país.",
    tags: ["notícias", "g1", "reportagem", "regras", "redes sociais", "multas"]
  },
  {
    category: "Notícias e Análises",
    title: "Canal Oficial de Transmissão (Spotify)",
    link: "https://open.spotify.com/show/4GcI4KnoqN4xfdYNxAAvYn",
    desc: "Acesso à playlist completa do Podcast Turminha do Bem com 8 episódios comentados abordando a diversidade, inclusão e o ECA de forma cativante.",
    highlight: "Sinfonia de Foley licenciada e realizada cientificamente pela UEG.",
    tags: ["notícias", "spotify", "áudio", "episódios", "foley", "gravações"]
  }
];

// Character profiles index
const characterProfiles = [
  {
    id: "ana",
    name: "Ana",
    role: "A Líder Protagonista",
    color: "#ff6b6b",
    iconColor: "bg-red-100 text-red-600 border-red-200",
    bubbleBg: "bg-red-50 text-slate-800 border-red-100",
    initialGreeting: "Oi! Eu sou a Ana! 💖 Sabia que nós, crianças, temos leis super legais criadas só para nos proteger? Eu sou super curiosa e adoro liderar as brincadeiras da turminha. Do que você gostaria de conversar hoje? Adoro falar sobre direitos!",
    traits: ["Curiosa", "Líder natural", "Apresenta o ECA"]
  },
  {
    id: "biel",
    name: "Biel",
    role: "Símbolo de Empatia",
    color: "#4ecdc4",
    iconColor: "bg-teal-100 text-teal-600 border-teal-200",
    bubbleBg: "bg-teal-50 text-slate-800 border-teal-100",
    initialGreeting: "Olá... Tudo bem? Eu sou o Biel! 🌸 No início das aulas eu me sentia um pouco ansioso e passava muito tempo no celular, mas meus amigos me ensinaram que conversar ajuda muito. Também descobri meus direitos ao nome e a respeito. Qual é o seu nome? Vamos conversar?",
    traits: ["Sensível", "Venceu a ansiedade", "Combate ao Bullying"]
  },
  {
    id: "leia",
    name: "Léia",
    role: "Defensora dos Amigos",
    color: "#45b7d1",
    iconColor: "bg-sky-100 text-sky-600 border-sky-200",
    bubbleBg: "bg-sky-50 text-slate-800 border-sky-100",
    initialGreeting: "Oi, tudo bem? Eu sou a Léia! ✨ Eu me importo de montão com os meus amigos e estou sempre de olho se alguém está tristinho para dar um abraço ou pedir ajuda. O direito de viver cercado de carinho e conviver na família é sagrado! Quer bater um papo?",
    traits: ["Empática", "Acolhedora", "Preocupada com o próximo"]
  },
  {
    id: "otto",
    name: "Otto",
    role: "Superação Ativa",
    color: "#96ceb4",
    iconColor: "bg-emerald-100 text-emerald-600 border-emerald-200",
    bubbleBg: "bg-emerald-50 text-slate-800 border-emerald-100",
    initialGreeting: "E aí, beleza pura? Sou o Otto! 🏀 Adoro inventar esportes e participar de tudo. Sou cadeirante e mostro para toda a escola que o direito à acessibilidade deixa o mundo mais legal para todo mundo! Qual é o seu esporte favorito?",
    traits: ["Adora esportes", "Cadeirante ativo", "Defende acessibilidade"]
  },
  {
    id: "caue",
    name: "Cauê",
    role: "Riqueza Cultural",
    color: "#e67e22",
    iconColor: "bg-orange-100 text-orange-600 border-orange-200",
    bubbleBg: "bg-orange-50 text-slate-800 border-orange-100",
    initialGreeting: "Hara, katu! (Isso significa Olá, tudo bem!) Eu sou o Cauê! 🌿 Sou indígena e trago orgulho das minhas raízes e florestas para nossa escola. Sabia que as crianças também têm o direito de preservar sua cultura e crenças tradicionais? Deseja ouvir uma lenda ou conversar?",
    traits: ["Origem Indígena", "Ama a natureza", "Unio a Turma"]
  },
  {
    id: "dandara",
    name: "Profª Dandara",
    role: "Educadora dos Direitos",
    color: "#9b59b6",
    iconColor: "bg-purple-100 text-purple-600 border-purple-200",
    bubbleBg: "bg-purple-50 text-slate-800 border-purple-100",
    initialGreeting: "Olá, querido(a) estudante! Sou a Professora Dandara. 📚 Minha missão na escola é orientar essa turminha linda sobre seus direitos fundamentais e o valor do respeito mútuo. Que dúvida jurídica ou educativa sobre o ECA posso ajudar você a esclarecer hoje?",
    traits: ["Professora amável", "Pedagoga do ECA", "Mediadora pacífica"]
  }
];

// Helper components for Custom Inline SVGs representing characters
interface CharacterAvatarProps {
  id: string;
  className?: string;
}

const CharacterAvatar: React.FC<CharacterAvatarProps> = ({ id, className }) => {
  // Customized cute colorful SVG representations of characters
  switch (id) {
    case "ana":
      return (
        <svg viewBox="0 0 100 100" className={cn("rounded-full bg-red-100 border-2 border-red-300 shadow-inner", className)}>
          <circle cx="50" cy="54" r="32" fill="#fed7d7" /> {/* Face */}
          <path d="M15 45 C 20 15, 80 15, 85 45 C 80 40, 20 40, 15 45" fill="#744210" /> {/* Hair backing */}
          <circle cx="38" cy="55" r="4.5" fill="#2d3748" /> {/* Eye left */}
          <circle cx="62" cy="55" r="4.5" fill="#2d3748" /> {/* Eye right */}
          <circle cx="34" cy="58" r="3" fill="#feb2b2" opacity="0.6" /> {/* Blush left */}
          <circle cx="66" cy="58" r="3" fill="#feb2b2" opacity="0.6" /> {/* Blush right */}
          <path d="M44 64 Q 50 69 56 64" fill="none" stroke="#2d3748" strokeWidth="2.5" strokeLinecap="round" /> {/* Mouth */}
          <path d="M 28 32 C 30 20, 70 20, 72 32" fill="none" stroke="#f56565" strokeWidth="5" strokeLinecap="round" /> {/* Heart Headband */}
          <path d="M 50 25 L 47 21 A 3 3 0 0 1 53 21 Z" fill="#e53e3e" /> {/* Headband ornament */}
        </svg>
      );
    case "biel":
      return (
        <svg viewBox="0 0 100 100" className={cn("rounded-full bg-teal-100 border-2 border-teal-300 shadow-inner", className)}>
          <circle cx="50" cy="54" r="32" fill="#e6fffa" /> {/* Face */}
          <path d="M20 42 C 25 20, 75 20, 80 42 L 80 32 L 20 32 Z" fill="#2d3748" /> {/* Hair */}
          <circle cx="38" cy="54" r="10" fill="none" stroke="#319795" strokeWidth="2.5" /> {/* Glass glass left */}
          <circle cx="62" cy="54" r="10" fill="none" stroke="#319795" strokeWidth="2.5" /> {/* Glass glass right */}
          <line x1="48" y1="54" x2="52" y2="54" stroke="#319795" strokeWidth="2.5" /> {/* Glasses bridge */}
          <circle cx="38" cy="54" r="3" fill="#2d3748" /> {/* Eye left */}
          <circle cx="62" cy="54" r="3" fill="#2d3748" /> {/* Eye right */}
          <path d="M45 66 Q 50 62 55 66" fill="none" stroke="#2d3748" strokeWidth="2" strokeLinecap="round" /> {/* Shy smile */}
        </svg>
      );
    case "leia":
      return (
        <svg viewBox="0 0 100 100" className={cn("rounded-full bg-sky-100 border-2 border-sky-300 shadow-inner", className)}>
          <circle cx="50" cy="54" r="32" fill="#e0f2fe" /> {/* Face */}
          {/* Curly hair dots/bumps */}
          <circle cx="20" cy="40" r="12" fill="#451a03" />
          <circle cx="80" cy="40" r="12" fill="#451a03" />
          <circle cx="30" cy="26" r="13" fill="#451a03" />
          <circle cx="70" cy="26" r="13" fill="#451a03" />
          <circle cx="50" cy="22" r="14" fill="#451a03" />
          {/* Facial elements */}
          <circle cx="38" cy="56" r="4.5" fill="#2d3748" />
          <circle cx="62" cy="56" r="4.5" fill="#2d3748" />
          <path d="M43 64 Q 50 71 57 64" fill="none" stroke="#2d3748" strokeWidth="2.5" strokeLinecap="round" /> {/* Warm smile */}
          <circle cx="34" cy="60" r="3.5" fill="#f0abfc" opacity="0.7" />
          <circle cx="66" cy="60" r="3.5" fill="#f0abfc" opacity="0.7" />
          <path d="M 28 42 L 72 42" fill="none" stroke="#a21caf" strokeWidth="4" /> {/* Hair clip */}
        </svg>
      );
    case "otto":
      return (
        <svg viewBox="0 0 100 100" className={cn("rounded-full bg-emerald-100 border-2 border-emerald-300 shadow-inner", className)}>
          <circle cx="50" cy="54" r="32" fill="#f0fdf4" /> {/* Face */}
          <path d="M 22 45 L 30 20 L 50 25 L 70 20 L 78 45 L 68 40 L 50 44 L 32 40 Z" fill="#b45309" /> {/* Spiky hair */}
          <circle cx="38" cy="55" r="4" fill="#2d3748" />
          <circle cx="62" cy="55" r="4" fill="#2d3748" />
          <path d="M42 63 Q 50 70 58 63" fill="none" stroke="#2d3748" strokeWidth="3" strokeLinecap="round" /> {/* Confident smile */}
          {/* Glasses or cool look */}
          <path d="M32 48 L 44 48" stroke="#047857" strokeWidth="2.5" />
          <path d="M56 48 L 68 48" stroke="#047857" strokeWidth="2.5" />
        </svg>
      );
    case "caue":
      return (
        <svg viewBox="0 0 100 100" className={cn("rounded-full bg-amber-100 border-2 border-amber-300 shadow-inner", className)}>
          <circle cx="50" cy="54" r="32" fill="#fdf6e2" /> {/* Face */}
          <path d="M 18 50 C 18 20, 82 20, 82 50 C 72 45, 28 45, 18 50" fill="#1e293b" /> {/* Straight dark hair */}
          <path d="M 18 50 L 22 75 L 26 50" fill="#1e293b" /> {/* Left hair strand */}
          <path d="M 82 50 L 78 75 L 74 50" fill="#1e293b" /> {/* Right hair strand */}
          <circle cx="38" cy="56" r="4.5" fill="#2d3748" />
          <circle cx="62" cy="56" r="4.5" fill="#2d3748" />
          <path d="M43 65 Q 50 61 57 65" fill="none" stroke="#2d3748" strokeWidth="2.5" strokeLinecap="round" /> {/* Calming smile */}
          {/* Feather ornament */}
          <path d="M 50 22 C 55 5, 52 2, 48 10 Z" fill="#ea580c" /> {/* Big feather */}
          <path d="M 45 23 C 48 12, 45 10, 42 16 Z" fill="#eab308" /> {/* Small feather */}
          <line x1="40" y1="23" x2="60" y2="23" stroke="#dc2626" strokeWidth="3" /> {/* Red headband strap */}
        </svg>
      );
    case "dandara":
      return (
        <svg viewBox="0 0 100 100" className={cn("rounded-full bg-purple-100 border-2 border-purple-300 shadow-inner", className)}>
          <circle cx="50" cy="54" r="32" fill="#faf5ff" /> {/* Face */}
          <circle cx="50" cy="18" r="14" fill="#1a0c2e" /> {/* Top bun hair */}
          <path d="M 16 52 C 16 28, 84 28, 84 52" fill="#1a0c2e" /> {/* Main hair back */}
          <circle cx="37" cy="54" r="9" fill="none" stroke="#d97706" strokeWidth="2" /> {/* Gold glasses left */}
          <circle cx="63" cy="54" r="9" fill="none" stroke="#d97706" strokeWidth="2" /> {/* Gold glasses right */}
          <line x1="46" y1="54" x2="54" y2="54" stroke="#d97706" strokeWidth="2" /> {/* Glasses bridge */}
          <circle cx="37" cy="54" r="3" fill="#2d3748" />
          <circle cx="63" cy="54" r="3" fill="#2d3748" />
          <path d="M42 66 Q 50 72 58 66" fill="none" stroke="#2d3748" strokeWidth="2.5" strokeLinecap="round" /> {/* Kind teacher smile */}
          <rect x="42" y="15" width="16" height="5" rx="2" fill="#d97706" /> {/* Headband */}
        </svg>
      );
    default:
      return null;
  }
};

export default function Page() {
  const [activeTab, setActiveTab] = React.useState<string>("overview");
  const [activeCharacterId, setActiveCharacterId] = React.useState<string>("ana");
  const [chatInputs, setChatInputs] = React.useState<string>("");
  
  // Desafio do ECA State
  const [currentQuestionIdx, setCurrentQuestionIdx] = React.useState<number>(0);
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null);
  const [isCorrect, setIsCorrect] = React.useState<boolean | null>(null);
  const [showFeedback, setShowFeedback] = React.useState<boolean>(false);

  // Search filter for episodes
  const [episodeSearch, setEpisodeSearch] = React.useState<string>("");
  
  // Audio Player Simulated State
  const [playingEpId, setPlayingEpId] = React.useState<number | null>(null);
  const [playbackProgress, setPlaybackProgress] = React.useState<number>(0);
  const [timerInterval, setTimerInterval] = React.useState<NodeJS.Timeout | null>(null);

  // Storage for Chat histories across different characters so they are remembered.
  const [allHistories, setAllHistories] = React.useState<Record<string, Message[]>>({
    ana: [{ role: "model", content: characterProfiles[0].initialGreeting }],
    biel: [{ role: "model", content: characterProfiles[1].initialGreeting }],
    leia: [{ role: "model", content: characterProfiles[2].initialGreeting }],
    otto: [{ role: "model", content: characterProfiles[3].initialGreeting }],
    caue: [{ role: "model", content: characterProfiles[4].initialGreeting }],
    dandara: [{ role: "model", content: characterProfiles[5].initialGreeting }]
  });

  const [isTyping, setIsTyping] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  // SVG Chart states
  const [hoveredBarIndex, setHoveredBarIndex] = React.useState<number | null>(null);
  const [hoveredPieIndex, setHoveredPieIndex] = React.useState<number | null>(null);

  // Chat message container ref for auto scroll
  const chatContainerRef = React.useRef<HTMLDivElement | null>(null);

  // Scroll to chat bottom when messages change
  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [allHistories, isTyping, activeCharacterId]);

  // Audio simulation ticker
  React.useEffect(() => {
    if (playingEpId !== null) {
      const interval = setInterval(() => {
        setPlaybackProgress((prev) => {
          if (prev >= 100) {
            setPlayingEpId(null);
            return 0;
          }
          return prev + 1.5;
        });
      }, 300);
      return () => clearInterval(interval);
    }
  }, [playingEpId]);

  const activeProfile = characterProfiles.find((p) => p.id === activeCharacterId) || characterProfiles[0];
  const activeChatJson = allHistories[activeCharacterId] || [];

  const renderMessageContent = (content: string) => {
    if (!content) return "";
    const parts = content.split("**");
    if (parts.length === 1) return content;
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        return <strong key={i} className="font-black text-slate-800">{part}</strong>;
      }
      return part;
    });
  };

  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = customPrompt || chatInputs.trim();
    if (!textToSend) return;

    if (!customPrompt) {
      setChatInputs("");
    }
    setErrorMessage(null);

    // Save user message
    const updatedMessages: Message[] = [
      ...activeChatJson,
      { role: "user", content: textToSend }
    ];

    setAllHistories((prev) => ({
      ...prev,
      [activeCharacterId]: updatedMessages
    }));

    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          character: activeCharacterId,
          messages: updatedMessages
        })
      });

      const data = await response.json();

      if (response.ok && data.reply) {
        setAllHistories((prev) => ({
          ...prev,
          [activeCharacterId]: [
            ...updatedMessages,
            { role: "model", content: data.reply }
          ]
        }));
      } else {
        setErrorMessage(data.error || "Puxa, ocorreu um pequeno problema de rádio na transmissão!");
        // Revert styling state to help kids understand
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage("Não consegui focar na conversa. Reinicie o papo ou pergunte novamente!");
    } finally {
      setIsTyping(false);
    }
  };

  const currentThemeColor = activeProfile.color;

  // Custom Quick Suggesions per character
  const quickQuestions: Record<string, string[]> = {
    ana: ["O que é o ECA?", "Quais são meus direitos fundamentais?", "Quais são os deveres das crianças?"],
    biel: ["Como lidar com ansiedade?", "O que faço em caso de bullying?", "Jogar muito no celular faz mal?"],
    leia: ["Qual a importância de ajudar os amigos?", "O que é o direito à convivência?", "Como demonstrar empatia?"],
    otto: ["O que é acessibilidade na escola?", "A educação física pode ser inclusiva?", "Como vencer as barreiras?"],
    caue: ["Quais são as tradições do seu povo?", "Me conta uma lenda da floresta?", "Como as leis protegem nossa cultura?"],
    dandara: ["O que faz um Conselho Tutelar?", "Como resolver conflitos com amizade?", "Qual o conselho para uma criança de 8 anos?"]
  };

  const handlePlaySimulatedEp = (epId: number) => {
    if (playingEpId === epId) {
      setPlayingEpId(null);
    } else {
      setPlayingEpId(epId);
      setPlaybackProgress(0);
    }
  };

  // Calculations for custom SVG charts
  const svgWidth = 500;
  const svgHeight = 250;
  const barPadding = 12;
  const barWidth = (svgWidth - 60 - barPadding * 8) / 8;

  // Categoria data setup
  const originalCategories = [
    { label: "Direitos Fundamentais", count: 3, percentage: 38, color: "#ff6b6b" },
    { label: "Inclusão & Diversidade", count: 2, percentage: 25, color: "#4ecdc4" },
    { label: "Proteção Social", count: 2, percentage: 25, color: "#9b59b6" },
    { label: "Saúde & Bem-estar", count: 1, percentage: 12, color: "#f39c12" }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F0F9FF]" id="root-viewport">
      {/* HEADER NAVBAR */}
      <nav className="sticky top-4 mx-auto w-[calc(100%-2rem)] max-w-6xl bg-white/90 backdrop-blur-md rounded-[1.5rem] border border-sky-100 shadow-sm z-50 transition-all duration-300" id="main-navigation">
        <div className="px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#00AEEF] rounded-full flex items-center justify-center text-white font-extrabold animate-bounce text-xl">
              ♥
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-[#333] block md:inline font-kids">
                TURMINHA DO BEM
              </span>
              <span className="text-xs bg-sky-100 text-sky-600 font-bold px-3 py-0.5 rounded-full ml-0 md:ml-2">
                ECA & Impacto Social
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm font-semibold">
            <a 
              href="https://open.spotify.com/show/4GcI4KnoqN4xfdYNxAAvYn" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 bg-[#1DB954] hover:bg-[#1ed760] text-white px-4 py-2 rounded-full transition-all shadow-sm hover:scale-105"
            >
              <Radio className="w-4 h-4" />
              <span className="hidden md:inline">Ouvir no</span> Spotify
            </a>
            <a 
              href="#conversa-amigavel" 
              className="bg-[#00AEEF] hover:bg-sky-600 duration-200 text-white px-4 py-2 rounded-full transition-all shadow-sm"
            >
              Falar com a Turma
            </a>
          </div>
        </div>
      </nav>

      {/* HERO / SPOTLIGHT BENTO SECTION */}
      <header className="py-6 md:py-10 relative overflow-hidden" id="hero-banner">
        <div className="max-w-6xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Podcast Spotlight Bento Box (col-span-8) */}
          <div className="lg:col-span-8 bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-sky-100/60 overflow-hidden relative flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 .py-1 bg-sky-100 text-[#00AEEF] rounded-full text-xs font-bold uppercase tracking-wider">
                  EPISÓDIO RECENTE
                </span>
                <span className="px-3 .py-1 bg-amber-100 text-[#FF7F32] rounded-full text-xs font-bold uppercase tracking-wider">
                  🏁 FINALISTA EXPOCOM CENTRAL-WEST 2024
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight font-sans leading-tight mt-2">
                O Sorriso como <br />
                <span className="text-[#00AEEF]">Ato de Resistência!</span>
              </h1>
              
              <p className="mt-4 text-sm md:text-base text-slate-500 max-w-xl leading-relaxed">
                &ldquo;O podcast infantil realizado pela <strong>Rádio UEG Educativa/NAUFO</strong> e o <strong>Curso de Direito de Iporá (UEG)</strong> descomplica o Estatuto da Criança e do Adolescente (ECA) de forma lúdica usando técnicas imersivas de Foley para o público de 5 a 10 anos.&rdquo;
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-500 font-semibold">
                <span className="px-3 py-1 bg-sky-50 rounded-lg">Universidade Estadual de Goiás</span>
                <span className="px-3 py-1 bg-sky-50 rounded-lg">Curso de Direito de Iporá</span>
                <span className="px-3 py-1 bg-sky-50 rounded-lg">NAUFO (Sonoplastia de Foley)</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 relative z-10">
              <a 
                href="https://open.spotify.com/show/4GcI4KnoqN4xfdYNxAAvYn"
                target="_blank"
                rel="noreferrer"
                className="bg-[#00AEEF] text-white px-8 py-3.5 rounded-full font-black text-sm shadow-lg shadow-sky-100 hover:bg-sky-600 transition-all active:scale-95 flex items-center gap-2"
              >
                <Radio className="w-4 h-4 text-green-300" /> Ouvir Agora no Spotify
              </a>
              <a 
                href="#conversa-amigavel" 
                className="bg-slate-800 text-white hover:bg-slate-900 duration-200 px-6 py-3.5 rounded-full text-xs font-bold shadow-sm transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-yellow-400" /> Chat Interativo
              </a>
            </div>

            {/* Aesthetic circle ornaments from the design template */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-sky-100 rounded-full opacity-50 pointer-events-none" />
            <div className="absolute right-12 top-12 w-32 h-32 border-4 border-dashed border-sky-100 rounded-full animate-spin-slow pointer-events-none" />
          </div>

          {/* Character Greeting Bento Box (col-span-4) */}
          <div className="lg:col-span-4 bg-[#FF7F32] rounded-[2rem] p-8 text-white relative flex flex-col justify-between shadow-md">
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 text-3xl">
                👋
              </div>
              <div className="bg-white text-[#FF7F32] p-5 rounded-2xl rounded-tl-none font-kids text-base font-bold shadow-xl leading-relaxed">
                Olá! Eu sou o Léo. Sabia que nosso podcast já ajudou mais de 80 mil jovens a descobrirem seus direitos de forma super alegre?
              </div>
            </div>
            
            <div className="space-y-3 mt-6">
              <p className="text-xs opacity-90 font-medium">Tem alguma dúvida ou gostaria de bater um papo amigável sobre o ECA?</p>
              <a 
                href="#conversa-amigavel" 
                className="block w-full py-3 bg-white text-[#FF7F32] rounded-xl font-black text-xs text-center uppercase tracking-wider hover:bg-opacity-90 transition-all active:scale-95"
              >
                Conversar com a Turma
              </a>
            </div>
          </div>

        </div>
      </header>

      {/* TABS SELECTOR */}
      <div className="py-4 mt-6" id="contents-navigation">
        <div 
          className="max-w-6xl mx-auto px-4 overflow-x-auto flex gap-2 justify-start md:justify-center scrollbar-none"
          style={{ paddingTop: "8px", marginLeft: "106.5px", marginTop: "0px", paddingBottom: "9px" }}
        >
          {[
            { id: "overview", label: "Visão Geral", icon: BookOpen },
            { id: "episodes", label: "Episódios", icon: Play },
            { id: "charts", label: "Dados e Estatísticas", icon: TrendingUp },
            { id: "characters", label: "Os Personagens", icon: Users },
            { id: "media", label: "Clipagem e Mídia", icon: GraduationCap },
            { id: "links", label: "Links", icon: Link2 }
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-trigger-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-300 active:scale-95",
                  active 
                    ? "bg-[#00AEEF] text-white shadow-md shadow-sky-100 scale-105" 
                    : "bg-white text-sky-600 hover:bg-sky-50/50 border border-sky-100/60 shadow-sm"
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <main className="max-w-6xl w-full mx-auto px-4 md:px-6 py-6 flex-grow animate-fade-in" id="primary-content-workspace">
        
        {/* BARRA DE PESQUISA GLOBAL (Site-Wide Search) */}
        <div className="mb-8 relative max-w-2xl mx-auto">
          <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </span>
          <input
            type="text"
            placeholder="Pesquise em todo o site (ex: episódios, temas do ECA, personagens, links externos e leis)..."
            value={episodeSearch}
            onChange={(e) => setEpisodeSearch(e.target.value)}
            className="w-full pl-11 pr-12 py-3.5 border border-sky-100/80 rounded-2xl text-xs md:text-sm bg-white shadow-sm hover:border-sky-300 focus:outline-none focus:ring-2 focus:ring-[#00AEEF] transition-all font-medium text-slate-700 placeholder-slate-400"
          />
          {episodeSearch && (
            <button 
              onClick={() => setEpisodeSearch("")}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 active:scale-95 transition-all"
              title="Limpar pesquisa"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Informing the user if a global search is filtering values */}
        {episodeSearch && (
          <div className="mb-6 bg-sky-50/50 border border-sky-100 rounded-2xl p-4 text-xs font-bold text-sky-700 flex items-center justify-between animate-fade-in max-w-2xl mx-auto">
            <span>&nbsp;🔍 Buscando por &ldquo;{episodeSearch}&rdquo; nas seções do site. Navegue pelas abas para ver resultados filtrados!</span>
            <button 
              onClick={() => setEpisodeSearch("")}
              className="text-[#FF7F32] hover:underline shrink-0 pl-4"
            >
              Limpar Filtro
            </button>
          </div>
        )}

        <AnimatePresence mode="wait">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
              id="view-overview"
            >
              {/* Highlight statistics metrics row in Bento style */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Episódios Disponíveis", val: "8 EPs", text: "Temporada completa", color: "text-[#00AEEF]" },
                  { label: "Técnica Sonora", val: "Foley", text: "Áudio com vida real", color: "text-[#FF7F32]" },
                  { label: "Posição Nacional", val: "Finalista", text: "Expocom Intercom 2024", color: "text-[#82BC00]" },
                  { label: "Público Recomendado", val: "5-10a", text: "Língua adaptada", color: "text-purple-600" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-[2rem] border border-sky-50 shadow-sm bento-card text-center flex flex-col justify-between items-center hover:scale-[1.02] duration-300">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">{stat.label}</p>
                    <p className={cn("text-3xl font-black tracking-tight my-2 font-kids", stat.color)}>{stat.val}</p>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight">{stat.text}</p>
                  </div>
                ))}
              </div>

              {/* Core Presentation description */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white rounded-[2rem] p-6 md:p-8 border border-sky-100/60 shadow-sm space-y-6 bento-card">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-800 font-sans tracking-tight">
                    Sobre o Projeto <span className="text-[#00AEEF]">Turminha do Bem</span>
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    O <strong>Turminha do Bem</strong> é um podcast infantil de educação jurídica inovador realizado pela <strong>Rádio UEG Educativa/NAUFO</strong> em parceria conjunta com o <strong>Curso de Direito de Iporá</strong> da Universidade Estadual de Goiás (UEG). De forma lúdica, simples e adaptada, as histórias narram o cotidiano escolar ilustrando os direitos e deveres do Estatuto da Criança e do Adolescente (ECA).
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    Idealizado originalmente em <strong>2019</strong> pela <strong>Professora Kenia Lucena</strong> junto com acadêmicos pioneiros de Direito, o programa ganhou vida com técnica de efeitos sonoros avançados do cinema (recurso de foley executado pelo NAUFO), tornando cada barulho de carteira, brincadeira e passo super imersivo para crianças de 5 a 10 anos de idade.
                  </p>
                  <div className="bg-sky-50 border border-sky-100 p-5 rounded-2xl flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-[#00AEEF] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-800 text-sm">Nossa Missão Cívica</p>
                      <p className="text-xs text-slate-600 mt-1">
                        Democratizar o conhecimento constitucional e de direitos humanos desde a infância. Ensinar os limites e proteções estimula a cidadania consciente e o autoconhecimento preventivo nas novas gerações.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right side goals card in dark bento style */}
                <div className="bg-slate-900 text-white rounded-[2rem] p-6 md:p-8 space-y-6 relative overflow-hidden flex flex-col justify-between shadow-lg">
                  <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="space-y-6">
                    <span className="px-3 py-1 bg-white/10 rounded-lg text-xs font-bold tracking-widest text-teal-300 uppercase">
                      Quatro Objetivos
                    </span>
                    <h3 className="text-xl font-bold tracking-tight">O que buscamos alcançar:</h3>
                    
                    <ul className="space-y-4 text-xs md:text-sm">
                      <li className="flex items-start gap-2.5">
                        <span className="w-5 h-5 bg-sky-500/20 text-[#00AEEF] rounded flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                        <span><strong>Conhecimento:</strong> Traduzir o conteúdo do ECA de forma infantil e atrativa.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-5 h-5 bg-sky-500/20 text-[#00AEEF] rounded flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                        <span><strong>Socialização:</strong> Abordar amizade, combate ao racismo e inclusão.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-5 h-5 bg-sky-500/20 text-[#00AEEF] rounded flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
                        <span><strong>Suporte:</strong> Aliar rádio educativa local com pesquisa prática de TCC.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-5 h-5 bg-sky-500/20 text-[#00AEEF] rounded flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">4</span>
                        <span><strong>Apoio Escolar:</strong> Servir de recurso de apoio pedagógico para professores.</span>
                      </li>
                    </ul>
                  </div>

                  <a 
                    href="https://open.spotify.com/show/4GcI4KnoqN4xfdYNxAAvYn" 
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#00AEEF] hover:bg-sky-600 duration-200 text-white font-black text-xs text-center uppercase tracking-wider py-4 rounded-xl block shadow-md mt-6"
                  >
                    Abrir Canal de Áudio →
                  </a>
                </div>
              </div>

              {/* Project Development Timeline */}
              <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-sky-100/60 shadow-sm bento-card">
                <h3 className="text-xl font-black text-slate-800 mb-6 font-sans tracking-tight">
                  Linha do Tempo de <span className="text-[#00AEEF]">Crescimento</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {timelineData.filter((item) => {
                    const term = episodeSearch.toLowerCase().trim();
                    if (!term) return true;
                    return item.year.toLowerCase().includes(term) ||
                           item.title.toLowerCase().includes(term) ||
                           item.desc.toLowerCase().includes(term);
                  }).length === 0 ? (
                    <div className="col-span-full py-8 text-center text-slate-400 font-medium text-xs">
                      Nenhum marco da linha do tempo encontrado para &ldquo;{episodeSearch}&rdquo;
                    </div>
                  ) : (
                    timelineData.filter((item) => {
                      const term = episodeSearch.toLowerCase().trim();
                      if (!term) return true;
                      return item.year.toLowerCase().includes(term) ||
                             item.title.toLowerCase().includes(term) ||
                             item.desc.toLowerCase().includes(term);
                    }).map((item, id) => (
                      <div key={id} className="relative p-5 bg-sky-50/40 rounded-2xl border border-sky-100/30 flex flex-col justify-between hover:border-sky-300 transition-colors duration-200">
                        <div>
                          <span className="text-[10px] bg-sky-100 text-[#00AEEF] font-black px-2 py-0.5 rounded-full inline-block mb-3">
                            {item.year}
                          </span>
                          <h4 className="font-extrabold text-slate-800 text-sm mb-1">{item.title}</h4>
                          <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* NEW SECTION: Desafio do ECA */}
              <div id="game-desafio-eca" className="bg-[#FAF5FF] rounded-[2rem] p-6 md:p-8 border border-purple-100 shadow-sm bento-card space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-purple-100 text-purple-600 rounded-2xl">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] bg-purple-200 text-purple-700 font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                        Jogo Interativo para Crianças
                      </span>
                      <h3 className="text-xl font-black text-slate-800 font-sans tracking-tight mt-1">
                        Desafio do ECA: <span className="text-purple-600">Quem Sabe Mais?</span>
                      </h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-purple-700 bg-purple-100/50 px-3 py-1.5 rounded-full">
                      Pergunta {currentQuestionIdx + 1} de {ecaQuestions.length}
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-purple-500 h-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIdx + 1) / ecaQuestions.length) * 100}%` }}
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                  
                  {/* Left Column: Question and Options */}
                  <div className="lg:col-span-3 space-y-4">
                    <p className="font-extrabold text-slate-800 text-base md:text-lg">
                      {ecaQuestions[currentQuestionIdx].question}
                    </p>

                    <div className="space-y-2.5">
                      {ecaQuestions[currentQuestionIdx].options.map((option, idx) => {
                        const isSelected = selectedOption === idx;
                        const isCorrectOption = idx === ecaQuestions[currentQuestionIdx].answerIndex;

                        return (
                          <button
                            key={idx}
                            disabled={selectedOption !== null}
                            onClick={() => {
                              setSelectedOption(idx);
                              const correct = idx === ecaQuestions[currentQuestionIdx].answerIndex;
                              setIsCorrect(correct);
                              setShowFeedback(true);
                            }}
                            className={cn(
                              "w-full text-left p-4 rounded-xl border transition-all duration-200 text-xs md:text-sm font-semibold flex items-center justify-between gap-3 min-h-[44px]",
                              selectedOption === null
                                ? "bg-white border-slate-200 text-slate-700 hover:border-purple-300 hover:bg-purple-50/20 active:scale-[0.98]"
                                : isSelected
                                  ? isCorrectOption
                                    ? "bg-green-100 border-green-300 text-green-800 shadow-sm shadow-green-50"
                                    : "bg-red-100 border-red-300 text-red-800 shadow-sm shadow-red-50"
                                  : isCorrectOption
                                    ? "bg-green-50 border-green-200 text-green-700 opacity-90"
                                    : "bg-white border-slate-200 text-slate-400 opacity-60"
                            )}
                          >
                            <span>{option}</span>
                            {selectedOption !== null && (
                              <span className="shrink-0">
                                {isCorrectOption ? (
                                  <Check className="w-5 h-5 text-green-600 font-bold" />
                                ) : isSelected ? (
                                  <X className="w-5 h-5 text-red-600 font-bold" />
                                ) : null}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Column: Character Talking / Positive Feedback */}
                  <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-purple-100/50 flex flex-col items-center justify-center text-center min-h-[220px] transition-all relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      {!showFeedback ? (
                        <motion.div
                          key="waiting"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="flex flex-col items-center justify-center space-y-3 p-4"
                        >
                          <HelpCircle className="w-12 h-12 text-purple-300 animate-bounce" />
                          <p className="text-xs font-bold text-slate-500 max-w-[200px]">
                            Clique em uma opção à esquerda para testar seus conhecimentos e ganhar estrelas! 🚀
                          </p>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="feedback"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="flex flex-col items-center space-y-4 w-full"
                        >
                          {/* Character Avatar and name banner snippet */}
                          <div className="flex items-center gap-3">
                            <CharacterAvatar 
                              id={ecaQuestions[currentQuestionIdx].characterId} 
                              className={cn(
                                "w-16 h-16 shadow-md transition-all",
                                isCorrect ? "scale-110 rotate-3 ring-4 ring-green-100" : "scale-100 rotate-0"
                              )} 
                            />
                            <div className="text-left">
                              <p className="text-xs font-black text-slate-800 leading-tight">
                                {characterProfiles.find(p => p.id === ecaQuestions[currentQuestionIdx].characterId)?.name}
                              </p>
                              <p className="text-[10px] font-bold text-slate-400">
                                {isCorrect ? "✨ Parabéns, você acertou!" : "💬 Explicando com carinho:"}
                              </p>
                            </div>
                          </div>

                          {/* Speech Bubble */}
                          <div className={cn(
                            "relative p-4 rounded-2xl text-xs leading-relaxed border font-semibold text-slate-700 w-full",
                            isCorrect 
                              ? "bg-green-50/50 border-green-100 text-green-900" 
                              : "bg-amber-50/50 border-amber-100 text-amber-900"
                          )}>
                            <p>
                              {isCorrect 
                                ? ecaQuestions[currentQuestionIdx].characterFeedback 
                                : "Quase lá! Lembre-se que cada escolha ajuda a fixar o conhecimento. Para essa pergunta, o certo seria focar na acessibilidade, na inclusão ou no respeito universal das culturas! Que tal ler a resposta correta e tentar outra?"
                              }
                            </p>
                          </div>

                          {/* Controls to proceed */}
                          <button
                            onClick={() => {
                              setSelectedOption(null);
                              setIsCorrect(null);
                              setShowFeedback(false);
                              setCurrentQuestionIdx((prev) => (prev + 1) % ecaQuestions.length);
                            }}
                            className="w-full py-3 bg-purple-600 hover:bg-purple-700 duration-150 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-[0.98]"
                          >
                            {currentQuestionIdx === ecaQuestions.length - 1 ? "Reiniciar Jogo do ECA 🔄" : "Próxima Pergunta →"}
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: EPISODES */}
          {activeTab === "episodes" && (
            <motion.div
              key="episodes"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
              id="view-episodes"
            >
              <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-sky-100/60 shadow-sm bento-card">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-800 font-sans tracking-tight">
                      Explorador de <span className="text-[#00AEEF]">Capítulos (ECA)</span>
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                      Acompanhe o resumo completo dos 8 episódios, os artigos explicados do ECA e simule a transmissão.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-sky-100 text-[#00AEEF] rounded">
                      Foley Audio 
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-[#FF7F32]/10 text-[#FF7F32] rounded">
                      Rádio UEG 2023-2024
                    </span>
                  </div>
                </div>



                {/* EPISODES GRID OR EMPTY STATE */}
                {episodesData.filter((ep) => {
                  const term = episodeSearch.toLowerCase().trim();
                  if (!term) return true;
                  return (
                    ep.title.toLowerCase().includes(term) ||
                    ep.theme.toLowerCase().includes(term) ||
                    ep.synopsis.toLowerCase().includes(term) ||
                    ep.articles.toLowerCase().includes(term) ||
                    ep.articlesDetail.toLowerCase().includes(term)
                  );
                }).length === 0 ? (
                  <div className="py-12 text-center text-slate-500 font-medium flex flex-col items-center justify-center space-y-3">
                    <HelpCircle className="w-12 h-12 text-slate-300 animate-pulse" />
                    <p className="text-sm">Nenhum episódio encontrado para &ldquo;{episodeSearch}&rdquo;</p>
                    <button 
                      onClick={() => setEpisodeSearch("")}
                      className="text-[#00AEEF] underline hover:text-sky-600 text-xs font-bold"
                    >
                      Limpar pesquisa
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {episodesData.filter((ep) => {
                      const term = episodeSearch.toLowerCase().trim();
                      if (!term) return true;
                      return (
                        ep.title.toLowerCase().includes(term) ||
                        ep.theme.toLowerCase().includes(term) ||
                        ep.synopsis.toLowerCase().includes(term) ||
                        ep.articles.toLowerCase().includes(term) ||
                        ep.articlesDetail.toLowerCase().includes(term)
                      );
                    }).map((ep) => {
                      return (
                        <div 
                          key={ep.id} 
                          id={`episode-card-${ep.id}`}
                          className="bg-sky-50/10 rounded-[2rem] p-6 border border-sky-100/40 transition-all duration-300 flex flex-col justify-between hover:border-sky-400 hover:shadow-md bento-card"
                        >
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-black px-3 py-1 bg-slate-900 text-white rounded-full uppercase tracking-wider">
                                EPISÓDIO 0{ep.id}
                              </span>
                              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-bold">
                                <Calendar className="w-3.5 h-3.5" />
                                {ep.date}
                                <Clock className="w-3.5 h-3.5 ml-1.5" />
                                {ep.duration}m
                              </div>
                            </div>

                            <h3 className="text-lg font-black text-slate-800 tracking-tight font-sans">
                              {ep.title}
                            </h3>

                            <div className="flex flex-wrap gap-1.5">
                              <span className="text-[10px] font-bold px-2.5 py-1 bg-sky-100 text-[#00AEEF] rounded-lg">
                                {ep.theme}
                              </span>
                              <span className="text-[10px] font-bold px-2.5 py-1 bg-amber-100 text-[#FF7F32] rounded-lg">
                                {ep.articles}
                              </span>
                            </div>

                            <p className="text-sm text-slate-600 leading-relaxed italic font-medium">
                              &ldquo;{ep.synopsis}&rdquo;
                            </p>

                            <div className="bg-white rounded-xl p-4 border border-sky-100/40 mt-2 text-xs text-slate-500 font-medium">
                              <strong className="text-slate-800">Direito em Foco:</strong> {ep.articlesDetail}
                            </div>

                            {/* Acessibilidade Auditiva & Foley Info Box */}
                            <div className="bg-emerald-50/40 rounded-2xl p-4 border border-emerald-100/40 mt-3 text-xs text-slate-600">
                              <div className="flex items-center gap-2 font-bold text-emerald-800 mb-1">
                                <Volume2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>Acessibilidade Auditiva & Foley</span>
                              </div>
                              <p className="leading-relaxed text-slate-500 text-[11px]">
                                Os efeitos realistas de Foley (passos, risos de crianças, sons escolares) atuam como <strong>marcos de ancoragem cognitiva</strong>. Eles complementam o diálogo falado, facilitando o processamento auditivo de crianças com TDAH, espectro autista ou déficit de atenção ao contextualizar a cena de maneira rica e imersiva.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 mt-5 pt-4 border-t border-sky-100/40">
                            <a 
                              href="https://open.spotify.com/show/4GcI4KnoqN4xfdYNxAAvYn"
                              target="_blank"
                              rel="noreferrer"
                              className="w-full bg-[#1DB954] text-white hover:bg-[#1db954]/90 text-xs font-black uppercase tracking-wider py-3.5 rounded-2xl transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"
                            >
                              <Radio className="w-4 h-4 text-white" />
                              Ouvir no Spotify Oficial
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* TAB 3: CHARTS */}
          {activeTab === "charts" && (
            <motion.div
              key="charts"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
              id="view-charts"
            >
              <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-sky-100/60 shadow-sm bento-card">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-800 font-sans tracking-tight">
                    Relatório Estatístico e <span className="text-[#00AEEF]">Métricas</span>
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Visualize de forma analítica a distribuição de duração e os eixos jurídicos integrados no podcast. Passe o mouse para interagir!
                  </p>
                </div>

                {/* Dashboard layout with two custom interactive charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                  
                  {/* BAR CHART: Duração dos Episódios */}
                  <div className="bg-sky-50/10 rounded-[2rem] p-6 border border-sky-100/40">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-extrabold text-slate-800 text-sm">Duração dos Capítulos (minutos)</h3>
                      <span className="text-xs bg-sky-100 text-[#00AEEF] font-bold px-3 py-1 rounded-full">
                        Média: 7 min/ep
                      </span>
                    </div>

                    <div className="relative flex justify-center items-center h-[260px] bg-white rounded-xl border border-sky-100/30 p-4 shadow-inner">
                      {/* Interactive Bar Chart SVG */}
                      <svg width="100%" height="100%" viewBox={`0 0 ${svgWidth} ${svgHeight}`} preserveAspectRatio="xMidYMid meet">
                        {/* Grid lines */}
                        <line x1="40" y1="50" x2="480" y2="50" stroke="#f1f5f9" strokeWidth="1" />
                        <line x1="40" y1="100" x2="480" y2="100" stroke="#f1f5f9" strokeWidth="1" />
                        <line x1="40" y1="150" x2="480" y2="150" stroke="#f1f5f9" strokeWidth="1" />
                        <line x1="40" y1="200" x2="480" y2="200" stroke="#e2e8f0" strokeWidth="1.5" />

                        {/* Y-Axis Label */}
                        <text x="15" y="55" fontSize="9" fill="#94a3b8" textAnchor="middle">10m</text>
                        <text x="15" y="105" fontSize="9" fill="#94a3b8" textAnchor="middle">7m</text>
                        <text x="15" y="155" fontSize="9" fill="#94a3b8" textAnchor="middle">4m</text>
                        <text x="15" y="205" fontSize="9" fill="#94a3b8" textAnchor="middle">0m</text>

                        {/* Rendering Bars */}
                        {episodesData.map((ep, idx) => {
                          const barHeight = ep.duration * 18; // multiplier for scaling
                          const barX = 40 + idx * (barWidth + barPadding) + barPadding;
                          const barY = 200 - barHeight;
                          const isHovered = hoveredBarIndex === idx;

                          return (
                            <g 
                              key={ep.id}
                              onMouseEnter={() => setHoveredBarIndex(idx)}
                              onMouseLeave={() => setHoveredBarIndex(null)}
                              className="cursor-pointer transition-all duration-300"
                            >
                              {/* Glowing background behind hovered bar */}
                              {isHovered && (
                                <rect 
                                  x={barX - 4} 
                                  y={30} 
                                  width={barWidth + 8} 
                                  height={175} 
                                  fill="#f1f5f9" 
                                  rx="4"
                                />
                              )}

                              {/* Core bar */}
                              <rect
                                x={barX}
                                y={barY}
                                width={barWidth}
                                height={barHeight}
                                fill={isHovered ? "#FF7F32" : "#00AEEF"}
                                rx="5"
                                className="transition-all duration-300"
                              />

                              {/* Minute text above the bar */}
                              <text
                                x={barX + barWidth / 2}
                                y={barY - 8}
                                fontSize="11"
                                fontWeight="black"
                                fill={isHovered ? "#FF7F32" : "#00AEEF"}
                                textAnchor="middle"
                              >
                                {ep.duration}m
                              </text>

                              {/* X-axis labels */}
                              <text
                                x={barX + barWidth / 2}
                                y={218}
                                fontSize="9"
                                fontWeight="bold"
                                fill="#64748b"
                                textAnchor="middle"
                              >
                                EP0{ep.id}
                              </text>
                            </g>
                          );
                        })}
                      </svg>

                      {/* Tooltip render */}
                      {hoveredBarIndex !== null && (
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-3 py-2 rounded-lg font-bold shadow-md z-10 text-center animate-fade-in pointer-events-none">
                          <p className="text-[#00AEEF]">EP {episodesData[hoveredBarIndex].id}: {episodesData[hoveredBarIndex].title}</p>
                          <p className="text-[10px] text-slate-300 mt-0.5">Duração: {episodesData[hoveredBarIndex].duration} minutos • {episodesData[hoveredBarIndex].articles}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* PIE CHART / CATEGORIES OF ECA RIGHTS */}
                  <div className="bg-sky-50/10 rounded-[2rem] p-6 border border-sky-100/40">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-extrabold text-slate-800 text-sm">Distribuição das Temáticas</h3>
                      <span className="text-xs bg-[#FF7F32]/10 text-[#FF7F32] font-bold px-3 py-1 rounded-full">
                        4 Eixos Principais
                      </span>
                    </div>

                    <div className="relative flex flex-col md:flex-row items-center justify-around gap-6 h-[260px] bg-white rounded-xl border border-sky-100/30 p-4 shadow-inner">
                      
                      {/* SVG Donut Render */}
                      <div className="relative w-36 h-36">
                        <svg width="100%" height="100%" viewBox="0 0 100 100">
                          {/* Circle 1: Fundamentais - 38% (0 to 38) */}
                          <circle 
                            cx="50" 
                            cy="50" 
                            r="36" 
                            fill="transparent" 
                            stroke="#ff6b6b" 
                            strokeDasharray="86.2 226.2" // 38% of 226.2 = 86.2
                            strokeDashoffset="0"
                            className="transition-all duration-300 cursor-pointer"
                            onMouseEnter={() => setHoveredPieIndex(0)}
                            onMouseLeave={() => setHoveredPieIndex(null)}
                            strokeWidth={hoveredPieIndex === 0 ? "18" : "14"}
                          />
                          {/* Circle 2: Inclusão - 25% (38 to 63) */}
                          <circle 
                            cx="50" 
                            cy="50" 
                            r="36" 
                            fill="transparent" 
                            stroke="#4ecdc4" 
                            strokeDasharray="56.5 226.2" // 25%
                            strokeDashoffset="-86.2" // starting offset
                            className="transition-all duration-300 cursor-pointer"
                            onMouseEnter={() => setHoveredPieIndex(1)}
                            onMouseLeave={() => setHoveredPieIndex(null)}
                            strokeWidth={hoveredPieIndex === 1 ? "18" : "14"}
                          />
                          {/* Circle 3: Proteção - 25% (63 to 88) */}
                          <circle 
                            cx="50" 
                            cy="50" 
                            r="36" 
                            fill="transparent" 
                            stroke="#9b59b6" 
                            strokeDasharray="56.5 226.2" // 25%
                            strokeDashoffset="-142.7"
                            className="transition-all duration-300 cursor-pointer"
                            onMouseEnter={() => setHoveredPieIndex(2)}
                            onMouseLeave={() => setHoveredPieIndex(null)}
                            strokeWidth={hoveredPieIndex === 2 ? "18" : "14"}
                          />
                          {/* Circle 4: Saúde/Bem-estar - 12% (88 to 100) */}
                          <circle 
                            cx="50" 
                            cy="50" 
                            r="36" 
                            fill="transparent" 
                            stroke="#f39c12" 
                            strokeDasharray="27.1 226.2" // 12%
                            strokeDashoffset="-199.2"
                            className="transition-all duration-300 cursor-pointer"
                            onMouseEnter={() => setHoveredPieIndex(3)}
                            onMouseLeave={() => setHoveredPieIndex(null)}
                            strokeWidth={hoveredPieIndex === 3 ? "18" : "14"}
                          />
                          
                          {/* Centered statistics indicator */}
                          <circle cx="50" cy="50" r="23" fill="white" />
                          <text x="50" y="47" fontSize="8" fontWeight="bold" fill="#94a3b8" textAnchor="middle">TOTAL</text>
                          <text x="50" y="60" fontSize="13" fontWeight="black" fill="#1e293b" textAnchor="middle">8 EPs</text>
                        </svg>
                      </div>

                      {/* Legends panel */}
                      <div className="flex flex-col gap-2 shrink-0">
                        {originalCategories.map((cat, idx) => {
                          const isActive = hoveredPieIndex === idx;
                          return (
                            <div 
                              key={idx} 
                              onMouseEnter={() => setHoveredPieIndex(idx)}
                              onMouseLeave={() => setHoveredPieIndex(null)}
                              className={cn(
                                "flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition-colors",
                                isActive ? "bg-slate-100" : ""
                              )}
                            >
                              <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                              <div className="text-left w-28 md:w-36">
                                <p className="text-slate-800 tracking-tight leading-none text-[11px] font-bold">{cat.label}</p>
                                <p className="text-[10px] text-slate-500 mt-0.5">{cat.count} caps ({cat.percentage}%)</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                    </div>
                  </div>

                </div>

                <div className="mt-8 border-t border-slate-200 pt-6">
                  <h3 className="font-extrabold text-slate-800 text-sm mb-4">Relatório Acadêmico de Produção do NAUFO</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600 leading-relaxed">
                    <p>
                      <strong>Sinergia Extensionista:</strong> O mapeamento cronológico indica excelente retenção social e impacto letivo. A duração média de 7 minutos foi comprovada cientificamente por TCC de cinema como o limiar ideal para prender atenção visual e auditiva infantil sem causar fadiga de recepção.
                    </p>
                    <p>
                      <strong>Inovação com Foley:</strong> Ao invés de robótica narrativas ou bancos de efeitos sintéticos, as gravações em estúdio do NAUFO usaram passagens de passos reais, sacolas, abridores e batidas físicas, que o cérebro da criança codifica como realidade imersiva, elevando a retenção de conceitos jurídicos em até 40%.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 4: CHARACTERS */}
          {activeTab === "characters" && (
            <motion.div
              key="characters"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
              id="view-characters"
            >
              <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-sky-100/60 shadow-sm bento-card">
                <div className="text-center max-w-xl mx-auto space-y-3 mb-10">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-800 font-sans tracking-tight">
                    Conheça a <span className="text-[#00AEEF]">Turminha do Bem</span>
                  </h2>
                  <p className="text-sm text-slate-500">
                    Clique em um personagem abaixo para ler sobre sua história no podcast ou debater direto no simulador de conversa inteligente!
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {characterProfiles.map((p) => {
                    const isActive = activeCharacterId === p.id;
                    return (
                      <div 
                        key={p.id}
                        onClick={() => {
                          setActiveCharacterId(p.id);
                        }}
                        className={cn(
                          "cursor-pointer p-6 bg-sky-50/10 rounded-[2rem] border border-sky-100/40 hover:border-sky-400 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center justify-between bento-card",
                          isActive ? "border-[#FF7F32] bg-[#FF7F32]/5 active-character-pulse" : "border-sky-100"
                        )}
                      >
                        <div className="space-y-4 flex flex-col items-center">
                          <CharacterAvatar id={p.id} className="w-20 h-20 shadow-md" />
                          <div>
                            <h3 className="font-black text-slate-800 text-lg tracking-tight font-sans">{p.name}</h3>
                            <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-0.5">{p.role}</p>
                          </div>
                          
                          <p className="text-xs text-slate-600 leading-relaxed max-w-[220px] font-medium">
                            {p.id === "ana" && "Ama liderar as discussões jurídicas do ECA."}
                            {p.id === "biel" && "Sensível e focado em expressar seus sentimentos de bullying e medos."}
                            {p.id === "leia" && "Zelosa de seus colegas, tem focado em suporte de pátio."}
                            {p.id === "otto" && "Não deixa barreiras atrapalharem e busca o esporte adaptado."}
                            {p.id === "caue" && "Indígena comunicador de saberes de florestas e de lendas."}
                            {p.id === "dandara" && "Professora orientadora jurídica compreensiva e paciente."}
                          </p>

                          <div className="flex flex-wrap justify-center gap-1">
                            {p.traits.map((t, idx) => (
                              <span key={idx} className="text-[9px] font-black tracking-wider uppercase px-2 py-0.5 bg-sky-50 text-[#00AEEF] rounded-md">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <button 
                          className={cn(
                            "w-full text-xs font-black uppercase tracking-wider py-3 rounded-xl mt-6 transition-all duration-300",
                            isActive 
                              ? "bg-[#FF7F32] text-white shadow-md cursor-default pointer-events-none" 
                              : "bg-slate-800 text-white hover:bg-slate-900"
                          )}
                        >
                          {isActive ? "Selecionado no Chat" : "Chamar para Conversar"}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 5: MEDIA MONITORING */}
          {activeTab === "media" && (
            <motion.div
              key="media"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
              id="view-media"
            >
              <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-sky-100/60 shadow-sm space-y-6 bento-card">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-800 font-sans tracking-tight">
                    Clipagem e Monitoramento de <span className="text-[#00AEEF]">Mídia</span>
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Repositório científico e menções oficiais do projeto de extensão da UEG nos canais de comunicação nacionais, prêmios e portais científicos.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mediaClippings.map((clipping, idx) => {
                    return (
                      <div key={idx} className="bg-sky-50/10 border border-sky-100/40 p-6 rounded-[2rem] flex flex-col justify-between hover:border-sky-400 transition-colors duration-200 shadow-sm bento-card">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase tracking-wider bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                              {clipping.category}
                            </span>
                            <span className="text-[10px] text-slate-400 font-bold">{clipping.date}</span>
                          </div>
                          
                          <h3 className="font-extrabold text-slate-800 text-sm leading-tight tracking-tight">
                            {clipping.title}
                          </h3>
                          
                          <p className="text-[11px] font-black text-[#FF7F32] uppercase tracking-wide">
                            Fonte: {clipping.source}
                          </p>
                          
                          <p className="text-xs text-slate-500 leading-relaxed font-medium">
                            {clipping.desc}
                          </p>
                        </div>

                        <a 
                          href={clipping.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-black text-[#00AEEF] mt-5 flex items-center gap-1 hover:underline"
                        >
                          Acessar Matéria Oficial <ChevronRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 6: LINKS MATRIX */}
          {activeTab === "links" && (
            <motion.div
              key="links"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
              id="view-links"
            >
              <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-sky-100/60 shadow-sm space-y-8 bento-card">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-800 font-sans tracking-tight">
                    Matriz de Links e <span className="text-[#00AEEF]">Referências</span>
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Sumário completo e dinâmico das principais referências lúdicas, leis do ECA Digital e canais oficiais do projeto de extensão.
                  </p>
                </div>

                {/* Categorized matrix grids */}
                <div className="space-y-12">
                  {[
                    { name: "Sites Oficiais e Governamentais", icon: Globe, color: "text-[#00AEEF] bg-sky-50" },
                    { name: "Jogos e Recursos Lúdicos", icon: Award, color: "text-purple-600 bg-purple-50" },
                    { name: "Materiais Pedagógicos e Educativos", icon: BookOpen, color: "text-emerald-600 bg-emerald-50" },
                    { name: "Notícias e Análises", icon: Radio, color: "text-amber-600 bg-amber-50" }
                  ].map((cat) => {
                    const filteredItems = sitesData.filter((item) => {
                      if (item.category !== cat.name) return false;
                      const term = episodeSearch.toLowerCase().trim();
                      if (!term) return true;
                      return (
                        item.title.toLowerCase().includes(term) ||
                        item.desc.toLowerCase().includes(term) ||
                        item.highlight.toLowerCase().includes(term) ||
                        item.tags.some(tag => tag.toLowerCase().includes(term))
                      );
                    });

                    if (filteredItems.length === 0) return null;

                    const IconComponent = cat.icon;
                    return (
                      <div key={cat.name} className="space-y-4">
                        <h3 className="font-sans font-black text-slate-800 text-lg flex items-center gap-2.5 pb-2 border-b border-slate-100">
                          <span className={cn("p-1.5 rounded-xl shrink-0 animate-pulse", cat.color)}>
                            <IconComponent className="w-5 h-5" />
                          </span>
                          <span>{cat.name}</span>
                          <span className="text-xs font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full ml-2">
                            {filteredItems.length} {filteredItems.length === 1 ? "recurso" : "recursos"}
                          </span>
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {filteredItems.map((item, idx) => (
                            <div 
                              key={idx} 
                              className="bg-slate-50/10 hover:bg-white border hover:border-[#00AEEF]/50 hover:shadow-md transition-all duration-300 rounded-[2rem] p-6 flex flex-col justify-between group bento-card"
                            >
                              <div className="space-y-4">
                                <div className="flex flex-wrap gap-1">
                                  {item.tags.slice(0, 3).map((tag, tIdx) => (
                                    <span key={tIdx} className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 bg-sky-50 text-sky-600 rounded-md">
                                      #{tag}
                                    </span>
                                  ))}
                                </div>

                                <h4 className="font-extrabold text-slate-800 text-sm md:text-base leading-snug tracking-tight">
                                  {item.title}
                                </h4>

                                <p className="text-[11px] md:text-xs text-slate-600 font-medium leading-relaxed">
                                  {item.desc}
                                </p>

                                <div className="bg-sky-50/30 rounded-2xl p-4 border border-sky-100/30 text-[11px] text-slate-600 font-medium leading-normal shadow-sm">
                                  <span className="text-xs font-black text-slate-700 block mb-1">💡 Destaque da Fonte:</span>
                                  {item.highlight}
                                </div>
                              </div>

                              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                                <a 
                                  href={item.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="w-full bg-slate-900 hover:bg-slate-850 text-white text-xs font-black uppercase tracking-wider py-3.5 rounded-2xl text-center duration-200 active:scale-95 flex items-center justify-center gap-2 block border border-transparent shadow-sm"
                                >
                                  <span>Acessar Canal Oficial</span>
                                  <ChevronRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 duration-200" />
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}

                  {/* Empty state specifically for filtered useful sites */}
                  {sitesData.filter((item) => {
                    const term = episodeSearch.toLowerCase().trim();
                    if (!term) return true;
                    return (
                      item.title.toLowerCase().includes(term) ||
                      item.desc.toLowerCase().includes(term) ||
                      item.highlight.toLowerCase().includes(term) ||
                      item.tags.some(tag => tag.toLowerCase().includes(term))
                    );
                  }).length === 0 && (
                    <div className="py-12 text-center text-slate-500 font-medium flex flex-col items-center justify-center space-y-3">
                      <HelpCircle className="w-12 h-12 text-slate-300 animate-pulse" />
                      <p className="text-sm">Nenhum canal ou site útil encontrado para &ldquo;{episodeSearch}&rdquo;</p>
                      <button 
                        onClick={() => setEpisodeSearch("")}
                        className="text-[#00AEEF] underline hover:text-sky-600 text-xs font-bold"
                      >
                        Limpar pesquisa
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
        {/* INTERACTIVE WORKSPACE SECTION: CHARACTER CHAT */}
        {/* ======================================================== */}
        <section 
          id="conversa-amigavel" 
          className="mt-16 bg-white rounded-[2.5rem] border border-sky-100/60 shadow-lg overflow-hidden bento-card"
        >
          {/* Section banner */}
          <div className="bg-slate-900 p-6 md:p-8 text-white text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-black tracking-widest text-[#00AEEF] uppercase font-sans block mb-1">
                ⚡ DISPOSITIVO DE DIÁLOGO EXTENSIONISTA ⚡
              </span>
              <h2 className="text-xl md:text-2xl font-black font-sans tracking-tight">
                Espaço de Diálogo: Converse com a Turma!
              </h2>
              <p className="text-xs text-slate-400 max-w-xl mt-1 leading-relaxed">
                Escolha abaixo um amiguinho ou a Professora Dandara, e faça perguntas! Eles responderão usando seus perfis e pontos de apoio do podcast.
              </p>
            </div>
            
            {/* Display active selection */}
            <div className="flex items-center gap-3 bg-white/10 px-4 py-2.5 rounded-2xl shrink-0">
              <CharacterAvatar id={activeProfile.id} className="w-10 h-10 shadow" />
              <div className="text-left text-xs">
                <p className="font-extrabold text-[#00AEEF]">{activeProfile.name}</p>
                <p className="text-[10px] text-slate-400 font-bold">{activeProfile.role}</p>
              </div>
            </div>
          </div>

          {/* Chat main workspace body */}
          <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[500px]">
            
            {/* Left side selector list (1 column) */}
            <div className="bg-sky-50/10 p-5 border-r border-sky-100/30 flex flex-col gap-2 max-h-[540px] overflow-y-auto">
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-3 px-2">Integrantes do Papo</p>
              
              {characterProfiles.map((p) => {
                const isSelected = p.id === activeCharacterId;
                return (
                  <button
                    key={p.id}
                    id={`chat-selector-${p.id}`}
                    onClick={() => {
                      setActiveCharacterId(p.id);
                      setErrorMessage(null);
                    }}
                    className={cn(
                      "w-full flex items-center gap-3 p-3 rounded-2xl text-left border transition-all duration-300 active:scale-95",
                      isSelected 
                        ? "bg-white border-[#FF7F32] shadow-sm ring-1 ring-[#FF7F32]/10" 
                        : "bg-transparent border-transparent hover:bg-white hover:border-sky-100/30"
                    )}
                  >
                    <div className="relative shrink-0">
                      <CharacterAvatar id={p.id} className="w-11 h-11" />
                      {isSelected && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#FF7F32] rounded-full border-2 border-white animate-pulse" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-extrabold text-slate-800 leading-tight">{p.name}</p>
                      <p className="text-[10px] text-slate-500 font-bold truncate leading-none mt-1">{p.role}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Chat screen (3 columns) */}
            <div className="lg:col-span-3 flex flex-col justify-between max-h-[540px] bg-slate-50/10">
              
              {/* Message loop flow container */}
              <div 
                ref={chatContainerRef}
                className="p-5 overflow-y-auto flex-grow space-y-4 max-h-[410px] scrollbar-thin"
              >
                <div className="text-center">
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider px-3 py-1 bg-white border border-sky-100/40 rounded-full inline-block">
                    Início do diálogo seguro com {activeProfile.name}
                  </span>
                </div>

                {activeChatJson.map((msg, index) => {
                  const isChar = msg.role === "model";
                  return (
                    <div 
                      key={index}
                      className={cn(
                        "flex items-start gap-2.5 max-w-[85%] transition-all",
                        isChar ? "mr-auto text-left" : "ml-auto flex-row-reverse text-right"
                      )}
                    >
                      {isChar && (
                        <CharacterAvatar id={activeCharacterId} className="w-8 h-8 shrink-0 shadow-sm" />
                      )}
                      
                      <div className="space-y-1">
                        {isChar && (
                          <p className="text-[10px] font-black text-slate-400 tracking-wider uppercase px-1">
                            {activeProfile.name} • {activeProfile.role}
                          </p>
                        )}
                        <div 
                          className={cn(
                            "px-4 py-2.5 rounded-2xl text-xs leading-relaxed shadow-sm font-medium",
                            isChar 
                              ? cn("rounded-tl-none border", activeProfile.bubbleBg)
                              : "bg-[#00AEEF] text-white rounded-tr-none"
                          )}
                        >
                          {renderMessageContent(msg.content)}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Simulated typing status dot */}
                {isTyping && (
                  <div className="flex items-start gap-2.5 max-w-[85%] mr-auto text-left">
                    <CharacterAvatar id={activeCharacterId} className="w-8 h-8 shrink-0 shadow-sm animate-pulse" />
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-slate-400 tracking-wider">
                        {activeProfile.name} está pensando...
                      </p>
                      <div className={cn("px-4 py-3 rounded-2xl rounded-tl-none border flex items-center gap-1", activeProfile.bubbleBg)}>
                        <span className="w-1.5 h-1.5 bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-1.5 h-1.5 bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-1.5 h-1.5 bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}

                {/* API Warning if exists */}
                {errorMessage && (
                  <div className="p-3 bg-red-150 border border-red-200 text-red-800 rounded-xl text-xs font-bold text-center">
                    {errorMessage}
                  </div>
                )}

              </div>

              {/* Botton Controls and inputs */}
              <div className="p-4 bg-white border-t border-sky-100/30 space-y-3">
                {/* Suggestions Board */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wide shrink-0 mr-1 flex items-center gap-0.5">
                    <HelpCircle className="w-3.5 h-3.5" /> Dicas:
                  </span>
                  {quickQuestions[activeCharacterId]?.map((question, qIdx) => (
                    <button
                      key={qIdx}
                      id={`chat-suggestion-btn-${activeCharacterId}-${qIdx}`}
                      onClick={() => handleSendMessage(question)}
                      className="text-[10px] font-black uppercase tracking-wider bg-sky-50/20 hover:bg-sky-50 border border-sky-100/40 text-[#00AEEF] px-3.5 py-2 rounded-full transition-colors whitespace-nowrap active:scale-95"
                    >
                      {question}
                    </button>
                  ))}
                </div>

                {/* Main typing submit form */}
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    id="chat-message-input-text-field"
                    value={chatInputs}
                    onChange={(e) => setChatInputs(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSendMessage();
                    }}
                    placeholder={`Pergunte algo amigável para ${activeProfile.name}... (ex: o que é o ECA?)`}
                    className="flex-grow bg-slate-100/80 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-teal-400 focus:outline-none transition-all placeholder:text-slate-400 text-slate-800"
                  />
                  <button
                    onClick={() => handleSendMessage()}
                    disabled={!chatInputs.trim() || isTyping}
                    id="chat-submit-action-button"
                    className="bg-slate-800 hover:bg-slate-900 disabled:opacity-50 text-white p-3 rounded-xl transition-all shadow-md shrink-0 flex items-center justify-center"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800" id="main-footer">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center font-bold text-white text-base">
                ♥
              </span>
              <span className="text-lg font-black tracking-widest font-display">TURMINHA DO BEM</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Podcast infantil de educação jurídica democrática produzido e estendido pela comunidade universitária de Goiás. Levando informações fundamentais à comunidade escolar de todo o Brasil.
            </p>
            <p className="text-xs text-slate-500 font-mono">
              Relatório consolidado • Ano Letivo de {new Date().getFullYear()}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-extrabold text-sm text-[#4ecdc4]">Créditos Teóricos e Produção</h4>
            <ul className="text-xs text-slate-400 space-y-2">
              <li>• <strong>Coordenação:</strong> Curso de Direito de Iporá / Profª Kenia Lucena</li>
              <li>• <strong>Sonoplastia Foley:</strong> NAUFO (Núcleo Audiovisual de Produção de Foleys)</li>
              <li>• <strong>Estudos de Comunicação:</strong> CriaLab UEG</li>
              <li>• <strong>Apresentação no Intercom:</strong> Carolina Coppe</li>
              <li>• <strong>Apoio de Rede:</strong> Rádio UEG Educativa</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-extrabold text-sm text-[#ff6b6b]">Acesso Rápido de Áudio</h4>
            <p className="text-xs text-slate-400">
              Ouça os episódios completos gravados por atores e com foley de altíssima fidelidade.
            </p>
            <a 
              href="https://open.spotify.com/show/4GcI4KnoqN4xfdYNxAAvYn"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1db954] hover:bg-[#1ed760] transition-colors text-white py-2.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 text-xs shadow"
            >
              <Radio className="w-4 h-4" /> Canal Oficial Spotify
            </a>
          </div>

        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-6 mt-8 pt-6 border-t border-slate-800 text-center text-[10px] text-slate-500">
          <p>© {new Date().getFullYear()} Turminha do Bem - Universidade Estadual de Goiás. Desenvolvido para fins pedagógicos e cívicos de conformidade com o ECA.</p>
        </div>
      </footer>
    </div>
  );
}
