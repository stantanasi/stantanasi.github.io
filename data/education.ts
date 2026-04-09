interface IEducation {
  school: string;
  logo: string;
  location: string;
  degree: string;
  field: string;
  start: Date;
  end: Date | null;
  highlights: {
    key: string;
    value: string;
  }[];
}

export const education: IEducation[] = [
  {
    school: 'ESTIAM',
    logo: '/education/estiam.png',
    location: 'Paris, France',
    degree: 'Master en Informatique',
    field: 'Manager de projets spécialisation informatique',
    start: new Date('2020-10'),
    end: new Date('2023-09'),
    highlights: [
      { key: 'spécialité', value: 'Développement web & mobile' },
      { key: 'option', value: 'Gestion de projets agiles' },
      { key: 'niveau', value: 'Titre RNCP Niveau 7 (équivalent Master)' },
    ],
  },
  {
    school: 'IUT de Cachan',
    logo: '/education/iut-cachan.png',
    location: 'Cachan, France',
    degree: 'DUT GEII',
    field: 'Génie Électrique & Informatique Industrielle',
    start: new Date('2018-09'),
    end: new Date('2020-06'),
    highlights: [
      { key: 'domaines', value: 'Automatique · Électronique de puissance' },
      { key: 'option', value: 'Informatique embarquée' },
    ],
  },
  {
    school: 'Lycée Léonard de Vinci',
    logo: '/education/lycee-leonard-de-vinci.png',
    location: 'Levallois-Perret, France',
    degree: 'BAC S-SI',
    field: 'Baccalauréat Scientifique',
    start: new Date('2015-09'),
    end: new Date('2018-06'),
    highlights: [
      { key: 'option', value: "Sciences de l'Ingénieur" },
      { key: 'spécialité', value: 'Informatique & Sciences du Numérique (ISN)' },
      { key: 'mention', value: 'Assez bien' },
    ],
  },
];