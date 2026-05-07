export interface IService {
  name: string;
  description: string;
  basePrice: number;
  category: 'web' | 'mobile';
  questions: {
    label: string;
    options: {
      label: string;
      price: number;
      urgent?: boolean;
    }[];
  }[];
}

export const services: IService[] = [
  {
    name: 'Site vitrine',
    description: 'Présentation de votre activité',
    basePrice: 500,
    category: 'web',
    questions: [
      {
        label: 'Nombre de pages',
        options: [
          { label: '1 page (one-page)', price: 0 },
          { label: '3 — 5 pages', price: 200 },
          { label: '5+ pages', price: 500 },
        ],
      },
      {
        label: 'Fonctionnalités',
        options: [
          { label: 'Basique (contact, galerie)', price: 0 },
          { label: '+ Blog / articles', price: 300 },
          { label: '+ Espace client', price: 600 },
        ],
      },
      {
        label: 'Délai',
        options: [
          { label: 'Flexible', price: 0 },
          { label: '1 mois', price: 0 },
          { label: 'Urgent (2 sem.) +20%', price: 0, urgent: true },
        ],
      },
    ],
  },
  {
    name: 'E-commerce',
    description: 'Boutique en ligne complète',
    basePrice: 1500,
    category: 'web',
    questions: [
      {
        label: 'Nombre de produits',
        options: [
          { label: 'Moins de 50', price: 0 },
          { label: '50 — 200', price: 400 },
          { label: '200+', price: 900 },
        ],
      },
      {
        label: 'Fonctionnalités',
        options: [
          { label: 'Boutique standard', price: 0 },
          { label: '+ Abonnements / récurrence', price: 500 },
          { label: '+ Dashboard vendeur', price: 800 },
        ],
      },
      {
        label: 'Délai',
        options: [
          { label: 'Flexible', price: 0 },
          { label: '2 mois', price: 0 },
          { label: 'Urgent (1 mois) +20%', price: 0, urgent: true },
        ],
      },
    ],
  },
  {
    name: 'Landing page',
    description: 'Page marketing percutante',
    basePrice: 300,
    category: 'web',
    questions: [
      {
        label: 'Contenu',
        options: [
          { label: 'Simple (texte + CTA)', price: 0 },
          { label: 'Animée (scroll animations)', price: 200 },
          { label: 'Premium (vidéo, parallax)', price: 400 },
        ],
      },
      {
        label: 'Intégrations',
        options: [
          { label: 'Aucune', price: 0 },
          { label: 'Formulaire + CRM', price: 150 },
          { label: '+ Analytics + A/B test', price: 300 },
        ],
      },
      {
        label: 'Délai',
        options: [
          { label: 'Flexible', price: 0 },
          { label: '2 semaines', price: 0 },
          { label: 'Urgent (1 sem.) +20%', price: 0, urgent: true },
        ],
      },
    ],
  },
  {
    name: 'Application mobile sur mesure',
    description: 'Android et/ou iOS',
    basePrice: 3000,
    category: 'mobile',
    questions: [
      {
        label: 'Plateforme',
        options: [
          { label: 'Android uniquement', price: 0 },
          { label: 'iOS uniquement', price: 0 },
          { label: 'iOS + Android', price: 1000 },
        ],
      },
      {
        label: 'Complexité',
        options: [
          { label: 'Simple (5-10 écrans)', price: 0 },
          { label: 'Moyenne (10-20 écrans)', price: 1500 },
          { label: 'Complexe (20+ écrans)', price: 3000 },
        ],
      },
      {
        label: 'Délai',
        options: [
          { label: 'Flexible', price: 0 },
          { label: '3 mois', price: 0 },
          { label: 'Urgent (6 sem.) +20%', price: 0, urgent: true },
        ],
      },
    ],
  },
  {
    name: 'Application de réservation',
    description: 'Prise de RDV en ligne',
    basePrice: 2000,
    category: 'mobile',
    questions: [
      {
        label: 'Plateforme',
        options: [
          { label: 'Web app (mobile-first)', price: 0 },
          { label: 'App native Android', price: 500 },
          { label: 'iOS + Android natif', price: 1200 },
        ],
      },
      {
        label: 'Fonctionnalités',
        options: [
          { label: 'Calendrier + notifications', price: 0 },
          { label: '+ Paiement en ligne', price: 400 },
          { label: '+ Multi-prestataires', price: 800 },
        ],
      },
      {
        label: 'Délai',
        options: [
          { label: 'Flexible', price: 0 },
          { label: '2 mois', price: 0 },
          { label: 'Urgent (1 mois) +20%', price: 0, urgent: true },
        ],
      },
    ],
  },
];