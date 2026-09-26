import { Link } from 'react-router-dom'
import content from '../data/content.json'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container container--wide">
          <div className="footer__grid">
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <img src="/torsa-logo.png" alt="TORSA Consulting" className="footer__logo-img" />
                <span className="footer__logo-text">TORSA</span>
              </Link>
              <p className="footer__tagline">{content.site.positioning}</p>
            </div>

            <div className="footer__col">
              <h4 className="footer__heading">Navigation</h4>
              <ul className="footer__list">
                {content.navigation.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer__link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__heading">Services</h4>
              <ul className="footer__list">
                {content.services.slice(0, 5).map((service) => (
                  <li key={service.slug}>
                    <Link to={`/services/${service.slug}`} className="footer__link">{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__heading">Get in Touch</h4>
              <p className="footer__text">Ready to take the next step in your technology journey?</p>
              <Link to="/contact" className="btn btn--primary footer__cta">Start a Conversation</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container container--wide">
          <div className="footer__bottom-inner">
            <p className="footer__copyright">© {currentYear} TORSA Consulting. All rights reserved.</p>
            <p className="footer__note">Technology Journey Partner</p>
          </div>
        </div>
      </div>
    </footer>
  )
}