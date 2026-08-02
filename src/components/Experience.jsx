import { experience } from '../data/cv.js'
import { Dot } from './Shapes.jsx'

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section__inner">
        <h2 className="section__heading">
          <Dot className="section__heading-dot" />
          Experience
        </h2>

        <div className="experience__roles">
          {experience.map((role) => (
            <article className="experience__role" key={`${role.company}-${role.role}`}>
              <div className="experience__role-header">
                <div>
                  <h3>{role.role}</h3>
                  <p className="experience__company">{role.company}</p>
                </div>
                <div className="experience__meta">
                  <p>{role.location}</p>
                  <p>
                    {role.start} - {role.end}
                  </p>
                </div>
              </div>

              {role.summary && <p className="experience__summary">{role.summary}</p>}

              {role.highlights?.length > 0 && (
                <ul className="experience__highlights">
                  {role.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
