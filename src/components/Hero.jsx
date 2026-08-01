import { useState } from 'react'
import { profile, stats } from '../data/cv.js'
import { Sunburst } from './Shapes.jsx'

// To add your photo: drop an image at `public/profile.jpg` (any image
// works as long as it's named profile.jpg - or update the src below to
// match your filename). It's picked up automatically; until then this
// falls back to the initials placeholder.
function Portrait() {
  const [failed, setFailed] = useState(false)

  return (
    <div className="hero__portrait">
      <Sunburst className="hero__portrait-burst" />
      <div className="hero__portrait-frame">
        {!failed ? (
          <img
            src="/profile.jpg"
            alt={profile.name}
            className="hero__portrait-img"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="hero__portrait-placeholder" aria-hidden="true">
            RA
          </div>
        )}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <div className="hero__top">
          <Portrait />

          <div className="hero__text">
            <p className="eyebrow">{profile.location}</p>
            <h1 className="hero__name">{profile.name}</h1>
            <p className="hero__title">
              {profile.title} <span className="hero__at">at</span> {profile.company}
            </p>
            <p className="hero__tagline">{profile.tagline}</p>

            <div className="hero__actions">
              <a className="button button--ghost" href="#experience">
                View experience
              </a>
              <a className="button button--primary" href={`mailto:${profile.email}`}>
                Get in touch
              </a>
            </div>
          </div>
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
    </section>
  )
}

export default Hero
