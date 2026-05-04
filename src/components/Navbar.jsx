import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
<nav className="navbar">
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
            <img src={logo} alt="It's Never Too Much" className="navbar-logo-img" />
          </Link>

          <div className={`navbar-links ${open ? 'open' : ''}`}>
            <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
            <Link
              to="/contact"
              className="navbar-book-btn"
              onClick={() => setOpen(false)}
            >
              Book Now
            </Link>
          </div>

          <button
            className={`navbar-mobile-toggle ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </>
  )
}
