import { leadership } from '../data/cv.js'
import { Dot } from './Shapes.jsx'

function Leadership() {
  return (
    <section id="leadership" className="section leadership">
      <div className="section__inner">
        <h2 className="section__heading">
          <Dot className="section__heading-dot" />
          Leadership &amp; Community
        </h2>

        <div className="leadership__grid">
          {leadership.map((item) => (
            <article className="leadership-card" key={item.role}>
              <p className="leadership-card__period">{item.period}</p>
              <h3>{item.role}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership
