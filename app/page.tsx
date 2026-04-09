import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Hero from '@/components/sections/Hero';
import Languages from '@/components/sections/Languages';
import Skills from '@/components/sections/Skills';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Languages />
    </main>
  );
}
