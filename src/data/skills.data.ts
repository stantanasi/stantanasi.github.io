export interface SkillCategory {
  title: string;
  skills: Skill[];
};

export interface Skill {
  name: string;
  percent: number;
};

const skills: SkillCategory[] = [
  {
    title: "Développement mobile",
    skills: [
      {
        name: "Android",
        percent: 90,
      },
      {
        name: "Kotlin",
        percent: 90,
      },
      {
        name: "Java",
        percent: 80,
      },
      {
        name: "Flutter",
        percent: 20,
      },
    ],
  },
  {
    title: "Développement frontend",
    skills: [
      {
        name: "Angular",
        percent: 80,
      },
      {
        name: "React",
        percent: 75,
      },
      {
        name: "TypeScript",
        percent: 85,
      },
      {
        name: "JavaScript",
        percent: 80,
      },
      {
        name: "HTML",
        percent: 80,
      },
      {
        name: "CSS",
        percent: 70,
      },
    ],
  },
  {
    title: "Développement backend",
    skills: [
      {
        name: "PHP",
        percent: 90,
      },
      {
        name: "MySQL",
        percent: 95,
      },
      {
        name: "NodeJS",
        percent: 85,
      },
      {
        name: "SpringBoot",
        percent: 50,
      },
    ],
  },
  {
    title: "Développement logiciel",
    skills: [
      {
        name: "C#",
        percent: 60,
      },
      {
        name: "VB.Net",
        percent: 35,
      },
    ],
  },
  {
    title: "Électronique",
    skills: [
      {
        name: "C++",
        percent: 70,
      },
      {
        name: "C",
        percent: 60,
      },
      {
        name: "Altium Designer",
        percent: 75,
      },
      {
        name: "Mbed",
        percent: 75,
      },
      {
        name: "Unity Pro",
        percent: 60,
      },
      {
        name: "e!COCKPIT - WAGO",
        percent: 60,
      },
    ],
  },
];
export default skills;