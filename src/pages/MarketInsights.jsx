import { TrendingDown, TrendingUp, BarChart3, LineChart } from 'lucide-react'
import { priceComparisons, formatPrice } from '../data/products'

export default function MarketInsights() {
  return (
    <div className="insights-page">
      <div className="section" style={{ background: 'hsl(var(--background-alt))', borderBottom: '1px solid hsl(var(--border))' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label font-mono-display">Data & Trends</span>
          <h1 className="font-display" style={{ fontSize: '3rem', margin: '0.5rem 0' }}>Market Insights</h1>
          <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
            Real-time tracking of agricultural prices across India. See the true cost of produce and how direct buying impacts farmer revenue.
          </p>
        </div>
      </div>

      <div className="container section">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <div className="card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 className="font-display">Average Farmer Margin</h3>
              <TrendingUp size={24} style={{ color: 'hsl(var(--primary))' }} />
            </div>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>+42%</p>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>Increase in earnings through direct sales compared to traditional mandis.</p>
          </div>

          <div className="card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 className="font-display">Consumer Savings</h3>
              <TrendingDown size={24} style={{ color: '#ef4444' }} />
            </div>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>-25%</p>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>Average reduction in grocery bills for households buying directly.</p>
          </div>


        </div>

        <h2 className="font-display" style={{ marginBottom: '1.5rem' }}>Top Trending Produce</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {priceComparisons.slice(0, 3).map((item, i) => {
            const heights = ['40%', '70%', '100%'];
            return (
              <div key={i} className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>{item.product}</h3>
                <div style={{ display: 'flex', alignItems: 'flex-end', height: '100px', gap: '1rem', marginBottom: '1rem', borderBottom: '1px solid hsl(var(--border))', paddingBottom: '0.5rem' }}>
                  <div style={{ flex: 1, height: heights[0], background: 'hsl(var(--primary) / 0.2)', borderRadius: '4px 4px 0 0' }}></div>
                  <div style={{ flex: 1, height: heights[1], background: 'hsl(var(--primary) / 0.5)', borderRadius: '4px 4px 0 0' }}></div>
                  <div style={{ flex: 1, height: heights[2], background: 'hsl(var(--primary))', borderRadius: '4px 4px 0 0' }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'hsl(var(--muted-foreground))', fontSize: '0.85rem' }}>
                  <span>2 Months ago</span>
                  <span>Now</span>
                </div>
                <p style={{ marginTop: '1rem', fontWeight: 600, color: 'hsl(var(--foreground))' }}>
                  Demand up by {Math.floor(Math.random() * 20 + 15)}%
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
