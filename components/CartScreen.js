import { useEffect, useState, useContext } from 'react'
import { CartCountManager } from './Layout'
import { MdOutlineCancel } from 'react-icons/md'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { VscClose } from 'react-icons/vsc'
import { getCart } from '../lib/api'
import swell from 'swell-js'

export default function CartScreen({ toggleCartView, cartView }) {
  // State for storing cartDetails like items and shipping details (soon)
  const [cartDetails, setCartDetails] = useState({ items: [], subTotal: 0 })
  const [isLoading, setIsLoading] = useState(false)

  // // Context that holds the setState function to update the value of the length of the items in the cart
  // // Set the function to a variable (changeCartCount)
  // const manageCartCount = useContext(CartCountManager)
  // const changeCartCount = manageCartCount.cartItemCount[1]

  // // Update the cart everytime the cartView changes
  // useEffect(() => {
  //   const fetchCart = async () => {
  //     const cart = await getCart()
  //     if (cart === null) return

  //     setCartDetails(cart)
  //   }
  //   fetchCart()
  // }, [cartView])

  // // Function to remove items from the cart and update the cartDetails
  // const removeItem = async (id) => {
  //   setIsLoading(true)
  //   try {
  //     await swell.cart.removeItem(id)
  //     const cart = await getCart()

  //     // Set the cart item counter to the new length of the items array
  //     changeCartCount(cart.items.length)
  //     setCartDetails(cart)
  //   } catch (e) {
  //     alert('There was an error. Please try again.')
  //     setIsLoading(false)
  //   }
  //   setIsLoading(false)
  // }

  // // Increment the quantity of the cart item by id. Return the new cart obj to state(cartDetails)
  // const increaseQuantity = async (item) => {
  //   setIsLoading(true)
  //   try {
  //     await swell.cart.updateItem(item.id, {
  //       quantity: item.quantity + 1
  //     })

  //     // Get the new cart and update the state
  //     const cart = await getCart()
  //     setCartDetails(cart)
  //   } catch (e) {
  //     alert('There was an error. Please try again.')
  //     setIsLoading(false)
  //   }
  //   setIsLoading(false)
  // }

  // // Decrement the quantity of the cart item by id. Return the new cart obj to state(cartDetails)
  // const decreaseQuantity = async (item) => {
  //   setIsLoading(true)
  //   try {
  //     await swell.cart.updateItem(item.id, {
  //       quantity: item.quantity - 1
  //     })

  //     // Get the new cart and update the state
  //     const cart = await getCart()
  //     setCartDetails(cart)
  //   } catch (e) {
  //     alert('There was an error. Please try again.')
  //     setIsLoading(false)
  //   }
  //   setIsLoading(false)
  // }

  // // Get the checkout URL from cart and redirect the user to it
  // const proceedToCheckout = async () => {
  //   try {
  //     const cart = await getCart()
  //     if (cart === null) return
  //     window.location.href = cart.checkoutUrl
  //   } catch (e) { }
  // }

  // // Item template for items in the cart
  // const itemsCartCards = cartDetails.items.map(item => {
  //   return (
  //     <section key={item.id} className={`${isLoading ? ' blur-sm' : ''} text-white relative flex border-white px-2`}>
  //       <div className='max-w-[33%] bg-white flex justify-center items-center'>
  //         <img src={item.product.images[0].file.url} />
  //       </div>
  //       <div className='pl-3 flex flex-col justify-between text-xl grow'>
  //         <div className='flex justify-between'>
  //           <p className='text-2xl font-bold'>{item.product.name}</p>
  //           <button className='self-start' onClick={() => removeItem(item.id)}>
  //             <VscClose className='w-8 h-8' />
  //           </button>
  //         </div>
  //         <div className='relative text-lg'>
  //           <div className='flex'>
  //             <p>Quantity: {item.quantity}</p>
  //             <button onClick={() => decreaseQuantity(item)}>
  //               <AiOutlineMinusCircle className='hover:text-red-600 w-8 h-8 ml-4' />
  //             </button>
  //             <button onClick={() => increaseQuantity(item)}>
  //               <AiOutlinePlusCircle className='hover:text-green-600 w-8 h-8 ' />
  //             </button>
  //           </div>
  //           <p>Size: {item.options[1].value}</p>
  //           <p>Color: {item.options[0].value}</p>
  //           <p className='absolute right-1 text-lg bottom-0'>${item.product.price * item.quantity}</p>
  //         </div>
  //       </div>
  //     </section>
  //   )
  // })

  {/* When cart veiw is true */ }
  return (
    <div className={`${cartView ? 'fixed h-screen' : 'hidden'} pt-4 pb-2 px-4 z-[30] text-left w-full md:w-[45%] right-0 bottom-0 top-0 bg-black text-white`}>
      {/* Manage cart items and proceed to checkout button */}
      <div className='h-full w-full relative flex flex-col justify-between'>
        <div className='flex justify-between pb-4'>
          <h1 className='font-semibold text-3xl'>Shopping Cart</h1>
          <button className='self-start' onClick={toggleCartView}>
            <MdOutlineCancel className='w-10 h-10' />
          </button>
        </div>

        <hr />

        {/* Cart items display container */}
        <div className='h-auto grow mt-6 flex flex-col gap-4 overflow-y-auto'>
          {/* {itemsCartCards} */}
        </div>

        {/* Cart Summary Info */}
        <div className=''>
          <h2 className='font-semibold text-2xl py-4'>Summary</h2>
          <hr />
          <section className='text-xl py-4 font-normal flex flex-col overflow-y-auto'>
            {/* <p>Subtotal: ${cartDetails.subTotal}</p> */}
            <p>Shipping and Tax:
              <small className='italic opacity-80 text-sm text-neutral-100'> Determined at checkout...</small>
            </p>
            <p>Subtotal: ${cartDetails.subTotal}</p>
          </section>

          {/* Button redirects to checkout URL provided by cart */}
          <button  className='w-full h-12 px-4 text-lg font-semibold bg-black border-[1px] border-gray-400 hover:bg-neutral-200 hover:text-black'>Checkout</button>
        </div>
      </div>
    </div>
  )
}

// onClick={proceedToCheckout}