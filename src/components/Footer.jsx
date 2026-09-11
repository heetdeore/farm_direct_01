import { Link } from 'react-router-dom'
import { Sprout, ExternalLink, Mail, MapPin } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <Sprout size={20} />
              <span className="font-display">Farm</span>Direct
            </Link>
            <p className="footer-tagline">
              Fairer prices. Fresher food. Stronger farms.
            </p>
            <div className="footer-location">
              <MapPin size={14} />
              <span>India</span>
            </div>
          </div>

          {/* Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Marketplace</h4>
            <Link to="/products" className="footer-link">All Products</Link>
            <Link to="/compare" className="footer-link">Price Board</Link>
            <Link to="/cart" className="footer-link">Your Cart</Link>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">For Farmers</h4>
            <Link to="/add-product" className="footer-link">My Listings</Link>
            <Link to="/cart" className="footer-link">My Cart</Link>
            <Link to="/insights" className="footer-link">Market Insights</Link>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <Link to="/about" className="footer-link">About Us</Link>
            <a href="/#features" className="footer-link">How It Works</a>
            <a href="mailto:hello@farmdirect.in" className="footer-link">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 FarmDirect. Built with care for India's farming communities.
          </p>
          <div className="footer-socials">
            <a href="#" className="footer-social-link" aria-label="Github">
              <ExternalLink size={18} />
            </a>
            <a href="mailto:hello@farmdirect.in" className="footer-social-link" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
