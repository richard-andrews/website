import { profile } from '../data/cv.js'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__name">{profile.name}</p>
          <p className="site-footer__title">
            {profile.title} - {profile.location}
          </p>
        </div>

        <div className="site-footer__links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          {profile.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <p className="site-footer__copyright">
        © {year} {profile.name}. Built with the assistance of AI.
      </p>
    </footer>
  )
}

export default Footer
