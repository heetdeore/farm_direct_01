import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Eye, TrendingDown, ShieldCheck, ShoppingBasket, Sprout } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import FaqSection from '../components/FaqSection'
import FeaturesSection from '../components/FeaturesSection'
import { priceComparisons, formatPrice } from '../data/products'
import './Home.css'

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [faqs, setFaqs] = useState([])
  const [features, setFeatures] = useState([])

  useEffect(() => {
    // Fetch products
    fetch('http://localhost:5001/api/products')
      .then(res => res.json())
      .then(data => setFeaturedProducts(data.slice(0, 4)))
      .catch(err => console.error(err));

    // Fetch FAQs
    fetch('http://localhost:5001/api/faqs')
      .then(res => res.json())
      .then(data => setFaqs(data))
      .catch(err => console.error(err));

    // Fetch Features
    fetch('http://localhost:5001/api/features')
      .then(res => res.json())
      .then(data => setFeatures(data))
      .catch(err => console.error(err));
  }, [])

  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="hero-bg-circle" style={{ borderColor: 'hsl(var(--primary-foreground) / 0.05)' }} />
        <div className="container hero-content">
          
          <div className="hero-text animate-fade-in-up" style={{ padding: '0', background: 'transparent', boxShadow: 'none' }}>
            <span className="hero-label font-mono-display" style={{ color: 'hsl(var(--accent))', fontSize: '0.7rem', letterSpacing: '0.15em' }}>
              <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'hsl(var(--accent))', marginRight: '0.5rem', marginBottom: '2px' }}></span>
              FROM THE SOIL, NOT THE SHELF
            </span>
            <h1 className="hero-title font-display" style={{ color: 'white', fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: '1.05', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
              Good food should <br/>
              <span style={{ color: 'hsl(var(--accent))' }}>pay its way back.</span>
            </h1>
            <p style={{ color: 'white', fontSize: '1.1rem', maxWidth: '400px', marginBottom: '2.5rem', opacity: 0.9 }}>
              FarmDirect connects nearby households to farmers in India and beyond — with the real price story printed on every basket.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-lg" style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))', border: 'none', borderRadius: '2rem' }}>
                Shop this week's harvest
                <ArrowRight size={16} />
              </Link>
              <Link to="/compare" className="btn btn-lg hero-btn-outline" style={{ borderRadius: '2rem', borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
                See the price trail
              </Link>
            </div>
          </div>

          {/* "ONE BASKET . THE SPLIT" card */}
          <div className="hero-card animate-fade-in-up delay-200" style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            border: '1px solid rgba(255, 255, 255, 0.2)', 
            boxShadow: 'none',
            borderRadius: '1.25rem',
            padding: '2rem',
            color: 'white',
            marginTop: '2rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '1rem', marginBottom: '1.5rem', fontSize: '0.75rem', letterSpacing: '0.1em', opacity: 0.8, textTransform: 'uppercase' }}>
              <span className="font-mono-display">ONE BASKET · THE SPLIT</span>
              <span>₹</span>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ opacity: 0.9 }}>Farmer earns</span>
                <span style={{ fontWeight: 700, color: 'hsl(var(--accent))', fontSize: '1.1rem' }}>₹68</span>
              </div>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px' }}>
                <div style={{ width: '78%', height: '100%', background: 'hsl(var(--accent))', borderRadius: '3px' }}></div>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ opacity: 0.7 }}>Typical market chain</span>
                <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>₹45</span>
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ opacity: 0.9 }}>Household pays</span>
                <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>₹87</span>
              </div>
            </div>

            <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>
              Transparent prices make better choices possible for both sides.
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="section" id="section-featured">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label font-mono-display">This week</span>
              <h2 className="section-title font-display">Harvested with a name on it.</h2>
            </div>
            <Link to="/products" className="btn btn-outline" id="link-view-all-products">
              View all products
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY DIRECT MATTERS ===== */}
      <section className="section bg-alt" id="section-why-direct">
        <div className="container">
          <div className="why-direct-grid">
            <div className="why-direct-content">
              <span className="section-label font-mono-display">The Difference</span>
              <h2 className="section-title font-display">Why direct matters.</h2>
              <p className="why-direct-text">
                When you cut out the middlemen, you don't just save money. You ensure that the people growing your food get a fair share, and your produce spends less time in transit and more time on your table.
              </p>
              <ul className="why-direct-list">
                <li><ShieldCheck size={18} className="text-primary" /> Fairer prices for farmers</li>
                <li><Sprout size={18} className="text-primary" /> Fresher harvest</li>
                <li><Eye size={18} className="text-primary" /> Complete price transparency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ===== PRICE BOARD CTA ===== */}
      <section className="section" id="section-price-cta" style={{ background: 'hsl(var(--background-alt))' }}>
        <div className="container">
          <div className="price-cta-card" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
            <div className="price-cta-content">
              <span className="section-label font-mono-display" style={{ color: 'hsl(var(--primary))', fontSize: '0.65rem', letterSpacing: '0.15em' }}>THE PRICE BOARD</span>
              <h2 className="price-cta-title font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, marginBottom: '1rem', color: 'hsl(var(--foreground))' }}>Fair doesn't have to be a feeling.</h2>
              <p className="price-cta-desc" style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, marginBottom: '2rem' }}>
                Our market board puts the direct farm price beside the going reference — so every rupee has somewhere to go.
              </p>
              <Link to="/compare" className="btn btn-link" id="link-explore-prices" style={{ color: 'hsl(var(--primary))', fontWeight: 700, padding: 0, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Open the full comparison
                <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="price-cta-visual card" style={{ padding: '0', borderRadius: '1rem', background: 'white', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {priceComparisons.slice(0, 3).map((item, i) => {
                  const savedAmount = item.marketPrice - item.farmPrice;
                  const pct = (((item.marketPrice - item.farmPrice) / item.marketPrice) * 100).toFixed(1);
                  return (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', borderBottom: i !== 2 ? '1px solid hsl(var(--border) / 0.5)' : 'none' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ background: 'hsl(var(--background))', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--primary))' }}>
                          <Sprout size={18} />
                        </div>
                        <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'hsl(var(--foreground))' }}>{item.product}</span>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'hsl(var(--foreground))' }}>{formatPrice(item.farmPrice)}</div>
                        <div style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))', fontWeight: 600 }}>
                          -{pct}% (Save {formatPrice(savedAmount)})
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ===== FEATURES SECTION ===== */}
      <FeaturesSection features={features} />

      {/* ===== FAQ SECTION ===== */}
      <FaqSection faqs={faqs} />
    </div>
  )
}
