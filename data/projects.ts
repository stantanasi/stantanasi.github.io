interface IProject {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  url: string;
}

export const projects: IProject[] = [
  {
    id: '42c',
    title: 'Site Web 42c',
    description: "Refonte du site vitrine et du back-office métier. Mise en place d'une architecture full-stack robuste avec agrégation de flux sociaux en temps réel.",
    image: '/projects/42c.png',
    stack: ['React', 'NestJS', 'TypeScript', 'Twitter API', 'MongoDB'],
    url: 'https://www.42c.fr'
  },
  {
    id: 'pixt',
    title: 'Pix.T',
    description: "Infrastructure Cloud pour une marketplace de photographie certifiée sur la Blockchain. Conception du backend serverless et de pipelines d'upload sécurisés.",
    image: '/projects/pixt.png',
    stack: ['TypeScript', 'AWS CDK', 'Blockchain', 'DynamoDB', 'Jira'],
    url: 'https://trust.pixt.co'
  },
  {
    id: 'vialma',
    title: 'Vialma',
    description: "Expérience OTT sur Freebox. Développement d'une interface TV fluide en QML avec gestion optimisée de la mémoire et d'un lecteur audio haute fidélité.",
    image: '/projects/vialma.png',
    stack: ['Freebox', 'QML', 'Qt Creator', 'GitLab'],
    url: 'https://www.42c.fr/2025/09/02/vialma-x-42c'
  },
  {
    id: 'tvplayer',
    title: 'TVPlayer (Alchimie)',
    description: "Engineering de l'application Android TV. Optimisation des buffers de streaming avec ExoPlayer pour garantir une lecture fluide en basse connexion.",
    image: '/projects/tvplayer.png',
    stack: ['Android TV', 'Kotlin', 'ExoPlayer', 'Retrofit', 'Java'],
    url: 'https://fr.tvplayer.com',
  },
  {
    id: 'streamflix',
    title: 'Streamflix',
    description: "Projet Open-Source majeur (+1.1k stars). Architecture Android TV complexe utilisant Coroutines et Leanback pour une navigation fluide type Netflix.",
    image: '/projects/streamflix.png',
    stack: ['Kotlin', 'Android TV', 'Streaming', 'ExoPlayer', 'Retrofit', 'Leanback', 'Coroutines'],
    url: 'https://github.com/streamflix-reborn/streamflix',
  },
  {
    id: 'mangajap',
    title: 'MangaJap',
    description: "Écosystème multiplateforme complet. Développement d'un client mobile haute performance et d'une API REST respectant strictement la spécification JSON:API.",
    image: '/projects/mangajap.png',
    stack: ['TypeScript', 'Kotlin', 'Android', 'React Native', 'Node.js', 'MongoDB', 'JSON:API'],
    url: 'https://stantanasi.github.io/mangajap',
  },
];