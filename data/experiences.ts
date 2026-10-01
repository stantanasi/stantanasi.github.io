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
    company: 'Club Med Les Boucaniers',
    logo: '/companies/club-med.png',
    location: 'Sainte-Anne, Martinique',
    start: new Date('2026-06-03T00:00:00'),
    end: new Date('2026-08-31T00:00:00'),
    role: 'Employé Polyvalent Restaurant & Bar',
    summary: "Gestion du service en village vacances haut de gamme. Rigueur opérationnelle, application des normes HACCP et fluidification des flux clients en environnement multilingue.",
    highlights: [
      'Gestion du service buffet/salle : débarrassage, redressage et réassort aux heures de pointe',
      'Application rigoureuse des normes HACCP et entretien des zones de service',
      'Logistique et gestion de la plonge pour assurer la continuité des équipements',
      'Accueil et service de la clientèle internationale en anglais',
    ],
    skills: ['Normes HACCP', 'Service en salle', 'Gestion des flux', 'Anglais (Bilingue)'],
    collapsible: true,
  },
  {
    company: 'CRIT Hôtellerie',
    logo: '/companies/crit.png',
    location: 'Paris, France',
    start: new Date('2025-05-01T00:00:00'),
    end: new Date('2025-09-01T00:00:00'),
    role: 'Intérimaire en restauration et hôtellerie',
    summary: "Service d'excellence en milieu exigeant (Hôtel Molitor 5★, Disneyland Paris). Gestion des flux clients et rigueur opérationnelle.",
    highlights: [
      'Service haut de gamme et gestion des commandes (Hôtel 5★ Molitor)',
      'Optimisation des flux clients et logistique événementielle (Disneyland Paris)',
    ],
    skills: ['Relation client', 'Rigueur', 'Gestion de flux'],
    collapsible: true,
  },
  {
    company: 'BYVE',
    logo: '/companies/byve.png',
    location: 'Levallois-Perret, France (À distance)',
    start: new Date('2025-02-01T00:00:00'),
    end: new Date('2025-04-01T00:00:00'),
    role: 'Développeur Back-End',
    summary: "Développement d'une infrastructure e-commerce robuste et personnalisée pour une marque de prêt-à-porter",
    highlights: [
      'Architecture du back-end sous le framework Remix pour optimiser le rendu serveur (SSR).',
      "Conception d'une application Shopify personnalisée répondant aux besoins métier spécifiques.",
      "Mise en place d'un typage TypeScript strict pour garantir la fiabilité de la logique e-commerce."
    ],
    skills: ['Remix', 'Shopify API', 'Firestore', 'TypeScript', 'Node.js'],
    collapsible: false,
  },
  {
    company: '42c',
    logo: '/companies/42c.png',
    location: 'Paris, France',
    start: new Date('2020-10-01T00:00:00'),
    end: new Date('2024-03-01T00:00:00'),
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
    start: new Date('2020-05-01T00:00:00'),
    end: new Date('2020-07-01T00:00:00'),
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
    start: new Date('2018-08-01T00:00:00'),
    end: new Date('2018-08-01T00:00:00'),
    role: 'Agent technique',
    summary: "Entretien et gestion technique opérationnelle de l'établissement.",
    highlights: ['Maintenance des infrastructures et gestion logistique des déchets'],
    skills: ['Autonomie', 'Organisation'],
    collapsible: true,
  },
];
