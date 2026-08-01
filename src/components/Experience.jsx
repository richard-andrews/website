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

        <div className="experience__role">
          <div className="experience__role-header">
            <div>
              <h3>{experience.role}</h3>
              <p className="experience__company">{experience.company}</p>
            </div>
            <div className="experience__meta">
              <p>{experience.location}</p>
              <p>
                {experience.start} - {experience.end}
              </p>
            </div>
          </div>

          <div className="experience__projects">
            {experience.projects.map((project) => (
              <article className="project-card" key={project.name}>
                <h4>{project.name}</h4>
                <ul>
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
