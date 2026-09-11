import { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, ArrowRight, SlidersHorizontal } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import './Products.css'

export default function Products() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('default')
  
  const categories = ['All', 'Vegetables', 'Fruits', 'Grains', 'Spices']

  useEffect(() => {
    fetch('http://localhost:5001/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, [])

  const filtered = useMemo(() => {
    let result = [...products]

    if (search) {
      const q = search.toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.farmerName.toLowerCase().includes(q)
      )
    }

    if (category !== 'All') {
      result = result.filter(p => p.category === category)
    }

    switch (sort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'savings':
        result.sort((a, b) => (b.marketPrice - b.price) - (a.marketPrice - a.price))
        break
    }

    return result
  }, [products, search, category, sort])

  return (
    <div className="products-page">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div>
            <span className="section-label font-mono-display">Marketplace</span>
            <h1 className="section-title font-display">Buy from the people who grow it.</h1>
            <p className="products-subtitle">
              Fresh produce, honest prices, and a clear route back to the farm.
            </p>
          </div>
          <Link to="/compare" className="btn btn-outline">
            Compare market prices
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Filters */}
        <div className="products-filters" id="filters">
          <div className="products-search" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Search size={16} className="products-search-icon" style={{ position: 'absolute', left: '0.75rem', color: 'hsl(var(--muted-foreground))' }} />
            <input
              type="text"
              className="input products-search-input"
              id="input-search-products"
              placeholder="Search vegetables, fruits, grains..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ paddingLeft: '2.5rem', width: '100%' }}
            />
          </div>

          <select
            className="select"
            id="select-product-category"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            className="select"
            id="select-product-sort"
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            <option value="default">Sort by</option>
            <option value="price-low">Price: Low → High</option>
            <option value="price-high">Price: High → Low</option>
            <option value="rating">Top Rated</option>
            <option value="savings">Biggest Savings</option>
          </select>
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="product-grid">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="products-empty">
            <SlidersHorizontal size={32} />
            <h3 className="font-display">No products found</h3>
            <p>Check back soon for fresh listings from farmers near you.</p>
          </div>
        )}
      </div>
    </div>
  )
}
