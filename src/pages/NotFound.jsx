import { Link } from 'react-router-dom'
import { FadeIn, PageTransition } from '../components/AnimatedSection'
import './NotFound.css'

export default function NotFound() {
  return (
    <PageTransition>
      <section className="not-found">
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeIn>
            <div className="not-found__code">404</div>
            <h1 className="not-found__title">Page Not Found</h1>
            <p className="not-found__text">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="not-found__actions">
              <Link to="/" className="btn btn--primary btn--lg">Return Home</Link>
              <Link to="/services" className="btn btn--secondary btn--lg">View Services</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  )
}