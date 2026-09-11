import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Compare from './pages/Compare'
import Cart from './pages/Cart'

import AdminDashboard from './pages/AdminDashboard'
import AddProduct from './pages/AddProduct'
import About from './pages/About'
import MarketInsights from './pages/MarketInsights'

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <div className="paper-grain">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/insights" element={<MarketInsights />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/add-product" element={<AddProduct />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AppProvider>
    </BrowserRouter>
  )
}
