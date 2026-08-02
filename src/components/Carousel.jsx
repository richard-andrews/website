import { useState } from 'react'
import { placeholderIcons, ImageIcon } from './Icons.jsx'

// Falls back to a flat illustrated placeholder until a real photo is
// added at the slide's `src` path (see the note in src/data/cv.js).
function Slide({ slide }) {
  const [failed, setFailed] = useState(false)
  const Icon = placeholderIcons[slide.icon] ?? ImageIcon

  if (failed) {
    return (
      <div className="carousel__placeholder" aria-hidden="true">
        <Icon className="carousel__placeholder-icon" />
      </div>
    )
  }

  return (
    <img
      src={slide.src}
      alt={slide.caption ?? ''}
      className="carousel__img"
      onError={() => setFailed(true)}
    />
  )
}

// A generic image carousel: it takes whatever slides it's given and
// knows nothing about hobbies, so the photo set can grow, shrink or be
// reordered independently of any other list on the page.
function Carousel({ slides }) {
  const [index, setIndex] = useState(0)
  const count = slides.length

  if (count === 0) return null

  const go = (delta) => setIndex((i) => (i + delta + count) % count)
  const label = (slide, i) => slide.caption ?? `Photo ${i + 1}`

  return (
    <div className="carousel">
      <div className="carousel__viewport">
        <div
          className="carousel__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <figure className="carousel__slide" key={slide.src ?? i}>
              <Slide slide={slide} />
              {slide.caption && <figcaption>{slide.caption}</figcaption>}
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
              key={slide.src ?? i}
              type="button"
              className={`carousel__dot${i === index ? ' is-active' : ''}`}
              aria-label={`Go to ${label(slide, i)}`}
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
