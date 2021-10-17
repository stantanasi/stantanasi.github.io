import React from 'react'
import Header from "./components/header/header"
import Home from './components/home/home';
import AboutMe from './components/about-me/about-me';
import Career from './components/career/career';
import Contact from './components/contact/contact';
import Education from './components/education/education';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Footer from "./components/footer/footer"


const App = (props: {}) => {
  return (
    <main>
      <Header />

      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Career />
      <Education />
      <Contact />

      <Footer />
    </main>
  )
}

export default App
