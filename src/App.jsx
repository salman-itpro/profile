import React from 'react'
import { DarkModeProvider } from './contexts/DarkModeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500 ease-in-out">
        <Header />
        <main>
          <Hero />
          <AboutMe />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Certifications />
          <Education />
          <Stats />
          <Contact />
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  )
}

export default App
