export interface Education {
  startDate: Date | null;
  endDate: Date | null;
  name: string;
  school: string;
  location: string;
  description: string;
}

const educations: Education[] = [
  {
    startDate: new Date("2020-10-05"),
    endDate: null,
    name: "Master",
    school: "ESTIAM",
    location: "Paris (75)",
    description: "Ecole d'informatique"
  },
  {
    startDate: new Date("2018-09-01"),
    endDate: new Date("2020-06-30"),
    name: "DUT GEII",
    school: "IUT de Cachan",
    location: "Cachan (94)",
    description: "Génie Électrique et Informatique Industrielle"
  },
  {
    startDate: new Date("2015-09-01"),
    endDate: new Date("2018-06-30"),
    name: "Diplôme du Baccalauréat Général série Scientifique",
    school: "Lycée Léonard de Vinci",
    location: "Levallois-Perret (92)",
    description: "Mention Assez Bien, option Sciences de l’Ingénieur, spécialité Informatique et Sciences du Numérique"
  },
];

export default educations;
