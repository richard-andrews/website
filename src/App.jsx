import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Experience from './components/Experience.jsx'
import Leadership from './components/Leadership.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Hobbies from './components/Hobbies.jsx'
import Footer from './components/Footer.jsx'
import { LavaGooDefs } from './components/LavaBackground.jsx'
import { useTheme } from './hooks/useTheme.js'
import { useLavaMotion } from './hooks/useLavaMotion.js'

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
      <main>
        <Hero />
        <Experience lavaRunning={lavaRunning} />
        <Leadership />
        <Skills lavaRunning={lavaRunning} />
        <Education />
        <Hobbies lavaRunning={lavaRunning} />
      </main>
      <Footer />
    </>
  )
}

export default App
