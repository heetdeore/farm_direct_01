import { useState } from 'react'
import { priceComparisons, formatPrice } from '../data/products'

export default function Compare() {
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? priceComparisons : priceComparisons.slice(0, 5);

  return (
    <div className="compare-page" style={{ padding: '6rem 0', background: 'hsl(var(--background-alt))', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '3rem', borderBottom: '1px solid hsl(var(--border))', paddingBottom: '2.5rem' }}>
          <span className="font-mono-display" style={{ color: 'hsl(var(--primary))', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>PRICE TRANSPARENCY</span>
          <h1 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginTop: '0.75rem', marginBottom: '1rem', color: 'hsl(var(--foreground))' }}>
            The number behind the number.
          </h1>
          <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '1.1rem' }}>
            See what changes when a bag of produce takes the shorter route.
          </p>
        </div>

        {/* Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem' }}>
          
          {/* List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {displayedItems.map((item, i) => {
              const pct = (((item.marketPrice - item.farmPrice) / item.marketPrice) * 100).toFixed(1);
              return (
                <div key={i} className="card" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', alignItems: 'center', padding: '1.25rem 1.5rem', background: 'white', border: '1px solid hsl(var(--border))', borderRadius: '0.75rem', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                  <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'hsl(var(--foreground))' }}>{item.product}</span>
                  <span style={{ fontWeight: 700, fontSize: '1rem', color: 'hsl(var(--primary))' }}>{formatPrice(item.farmPrice)}</span>
                  <span style={{ fontWeight: 500, fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', textDecoration: 'line-through' }}>{formatPrice(item.marketPrice)}</span>
                  <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
                    <span style={{ background: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 700 }}>
                      {pct}%
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', fontWeight: 600 }}>
                      Save {formatPrice(item.marketPrice - item.farmPrice)}
                    </span>
                  </div>
                </div>
              );
            })}
            
            {!showAll && priceComparisons.length > 5 && (
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <button className="btn btn-outline" onClick={() => setShowAll(true)} style={{ borderRadius: '2rem' }}>
                  Read More
                </button>
              </div>
            )}
          </div>

          {/* Right Info Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: 'hsl(var(--primary))', color: 'white', padding: '2.5rem 2rem', borderRadius: '1rem', height: 'fit-content' }}>
              <div style={{ color: 'hsl(var(--accent))', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>₹</div>
              <h2 className="font-display" style={{ fontSize: '2rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Same harvest.<br/>
                Less distance.
              </h2>
              <p style={{ fontSize: '0.9rem', opacity: 0.85, lineHeight: 1.6 }}>
                The difference is value that stays visible — and closer to the farm.
              </p>
            </div>
            
            <div className="card" style={{ padding: '1.5rem', border: '1px solid hsl(var(--primary) / 0.2)', background: 'hsl(var(--primary) / 0.05)', borderRadius: '1rem' }}>
              <h3 className="font-display" style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'hsl(var(--primary))' }}>Impact at scale</h3>
              <p style={{ fontSize: '0.9rem', color: 'hsl(var(--foreground))', opacity: 0.8, lineHeight: 1.5 }}>
                When families buy direct, local farming communities see an average 42% increase in their net earnings while consumers save 25% on their weekly grocery bills.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
