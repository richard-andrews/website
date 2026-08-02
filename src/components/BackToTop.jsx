import { useEffect, useState } from 'react'

// Appears once you're a screen or so down the page, and jumps back to
// the hero. A real anchor rather than a scroll handler, so it still
// works without JS and shows up in the accessibility tree as a link.
function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      className={`back-to-top${visible ? ' is-visible' : ''}`}
      href="#top"
      aria-label="Back to top"
      tabIndex={visible ? undefined : -1}
      aria-hidden={visible ? undefined : true}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M12 19V6M6 12l6-6 6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  )
}

export default BackToTop
