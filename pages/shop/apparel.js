import { useEffect, useRef, useState, useContext } from 'react';
import { CartCountManager } from '../../components/Layout'
import s from '../../styles/apparel.module.css'
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi'
import swell from 'swell-js'

export default function Apparel({ productsList }) {
  // const [activeItem, setActiveItem] = useState({
  //   product_id: productsList[0].id,
  //   options: {
  //     Color: '',
  //     Size: ''
  //   },
  //   quantity: 0
  // })
  // const [isLoading, setIsLoading] = useState(false)

  // // Context that holds the setState function to update the value of the length of the items in the cart
  // // Set the function to a variable (changeCartCount)
  // const manageCartCount = useContext(CartCountManager)
  // const changeCartCount = manageCartCount.cartItemCount[1]

  // // async function idid(){
  // //   await swell.cart.setItems([])
  // //   await swell.cart.update({
  // //     billing: {},
  // //     shipping: {},
  // //   })
  // // }
  // // idid()

  // // Dev function
  // // useEffect(() => {
  // //   console.log(activeItem, activeItem.options)
  // // }, [activeItem])

  // // Unfocus/uncheck any previously selected inputs anytime a new product_id is sensed
  // useEffect(() => {
  //   for (let index = 0; index < formElements.current.length; index++) {
  //     if (formElements.current[index].type === 'radio' && formElements.current[index].checked) {
  //       formElements.current[index].checked = false
  //     }
  //   }
  // }, [activeItem.product_id])

  // // Use this ref to store the previous selected input elements to later de-select
  // const formElements = useRef()

  // const handleColorInputChange = (event, product) => {
  //   setActiveItem({
  //     ...activeItem,
  //     product_id: product.id,
  //     options: {
  //       Size: activeItem.options.Size,
  //       Color: event.target.value
  //     }
  //   })
  // }

  // const handleSizeInputChange = (event, product) => {
  //   setActiveItem({
  //     ...activeItem,
  //     product_id: product.id,
  //     options: {
  //       Color: activeItem.options.Color,
  //       Size: event.target.value
  //     }
  //   })
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   //console.log(event)
  // }

  // const addItem = async () => {
  //   const { product_id, quantity } = activeItem
  //   const { Color, Size } = activeItem.options

  //   // Check to make sure all fields are filled in order to add item to cart
  //   if (Color === '' || Size === '' || quantity <= 0) {
  //     alert('Please select a size, color, and quantity.')
  //     return
  //   }
  //   setIsLoading(true)

  //   // Add the values from state (activeItem) into the addItem function from swell API
  //   try {
  //     await swell.cart.addItem({
  //       product_id: product_id,
  //       options: {
  //         Color: Color,
  //         Size: Size
  //       },
  //       quantity: quantity
  //     })

  //     // setState to the new value of the length of the items in the cart
  //     const cart = await swell.cart.get()
  //     const { items } = cart
  //     changeCartCount(items.length)

  //   } catch (e) {
  //     setIsLoading(false)
  //     return
  //   }

  //   setIsLoading(false)
  // }

  // const incrementQuantity = (id) => {
  //   // Check if the button being clicked is the button for the item that is in focus
  //   if (id !== activeItem.product_id) return;

  //   setActiveItem({
  //     ...activeItem,
  //     quantity: parseInt(activeItem.quantity + 1)
  //   })
  // }

  // const decrementQuantity = (id) => {
  //   // Check if the button being clicked is the button for the item that is in focus
  //   if (id !== activeItem.product_id) return;

  //   // Prevent the quantity from being negative
  //   if (activeItem.quantity <= 0) return;

  //   setActiveItem({
  //     ...activeItem,
  //     quantity: activeItem.quantity - 1
  //   })
  // }

  // const focusForm = (id, e) => {
  //   if (id === activeItem.product_id) {
  //     return;
  //   } else {
  //     // Set form inputs to be cleared when focus is in a different item
  //     formElements.current = document.getElementById(activeItem.product_id).elements

  //     // Get the available options to be selected from and put them in array
  //     const array = e.target.name.split("-")

  //     // Set state to the item in focus and update the options to selected values from form inputs
  //     setActiveItem({
  //       product_id: id,
  //       options: {
  //         Color: array.includes('color') ? e.target.value : '',
  //         Size: array.includes('size') ? e.target.value : ''
  //       },
  //       quantity: 0
  //     })
  //   }
  // }

  // const handleFocusOnQuantity = (id, e) => {
  //   // On focus set the input to an empty string
  //   e.target.value = ''
  //   if (id === activeItem.product_id) return

  //   // Set form inputs to be cleared when focus is in a different item
  //   formElements.current = document.getElementById(activeItem.product_id).elements

  //   // Clear state and update to new item in focus
  //   setActiveItem({
  //     ...activeItem,
  //     product_id: id,
  //     options: {
  //       Color: '',
  //       Size: ''
  //     },
  //     quantity: e.target.value
  //   })
  // }

  // const loadProducts = productsList.map((product, pIndex) => {
  //   return (
  //     // Product Card
  //     <section key={product.id} className={`w-[380px]  mx-auto relative grid grid-rows-2-auto gap-4 rounded-lg overflow-hidden border-2 border-black`}>
  //       {/* Product Image */}
  //       <div className='pt-2'>
  //         <img className={`mx-auto h-[200px]`} src={product.images[0].file.url} />
  //       </div>
  //       {/* Product Info Container */}
  //       <div className='h-full text-2xl text-center bg-inherit text-black'>
  //         {/* Product Name */}
  //         <p className='font-bold'>{product.name}</p>
  //         {/* Product Options Selection */}
  //         <form
  //           onChange={(e) => focusForm(product.id, e)}
  //           id={product.id}
  //           ref={formElements}
  //           onSubmit={handleSubmit}
  //         >

  //           {/* Product Colors and Quantity */}
  //           <div className={`flex items-center px-2 gap-2 w-auto h-16`}>
  //             {product.options[0].values.map((color, index) => {
  //               return (
  //                 <button type='button' key={color.id}>
  //                   <input
  //                     onChange={(event) => handleColorInputChange(event, product)}
  //                     id={product.options[0].id + index}
  //                     name={`color-${pIndex}`}
  //                     type='radio'
  //                     value={color.name}
  //                     className='hidden peer'
  //                   />
  //                   <label
  //                     htmlFor={product.options[0].id + index}
  //                     style={{ background: color.name }}
  //                     className={`block w-8 h-8 rounded-full border-2 border-zinc-800 opacity-70 duration-200 hover:scale-110 hover:opacity-100 peer-checked:scale-125 peer-checked:opacity-100 border-3`}
  //                   >
  //                   </label>
  //                 </button>
  //               )
  //             })}

  //             {/* Product Quantity */}
  //             <div className={`${s.quantityInput} ml-auto`}>
  //               <button type='button' onClick={() => decrementQuantity(product.id)}>
  //                 <FiMinusCircle className='inline' />
  //               </button>
  //               <input
  //                 onChange={(e) => setActiveItem({
  //                   ...activeItem,
  //                   quantity: e.target.value <= 0 ? '' : parseInt(e.target.value)
  //                 })}
  //                 onFocus={(e) => handleFocusOnQuantity(product.id, e)}

  //                 placeholder={1}
  //                 min={0}
  //                 className='bg-inherit w-8 text-center'
  //                 type='number'
  //                 value={product.id === activeItem.product_id ? activeItem.quantity : 0}
  //               />
  //               <button type='button' onClick={() => incrementQuantity(product.id)}>
  //                 <FiPlusCircle className='inline' />
  //               </button>
  //             </div>
  //           </div>

  //           {/* Product Sizes and Price */}
  //           <div className='relative flex gap-2 items-center px-2 h-16 text-white text-lg'>
  //             {product.options[1].values.map((size, index) => {
  //               return (
  //                 <div key={size.id}>
  //                   <input
  //                     onChange={(event) => handleSizeInputChange(event, product)}
  //                     id={product.options[1].id + index}
  //                     name={`size-${pIndex}`}
  //                     type='radio'
  //                     value={size.name}
  //                     className='hidden peer'
  //                   />
  //                   <label
  //                     htmlFor={product.options[1].id + index}
  //                     className={`flex justify-center items-center w-12 h-12 bg-black rounded-full opacity-70 duration-200 hover:cursor-pointer hover:scale-110 hover:opacity-100 peer-checked:scale-125 peer-checked:opacity-100 border-3`}
  //                   >{size.name}
  //                   </label>
  //                 </div>
  //               )
  //             })}
  //             {/* Product Price */}
  //             <p className='text-black absolute right-4 text-2xl font-semibold'>${product.price}</p>
  //           </div>

  //           {/* Add to cart button */}
  //           <button type='submit' onClick={addItem} className={`${isLoading ? 'opacity-50 cursor-wait' : ''} bg-black flex w-full h-16 text-white justify-center items-center text-2xl`}>
  //             <p className='mr-4'>Add To Cart </p>
  //             <svg width="32px" height="32px" viewBox="0 0 32 32" id="i-cart" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
  //               <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
  //               <circle cx="25" cy="27" r="2" />
  //               <circle cx="12" cy="27" r="2" />
  //             </svg>
  //           </button>
  //         </form>
  //       </div>
  //     </section>
  //   )
  // })

  // Timer until drop
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const deadline = new Date('2023-02-01T00:00:00');
    const interval = setInterval(() => {
      const currentTime = new Date();
      const timeDiff = deadline - currentTime;
      setTimeLeft(timeDiff);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) {
    return <div>Loading...</div>;
  }

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const hours = Math.floor(timeLeft / (1000 * 60 * 60));

  // Apply css for shop layout within className to main element
  return (
    <main className={'bg- p-4 relative'}>
      {/* {loadProducts} */}
      <div className='h-[81vh]'>
      <h1 className='text-3xl'>Coming soon...</h1> 
      <p className='text-2xl font-bold'>{hours} hours, {minutes} minutes, {seconds} seconds</p>
      </div>
    </main>
  )
}

// export async function getServerSideProps() {
//   const fetchProductsList = await swell.products.list()
//   const productsList = fetchProductsList.results

//   return {
//     props: {
//       productsList
//     }
//   }
// }