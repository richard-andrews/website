import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Leadership from './components/Leadership.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Footer from './components/Footer.jsx'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
]

function App() {
  return (
    <>
      <Header sections={sections} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Leadership />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  )
}

export default App
