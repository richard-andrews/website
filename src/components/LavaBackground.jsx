import { useEffect, useRef } from 'react'
import { LAVA_LAMP_ENABLED } from '../config.js'

// Rendered once for the whole page (see App.jsx) - every LavaBackground
// instance shares this single filter definition rather than each
// duplicating an element with the same id.
export function LavaGooDefs() {
  if (!LAVA_LAMP_ENABLED) return null

  return (
    <svg width="0" height="0" aria-hidden="true">
      <defs>
        <filter id="lava-goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9"
          />
        </filter>
      </defs>
    </svg>
  )
}

const BLOB_COUNT = 7

// A decorative, contained background: a handful of blurred, irregular
// (kidney-bean-ish) blobs merged with an SVG goo filter so they melt
// into one another as they drift, like the wax in a lava lamp. Motion
// is mostly the slow CSS loop below (large, graceful, unhurried) - the
// JS layer on top adds only a whisper of imperfection, plus a "drag"
// against scroll: the blobs lag behind rather than tracking it exactly,
// like they have their own weight, then ease back once scrolling stops.
function LavaBackground({ running }) {
  const wrapRefs = useRef([])
  const wander = useRef(
    Array.from({ length: BLOB_COUNT }, () => ({ x: 0, y: 0, vx: 0, vy: 0 })),
  )
  const active = LAVA_LAMP_ENABLED && running

  useEffect(() => {
    if (!active) return undefined

    let smoothedScroll = window.scrollY

    let frame = requestAnimationFrame(function tick() {
      const scrollY = window.scrollY
      // Eases toward the real scroll position rather than tracking it -
      // the gap between the two is what gives the blobs their "weight",
      // so they lag behind the scroll and settle once it stops. Clamped
      // because a big jump (an anchor link, say) would otherwise fling
      // them right out of the section and take an age to crawl back.
      smoothedScroll += (scrollY - smoothedScroll) * 0.08
      const drag = Math.max(-70, Math.min(70, (scrollY - smoothedScroll) * 0.15))

      wander.current.forEach((w, i) => {
        // A whisper of imperfection - much smaller than a true random
        // walk, just enough that the loop doesn't feel mechanical.
        w.vx += (Math.random() - 0.5) * 0.5
        w.vy += (Math.random() - 0.5) * 0.5
        w.vx -= w.x * 0.015
        w.vy -= w.y * 0.015
        w.vx *= 0.95
        w.vy *= 0.95
        w.x += w.vx * 0.035
        w.y += w.vy * 0.035

        const el = wrapRefs.current[i]
        if (el) {
          el.style.transform = `translate(${w.x.toFixed(1)}px, ${(w.y + drag).toFixed(1)}px)`
        }
      })

      frame = requestAnimationFrame(tick)
    })

    return () => cancelAnimationFrame(frame)
  }, [active])

  if (!LAVA_LAMP_ENABLED) return null

  return (
    <div className={`lava-bg${active ? ' is-running' : ''}`}>
      <div className="lava-bg__blobs">
        {Array.from({ length: BLOB_COUNT }).map((_, i) => (
          <div
            className="lava-bg__wrap"
            key={i}
            ref={(el) => {
              wrapRefs.current[i] = el
            }}
          >
            <span className={`lava-bg__blob lava-bg__blob--${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LavaBackground
