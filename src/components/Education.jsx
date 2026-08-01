import { education } from '../data/cv.js'
import { Dot } from './Shapes.jsx'

function Education() {
  return (
    <section id="education" className="section education">
      <div className="section__inner">
        <h2 className="section__heading">
          <Dot className="section__heading-dot" />
          Education
        </h2>

        <div className="education__card">
          <div>
            <h3>{education.institution}</h3>
            <p>{education.award}</p>
          </div>
          <div className="experience__meta">
            <p>{education.location}</p>
            <p>
              {education.start} — {education.end}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
