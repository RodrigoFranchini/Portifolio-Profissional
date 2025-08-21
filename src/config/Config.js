// Dados pessoais do portifólio
export const profile = {
  initials: "RF",
  name: "Rodrigo Franchini Cecchin",
  role: "Desenvolvedor",
};

// Define os ícones da sidebar
export const navItems = [
  { key: "home", label: "Home", icon: "home" },
  { key: "projects", label: "Projetos", icon: "folder" },
  { key: "career", label: "Carreira", icon: "id" },
  { key: "contact", label: "Contato", icon: "send" },
];

// Define o texto que irá aparecer na seção sobre mim
export const sobremim = {
  texto1ptbr: "Desenvolvedor apaixonado por criar soluções inovadoras e eficientes.",
  texto2ptbr: "Com experiência em diversas tecnologias, busco constantemente aprimorar minhas habilidades técnicas e interpessoais, explorando novas ferramentas, linguagens e metodologias. Meu objetivo é aplicar esse conhecimento de forma prática e criativa, contribuindo para o desenvolvimento de soluções robustas, escaláveis e inovadoras. Tenho grande motivação em participar de projetos desafiadores que me permitam aprender continuamente e, ao mesmo tempo, gerar impacto positivo para pessoas e empresas.",
  texto1eng:"Developer passionate about creating innovative and efficient solutions.",
  texto2eng:"With experience in various technologies, I am constantly striving to enhance both my technical and interpersonal skills by exploring new tools, languages, and methodologies. My goal is to apply this knowledge in a practical and creative way, contributing to the development of robust, scalable, and innovative solutions. I am highly motivated to take part in challenging projects that allow me to continuously learn while creating a positive impact for people and organizations."
}

// Define as tecnologias
export const tecnologias = [
  {
    name: "Databases",
    description: "Conhecimento em bancos de dados relacionais e não-relacionais."
  },
  {
    name: "Cloud Services",
    description: "Trabalho com ambientes em nuvem e integrações."
  },
  {
    name: "Programming Languages",
    description: "Experiência com várias linguagens de programação."
  },
  {
    name: "Tools",
    description: "Ferramentas para otimização de desenvolvimento."
  }
];

// Lista de projetos do portfólio
export const projetos = [
  {
    id: "ecommerce-api",
    nome: "E-commerce API",
    descricao:
      "API robusta para plataforma de e-commerce, gerenciando produtos, pedidos e pagamentos.",
    tecnologias: ["Python", "Django", "PostgreSQL"],
    github: "https://github.com/seu-usuario/ecommerce-api",
    imagem: "/images/projects/ecommerce.jpg" // opcional
  },
  {
    id: "social-media-backend",
    nome: "Social Media Backend",
    descricao:
      "Backend para rede social, com perfis, posts e interações.",
    tecnologias: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/seu-usuario/social-media-backend",
    imagem: "/images/projects/social.jpg" // opcional
  },
  {
    id: "data-pipeline",
    nome: "Data Analysis Pipeline",
    descricao:
      "Pipeline para processamento e análise de grandes volumes de dados.",
    tecnologias: ["Java", "Spring Boot", "Apache Kafka"],
    github: "https://github.com/seu-usuario/data-analysis-pipeline",
    imagem: "/images/projects/data-pipeline.jpg" // opcional
  },
  {
    id: "auth-service",
    nome: "Authentication Service",
    descricao:
      "Serviço de autenticação com múltiplos métodos e gestão de usuários.",
    tecnologias: ["Python", "Flask", "JWT"],
    github: "https://github.com/seu-usuario/auth-service",
    imagem: "/images/projects/auth.jpg" // opcional
  }
];

export const carreira = [
  {
    id: "exp1",
    empresa: "Tech Company",
    cargo: "Desenvolvedor Front-end",
    periodo: "Jan 2022 – Atual",
    descricao:
      "Responsável pelo desenvolvimento e manutenção de interfaces web responsivas, utilizando React, Vite e integração com APIs REST."
  },
  {
    id: "exp2",
    empresa: "Startup XYZ",
    cargo: "Estagiário em Desenvolvimento",
    periodo: "Ago 2021 – Dez 2021",
    descricao:
      "Atuei no desenvolvimento de features para aplicação interna, correção de bugs e suporte técnico, utilizando Node.js e MongoDB."
  },
  {
    id: "exp3",
    empresa: "Freelancer",
    cargo: "Desenvolvedor Full-stack",
    periodo: "2020 – 2021",
    descricao:
      "Desenvolvimento de sites institucionais e sistemas sob demanda para clientes, aplicando boas práticas de UI/UX e deploy em cloud."
  },
  {
    id: "exp4",
    empresa: "Comunidade Open Source",
    cargo: "Contribuidor",
    periodo: "2019 – 2020",
    descricao:
      "Participei de projetos open source no GitHub, contribuindo com correções, documentação e novas funcionalidades."
  }
];

export const contatos = {
  email: "rofranchinicecchin@gmail.com",
  whatsapp: "5531999539901", 
  linkedin: "https://www.linkedin.com/in/rodrigo-franchini-cecchin-b394a9304/",
  github: "https://github.com/RodrigoFranchini"
};

