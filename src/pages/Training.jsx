import { Link } from 'react-router-dom'
import content from '../data/content.json'
import { FadeIn, StaggerContainer, StaggerItem, PageTransition } from '../components/AnimatedSection'
import './Training.css'

export default function Training() {
  const trainingService = content.services.find(s => s.slug === 'training-and-professional-capability-development')

  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <div className="section-label">Training & Capability</div>
            <h1 className="page-hero__title">{trainingService.title}</h1>
            <p className="page-hero__subtitle">{trainingService.headline}</p>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container container--wide">
          <FadeIn className="training-intro">
            <p className="training-intro__text">{trainingService.body}</p>
            {trainingService.safeTraining && (
              <p className="training-intro__text">{trainingService.safeTraining}</p>
            )}
          </FadeIn>
        </div>
      </section>

      {trainingService.bootCamps && (
        <section className="section section--sm" style={{ background: 'var(--color-surface)' }}>
          <div className="container container--wide">
            <FadeIn>
              <div className="section-label">Boot Camps</div>
              <h2 className="section-title">{trainingService.bootCamps.title}</h2>
              <p className="section-subtitle">{trainingService.bootCamps.body}</p>
            </FadeIn>
            <StaggerContainer className="training-topics__grid" style={{ marginTop: 40 }}>
              {trainingService.bootCamps.topics.map((topic, i) => (
                <StaggerItem key={i}>
                  <div className="training-topic-card">
                    <p className="training-topic-card__text">{topic}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {trainingService.deliveryFormats && (
        <section className="section">
          <div className="container container--wide">
            <FadeIn>
              <div className="section-label">Delivery</div>
              <h2 className="section-title">How We Deliver Training</h2>
            </FadeIn>
            <StaggerContainer className="training-formats__grid" style={{ marginTop: 40 }}>
              {trainingService.deliveryFormats.map((format, i) => (
                <StaggerItem key={i}>
                  <div className="training-format-card">
                    <p className="training-format-card__text">{format}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      <section className="section section--sm" style={{ background: 'var(--color-surface)' }}>
        <div className="container" style={{ maxWidth: 800, textAlign: 'center' }}>
          <FadeIn>
            <div className="accent-line" style={{ margin: '0 auto 24px' }}></div>
            <h2 className="section-title">Expected Outcome</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>{trainingService.outcome}</p>
          </FadeIn>
        </div>
      </section>

      {trainingService.calendar && (
        <section className="section">
          <div className="container">
            <FadeIn className="training-calendar">
              <div className="section-label">Schedule</div>
              <h2 className="section-title">{trainingService.calendar.title}</h2>
              <p className="section-subtitle">{trainingService.calendar.body}</p>
              <div className="training-calendar__notice">
                <span className="training-calendar__notice-mark" aria-hidden="true">i</span>
                <p className="training-calendar__note">{trainingService.calendar.note}</p>
              </div>
              <div className="training-calendar__actions">
                <Link to="/contact" className="btn btn--primary">{trainingService.calendar.cta}</Link>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      <section className="section cta-section">
        <div className="container">
          <FadeIn className="cta-section__inner">
            <h2 className="cta-section__title">Ready to Upskill Your Team?</h2>
            <p className="cta-section__body">{trainingService.cta}</p>
            <Link to="/contact" className="btn btn--primary btn--lg">Start a Conversation</Link>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  )
}