import { useEffect } from 'react'
import { Phone, MessageCircle, Mail, Clock, MapPin, Award, Zap, ClipboardList, CalendarCheck, ThumbsUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    Icon: ClipboardList,
    title: 'Choose Your Service',
    desc: 'Browse our services and select the cleaning type that fits your home and needs.',
  },
  {
    number: '02',
    Icon: CalendarCheck,
    title: 'Pick a Date & Time',
    desc: 'Use our online booking calendar to select a date and time that works best for you.',
  },
  {
    number: '03',
    Icon: Phone,
    title: 'We Confirm & Show Up',
    desc: "You'll receive a confirmation right away. Our team arrives on time, fully equipped and ready.",
  },
  {
    number: '04',
    Icon: ThumbsUp,
    title: 'Enjoy a Spotless Space',
    desc: 'Sit back and relax. We handle every detail so you come home to a perfectly clean space.',
  },
]

export default function Contact() {
  useEffect(() => {
    ;(function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar) }
      let d = C.document
      C.Cal = C.Cal || function () {
        let cal = C.Cal; let ar = arguments
        if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement('script')).src = A; cal.loaded = true }
        if (ar[0] === L) { const api = function () { p(api, arguments) }; const ns = ar[1]; api.q = api.q || []; if (typeof ns === 'string') { cal.ns[ns] = cal.ns[ns] || api; p(cal.ns[ns], ar); p(cal, ['-', ns, ar]) } else p(cal, ar); return } p(cal, ar)
      }
    })(window, 'https://app.cal.com/embed/embed.js', 'init')
    window.Cal('init', { origin: 'https://app.cal.com' })
    window.Cal('inline', { elementOrSelector: '#cal-inline', calLink: 'itsnevertoomuch' })
    window.Cal('ui', { theme: 'light', hideEventTypeDetails: false, layout: 'month_view' })
  }, [])

  return (
    <div className="page-content">

      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>Contact <span>Us</span></h1>
          <p>
            Reach out by phone, text, or email — we'll get back to you within 24 hours
            to discuss your cleaning needs and provide a free estimate.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Book Online</span>
            <h2 className="section-title">Schedule a <span>Cleaning</span></h2>
            <p className="section-subtitle">Pick a date and time that works for you — we'll take care of the rest.</p>
          </div>
          <div id="cal-inline" className="cal-embed-wrap" />
        </div>
      </section>

      <div className="trust-strip">
        <div className="trust-strip-inner">
          <div className="trust-strip-item">
            <MessageCircle size={18} strokeWidth={2} color="#0369a1" />
            <span>Hablamos Español</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="contact-layout">

            <div className="contact-form-card">
              <h2>Contact Information</h2>
              <p>Get in touch with us through any of the options below.</p>

              <div className="contact-main-items">
                <div className="contact-main-item">
                  <div className="contact-main-icon"><Phone size={22} strokeWidth={1.75} color="#0369a1" /></div>
                  <div className="contact-main-text">
                    <span className="contact-main-label">Phone</span>
                    <a href="tel:+19452904980" className="contact-main-value">+1 (945) 290-4980</a>
                  </div>
                </div>
                <div className="contact-main-item">
                  <div className="contact-main-icon"><MessageCircle size={22} strokeWidth={1.75} color="#0369a1" /></div>
                  <div className="contact-main-text">
                    <span className="contact-main-label">Text</span>
                    <a href="sms:+19452904980" className="contact-main-value">+1 (945) 290-4980</a>
                  </div>
                </div>
                <div className="contact-main-item">
                  <div className="contact-main-icon"><Mail size={22} strokeWidth={1.75} color="#0369a1" /></div>
                  <div className="contact-main-text">
                    <span className="contact-main-label">Email</span>
                    <a href="mailto:itsnevertoomuchclnsvc@gmail.com" className="contact-main-value">itsnevertoomuchclnsvc@gmail.com</a>
                  </div>
                </div>
                <div className="contact-main-item">
                  <div className="contact-main-icon"><Clock size={22} strokeWidth={1.75} color="#0369a1" /></div>
                  <div className="contact-main-text">
                    <span className="contact-main-label">Hours</span>
                    <span className="contact-main-value">Mon – Sat: 8am – 7pm</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-sidebar">
              <div className="contact-info-card">
                <h3>Service Areas</h3>
                <div className="contact-info-items">
                  <div className="contact-info-item">
                    <div className="contact-info-item-icon"><MapPin size={18} strokeWidth={1.75} color="#0369a1" /></div>
                    <div className="contact-info-item-text">
                      <h4>We Serve</h4>
                      <div className="service-areas">
                        <span className="service-area-tag">Dallas Fort Worth Area & Surrounding Areas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-info-card">
                <h3>Our Promise</h3>
                <div className="contact-info-items">
                  <div className="contact-info-item">
                    <div className="contact-info-item-icon"><Award size={18} strokeWidth={1.75} color="#0369a1" /></div>
                    <div className="contact-info-item-text">
                      <h4>100% Satisfaction Guarantee</h4>
                      <p>If you're not happy, we'll make it right — no questions asked.</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-item-icon"><Zap size={18} strokeWidth={1.75} color="#0369a1" /></div>
                    <div className="contact-info-item-text">
                      <h4>Fast Response</h4>
                      <p>We reply to all inquiries within 24 hours.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section how-it-works-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Simple Process</span>
            <h2 className="section-title">How It <span>Works</span></h2>
            <p className="section-subtitle">
              Getting a professional clean is easier than you think — four simple steps and we handle the rest.
            </p>
          </div>
          <div className="steps-grid">
            {steps.map((step) => (
              <div key={step.number} className="step-card">
                <div className="step-number">{step.number}</div>
                <div className="step-icon-wrap">
                  <step.Icon size={26} strokeWidth={1.75} color="#0369a1" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
