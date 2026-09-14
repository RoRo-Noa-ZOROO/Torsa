import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import content from '../data/content.json'
import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, PageTransition } from '../components/AnimatedSection'
import './Home.css'

export default function Home() {
  const { home, services } = content

  return (
    <PageTransition>
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__grid-pattern"></div>
          <div className="hero__gradient"></div>
        </div>
        <div className="container container--wide hero__inner">
          <FadeIn className="hero__content">
            <div className="section-label">TORSA Consulting</div>
            <h1 className="hero__title">{home.hero.title}</h1>
            <p className="hero__body">{home.hero.body}</p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary btn--lg">{home.hero.primaryCta}</Link>
              <Link to="/services" className="btn btn--secondary btn--lg">{home.hero.secondaryCta}</Link>
            </div>
          </FadeIn>
          <FadeInRight delay={0.3} className="hero__visual">
            <div className="hero__card">
              <div className="hero__card-line"></div>
              <div className="hero__card-line"></div>
              <div className="hero__card-line"></div>
            </div>
          </FadeInRight>
        </div>
      </section>

      {/* Positioning */}
      <section className="section positioning">
        <div className="container">
          <FadeIn className="positioning__inner">
            <div className="positioning__accent"></div>
            <div>
              <h2 className="section-title">{home.positioning.title}</h2>
              <p className="section-subtitle">{home.positioning.body}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="section services-section">
        <div className="container container--wide">
          <FadeIn className="services-section__header">
            <div className="section-label">Our Capabilities</div>
            <h2 className="section-title">Core Service Pillars</h2>
            <p className="section-subtitle">Comprehensive technology advisory and delivery across the full value chain.</p>
          </FadeIn>
          <StaggerContainer className="services-section__grid">
            {home.coreServicePillars.map((pillar, i) => (
              <StaggerItem key={i}>
                <div className="pillar-card">
                  <p className="pillar-card__text">{pillar}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why TORSA */}
      <section className="section why-section">
        <div className="container container--wide">
          <FadeIn className="why-section__header">
            <div className="section-label">Our Difference</div>
            <h2 className="section-title">{home.whyTorsa.title}</h2>
          </FadeIn>
          <StaggerContainer className="why-section__grid">
            {home.whyTorsa.items.map((item, i) => (
              <StaggerItem key={i}>
                <div className="why-card">
                  <h3 className="why-card__title">{item.title}</h3>
                  <p className="why-card__body">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* DimenServe Feature */}
      <section className="section dimenserve-feature">
        <div className="container container--wide">
          <div className="dimenserve-feature__inner">
            <FadeInLeft className="dimenserve-feature__content">
              <div className="section-label">DimenServe GRC</div>
              <h2 className="section-title">Digitize Governance, Risk and Compliance</h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                {content.dimenserve.intro}
              </p>
              <Link to="/dimenserve-grc" className="btn btn--primary">Learn More</Link>
            </FadeInLeft>
            <FadeInRight className="dimenserve-feature__visual">
              <div className="dimenserve-feature__mockup">
                {content.dimenserve.capabilities.slice(0, 6).map((item, i) => (
                  <div key={i} className="dimenserve-feature__item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="var(--color-gold)" strokeWidth="1.5"/>
                      <path d="M5 8l2 2 4-4" stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Delivery Approach */}
      <section className="section delivery-section">
        <div className="container">
          <FadeIn className="delivery-section__inner">
            <div className="section-label">How We Work</div>
            <h2 className="section-title">Delivery Approach</h2>
            <p className="section-subtitle" style={{ maxWidth: 800 }}>{home.deliveryModel}</p>
          </FadeIn>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section services-preview">
        <div className="container container--wide">
          <FadeIn className="services-preview__header">
            <div className="section-label">Services</div>
            <h2 className="section-title">What We Do</h2>
          </FadeIn>
          <StaggerContainer className="services-preview__grid">
            {services.slice(0, 6).map((service, i) => (
              <StaggerItem key={service.slug}>
                <Link to={`/services/${service.slug}`} className="service-preview-card">
                  <h3 className="service-preview-card__title">{service.title}</h3>
                  <p className="service-preview-card__headline">{service.headline}</p>
                  <span className="service-preview-card__cta">Learn more</span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn className="services-preview__more">
            <Link to="/services" className="btn btn--secondary">View All Services</Link>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section cta-section">
        <div className="container">
          <FadeIn className="cta-section__inner">
            <h2 className="cta-section__title">{home.finalCta.title}</h2>
            <p className="cta-section__body">{home.finalCta.body}</p>
            <Link to="/contact" className="btn btn--primary btn--lg">{home.finalCta.cta}</Link>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  )
}