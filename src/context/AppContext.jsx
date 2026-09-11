import { createContext, useContext, useState, useCallback } from 'react'

const AppContext = createContext({
  role: 'consumer',
  setRole: () => {},
  cart: [],
  addToCart: () => {},
  changeCart: () => {},
  removeFromCart: () => {},
})

export const useApp = () => useContext(AppContext)

export function AppProvider({ children }) {
  const [role, setRole] = useState('consumer')
  const [cart, setCart] = useState([])

  const addToCart = useCallback((product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }, [])

  const changeCart = useCallback((productId, quantity) => {
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      ).filter(item => item.quantity > 0)
    )
  }, [])

  const removeFromCart = useCallback((productId) => {
    setCart(prev => prev.filter(item => item.id !== productId))
  }, [])

  return (
    <AppContext.Provider value={{ role, setRole, cart, addToCart, changeCart, removeFromCart }}>
      {children}
    </AppContext.Provider>
  )
}
