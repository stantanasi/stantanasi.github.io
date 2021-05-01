import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from  './components/layout/layout';
import Home from  './components/home/home';
import AboutMe from './components/about-me/about-me';
import Career from './components/career/career';
import Contact from './components/contact/contact';
import Education from './components/education/education';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Career />
      <Education />
      <Contact />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
