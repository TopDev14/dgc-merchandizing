import s from '../styles/Cart.module.css'
import { CartCountManager } from '../components/Layout'
import { useContext, useEffect } from 'react' 
import swell from 'swell-js'

export default function Cart({ toggleCartView, cartView }) {
  // Context that holds the setState function to update the value of the length of the items in the cart
  // Set the function to a variable (changeCartCount)
  const manageCartCount = useContext(CartCountManager)
  const changeCartCount = manageCartCount.cartItemCount[1]
  let userCart = manageCartCount.cartItemCount[0]
 

  useEffect(() => {
    const fetchCart = async () => {
      const cart = await swell.cart.get()
      if(cart === null) return

      // Set the cart item counter to the length of items in cart
      changeCartCount(cart.items.length)
    }
    fetchCart()
  },[])

  return (
    <>
    {/* When cart view is false */}
      <div className={`${cartView ? 'hidden' : 'h-12 self-center'}`}>
        {/*Cart Icon*/}
        <button onClick={toggleCartView} className='max-w-[40px] text-base relative '>
          <img src='/images/shopping-cart-96.png' className={s.cart} alt='cart' />
          {userCart > 0 && <span className={`absolute leading-none flex justify-center top-1 sm:top-[0.2rem] border-full border-black border-[1px] bg-white rounded-full min-w-[1rem] min-h-[1rem] ${userCart > 9 ? 'right-[0.7rem]' : 'right-3'}`}>{userCart}</span>}
        </button>
      </div>
    </>
  )
}