import { Link } from 'react-router-dom'
import content from '../data/content.json'
import { FadeIn, StaggerContainer, StaggerItem, PageTransition } from '../components/AnimatedSection'
import './Services.css'

export default function Services() {
  const { services } = content

  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <div className="section-label">Our Services</div>
            <h1 className="page-hero__title">Technology Capability, Advisory &amp; Delivery</h1>
            <p className="page-hero__subtitle">
              TORSA delivers across the full technology value chain — from strategy and governance through to implementation, training and managed delivery.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container container--wide">
          <StaggerContainer className="services-grid">
            {services.map((service, i) => (
              <StaggerItem key={service.slug}>
                <Link to={`/services/${service.slug}`} className="service-card">
                  <div className="service-card__header">
                    <h2 className="service-card__title">{service.title}</h2>
                  </div>
                  <p className="service-card__headline">{service.headline}</p>
                  <p className="service-card__body">{service.body}</p>
                  <span className="service-card__cta">View details</span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <FadeIn className="cta-section__inner">
            <h2 className="cta-section__title">{content.home.finalCta.title}</h2>
            <p className="cta-section__body">{content.home.finalCta.body}</p>
            <Link to="/contact" className="btn btn--primary btn--lg">{content.home.finalCta.cta}</Link>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  )
}