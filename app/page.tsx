import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Hero from '@/components/sections/Hero';
import Languages from '@/components/sections/Languages';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Languages />
    </main>
  );
}
