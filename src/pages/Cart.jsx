import { Link } from 'react-router-dom'
import { Trash2, Plus, Minus, ArrowLeft, ArrowRight, ShoppingBasket } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { formatPrice } from '../data/products'
import './Cart.css'

export default function Cart() {
  const { cart, changeCart, removeFromCart } = useApp()

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const marketTotal = cart.reduce((sum, item) => sum + item.marketPrice * item.quantity, 0)
  const totalSavings = marketTotal - subtotal
  
  const deliveryFee = 40
  const platformFee = 10
  const gst = Math.round(subtotal * 0.05)
  const finalTotal = subtotal + deliveryFee + platformFee + gst

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="cart-empty">
            <ShoppingBasket size={48} />
            <h2 className="font-display">Your basket is empty</h2>
            <p>Browse the marketplace and add some fresh produce!</p>
            <Link to="/products" className="btn btn-primary">
              <ArrowLeft size={14} />
              Go to marketplace
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-label font-mono-display">Basket</span>
            <h1 className="section-title font-display">Your basket</h1>
          </div>
          <Link to="/products" className="btn btn-outline">
            <ArrowLeft size={14} />
            Continue shopping
          </Link>
        </div>

        <div className="cart-layout">
          {/* Items */}
          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-item card" key={item.id} id={`cart-item-${item.id}`}>
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <h3 className="cart-item-name font-display">{item.name}</h3>
                  <p className="cart-item-farmer">{item.farmerName}</p>
                  <div className="cart-item-prices">
                    <span className="cart-item-price font-sans-force">{formatPrice(item.price)}/{item.unit}</span>
                    {item.marketPrice > item.price && (
                      <span className="cart-item-market font-sans-force">{formatPrice(item.marketPrice)}</span>
                    )}
                  </div>
                </div>
                <div className="cart-item-controls">
                  <div className="cart-qty">
                    <button
                      className="btn btn-icon btn-outline"
                      onClick={() => changeCart(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="cart-qty-value">{item.quantity}</span>
                    <button
                      className="btn btn-icon btn-outline"
                      onClick={() => changeCart(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <span className="cart-item-total font-sans-force">{formatPrice(item.price * item.quantity)}</span>
                  <button
                    className="btn btn-ghost btn-icon cart-item-remove"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="cart-summary card">
            <h3 className="cart-summary-title font-display">Order summary</h3>
            <div className="cart-summary-row">
              <span>Subtotal ({cart.reduce((s, i) => s + i.quantity, 0)} items)</span>
              <span className="font-sans-force">{formatPrice(subtotal)}</span>
            </div>
            <div className="cart-summary-row">
              <span>Delivery Fee</span>
              <span className="font-sans-force">{formatPrice(deliveryFee)}</span>
            </div>
            <div className="cart-summary-row">
              <span>Platform Fee</span>
              <span className="font-sans-force">{formatPrice(platformFee)}</span>
            </div>
            <div className="cart-summary-row">
              <span>GST (5%)</span>
              <span className="font-sans-force">{formatPrice(gst)}</span>
            </div>
            
            {totalSavings > 0 && (
              <>
                <div className="cart-summary-row savings" style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid hsl(var(--border))' }}>
                  <span>Market comparison</span>
                  <span className="line-through font-sans-force">{formatPrice(marketTotal)}</span>
                </div>
                <div className="cart-summary-row savings-highlight">
                  <span>Your total savings</span>
                  <span className="badge badge-primary font-sans-force">{formatPrice(totalSavings)}</span>
                </div>
              </>
            )}

            <div className="cart-summary-total">
              <span>Total</span>
              <span className="cart-total-price font-sans-force">{formatPrice(finalTotal)}</span>
            </div>
            <Link to="/checkout" className="btn btn-primary btn-lg cart-checkout-btn" id="link-checkout">
              Proceed to checkout
              <ArrowRight size={16} />
            </Link>
            <p className="cart-summary-note">Demo mode — no real payment will be processed.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
