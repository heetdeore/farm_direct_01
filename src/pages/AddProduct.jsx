import { useState } from 'react'
import { Plus, Check, Sprout } from 'lucide-react'
import './AddProduct.css'

export default function AddProduct() {
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    
    const newProduct = {
      name: form.elements[0].value,
      category: form.elements[1].value,
      unit: form.elements[2].value,
      price: Number(form.elements[3].value),
      marketPrice: Number(form.elements[4].value),
      image: form.elements[5].value,
      harvestDate: form.elements[6].value,
      description: form.elements[7].value,
      farmerName: 'Patil Yadav', // Demo auth user
      farmerVillage: 'India',
      rating: 0,
      reviews: 0,
      inStock: true
    };

    fetch('http://localhost:5001/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(() => {
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
      form.reset()
    })
    .catch(err => {
      console.error(err);
      alert('Failed to add product. Make sure backend is running.');
    });
  }

  return (
    <div className="add-product-page">
      <div className="container" style={{ maxWidth: '600px', padding: '4rem 1rem' }}>
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <div>
            <span className="section-label font-mono-display">Farmer Portal</span>
            <h1 className="section-title font-display">My Listings</h1>
          </div>
        </div>

        <div className="card" style={{ padding: '2rem' }}>
          {success ? (
            <div className="success-message">
              <div className="success-icon"><Check size={32} /></div>
              <h2 className="font-display" style={{ marginTop: '1rem' }}>Product Added!</h2>
              <p>Your harvest is now live on the marketplace.</p>
              <button className="btn btn-outline" onClick={() => setSuccess(false)} style={{ marginTop: '1.5rem' }}>
                Add another product
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="add-product-form">
              <div className="form-group">
                <label>Product Name</label>
                <input type="text" required placeholder="e.g. Fresh Red Tomatoes" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Category</label>
                  <select required>
                    <option value="">Select category...</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Grains">Grains</option>
                    <option value="Spices">Spices</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Unit</label>
                  <select required>
                    <option value="kg">kg</option>
                    <option value="box">box</option>
                    <option value="dozen">dozen</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Your Farm Price (₹)</label>
                  <input type="number" required min="1" placeholder="e.g. 40" />
                </div>
                <div className="form-group">
                  <label>Current Market Price (₹)</label>
                  <input type="number" required min="1" placeholder="e.g. 55" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Image URL</label>
                  <input type="url" required placeholder="https://images.unsplash.com/..." />
                </div>
                <div className="form-group">
                  <label>Harvest Date</label>
                  <input type="date" required />
                </div>
              </div>

              <div className="form-group">
                <label>Description (Optional)</label>
                <textarea rows="3" placeholder="Tell customers about this harvest..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '1rem' }}>
                <Sprout size={18} /> Publish to Marketplace
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
