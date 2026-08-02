import { Globe, Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './Icons.jsx'
import { profile } from '../data/cv.js'

function iconForLink(label) {
  if (label === 'GitHub') return GitHubIcon
  if (label === 'LinkedIn') return LinkedInIcon
  return Globe
}

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
          <a className="site-footer__link" href={`mailto:${profile.email}`}>
            <Mail className="site-footer__link-icon" />
            {profile.email}
          </a>
          {profile.links.map((link) => {
            const Icon = iconForLink(link.label)
            return (
              <a
                className="site-footer__link"
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <Icon className="site-footer__link-icon" />
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
      <p className="site-footer__copyright">
        © {year} {profile.name}. Built with the assistance of AI.
      </p>
    </footer>
  )
}

export default Footer
