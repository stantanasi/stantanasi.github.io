import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import DnsIcon from '@mui/icons-material/Dns';
import StorageIcon from '@mui/icons-material/Storage';
import TerminalIcon from '@mui/icons-material/Terminal';
import { JSX } from 'react';

export interface ICategory {
  id: 'all' | 'frontend' | 'backend' | 'database' | 'mobile-tv' | 'software-languages' | 'tools-methods';
  name: string;
  icon?: JSX.Element;
}

export interface ISkill {
  name: string;
  icon: string;
  category: ICategory['id'][];
}

export const categories: ICategory[] = [
  { id: 'all', name: 'Toutes' },
  { id: 'frontend', name: 'Frontend', icon: <CodeIcon fontSize="small" /> },
  { id: 'backend', name: 'Backend', icon: <StorageIcon fontSize="small" /> },
  { id: 'database', name: 'Base de données', icon: <DnsIcon fontSize="small" /> },
  { id: 'mobile-tv', name: 'Mobile & TV', icon: <DevicesIcon fontSize="small" /> },
  { id: 'software-languages', name: 'Logiciel & Langages', icon: <TerminalIcon fontSize="small" /> },
  { id: 'tools-methods', name: 'Outils & Méthodes', icon: <BuildIcon fontSize="small" /> },
];

export const skills: ISkill[] = [
  {
    name: 'TypeScript',
    icon: 'https://api.iconify.design/devicon:typescript.svg',
    category: ['frontend', 'backend', 'mobile-tv', 'software-languages'],
  },
  {
    name: 'Next.js',
    icon: 'https://api.iconify.design/devicon:nextjs.svg?color=white',
    category: ['frontend'],
  },
  {
    name: 'React',
    icon: 'https://api.iconify.design/devicon:react.svg',
    category: ['frontend'],
  },
  {
    name: 'React Native',
    icon: 'https://api.iconify.design/devicon:react.svg',
    category: ['mobile-tv'],
  },
  {
    name: 'Material UI',
    icon: 'https://api.iconify.design/devicon:materialui.svg',
    category: ['frontend'],
  },
  {
    name: 'Node.js',
    icon: 'https://api.iconify.design/devicon:nodejs.svg',
    category: ['backend'],
  },
  {
    name: 'Kotlin',
    icon: 'https://api.iconify.design/devicon:kotlin.svg',
    category: ['mobile-tv', 'software-languages'],
  },
  {
    name: 'Swift',
    icon: 'https://api.iconify.design/devicon:swift.svg',
    category: ['mobile-tv', 'software-languages'],
  },
  {
    name: 'NestJS',
    icon: 'https://api.iconify.design/devicon:nestjs.svg',
    category: ['backend'],
  },
  {
    name: 'AWS',
    icon: 'https://api.iconify.design/devicon:amazonwebservices-wordmark.svg?color=white',
    category: ['backend', 'tools-methods'],
  },
  {
    name: 'Android Studio',
    icon: 'https://api.iconify.design/devicon:androidstudio.svg',
    category: ['mobile-tv', 'tools-methods'],
  },
  {
    name: 'Xcode',
    icon: 'https://api.iconify.design/devicon:xcode.svg',
    category: ['mobile-tv', 'tools-methods'],
  },
  {
    name: 'Figma',
    icon: 'https://api.iconify.design/devicon:figma.svg',
    category: ['frontend', 'mobile-tv', 'tools-methods'],
  },
  {
    name: 'GitHub Actions',
    icon: 'https://api.iconify.design/devicon:githubactions.svg',
    category: ['tools-methods', 'backend'],
  },
  {
    name: 'Angular',
    icon: 'https://api.iconify.design/devicon:angular.svg',
    category: ['frontend'],
  },
  {
    name: 'Flutter',
    icon: 'https://api.iconify.design/devicon:flutter.svg',
    category: ['mobile-tv'],
  },
  {
    name: 'Firebase',
    icon: 'https://api.iconify.design/devicon:firebase.svg',
    category: ['backend', 'mobile-tv', 'database'],
  },
  {
    name: 'MongoDB',
    icon: 'https://api.iconify.design/devicon:mongodb.svg',
    category: ['backend', 'database'],
  },
  {
    name: 'MySQL',
    icon: 'https://api.iconify.design/devicon:mysql.svg',
    category: ['backend', 'database'],
  },
  {
    name: 'PostgreSQL',
    icon: 'https://api.iconify.design/devicon:postgresql.svg',
    category: ['backend', 'database'],
  },
  {
    name: 'Spring Boot',
    icon: 'https://api.iconify.design/devicon:spring.svg',
    category: ['backend'],
  },
  {
    name: 'Express',
    icon: 'https://api.iconify.design/simple-icons:express.svg?color=white',
    category: ['backend'],
  },
  {
    name: 'Java',
    icon: 'https://api.iconify.design/devicon:java.svg',
    category: ['mobile-tv', 'software-languages', 'backend'],
  },
  {
    name: 'SwiftUI',
    icon: 'https://api.iconify.design/devicon:swift.svg',
    category: ['mobile-tv'],
  },
  {
    name: 'Android',
    icon: 'https://api.iconify.design/devicon:android.svg',
    category: ['mobile-tv'],
  },
  {
    name: 'Git',
    icon: 'https://api.iconify.design/devicon:git.svg',
    category: ['tools-methods'],
  },
  {
    name: 'GitHub',
    icon: 'https://api.iconify.design/simple-icons:github.svg?color=white',
    category: ['tools-methods'],
  },
  {
    name: 'Docker',
    icon: 'https://api.iconify.design/devicon:docker.svg',
    category: ['tools-methods', 'backend'],
  },
  {
    name: 'JavaScript',
    icon: 'https://api.iconify.design/devicon:javascript.svg',
    category: ['frontend', 'backend', 'mobile-tv', 'software-languages'],
  },
  {
    name: 'C#',
    icon: 'https://api.iconify.design/devicon:csharp.svg',
    category: ['software-languages', 'backend'],
  },
  {
    name: 'Python',
    icon: 'https://api.iconify.design/devicon:python.svg',
    category: ['software-languages', 'backend'],
  },
  {
    name: 'Jira',
    icon: 'https://api.iconify.design/devicon:jira.svg',
    category: ['tools-methods'],
  },
  {
    name: 'GitLab',
    icon: 'https://api.iconify.design/devicon:gitlab.svg',
    category: ['tools-methods'],
  },
  {
    name: 'BitBucket',
    icon: 'https://api.iconify.design/devicon:bitbucket.svg',
    category: ['tools-methods'],
  },
  {
    name: 'Gradle',
    icon: 'https://api.iconify.design/simple-icons:gradle.svg?color=%237dc4e4',
    category: ['mobile-tv', 'tools-methods'],
  },
  {
    name: 'DynamoDB',
    icon: 'https://api.iconify.design/devicon:amazonwebservices-wordmark.svg?color=white',
    category: ['backend', 'database'],
  },
  {
    name: 'QML',
    icon: 'https://api.iconify.design/devicon:qt.svg',
    category: ['mobile-tv', 'software-languages'],
  },
  {
    name: 'C++',
    icon: 'https://api.iconify.design/devicon:cplusplus.svg',
    category: ['software-languages'],
  },
  {
    name: 'C',
    icon: 'https://api.iconify.design/devicon:c.svg',
    category: ['software-languages'],
  },
  {
    name: 'PHP',
    icon: 'https://api.iconify.design/devicon:php.svg',
    category: ['backend', 'software-languages'],
  },
  {
    name: 'R',
    icon: 'https://api.iconify.design/devicon:r.svg',
    category: ['software-languages'],
  },
  {
    name: 'styled-components',
    icon: 'https://api.iconify.design/devicon:styledcomponents.svg',
    category: ['frontend'],
  },
  {
    name: 'Gatsby',
    icon: 'https://api.iconify.design/devicon:gatsby.svg',
    category: ['frontend'],
  },
  {
    name: 'HTML / CSS',
    icon: 'https://api.iconify.design/devicon:html5.svg',
    category: ['frontend'],
  },
];