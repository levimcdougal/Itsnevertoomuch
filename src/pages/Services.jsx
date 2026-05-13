import { Link } from 'react-router-dom'
import { BrushCleaning, Sparkles, Package, Home, Armchair, HardHat, LayoutGrid, Clock, Microwave, WashingMachine, Blinds } from 'lucide-react'

function HouseWindow({ size = 24, strokeWidth = 1.5, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {/* outer frame */}
      <rect x="3" y="3" width="18" height="16" />
      {/* vertical center muntin */}
      <line x1="12" y1="3" x2="12" y2="19" />
      {/* horizontal center rail */}
      <line x1="3" y1="11" x2="21" y2="11" />
      {/* sill board extending past frame */}
      <line x1="1" y1="19" x2="23" y2="19" />
      <line x1="1.5" y1="21" x2="22.5" y2="21" />
      <line x1="1" y1="19" x2="1.5" y2="21" />
      <line x1="23" y1="19" x2="22.5" y2="21" />
    </svg>
  )
}

const services = [
  {
    grad: 'grad-1',
    Icon: BrushCleaning,
    color: '#0369a1',
    title: 'Standard Cleaning',
    desc: 'Our regular cleaning service keeps your home consistently fresh and comfortable. Ideal for weekly, bi-weekly, or monthly maintenance.',
    detailSections: [
      {
        title: 'All Areas',
        items: [
          'Empty bins',
          'Vacuum and mop',
          'Dust all surfaces',
        ],
      },
      {
        title: 'Kitchen',
        items: [
          'Wipe fridge',
          'Clean countertops',
          'Outside cabinets',
          'Wipe appliances',
          'Clean sink',
          'Clean stove',
          'Inside microwave',
        ],
      },
      {
        title: 'Bathrooms',
        items: [
          'Countertops and sink',
          'Scrub toilets',
          'Outside cabinets',
          'Clean mirrors',
          'Rinse shower and tub',
        ],
      },
      {
        title: 'Bedrooms',
        items: [
          'Quick declutter',
          'Make beds',
          'Dust all areas',
          'Wipe tables',
        ],
      },
    ],
  },
  {
    grad: 'grad-2',
    Icon: Sparkles,
    color: 'var(--green)',
    title: 'Deep Cleaning',
    desc: 'A comprehensive top-to-bottom clean reaching every corner and crevice. Perfect for first-time clients or a full seasonal refresh.',
    detailSections: [
      {
        title: 'All Areas',
        items: [
          'Empty bins',
          'Vacuum and mop',
          'Clean baseboards',
          'Window ledges',
          'Dust all surfaces',
          'Light switches',
          'Wipe doors',
        ],
      },
      {
        title: 'Kitchen',
        items: [
          'Wipe fridge',
          'Countertops and backsplash',
          'Outside cabinets',
          'Wipe appliances',
          'Clean sink',
          'Clean stove',
          'Inside microwave',
          'Wipe oven',
        ],
      },
      {
        title: 'Bathrooms',
        items: [
          'Countertops and sink',
          'Scrub toilets',
          'Cabinets if needed',
          'Mirrors and glass',
          'Tub and shower',
        ],
      },
      {
        title: 'Bedrooms',
        items: [
          'Quick declutter',
          'Make beds',
          'Dust all areas',
          'Wipe tables',
        ],
      },
    ],
  },
  {
    grad: 'grad-3',
    Icon: Package,
    color: '#0369a1',
    title: 'Move In / Move Out',
    desc: 'Moving is stressful enough — let us handle the cleaning. We ensure you leave on a high note or arrive to a spotless new home.',
    note: 'Home/apartment should be empty',
    detailSections: [
      {
        title: 'All Areas',
        items: [
          'Empty bins',
          'Vacuum and mop',
          'Clean baseboards',
          'Window ledges',
          'Dust all surfaces',
          'Light switches',
          'Wipe doors',
          'Ceiling fans',
        ],
      },
      {
        title: 'Kitchen',
        items: [
          'Wipe fridge inside and out',
          'Clean countertops',
          'Cabinets inside and out',
          'Inside drawers',
          'Wipe appliances',
          'Clean sink',
          'Clean stove',
          'Inside microwave',
          'Wipe oven',
        ],
      },
      {
        title: 'Bathrooms',
        items: [
          'Countertops and sink',
          'Scrub toilets',
          'Cabinets inside and out',
          'Inside drawers',
          'Mirrors and glass',
          'Tub and shower',
        ],
      },
      {
        title: 'Bedrooms',
        items: [
          'Remove all cobwebs',
        ],
      },
    ],
  },
  {
    grad: 'grad-4',
    Icon: Home,
    color: 'var(--green)',
    title: 'Airbnb Cleaning',
    desc: 'Keep your guests impressed with a guest-ready space every time. Designed for short-term rental hosts who need fast, thorough turnover.',
    includes: [
      'Linen & towel change',
      'Full bathroom sanitization',
      'Kitchen cleaned & restocked',
      'Living & sleeping areas reset',
      'Trash removed & replaced',
    ],
  },
  {
    grad: 'grad-5',
    Icon: Armchair,
    color: '#0369a1',
    title: 'Upholstery & Carpet Cleaning',
    desc: 'Restore your furniture and floors to like-new condition. We remove stains, odors, and deep-seated dirt from fabrics and carpets.',
    includes: [
      'Sofa, loveseat & chair cleaning',
      'Carpet deep extraction cleaning',
      'Stain & odor removal',
      'Area rug cleaning',
      'Ottoman & cushion treatment',
    ],
  },
  {
    grad: 'grad-6',
    Icon: LayoutGrid,
    color: 'var(--green)',
    title: 'Organization Services',
    desc: 'Transform cluttered garages, patios, and backyards into organized, functional spaces. We sort, clean, and arrange everything perfectly.',
    includes: [
      'Garage decluttering & organizing',
      'Patio furniture arranged & cleaned',
      'Backyard tidying & sweeping',
      'Storage solutions set up',
      'Disposal of unwanted items',
    ],
  },
  {
    grad: 'grad-2',
    Icon: HardHat,
    color: 'var(--green)',
    title: 'Post Construction Cleaning',
    centered: true,
    desc: 'After the build comes the cleanup. We clear construction dust, debris, and residue so your newly built space is move-in ready.',
    includes: [
      'Dust & debris removal throughout',
      'Windows & glass polished',
      'Floors cleaned & polished',
      'All surfaces wiped clean',
      'Paint splatter & adhesive removed',
    ],
  },
]

const pricing = [
  { beds: '1/1', standard: '$95',  deep: '$140', moveOut: '$145' },
  { beds: '1/2', standard: '$110', deep: '$155', moveOut: '$160' },
  { beds: '2/1', standard: '$135', deep: '$180', moveOut: '$210' },
  { beds: '2/2', standard: '$150', deep: '$215', moveOut: '$235' },
  { beds: '2/3', standard: '$175', deep: '$240', moveOut: '$260' },
  { beds: '3/1', standard: '$200', deep: '$275', moveOut: '$300' },
  { beds: '3/2', standard: '$225', deep: '$300', moveOut: '$330' },
  { beds: '3/3', standard: '$275', deep: '$350', moveOut: '$380' },
  { beds: '3/4', standard: '$300', deep: '$375', moveOut: '$405' },
  { beds: '4/1', standard: '$320', deep: '$405', moveOut: '$440' },
  { beds: '4/2', standard: '$340', deep: '$445', moveOut: '$485' },
  { beds: '4/3', standard: '$360', deep: '$445', moveOut: '$485' },
  { beds: '4/4', standard: '$380', deep: '$465', moveOut: '$505' },
  { beds: '5/1', standard: '$375', deep: '$480', moveOut: '$515' },
  { beds: '5/2', standard: '$395', deep: '$500', moveOut: '$535' },
  { beds: '5/3', standard: '$415', deep: '$520', moveOut: '$555' },
  { beds: '5/4', standard: '$435', deep: '$540', moveOut: '$575' },
  { beds: '5/5', standard: '$455', deep: '$560', moveOut: '$595' },
  { beds: '6/1', standard: '$430', deep: '$540', moveOut: '$575' },
  { beds: '6/2', standard: '$450', deep: '$560', moveOut: '$595' },
  { beds: '6/3', standard: '$470', deep: '$580', moveOut: '$620' },
  { beds: '6/4', standard: '$490', deep: '$600', moveOut: '$645' },
  { beds: '6/5', standard: '$510', deep: '$620', moveOut: '$665' },
  { beds: '6/6', standard: '$530', deep: '$640', moveOut: '$685' },
]

const addOns = [
  {
    grad: 'grad-1',
    Icon: Clock,
    color: '#0369a1',
    title: 'Hourly Cleaning',
    desc: 'Flexible cleaning billed by the hour — perfect when you need targeted help without committing to a full service package.',
    pricing: '$40 per hour, per cleaner',
    includes: [
      'Any room or area of your choice',
      'Dusting, vacuuming & mopping',
      'Surface wiping & sanitizing',
      'Trash removal',
      'Customizable task list',
    ],
  },
  {
    grad: 'grad-6',
    Icon: Microwave,
    color: 'var(--green)',
    title: 'Appliance Cleaning',
    desc: 'Give your appliances the deep clean they deserve. We tackle built-up grease, grime, and residue inside and out for a like-new finish.',
    includes: [
      'Oven & stove deep clean',
      'Refrigerator interior & exterior',
      'Microwave inside & out',
      'Dishwasher cleaning',
      'Small appliance wipe-down',
    ],
  },
  {
    grad: 'grad-3',
    Icon: WashingMachine,
    color: '#0369a1',
    title: 'Laundry Services',
    desc: 'Take laundry off your to-do list completely. We wash, dry, and fold your clothes so you come home to everything fresh and ready.',
    includes: [
      'Wash & dry full loads',
      'Fold & organize clothing',
      'Linen & bedding laundry',
      'Towel washing & folding',
      'Separate delicates handling',
    ],
  },
  {
    grad: 'grad-4',
    Icon: HouseWindow,
    color: 'var(--green)',
    title: 'Windows & Blinds',
    desc: 'Crystal-clear windows and dust-free blinds — handled together for a complete, polished finish throughout your space.',
    detailSections: [
      {
        title: 'Windows',
        items: [
          'Interior & exterior cleaning',
          'Sill & track wiping',
          'Screen cleaning',
          'Streak-free finish',
        ],
      },
      {
        title: 'Blinds',
        items: [
          'Horizontal & vertical blinds',
          'Slat-by-slat dusting',
          'Wipe-down & sanitizing',
          'Cord & rail cleaning',
        ],
      },
    ],
  },
]

function ServiceCard({ s }) {
  return (
    <div className={`service-full-card${s.centered ? ' service-card-centered' : ''}`}>
      <div className={`service-full-img ${s.grad}`}>
        <s.Icon size={52} strokeWidth={1.5} color={s.color} />
      </div>
      <div className="service-full-body">
        <h3>
          <span className="s-icon"><s.Icon size={20} strokeWidth={2} color="var(--green)" /></span>
          {s.title}
        </h3>
        <p>{s.desc}</p>
        {s.pricing ? <div className="service-note">{s.pricing}</div> : null}
        {s.note ? <div className="service-note">{s.note}</div> : null}
        {s.detailSections ? (
          <div className="service-detail-sections compact">
            {s.detailSections.map((section) => (
              <div key={section.title} className="service-detail-section">
                <h4>{section.title}</h4>
                <div className="service-checklist">
                  {section.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="service-checklist">
            {s.includes.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <div className="page-content">

      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>Our <span>Services</span></h1>
          <p>
            From everyday upkeep to specialized deep cleans — a full range of
            professional services to keep every corner of your space pristine.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="services-full-grid">
            {services.map((s) => (
              <ServiceCard key={s.title} s={s} />
            ))}
          </div>
        </div>
      </section>


      <section className="section">
        <div className="section-inner section-inner--wide">
          <div className="section-header">
            <span className="section-tag">Add-Ons</span>
            <h2 className="section-title">Add-On <span>Services</span></h2>
            <p className="section-subtitle">
              Enhance any booking with these optional services — simply let us know when you schedule.
            </p>
          </div>
          <div className="services-full-grid addon-grid">
            {addOns.map((s) => (
              <ServiceCard key={s.title} s={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner-inner">
          <h2>Not Sure Which Service You Need?</h2>
          <p style={{ whiteSpace: 'nowrap' }}>Reach out and we'll help you find the right cleaning solution for your space and budget.</p>
          <div className="cta-banner-actions">
            <Link to="/contact" className="btn btn-accent">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
