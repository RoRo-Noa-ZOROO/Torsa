import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import content from '../data/content.json'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => { setIsOpen(false) }, [location])
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const navLinks = content.navigation

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar__inner container container--wide">
          <Link to="/" className="navbar__logo" aria-label="TORSA Consulting Home">
            <img src="/torsa-logo.png" alt="TORSA Consulting" className="navbar__logo-img" />
            <span className="navbar__logo-text">TORSA</span>
          </Link>
          <div className="navbar__links" role="menubar">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path}
                className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                role="menuitem" end={link.path === '/'}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="navbar__actions">
            <Link to="/contact" className="btn btn--primary navbar__cta">Start a Conversation</Link>
            <button className={`navbar__hamburger ${isOpen ? 'navbar__hamburger--open' : ''}`}
              onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div className="navbar__mobile-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }} onClick={() => setIsOpen(false)}>
            <motion.div className="navbar__mobile-menu" onClick={(e) => e.stopPropagation()}
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}>
              <div className="navbar__mobile-header">
                <Link to="/" className="navbar__mobile-logo">
                  <img src="/torsa logo.png" alt="TORSA" className="navbar__logo-img" />
                  <span className="navbar__logo-text">TORSA</span>
                </Link>
                <button className="navbar__close" onClick={() => setIsOpen(false)} aria-label="Close menu">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <div className="navbar__mobile-links">
                {navLinks.map((link, i) => (
                  <motion.div key={link.path}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.04, duration: 0.3 }}>
                    <NavLink to={link.path}
                      className={({ isActive }) => `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`}
                      end={link.path === '/'}>
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
              <motion.div className="navbar__mobile-cta"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}>
                <Link to="/contact" className="btn btn--primary btn--lg" style={{ width: '100%', textAlign: 'center' }}>
                  Start a Conversation
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}