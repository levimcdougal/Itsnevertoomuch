import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-brand-desc">
              Professional cleaning services delivered with care, precision, and a commitment
              to your complete satisfaction. Your space, spotless.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Book Now</Link></li>
            </ul>
          </div>

          <div className="footer-col footer-col-services">
            <h4>Services</h4>
            <div className="footer-services-cols">
              <ul>
                <li><Link to="/services">Airbnb Cleaning</Link></li>
                <li><Link to="/services">Upholstery & Carpet</Link></li>
                <li><Link to="/services">Post Construction</Link></li>
                <li><Link to="/services">Organization</Link></li>
              </ul>
              <ul>
                <li><Link to="/services">Standard Cleaning</Link></li>
                <li><Link to="/services">Deep Cleaning</Link></li>
                <li><Link to="/services">Move In / Move Out</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} It's Never Too Much. All rights reserved.</p>
          <p>Professional Cleaning Services</p>
        </div>
      </div>
    </footer>
  )
}
