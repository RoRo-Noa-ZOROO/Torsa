import { useParams, Link } from 'react-router-dom'
import content from '../data/content.json'
import { FadeIn, PageTransition } from '../components/AnimatedSection'
import './ServiceDetail.css'

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7" stroke="var(--color-gold)" strokeWidth="1.5"/>
    <path d="M5 8l2 2 4-4" stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function SidebarCard({ title, items }) {
  if (!items || !items.length) return null
  return (
    <FadeIn className="service-detail__sidebar-card">
      <h3 className="service-detail__sidebar-title">{title}</h3>
      <ul className="service-detail__list">
        {items.map((item, i) => (
          <li key={i} className="service-detail__list-item"><CheckIcon />{item}</li>
        ))}
      </ul>
    </FadeIn>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = content.services.find(s => s.slug === slug)

  if (!service) {
    return (
      <PageTransition>
        <section className="page-hero">
          <div className="container">
            <h1 className="page-hero__title">Service Not Found</h1>
            <p className="page-hero__subtitle">The service you're looking for doesn't exist.</p>
            <Link to="/services" className="btn btn--primary" style={{ marginTop: 24 }}>View All Services</Link>
          </div>
        </section>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <Link to="/services" className="service-detail__back">← Back to Services</Link>
            <div className="section-label">Service</div>
            <h1 className="page-hero__title">{service.title}</h1>
            <p className="page-hero__subtitle">{service.headline}</p>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container container--wide">
          <div className="service-detail__layout">
            <FadeIn className="service-detail__main">
              <p className="service-detail__body">{service.body}</p>
              {service.supportingBody && <p className="service-detail__body">{service.supportingBody}</p>}
              {service.safeTraining && <p className="service-detail__body">{service.safeTraining}</p>}
            </FadeIn>
            <div className="service-detail__sidebar">
              <SidebarCard title="What We Do" items={service.whatWeDo} />
              <SidebarCard title="Resource Areas" items={service.resourceAreas} />
              <SidebarCard title="Engagement Options" items={service.engagementOptions} />
              <SidebarCard title="Delivery Formats" items={service.deliveryFormats} />
            </div>
          </div>
        </div>
      </section>

      {service.outcome && (
        <section className="section section--sm" style={{ background: 'var(--color-surface)' }}>
          <div className="container" style={{ maxWidth: 800, textAlign: 'center' }}>
            <FadeIn>
              <div className="accent-line" style={{ margin: '0 auto 24px' }}></div>
              <h2 className="section-title">Expected Outcome</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>{service.outcome}</p>
            </FadeIn>
          </div>
        </section>
      )}

      {service.cta && (
        <section className="section section--sm">
          <div className="container" style={{ textAlign: 'center' }}>
            <FadeIn>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', marginBottom: 24 }}>{service.cta}</p>
              <Link to="/contact" className="btn btn--primary btn--lg">Contact Us</Link>
            </FadeIn>
          </div>
        </section>
      )}
    </PageTransition>
  )
}