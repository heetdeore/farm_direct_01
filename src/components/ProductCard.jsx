import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products'
import { ShoppingBasket, Star, MapPin, Plus, Minus, CheckCircle2 } from 'lucide-react'
import { useApp } from '../context/AppContext'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const { addToCart } = useApp()
  const [quantity, setQuantity] = useState(1)
  const savings = Math.max(0, product.marketPrice - product.price)

  const handleAdd = (e) => {
    e.preventDefault()
    // Ideally addToCart takes a quantity, for now we assume it does or we just call it.
    addToCart({ ...product, quantity })
  }

  return (
    <div className="product-card card" id={`card-product-${product.id}`}>
      <Link to={`/products/${product.id}`} className="product-card-link" id={`link-product-${product.id}`}>
        {/* Image Section */}
        <div className="product-card-img-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="product-card-img"
            loading="lazy"
          />
          <div className="product-card-badges" style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
          </div>
          {!product.inStock && (
            <div className="product-card-oos">Out of stock</div>
          )}
        </div>

        {/* Content Section */}
        <div className="product-card-body">
          <div style={{ marginBottom: '0.5rem' }}>
            <span style={{ 
              background: 'hsl(var(--primary) / 0.1)', 
              color: 'hsl(var(--primary))', 
              padding: '0.2rem 0.6rem', 
              borderRadius: '1rem', 
              fontSize: '0.65rem', 
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>{product.category}</span>
          </div>
          <div className="product-card-title-row">
            <h3 className="product-card-name font-display">{product.name}</h3>
            <span className="product-card-rating">
              <Star size={14} fill="currentColor" color="#eab308" />
              {product.rating.toFixed(1)} <span style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', marginLeft: '2px' }}>({product.reviews})</span>
            </span>
          </div>

          <div className="product-card-farmer">
            <MapPin size={12} />
            <span>{product.farmerVillage} • {product.farmerName}</span>
          </div>

          <div className="product-card-footer">
            <div className="product-card-price-col">
              <div className="product-card-prices">
                <span className="product-card-price">{formatPrice(product.price)}<small> / {product.unit}</small></span>
              </div>
              {savings > 0 && (
                <span className="product-card-savings-text">
                  Save {formatPrice(savings)} vs market
                </span>
              )}
            </div>
            
            {/* Minimal Add Button from screenshot */}
            <div className="product-card-actions" onClick={e => e.preventDefault()} style={{ alignSelf: 'flex-end', marginLeft: 'auto' }}>
              <button
                id={`button-add-product-${product.id}`}
                onClick={handleAdd}
                disabled={!product.inStock}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid hsl(var(--border))',
                  background: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                aria-label="Add to cart"
              >
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'hsl(var(--muted-foreground))' }}></div>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
