import { PortfolioItem, ServiceItem, ExperienceStep } from './types';

export const NAV_LINKS = [
  { name: 'O Estúdio', href: '#sobre' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Portfólio', href: '#portfolio' },
  { name: 'Produtos', href: '#produtos' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'Gestantes & Família',
    description: 'Um ambiente seguro e confortável para eternizar a espera e o crescimento. Focamos na conexão genuína entre vocês.',
    iconName: 'heart',
    imageUrl: 'https://picsum.photos/id/1027/600/800'
  },
  {
    id: 2,
    title: 'Profissionais',
    description: 'Retratos que transmitem autoridade e confiança. Ideal para posicionamento de marca pessoal e LinkedIn.',
    iconName: 'briefcase',
    imageUrl: 'https://picsum.photos/id/1005/600/800'
  },
  {
    id: 3,
    title: 'Fine Art',
    description: 'Transformamos sua imagem em uma obra de arte atemporal, com iluminação cinematográfica e edição refinada.',
    iconName: 'frame',
    imageUrl: 'https://picsum.photos/id/338/600/800'
  }
];

export const EXPERIENCE_STEPS: ExperienceStep[] = [
  {
    step: 1,
    title: 'A Conversa',
    description: 'Tomamos um café para entender sua história e o que você deseja transmitir. Planejamos juntos cada detalhe.'
  },
  {
    step: 2,
    title: 'A Sessão Guiada',
    description: 'Não se preocupe com poses. Nós dirigimos cada movimento para que você se sinta leve e o resultado seja natural.'
  },
  {
    step: 3,
    title: 'A Revelação',
    description: 'Apresentamos suas memórias tratadas com carinho. Você escolhe como elas viverão para sempre em sua casa.'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: 'O Abraço de Reencontro',
    category: 'Família',
    imageUrl: 'https://picsum.photos/id/1012/800/1200',
    story: 'Após 2 anos morando fora, Lucas voltou para casa. Este frame capturou exatamente o segundo em que ele viu sua avó. Não houve direção, apenas emoção pura transbordando em lágrimas de alegria.'
  },
  {
    id: 2,
    title: 'Força Serena',
    category: 'Gestante',
    imageUrl: 'https://picsum.photos/id/64/800/600',
    story: 'Mariana estava insegura com as mudanças do corpo. Através da luz e sombra, mostramos a ela a potência de gerar uma vida. Ao ver a foto, ela disse: "Agora eu me vejo como uma leoa".'
  },
  {
    id: 3,
    title: 'Legado Empresarial',
    category: 'Profissional',
    imageUrl: 'https://picsum.photos/id/433/800/1000',
    story: 'Roberto lidera uma empresa de 50 anos. Queríamos um retrato que não fosse apenas corporativo, mas que mostrasse o peso da responsabilidade misturado com a gentileza de quem cuida de 200 funcionários.'
  },
  {
    id: 4,
    title: 'Infância Livre',
    category: 'Família',
    imageUrl: 'https://picsum.photos/id/838/800/800',
    story: 'Sem poses forçadas. Deixamos as crianças correrem pelo estúdio. O resultado? Um sorriso banguela e verdadeiro que a mãe disse ser "a essência exata" do filho naquela idade.'
  },
  {
    id: 5,
    title: 'Conexão Silenciosa',
    category: 'Fine Art',
    imageUrl: 'https://picsum.photos/id/334/800/1200',
    story: 'Um retrato de casal onde os olhos dizem mais que os toques. Utilizamos uma luz dramática para focar apenas na expressão do amor maduro, construído ao longo de décadas.'
  },
  {
    id: 6,
    title: 'A Espera',
    category: 'Gestante',
    imageUrl: 'https://picsum.photos/id/65/800/600',
    story: 'O sapatinho tricotado pela bisavó era o elemento central. Não é apenas uma foto de barriga, é uma foto sobre a continuidade das gerações e o amor que atravessa o tempo.'
  }
];