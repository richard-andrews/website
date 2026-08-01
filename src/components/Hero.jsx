import { profile, stats } from '../data/cv.js'
import { Arc, Sunburst } from './Shapes.jsx'

function Hero() {
  return (
    <section id="top" className="hero">
      <Sunburst className="hero__sunburst" />
      <div className="hero__inner">
        <p className="eyebrow">{profile.location}</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__title">
          {profile.title} <span className="hero__at">at</span> {profile.company}
        </p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a className="button button--primary" href="#experience">
            View experience
          </a>
          <a className="button button--ghost" href={`mailto:${profile.email}`}>
            Get in touch
          </a>
        </div>

        <dl className="hero__stats">
          {stats.map((s) => (
            <div className="hero__stat" key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <Arc className="hero__arc" />
    </section>
  )
}

export default Hero
