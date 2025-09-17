import React, { Suspense } from 'react'
import { DarkModeProvider } from './contexts/DarkModeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import AboutMe from './components/AboutMe'
import LogoSlider from './components/LogoSlider'
import ScrollButton from './components/ScrollButton'
import { LazyProjects, LazyExperience, LazySkills, LazyCertifications, LazyWrapper } from './components/LazyWrapper'

// Lazy load heavy components
const Education = React.lazy(() => import('./components/Education'))
const Stats = React.lazy(() => import('./components/Stats'))
const Contact = React.lazy(() => import('./components/Contact'))
const Footer = React.lazy(() => import('./components/Footer'))

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500 ease-in-out">
        <Header />
        <main>
          <Hero />
          <AboutMe />
          <About />
          <LazyWrapper>
            <LazyProjects />
          </LazyWrapper>
          <LazyWrapper>
            <LazyExperience />
          </LazyWrapper>
          <LazyWrapper>
            <LazySkills />
          </LazyWrapper>
          <LazyWrapper>
            <LazyCertifications />
          </LazyWrapper>
          <Suspense fallback={<div className="py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div></div>}>
            <Education />
          </Suspense>
          <Suspense fallback={<div className="py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div></div>}>
            <Stats />
          </Suspense>
          <LogoSlider />
          <Suspense fallback={<div className="py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div></div>}>
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={<div className="py-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div></div>}>
          <Footer />
        </Suspense>
        <ScrollButton />
      </div>
    </DarkModeProvider>
  )
}

export default App
