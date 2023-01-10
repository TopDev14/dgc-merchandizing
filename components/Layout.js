import Navbar from './Navbar'
import CartScreen from './CartScreen'
import { createContext, useState } from 'react'
import swell from 'swell-js'

swell.init('dgc-merchandizing', 'pk_WUBN0qMANTA6ojiSApz87KrBCxbE9jpw', { useCamelCase: true })

export const CartCountManager = createContext()

export default function Layout({ children }) {
  const [cartView, setCartView] = useState(false)
  const [cartItemCount, setCartItemCount] = useState(0)

  function toggleCartView() {
    setCartView(prevCartView => !prevCartView)
  }

  const manageCartCount = {
    cartItemCount: [cartItemCount, setCartItemCount]
  }

  return (
    <div className=' text-center h-full min-w-full' >
      <CartCountManager.Provider value={manageCartCount}>
        <CartScreen cartView={cartView} toggleCartView={toggleCartView} />
        <Navbar cartView={cartView} toggleCartView={toggleCartView} />
        <div className={`${cartView ? 'blur' : 'transparent'}`}>
          {children}
        </div>
      </CartCountManager.Provider>
    </div >
  )
}