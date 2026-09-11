import { Link, useLocation } from 'react-router-dom'
import { ShoppingBasket, Menu, X, User, BarChart3, Sprout, Package, ShoppingBag, Settings, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import { useApp } from '../context/AppContext'
import './Navbar.css'

export default function Navbar() {
  const { cart } = useApp()
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <header className="navbar" id="navbar" style={{ borderBottom: '1px solid hsl(var(--border))', background: 'hsl(var(--background))' }}>
        <div className="navbar-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px', padding: '0 2rem' }}>
          
          {/* Logo */}
          <Link to="/" className="navbar-logo" id="link-home" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <div style={{ background: 'hsl(var(--primary))', color: 'white', padding: '0.4rem', borderRadius: '50%', display: 'flex' }}>
              <Sprout size={20} />
            </div>
            <span className="navbar-logo-text" style={{ fontSize: '1.25rem', color: 'hsl(var(--foreground))', letterSpacing: '-0.02em' }}>
              <span className="font-display" style={{ fontWeight: 700 }}>Farm</span>Direct
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="navbar-nav hide-mobile" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginLeft: 'auto', marginRight: '2rem' }}>
            <Link to="/about" className="navbar-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'hsl(var(--foreground))', border: '1px solid hsl(var(--border))', padding: '0.4rem 1rem', borderRadius: '2rem' }}>
              <User size={16} /> About
            </Link>
            <Link to="/products" className="navbar-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'hsl(var(--foreground))', border: '1px solid hsl(var(--border))', padding: '0.4rem 1rem', borderRadius: '2rem' }}>
              <ShoppingBasket size={16} /> Marketplace
            </Link>
            <Link to="/compare" className="navbar-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'hsl(var(--foreground))', border: '1px solid hsl(var(--border))', padding: '0.4rem 1rem', borderRadius: '2rem' }}>
              <BarChart3 size={16} /> Price board
            </Link>
            <Link to="/insights" className="navbar-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'hsl(var(--foreground))', border: '1px solid hsl(var(--border))', padding: '0.4rem 1rem', borderRadius: '2rem' }}>
              <TrendingUp size={16} /> Insights
            </Link>
            <Link to="/add-product" className="navbar-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'hsl(var(--foreground))', border: '1px solid hsl(var(--border))', padding: '0.4rem 1rem', borderRadius: '2rem' }}>
              <Package size={16} /> My listings
            </Link>
            <Link to="/admin" className="navbar-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'hsl(var(--foreground))', border: '1px solid hsl(var(--border))', padding: '0.4rem 1rem', borderRadius: '2rem' }}>
              <Settings size={16} /> Admin
            </Link>
          </nav>

          {/* Right side */}
          <div className="navbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            
            {/* Cart */}
            <Link to="/cart" className="navbar-cart" id="link-cart" style={{ color: 'hsl(var(--muted-foreground))', position: 'relative' }}>
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="cart-badge" style={{ position: 'absolute', top: '-8px', right: '-8px', background: 'hsl(var(--primary))', color: 'white', fontSize: '0.65rem', padding: '0.1rem 0.35rem', borderRadius: '10px', fontWeight: 'bold' }}>{cartCount}</span>
              )}
            </Link>

            <div className="navbar-profile hide-mobile" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              borderLeft: '1px solid hsl(var(--border))', 
              paddingLeft: '1.5rem', 
            }}>
              <div className="profile-avatar" style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#e8e2d2',
                color: 'hsl(var(--foreground))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '0.8rem'
              }}>
                AS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="profile-name" style={{ fontWeight: 700, fontSize: '0.8rem', lineHeight: '1.2' }}>Ananya Shah</span>
                <span style={{ fontSize: '0.6rem', fontWeight: 600, color: 'hsl(var(--muted-foreground))', letterSpacing: '0.05em' }}>DEMO ACCOUNT</span>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              className="mobile-toggle hide-desktop"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Demo banner */}
      <div className="demo-banner" style={{ background: '#faf4e3', color: '#8c7345', textAlign: 'center', padding: '0.5rem', fontSize: '0.75rem', fontWeight: 500, borderBottom: '1px solid #f0e6d2' }}>
        ✨ Demo mode · explore as a consumer, farmer, or admin — no identity verification or live payments are connected.
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu animate-slide-down">
          <nav className="mobile-nav">
            <Link
              to="/products"
              className={`mobile-link ${location.pathname === '/products' ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              Browse produce
            </Link>
            <Link
              to="/compare"
              className={`mobile-link ${location.pathname === '/compare' ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              Price compare
            </Link>
            <Link
              to="/add-product"
              className={`mobile-link ${location.pathname === '/add-product' ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              My listings
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
