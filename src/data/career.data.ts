export interface Job {
  startDate: Date | null;
  endDate: Date | null;
  company: string;
  location: string;
  name: string;
  description: string;
}

const career: Job[] = [
  {
    startDate: new Date("2020-10-19"),
    endDate: null,
    company: "42c",
    location: "Paris (75)",
    name: "Développeur Android/Kotlin junior en alternance",
    description: "Développement d’un composant logiciel permettant de gérer la réception et l'affichage des votes dans les émissions de TV"
  },
  {
    startDate: new Date("2020-04-14"),
    endDate: new Date("2020-07-17"),
    company: "Leviathan Dynamics",
    location: "La courneuve (93)",
    name: "Stagiaire en électronique-informatique",
    description: "Programmation d’un automate industriel connecté\nConception de l’Interface Homme-Machine\n\nPrise en main de l’automate programmable industriel (marque Delta Electronics)\nRéalisation de la structure du programme sous langage Ladder\nMise à jour du programme en fonction des retours d’expérience terrain et ajout de nouvelles fonctionnalités"
  },
  {
    startDate: new Date("2018-08-01"),
    endDate: new Date("2018-08-31"),
    company: "Centre aquatique",
    location: "Levallois-Perret (92)",
    name: "Agent Technique",
    description: "Nettoyage et entretien de la piscine municipale (vestiaires, bureaux, escaliers)\nGestion des déchets\nVitrerie"
  },
];

export default career;
