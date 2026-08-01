import { hobbies } from '../data/cv.js'
import { Dot } from './Shapes.jsx'
import Carousel from './Carousel.jsx'

function Hobbies() {
  return (
    <section id="hobbies" className="section hobbies">
      <div className="section__inner">
        <h2 className="section__heading">
          <Dot className="section__heading-dot" />
          Hobbies
        </h2>

        <div className="hobbies__layout">
          <ul className="hobbies__chips">
            {hobbies.map((hobby) => (
              <li key={hobby.label}>{hobby.label}</li>
            ))}
          </ul>

          <Carousel slides={hobbies} />
        </div>
      </div>
    </section>
  )
}

export default Hobbies
