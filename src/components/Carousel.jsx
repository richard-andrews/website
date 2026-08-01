import { useState } from 'react'
import { hobbyIcons } from './Icons.jsx'

// Falls back to a flat illustrated placeholder for a slide until a real
// photo is added (see the note above the Carousel component below).
function Slide({ slide }) {
  const [failed, setFailed] = useState(false)
  const Icon = hobbyIcons[slide.icon]

  if (failed) {
    return (
      <div className="carousel__placeholder" aria-hidden="true">
        {Icon && <Icon className="carousel__placeholder-icon" />}
      </div>
    )
  }

  return (
    <img
      src={slide.image}
      alt={slide.label}
      className="carousel__img"
      onError={() => setFailed(true)}
    />
  )
}

// To add real photos: drop images at `public/hobbies/<name>.jpg` matching
// the `image` paths in `src/data/cv.js` (e.g. public/hobbies/running.jpg).
// Any slide without a matching file falls back to a simple illustration.
function Carousel({ slides }) {
  const [index, setIndex] = useState(0)
  const count = slides.length

  const go = (delta) => setIndex((i) => (i + delta + count) % count)

  return (
    <div className="carousel">
      <div className="carousel__viewport">
        <div
          className="carousel__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide) => (
            <figure className="carousel__slide" key={slide.label}>
              <Slide slide={slide} />
              <figcaption>{slide.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="carousel__controls">
        <button type="button" className="carousel__arrow" onClick={() => go(-1)} aria-label="Previous photo">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="carousel__dots">
          {slides.map((slide, i) => (
            <button
              key={slide.label}
              type="button"
              className={`carousel__dot${i === index ? ' is-active' : ''}`}
              aria-label={`Go to ${slide.label}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <button type="button" className="carousel__arrow" onClick={() => go(1)} aria-label="Next photo">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Carousel
