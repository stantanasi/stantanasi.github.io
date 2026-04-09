interface IExperience {
  company: string;
  logo: string;
  location: string;
  start: Date;
  end: Date | null;
  role: string;
  summary: string;
  highlights: string[];
  skills: string[];
  collapsible: boolean;
}

export const experiences: IExperience[] = [
  {
    company: 'CRIT Hôtellerie',
    logo: '/companies/crit.png',
    location: 'Paris, France',
    start: new Date('2025-05'),
    end: new Date('2025-09'),
    role: 'Intérimaire en restauration et hôtellerie',
    summary: "Service d'excellence en milieu exigeant (Hôtel Molitor 5*, Disneyland Paris). Gestion des flux clients et rigueur opérationnelle.",
    highlights: [
      'Service haut de gamme et gestion des commandes (Hôtel 5* Molitor)',
      'Optimisation des flux clients et logistique événementielle (Disneyland Paris)',
    ],
    skills: ['Relation client', 'Rigueur', 'Gestion de flux'],
    collapsible: true,
  },
  {
    company: '42c',
    logo: '/companies/42c.png',
    location: 'Paris, France',
    start: new Date('2020-10'),
    end: new Date('2024-03'),
    role: 'Développeur Mobile & Web Full-stack',
    summary: "Expert technique sur des solutions de Broadcast, Streaming OTT et Web3. Conception d'architectures Cloud Serverless et d'applications à haute performance.",
    highlights: [
      'Streaming & Android TV : Développement TVPlayer (ExoPlayer) et applications interactives pour France 2/TF1.',
      'Cloud & Live : Mise en place de flux AWS (MediaLive, MediaConnect) pour Switch2Twitch et Pop Up Channel.',
      'Web3 & Backend : Développement du backend Pix.T (Blockchain) et APIs via AWS CDK / Amazon API Gateway.',
      "Interactive Music : Création de l'application musicale Vialma pour Freebox (QML/Qt).",
    ],
    skills: [
      'TypeScript',
      'Kotlin',
      'Java',
      'React',
      'Node.js',
      'NestJS',
      'QML',
      'AWS CDK',
      'AWS MediaLive',
      'AWS MediaConnect',
      'Android Studio',
      'ExoPlayer',
      'Retrofit',
      'Swift',
      'WebSockets',
      'C#',
    ],
    collapsible: false,
  },
  {
    company: 'Leviathan Dynamics',
    logo: '/companies/leviathan-dynamics.png',
    location: 'La Courneuve, France',
    start: new Date('2020-05'),
    end: new Date('2020-07'),
    role: 'Stagiaire Électronique & Informatique',
    summary: "Digitalisation industrielle et programmation de systèmes automates connectés pour l'industrie.",
    highlights: [
      "Programmation d'automates industriels (Ladder, Grafcet, Structured Text)",
      "Conception d'IHM et intégration hardware (câblage d'armoires électriques)",
      "Mise à jour itérative des programmes selon les retours terrain"
    ],
    skills: ['Automates', 'IoT', 'Ladder', 'Electronique'],
    collapsible: false,
  },
  {
    company: 'Centre aquatique',
    logo: '/companies/levallois.png',
    location: 'Levallois-Perret, France',
    start: new Date('2018-08'),
    end: new Date('2018-08'),
    role: 'Agent technique',
    summary: "Entretien et gestion technique opérationnelle de l'établissement.",
    highlights: ['Maintenance des infrastructures et gestion logistique des déchets'],
    skills: ['Autonomie', 'Organisation'],
    collapsible: true,
  },
];
