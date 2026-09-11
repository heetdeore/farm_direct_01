import { ArrowRight, ShieldCheck, Sprout, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Home.css' // Reuse the same CSS for the grid

export default function About() {
  return (
    <div className="about-page">
      <div className="hero" style={{ background: 'hsl(var(--primary))', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="font-display" style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>Our Mission</h1>
          <p style={{ color: 'hsl(var(--primary-foreground) / 0.8)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
            Bridging the gap between rural farmers and urban households across India.
          </p>
        </div>
      </div>

      <section className="section bg-alt" style={{ minHeight: '60vh' }}>
        <div className="container">
          <div className="why-direct-grid">
            <div className="why-direct-content">
              <span className="section-label font-mono-display">The Story</span>
              <h2 className="section-title font-display">About FarmDirect.</h2>
              <p className="why-direct-text">
                FarmDirect was founded with a simple goal: bridge the gap between rural farmers and urban households. For decades, the agricultural supply chain has been opaque, leaving farmers underpaid and consumers overcharged. 
              </p>
              <p className="why-direct-text">
                By building a direct, transparent pipeline, we guarantee that every rupee is accounted for. The farmer gets a fair rate, and your family gets the freshest produce harvested just hours before delivery.
              </p>
              
              <ul className="why-direct-list" style={{ marginTop: '3rem' }}>
                <li><ShieldCheck size={24} className="text-primary" /> Fairer prices for farmers</li>
                <li><Sprout size={24} className="text-primary" /> Fresher harvest</li>
                <li><Eye size={24} className="text-primary" /> Complete price transparency</li>
              </ul>

              <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
                <Link to="/products" className="btn btn-primary btn-lg">
                  Shop this week's harvest <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
