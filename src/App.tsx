import React from 'react';
import { Header, Footer } from './components';
import { Home, AboutMe, Projects, Skills } from './components/home';

export default function App() {
  return (
    <main>
      <Header />

      <Home />
      <AboutMe />
      <Projects />
      <Skills />

      <Footer />
    </main>
  )
}
