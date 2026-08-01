import { hobbies } from '../data/cv.js'
import { Dot } from './Shapes.jsx'

function Hobbies() {
  return (
    <section id="hobbies" className="section hobbies">
      <div className="section__inner">
        <h2 className="section__heading">
          <Dot className="section__heading-dot" />
          Hobbies
        </h2>

        <ul className="hobbies__chips">
          {hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Hobbies
