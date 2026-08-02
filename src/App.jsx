import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Experience from './components/Experience.jsx'
import Leadership from './components/Leadership.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Hobbies from './components/Hobbies.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import LavaBackground, { LavaGooDefs } from './components/LavaBackground.jsx'
import { useTheme } from './hooks/useTheme.js'
import { useLavaMotion } from './hooks/useLavaMotion.js'
import { INSET_SECTIONS } from './config.js'

const sections = [
  { id: 'experience', label: 'Experience' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'hobbies', label: 'Hobbies' },
]

function App() {
  const { theme, toggleTheme } = useTheme()
  const { running: lavaRunning, toggle: toggleLava } = useLavaMotion()

  // Exposed as a root attribute so the layout switch lives entirely in
  // CSS rather than being threaded through every section component.
  useEffect(() => {
    document.documentElement.toggleAttribute('data-inset-sections', INSET_SECTIONS)
  }, [])

  return (
    <>
      <LavaGooDefs />
      <Header
        sections={sections}
        theme={theme}
        onToggleTheme={toggleTheme}
        lavaRunning={lavaRunning}
        onToggleLava={toggleLava}
      />
      <main className="main">
        {/* One background spanning every section, rather than a
            separate instance per section - so blobs can drift across
            a section boundary instead of being clipped at its edge.
            Each section's own background (opaque outside inset mode
            for Hero/Leadership/Education, transparent everywhere in
            inset mode) decides where it actually shows through. */}
        <LavaBackground running={lavaRunning} />
        <Hero />
        <Experience />
        <Leadership />
        <Skills />
        <Education />
        <Hobbies />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
