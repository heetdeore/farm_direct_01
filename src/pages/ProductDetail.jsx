import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Star, MapPin, Calendar, ShoppingBasket, Truck, ShieldCheck, Plus, Minus } from 'lucide-react'
import { products, formatPrice, formatDate } from '../data/products'
import { useApp } from '../context/AppContext'
import './ProductDetail.css'

export default function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useApp()
  const [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5001/api/products')
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.id === Number(id))
        setProduct(found)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Loading...</div>
  }

  if (!product) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2 className="font-display">Product not found</h2>
        <Link to="/products" className="btn btn-outline" style={{ marginTop: '1rem' }}>
          <ArrowLeft size={14} /> Back to marketplace
        </Link>
      </div>
    )
  }

  const savings = Math.max(0, product.marketPrice - product.price)
  const savingsPercent = Math.round((savings / product.marketPrice) * 100)

  return (
    <div className="product-detail">
      <div className="container">
        <Link to="/products" className="btn btn-ghost product-detail-back" id="link-back-products">
          <ArrowLeft size={16} />
          Back to marketplace
        </Link>

        <div className="product-detail-grid">
          {/* Image */}
          <div className="product-detail-image-wrapper">
            <img src={product.image} alt={product.name} className="product-detail-image" />
          </div>

          {/* Info */}
          <div className="product-detail-info">
            <span className="product-card-category font-mono-display">{product.category}</span>
            <h1 className="product-detail-name font-display">{product.name}</h1>

            <div className="product-detail-rating">
              <Star size={16} fill="currentColor" />
              <span>{product.rating}</span>
              <span className="product-detail-reviews">({product.reviews} reviews)</span>
            </div>

            <p className="product-detail-desc">{product.description}</p>

            {/* Prices */}
            <div className="product-detail-prices">
              <div className="product-detail-price-main">
                <span className="product-detail-price" style={{ fontFamily: 'var(--app-font-sans)', fontWeight: 700 }}>{formatPrice(product.price)}</span>
                <span className="product-detail-unit">per {product.unit}</span>
              </div>
              {product.marketPrice > product.price && (
                <div className="product-detail-price-compare">
                  <span className="product-detail-market-label">Market price</span>
                  <span className="product-detail-market-price">{formatPrice(product.marketPrice)}</span>
                  <span className="product-detail-savings badge badge-primary">
                    You save {formatPrice(savings)}
                  </span>
                </div>
              )}
            </div>

            {/* Farmer info */}
            <div className="product-detail-farmer card">
              <div className="product-detail-farmer-row">
                <MapPin size={16} />
                <div>
                  <p className="product-detail-farmer-name">{product.farmerName}</p>
                  <p className="product-detail-farmer-village">{product.farmerVillage}</p>
                  {savings > 0 && (
                    <div style={{ background: 'hsl(var(--primary) / 0.1)', padding: '0.35rem 0.65rem', borderRadius: '0.25rem', marginTop: '0.5rem', display: 'inline-block', border: '1px solid hsl(var(--primary) / 0.2)' }}>
                      <p style={{ color: 'hsl(var(--primary))', fontSize: '0.85rem', fontWeight: 700, margin: 0 }}>
                        Save {formatPrice(savings)} vs market
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="product-detail-actions" style={{ flexDirection: 'column', gap: '1.5rem', alignItems: 'stretch' }}>
              {product.harvestDate && (
                <div style={{ padding: '0.75rem 1rem', background: 'hsl(var(--background-alt))', borderLeft: '3px solid hsl(var(--primary))', borderRadius: '4px', fontStyle: 'italic', fontSize: '0.9rem', color: 'hsl(var(--foreground))' }}>
                  <span style={{ fontWeight: 600, color: 'hsl(var(--primary))' }}>Harvested on:</span> {product.harvestDate}
                </div>
              )}

              <div style={{ background: 'hsl(var(--background-alt))', border: '1px solid hsl(var(--border))', borderRadius: 'calc(var(--radius))', padding: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: 'hsl(var(--foreground))', marginBottom: '0.25rem' }}>Quantity</span>
                  </div>
                  <div className="quantity-selector" style={{ border: '1px solid hsl(var(--border))', borderRadius: 'calc(var(--radius) - 2px)', display: 'flex', alignItems: 'center', background: 'white' }}>
                    <button 
                      className="btn btn-ghost" 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1 || !product.inStock}
                      style={{ padding: '0.4rem 0.75rem', borderRight: '1px solid hsl(var(--border))', borderRadius: 0, height: '32px' }}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="qty-value" style={{ fontSize: '0.9rem', width: '40px', textAlign: 'center', fontWeight: 600 }}>{quantity}</span>
                    <button 
                      className="btn btn-ghost" 
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={!product.inStock}
                      style={{ padding: '0.4rem 0.75rem', borderLeft: '1px solid hsl(var(--border))', borderRadius: 0, height: '32px' }}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-primary btn-lg product-detail-add"
                onClick={() => addToCart({ ...product, quantity })}
                disabled={!product.inStock}
                id={`button-add-detail-${product.id}`}
                style={{ flex: 1 }}
              >
                <ShoppingBasket size={18} />
                {product.inStock ? 'Add to basket' : 'Out of stock'}
              </button>
            </div>

            {/* Trust signals */}
            <div className="product-detail-trust">
              <div className="product-detail-trust-item">
                <Truck size={16} />
                <span>Direct from farm</span>
              </div>
              <div className="product-detail-trust-item">
                <ShieldCheck size={16} />
                <span>Verified farmer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
