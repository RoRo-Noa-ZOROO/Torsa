import { Link } from 'react-router-dom'
import content from '../data/content.json'
import { FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, PageTransition } from '../components/AnimatedSection'
import './DimenServe.css'

const Check = () => (
  <svg className="ds-check" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7" stroke="var(--color-gold)" strokeWidth="1.5"/>
    <path d="M5 8l2 2 4-4" stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function ModelCard({ model }) {
  return (
    <div className="ds-model">
      <div className="ds-model__header">
        <h3 className="ds-model__name">{model.name}</h3>
        <p className="ds-model__tagline">{model.tagline}</p>
      </div>
      <p className="ds-model__desc">{model.description}</p>
      <div className="ds-model__columns">
        <div className="ds-model__col">
          <h4 className="ds-model__col-title">TORSA Provides</h4>
          <ul className="ds-model__list">
            {model.torsaProvides.map((item, i) => <li key={i} className="ds-model__list-item"><Check />{item}</li>)}
          </ul>
        </div>
        <div className="ds-model__col ds-model__col--alt">
          <h4 className="ds-model__col-title">Client Manages</h4>
          <ul className="ds-model__list">
            {model.clientManages.map((item, i) => <li key={i} className="ds-model__list-item"><Check />{item}</li>)}
          </ul>
        </div>
      </div>
      <p className="ds-model__suited"><strong>Best suited to:</strong> {model.bestSuitedTo}</p>
    </div>
  )
}

export default function DimenServe() {
  const ds = content.dimenserve
  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <div className="section-label">Proprietary Platform</div>
            <h1 className="page-hero__title">{ds.title}</h1>
            <p className="page-hero__subtitle">{ds.headline}</p>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container container--wide">
          <div className="ds-overview">
            <FadeInLeft className="ds-overview__content">
              <p className="ds-overview__text">{ds.intro}</p>
              <p className="ds-overview__text">{ds.description}</p>
            </FadeInLeft>
            <FadeInRight className="ds-overview__sidebar">
              <div className="ds-overview__card">
                <h3 className="ds-overview__card-title">Best For</h3>
                <p className="ds-overview__card-text">{ds.bestFor}</p>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      <section className="section section--sm" style={{background:'var(--color-surface)'}}>
        <div className="container container--wide">
          <FadeIn><div className="section-label">Capabilities</div><h2 className="section-title">What DimenServe Delivers</h2></FadeIn>
          <StaggerContainer className="ds-capabilities" style={{marginTop:32}}>
            {ds.capabilities.map((cap, i) => (
              <StaggerItem key={i}><div className="ds-cap-card"><p className="ds-cap-card__text">{cap}</p></div></StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section">
        <div className="container container--wide">
          <FadeIn><div className="section-label">Solution</div><h2 className="section-title">What We Offer</h2></FadeIn>
          <div className="ds-solution" style={{marginTop:32}}>
            {ds.solution.map((item, i) => <div key={i} className="ds-solution__item"><Check /><p>{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section--sm" style={{background:'var(--color-surface)'}}>
        <div className="container container--wide">
          <FadeIn><div className="section-label">Value & Outcomes</div><h2 className="section-title">Why DimenServe</h2></FadeIn>
          <div className="ds-values" style={{marginTop:32}}>
            {ds.valueRealization.map((v, i) => <div key={i} className="ds-value-item"><Check /><p>{v}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{textAlign:'center'}}>
          <FadeIn style={{maxWidth:700,margin:'0 auto'}}>
            <div className="section-label" style={{justifyContent:'center'}}>Deployment</div>
            <h2 className="section-title">Deployment Options</h2>
            <p className="section-subtitle" style={{margin:'0 auto 28px'}}>DimenServe GRC can be deployed in the way that best fits your infrastructure and security requirements.</p>
            <div className="ds-deploy-options">
              {ds.deploymentOptions.map((opt, i) => <div key={i} className="ds-deploy-chip">{opt}</div>)}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section section--sm" style={{background:'var(--color-surface)'}}>
        <div className="container container--wide">
          <FadeIn><div className="section-label">Service Models</div><h2 className="section-title">{ds.serviceOffering.title}</h2></FadeIn>
          <FadeIn><p className="ds-service-intro">{ds.serviceOffering.description}</p></FadeIn>
          <div className="ds-models">
            {ds.serviceOffering.models.map((model, i) => <FadeIn key={i}><ModelCard model={model} /></FadeIn>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn style={{textAlign:'center',maxWidth:800,margin:'0 auto'}}>
            <div className="accent-line" style={{margin:'0 auto 24px'}}></div>
            <h2 className="section-title">{ds.scalablePartnership.title}</h2>
            <p className="section-subtitle" style={{margin:'12px auto 0'}}>{ds.scalablePartnership.body}</p>
            <p className="section-subtitle" style={{margin:'12px auto 0'}}>{ds.scalablePartnership.nextStep}</p>
          </FadeIn>
        </div>
      </section>

      <section className="section section--sm" style={{background:'var(--color-surface)'}}>
        <div className="container container--wide">
          <FadeIn><div className="section-label">Comparison</div><h2 className="section-title">At a Glance</h2></FadeIn>
          <div className="ds-comparison" style={{marginTop:32}}>
            <table className="ds-table">
              <thead><tr><th>Service Model</th><th>Platform</th><th>Day-to-Day GRC</th><th>Internal Audit</th><th>Best For</th></tr></thead>
              <tbody>{ds.atAGlance.map((row, i) => (
                <tr key={i}><td className="ds-table__model">{row.serviceModel}</td><td>{row.platform}</td><td>{row.dayToDayGrcManagement}</td><td>{row.internalAudit}</td><td>{row.bestFor}</td></tr>
              ))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <FadeIn className="cta-section__inner">
            <h2 className="cta-section__title">{ds.cta.title}</h2>
            <p className="cta-section__body">{ds.cta.body}</p>
            <Link to="/contact" className="btn btn--primary btn--lg">{ds.cta.label}</Link>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  )
}