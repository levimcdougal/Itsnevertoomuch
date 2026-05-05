import { Link } from 'react-router-dom'
import { BrushCleaning, Sparkles, Package, Home as HomeIcon, Armchair, HardHat, Award, Leaf, RefreshCw, DollarSign, ShieldCheck, Star } from 'lucide-react'
import bathrooma from '../assets/bathrooma.jpg'
import bathroomb from '../assets/bathroomb.jpg'
import rooma from '../assets/rooma.jpg'
import roomb from '../assets/roomb.jpg'
import floora from '../assets/floora.jpg'
import floorb from '../assets/floorb.jpg'

const previewServices = [
  { Icon: BrushCleaning, color: '#0369a1', grad: 'grad-1', title: 'Standard Cleaning', desc: 'Routine upkeep to keep your home consistently fresh and tidy.' },
  { Icon: Sparkles,      color: 'var(--green)', grad: 'grad-2', title: 'Deep Cleaning', desc: 'A thorough top-to-bottom clean reaching every surface and corner.' },
  { Icon: Package,       color: '#0369a1', grad: 'grad-3', title: 'Move In / Move Out', desc: 'Leave spotless or arrive to a pristine space, every transition.' },
  { Icon: HomeIcon,      color: 'var(--green)', grad: 'grad-4', title: 'Airbnb Cleaning', desc: 'Fast, guest-ready turnover cleaning that earns five-star reviews.' },
  { Icon: Armchair,      color: '#0369a1', grad: 'grad-5', title: 'Upholstery & Carpet', desc: 'Restore fabrics and floors to like-new condition with deep extraction.' },
  { Icon: HardHat,       color: 'var(--green)', grad: 'grad-6', title: 'Post Construction', desc: 'Remove dust and debris so your newly built space is move-in ready.' },
]

const reviews = [
  {
    name: 'Marshawnna Davis',
    location: '6 weeks ago',
    text: 'Maricela and her helper did AMAZING, I will definitely be using them again!!',
    stars: 5,
  },
  {
    name: 'Simone Morgan',
    location: '11 weeks ago',
    text: 'Excellent work, good prices, and super friendly will be using again!',
    stars: 5,
  },
  {
    name: 'Austin Bailey',
    location: 'Oct 19, 2024',
    text: 'Very professional and communicative. Will book services again and refer to friends!',
    stars: 5,
  },
]

const whyCards = [
  { Icon: Award,        title: 'Quality of Service', desc: 'We hold every visit to the same high standard — detailed, thorough, and consistent every single time.' },
  { Icon: Leaf,         title: 'Eco-Friendly Products', desc: 'Our non-toxic, green cleaning solutions are safe for your family, pets, and the environment.' },
  { Icon: RefreshCw,    title: 'Consistency', desc: 'Whether your first visit or your fiftieth, you always get the same excellent results.' },
  { Icon: DollarSign,   title: 'Cost-Effective', desc: 'Transparent, competitive pricing with no hidden fees — quality cleaning at a fair price.' },
  { Icon: ShieldCheck,  title: 'Fully Insured', desc: 'Our team is fully insured so your home and belongings are always protected while we work.' },
]

export default function Home() {
  return (
    <div className="page-content">

      {/* ===== HERO ===== */}
      <section className="hero hero-full">
        <div className="hero-full-inner">
<h1 className="hero-title">
            Professional{' '}
            <span className="accent-word">Cleaning</span>{' '}
            Services You Can Trust
          </h1>
          <p className="hero-desc">From everyday maintenance to deep cleans, move-outs, Airbnb turnovers, and post-construction cleanups, we handle every detail with care and precision.</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-accent">
              Request a Free Estimate
            </Link>
            <Link to="/services" className="btn btn-outline-blue">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BEFORE & AFTER ===== */}
      <section className="section ba-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Our Work</span>
            <h2 className="section-title">Before & <span>After</span></h2>
            <p className="section-subtitle">
              See the real difference a professional clean makes in every space.
            </p>
          </div>

          <div className="ba-grid">
            {[
              { before: bathrooma, after: bathroomb, label: 'Bathroom' },
              { before: rooma, after: roomb, label: 'Room' },
              { before: floora, after: floorb, label: 'Floor' },
            ].map(({ before, after, label }) => (
              <div key={label} className="ba-pair">
                <div className="ba-card">
                  <div className="ba-label ba-label-before">Before</div>
                  <img src={before} alt={`${label} before`} className="ba-img" />
                </div>
                <div className="ba-arrow">↓</div>
                <div className="ba-card">
                  <div className="ba-label ba-label-after">After</div>
                  <img src={after} alt={`${label} after`} className="ba-img" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">
              Everything Your Space <span>Needs</span>
            </h2>
            <p className="section-subtitle" style={{ maxWidth: 'none' }}>Comprehensive cleaning and organization services for every situation, handled with care every time.</p>
          </div>

          <div className="services-preview-grid">
            {previewServices.map((s) => (
              <div key={s.title} className="service-preview-card">
                <div className={`service-preview-img ${s.grad}`}>
                  <s.Icon size={56} strokeWidth={1.5} color={s.color} />
                </div>
                <div className="service-preview-body">
                  <div className="service-preview-icon-row">
                    <div className="service-preview-icon-circle">
                      <s.Icon size={16} strokeWidth={2} color="var(--green)" />
                    </div>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/services" className="view-all-btn">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section why-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">
              It's Never Too Much <span>Difference</span>
            </h2>
            <p className="section-subtitle" style={{ maxWidth: 'none' }}>We go beyond surface-level cleaning, here's what sets us apart from the rest.</p>
          </div>

          <div className="why-grid-4">
            {whyCards.map((w) => (
              <div key={w.title} className="why-card">
                <div className="why-icon-wrap">
                  <w.Icon size={28} strokeWidth={1.75} color="#1d4ed8" />
                </div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Reviews</span>
            <h2 className="section-title">What Our <span>Clients Say</span></h2>
            <p className="section-subtitle">Real experiences from real customers — see why they keep coming back.</p>
          </div>
          <div className="reviews-grid">
            {reviews.map((r, i) => (
              <div key={i} className="review-card">
                <div className="review-stars">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star key={j} size={18} fill="var(--green)" color="var(--green)" />
                  ))}
                </div>
                <p className="review-text">"{r.text}"</p>
                <div className="review-author">
                  <div className="review-avatar">{r.name.charAt(0)}</div>
                  <div>
                    <div className="review-name">{r.name}</div>
                    <div className="review-location">{r.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner">
        <div className="cta-banner-inner">
          <h2>Ready for a Spotlessly Clean Space?</h2>
          <p>
            Book a free estimate today and experience the cleaning your home deserves.
            No hassle, no hidden fees — just outstanding results.
          </p>
          <div className="cta-banner-actions">
            <Link to="/contact" className="btn btn-accent">
              Get a Free Estimate
            </Link>
            <Link to="/services" className="btn btn-outline-white">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
