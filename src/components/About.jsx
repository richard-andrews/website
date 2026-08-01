import { about } from '../data/cv.js'
import { Dot } from './Shapes.jsx'

function About() {
  return (
    <section id="about" className="section about">
      <div className="section__inner about__inner">
        <h2 className="section__heading">
          <Dot className="section__heading-dot" />
          About
        </h2>
        <p className="about__text">{about}</p>
      </div>
    </section>
  )
}

export default About
