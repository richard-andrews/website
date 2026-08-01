import { useEffect, useState } from 'react'
import { profile } from '../data/cv.js'

function Header({ sections }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const handleNavClick = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__mark" href="#top">
          {profile.name}
        </a>

        <nav className="site-header__nav site-header__nav--desktop" aria-label="Primary">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.label}
            </a>
          ))}
        </nav>

        <button
          className="site-header__toggle"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        className={`site-header__nav site-header__nav--mobile ${open ? 'is-open' : ''}`}
        aria-label="Primary"
      >
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} onClick={handleNavClick}>
            {s.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
