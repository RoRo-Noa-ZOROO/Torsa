import { useState } from 'react'
import content from '../data/content.json'
import { FadeIn, StaggerContainer, StaggerItem, PageTransition } from '../components/AnimatedSection'
import './Contact.css'

export default function Contact() {
  const { contact } = content
  const [formState, setFormState] = useState({
    name: '', email: '', company: '', phone: '', service: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <div className="section-label">Contact</div>
            <h1 className="page-hero__title">{contact.title}</h1>
            <p className="page-hero__subtitle">{contact.body}</p>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container container--wide">
          <div className="contact-layout">
            <FadeIn className="contact-form-wrapper">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success__icon">✓</div>
                  <h2 className="contact-success__title">Thank You</h2>
                  <p className="contact-success__text">Your message has been received. We'll be in touch shortly.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label className="contact-form__label" htmlFor="name">Full Name *</label>
                      <input className="contact-form__input" type="text" id="name" name="name" required value={formState.name} onChange={handleChange} />
                    </div>
                    <div className="contact-form__field">
                      <label className="contact-form__label" htmlFor="email">Email *</label>
                      <input className="contact-form__input" type="email" id="email" name="email" required value={formState.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label className="contact-form__label" htmlFor="company">Company</label>
                      <input className="contact-form__input" type="text" id="company" name="company" value={formState.company} onChange={handleChange} />
                    </div>
                    <div className="contact-form__field">
                      <label className="contact-form__label" htmlFor="phone">Phone</label>
                      <input className="contact-form__input" type="tel" id="phone" name="phone" value={formState.phone} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="contact-form__field">
                    <label className="contact-form__label" htmlFor="service">Area of Interest</label>
                    <select className="contact-form__select" id="service" name="service" value={formState.service} onChange={handleChange}>
                      <option value="">Select a service...</option>
                      {content.services.map(s => (
                        <option key={s.slug} value={s.slug}>{s.title}</option>
                      ))}
                      <option value="dimenserve">DimenServe GRC</option>
                      <option value="training">Training & Capability</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="contact-form__field">
                    <label className="contact-form__label" htmlFor="message">Message *</label>
                    <textarea className="contact-form__textarea" id="message" name="message" rows="5" required value={formState.message} onChange={handleChange}></textarea>
                  </div>
                  <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%' }}>
                    Send Message
                  </button>
                </form>
              )}
            </FadeIn>

            <FadeIn className="contact-info" delay={0.1}>
              <div className="contact-info__card">
                <h3 className="contact-info__title">Get in Touch</h3>
                <p className="contact-info__text">
                  Whether you need strategic advice, a delivery partner or specialist capability, we're here to help.
                </p>
                <div className="contact-info__details">
                  <div className="contact-info__item">
                    <span className="contact-info__label">Email</span>
                    <span className="contact-info__value">info@torsaconsulting.com</span>
                  </div>
                  <div className="contact-info__item">
                    <span className="contact-info__label">Location</span>
                    <span className="contact-info__value">South Africa</span>
                  </div>
                  <div className="contact-info__item">
                    <span className="contact-info__label">Availability</span>
                    <span className="contact-info__value">Africa & International</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}