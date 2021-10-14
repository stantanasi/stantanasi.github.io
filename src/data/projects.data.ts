export interface Project {
  title: string;
  description: string;
  company: string | null;
  startDate: string | null;
  endDate: string | null;
  links: {
    github?: string;
    image?: string;
    video?: string;
    file?: string;
    website?: string;
  };
  languages: {
    name: string;
    src: string;
  }[];
  tools?: {
    name: string;
    src: string;
  }[];
}

const projects: Project[] = [
  {
    title: "Robot guide commandé par Bluetooth",
    description: "Conception d’une carte électronique sous Altium Designer\nProgrammation d’un microcontrôleur sous Mbed",
    company: "IUT de Cachan – Cachan (94)",
    startDate: "2019-09-01",
    endDate: "2019-12-30",
    links: {
      image: "/images/projects/robot-guide.jpg",
      file: "/pdf/rapport-robot-guide.pdf",
      // video: "/videos/robot-guide.mp4"
    },
    languages: [
      { name: "C++", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
      { name: "C", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" }
    ],
    tools: [
      { name: "Mbed", src: "https://os.mbed.com/media/uploads/sam_grove/armmbedenabled_grn_trnsbg.png" },
      { name: "Altium Designer", src: "https://assets.website-files.com/5cd19234373c953dced9a059/5ce4072d367ffb442822f2d3_Logo%20Altium%20Designer.png" },
    ]
  },
  {
    title: "Voiture solaire pilotable à distance",
    description: "Utilisation du compilateur Mbed, du logiciel e!COCKPIT et  d’Altium Designer",
    company: "IUT de Cachan – Cachan (94)",
    startDate: "2019-01-01",
    endDate: "2019-05-30",
    links: {
      image: "/images/projects/voiture-solaire.jpg",
      file: "/pdf/rapport-voiture-solaire.pdf",
    },
    languages: [
      { name: "C++", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
      { name: "C", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" }
    ],
    tools: [
      { name: "Mbed", src: "https://os.mbed.com/media/uploads/sam_grove/armmbedenabled_grn_trnsbg.png" },
      { name: "Altium Designer", src: "https://assets.website-files.com/5cd19234373c953dced9a059/5ce4072d367ffb442822f2d3_Logo%20Altium%20Designer.png" },
    ]
  },
  {
    title: "Robot suiveur de ligne",
    description: "Programmation en langage C sous MPLAB\nConception d’une carte électronique sous Altium Designer",
    company: "IUT de Cachan – Cachan (94)",
    startDate: "2018-09-01",
    endDate: "2018-12-30",
    links: {
      image: "/images/projects/gamel.jpg",
      video: "https://youtube.com/embed/b9o71iq4DMY",
      file: "/pdf/rapport-gamel.pdf",
    },
    languages: [
      { name: "C++", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
      { name: "C", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" }
    ],
    tools: [
      { name: "Altium Designer", src: "https://assets.website-files.com/5cd19234373c953dced9a059/5ce4072d367ffb442822f2d3_Logo%20Altium%20Designer.png" },
      { name: "MPLAB", src: "https://www.microchip.com/en-us/development-tools-tools-and-software/mplab-x-ide/_jcr_content/root/responsivegrid_1674832932/isolatedimage/image.coreimg.png/1612294657229/mplab-xide-transparent-background.png" }
    ]
  }
]

export default projects;
