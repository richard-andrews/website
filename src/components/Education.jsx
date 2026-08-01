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

        <div className="education__list">
          {education.map((entry) => (
            <div className="education__card" key={entry.institution}>
              <div>
                <h3>{entry.institution}</h3>
                <p>{entry.award}</p>
              </div>
              <div className="experience__meta">
                <p>{entry.location}</p>
                <p>
                  {entry.start} - {entry.end}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
