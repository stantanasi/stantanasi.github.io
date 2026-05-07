import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import GithubProjects from '@/components/sections/GithubProjects';
import Hero from '@/components/sections/Hero';
import Languages from '@/components/sections/Languages';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services';
import Skills from '@/components/sections/Skills';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <GithubProjects />
      <Languages />
    </main>
  );
}
