import { Link } from 'react-router-dom'
import content from '../data/content.json'
import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, PageTransition } from '../components/AnimatedSection'
import './About.css'

export default function About() {
  const { about } = content

  return (
    <PageTransition>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <div className="section-label">About Us</div>
            <h1 className="page-hero__title">{about.title}</h1>
            <p className="page-hero__subtitle">{about.subtitle}</p>
          </FadeIn>
        </div>
      </section>

      {/* Story / Introduction */}
      <section className="section">
        <div className="container container--wide">
          <div className="about-story">
            <FadeInLeft className="about-story__content">
              <h2 className="section-title">Who We Are</h2>
              <p className="about-story__text">{about.body}</p>
              <p className="about-story__text">{about.supportingBody}</p>
            </FadeInLeft>
            <FadeInRight className="about-story__visual">
              <div className="about-story__card">
                {about.aboutMetrics.map((m, i) => (
                  <div key={i} className="about-story__stat">
                    <span className="about-story__stat-number">{m.value}</span>
                    <span className="about-story__stat-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="section section--sm" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <FadeIn className="about-beliefs">
            <div className="about-beliefs__inner">
              <div className="about-beliefs__accent"></div>
              <div>
                <div className="section-label">Our Philosophy</div>
                <h2 className="section-title">{about.whatWeBelieve}</h2>
                <p className="section-subtitle">{about.beliefBody}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What We Do */}
      <section className="section">
        <div className="container container--wide">
          <FadeIn>
            <div className="section-label">Capabilities</div>
            <h2 className="section-title">What We Do</h2>
          </FadeIn>
          <StaggerContainer className="about-whatwedo__grid" style={{ marginTop: 40 }}>
            {about.whatWeDo.map((item, i) => (
              <StaggerItem key={i}>
                <div className="about-whatwedo__item">
                  <p className="about-whatwedo__text">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Experience & Leadership */}
      <section className="section section--sm" style={{ background: 'var(--color-surface)' }}>
        <div className="container container--wide">
          <div className="about-experience">
            <FadeInLeft className="about-experience__content">
              <div className="section-label">Our Experience</div>
              <h2 className="section-title">A Track Record of Impact</h2>
              <p className="about-experience__text">{about.experience.body}</p>
              <p className="about-experience__text">{about.experience.sectors}</p>
              <p className="about-experience__text">{about.experience.work}</p>
            </FadeInLeft>
            <FadeInRight className="about-experience__sidebar">
              <div className="about-experience__card">
                <div className="section-label">Leadership</div>
                <p className="about-experience__leadership">{about.experience.leadership}</p>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Commitment & Success */}
      <section className="section">
        <div className="container">
          <FadeIn className="about-commitment" style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
            <div className="about-commitment__accent"></div>
            <h2 className="section-title">{about.commitment}</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>{about.successDefinition}</p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
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