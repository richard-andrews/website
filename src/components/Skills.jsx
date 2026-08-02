import { skills } from '../data/cv.js'
import { Dot } from './Shapes.jsx'

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section__inner">
        <h2 className="section__heading">
          <Dot className="section__heading-dot" />
          Skills
        </h2>

        <div className="skills__grid">
          {skills.map((group) => (
            <div className="skills__group" key={group.category}>
              <h3>{group.category}</h3>
              <ul className="skills__chips">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
