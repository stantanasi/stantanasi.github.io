import React from 'react'
import Header from "./components/header/Header"
import Home from './components/home/Home';
import AboutMe from './components/about-me/AboutMe';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Footer from "./components/footer/Footer"


const App = (props: {}) => {
  return (
    <main>
      <Header />

      <Home />
      <AboutMe />
      <Skills />
      <Projects />

      <Footer />
    </main>
  )
}

export default App
