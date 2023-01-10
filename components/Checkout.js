// import { MdOutlineCancel } from 'react-icons/md'
// import { useState } from 'react'
// import swell from 'swell-js'

// export default function Checkout({ checkingOut, toggleCheckout }) {
//   // Object containing shipping Info
//   const [shippingInfo, setShippingInfo] = useState({
//     name: '',
//     address: '',
//     city: '',
//     state: '',
//     zip: '',
//     email: '',
//     phone: ''
//   })

//   // Object containing billing Info
//   const [billingInfo, setBillingInfo] = useState({
//     card_name: '',
//     card_number: '',
//     cvv: '',
//     expirationDate: ''
//   })

//   // State for displaying the current form. Router and isLoading variable
//   const [currentForm, setCurrentForm] = useState(true)
//   const [isloading, setIsLoading] = useState(false)

//   const saveShippingInfo = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)

//     const fullName = shippingInfo.name.split(" ")

//     try {
//       await swell.cart.update({
//         account: {
//           email: shippingInfo.email
//         },
//         shipping: {
//           firstName: fullName[0],
//           lastName: fullName[1],
//           address1: shippingInfo.address,
//           city: shippingInfo.city,
//           state: shippingInfo.state,
//           country: 'US',
//           phone: shippingInfo.phone
//         }
//       })

//       const cart = swell.cart.get()
//       console.log(cart)
//       setCurrentForm(false)
//     } catch (e) {
//       alert('There was an error with your information.')
//       setIsLoading(false)
//       return
//     }
//     setIsLoading(false)
//   }

//   const saveBillingInfo = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)

//     try {
//       await swell.cart.update({
//         billing: {
//           card: {
//             token: ''
//           }
//         }
//       })
//     } catch (e) {
//       alert('There was an error with your information.')
//       setIsLoading(false)
//       return
//     }
//     setIsLoading(false)    
//   }

//   return (
//     <div className={`${checkingOut ? 'h-full' : 'hidden'}`}>
//       {/* Shipping Information */}
//       <section className={`${currentForm ? 'h-full' : 'hidden'}`}>
//         <div className={`flex justify-between pb-2`}>
//           <h3 className='font-semibold text-3xl'>Shipping Information</h3>
//           <button className='' onClick={toggleCheckout}>
//             <MdOutlineCancel className='w-10 h-10' />
//           </button>
//         </div>

//         <hr />

//         <form onSubmit={(e) => saveShippingInfo(e)} className='pt-2 pb-12 h-full flex flex-col justify-between'>
//           <div className='flex flex-col gap-1'>

//             <label>First and Last Name: </label>
//             <input
//               required
//               onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
//               type='text'
//               className="border-neutral-500 border-[1px] bg-transparent rounded-md h-8"
//               value={shippingInfo.name}
//             />

//             <label>Address: </label>
//             <input
//               required
//               onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
//               type='text'
//               className="border-neutral-500 border-[1px] bg-transparent rounded-md h-8"
//               value={shippingInfo.address}
//             />

//             <label>City: </label>
//             <input
//               required
//               onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
//               type='text'
//               className="border-neutral-500 border-[1px] bg-transparent rounded-md h-8"
//               value={shippingInfo.city}
//             />

//             <label>State: </label>
//             <input
//               required
//               onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
//               type='text'
//               className="border-neutral-500 border-[1px] bg-transparent rounded-md h-8"
//               value={shippingInfo.state}
//             />

//             <label>Zip: </label>
//             <input
//               required
//               onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
//               type='number'
//               className="border-neutral-500 border-[1px] bg-transparent rounded-md h-8"
//               value={shippingInfo.zip}
//             />

//             <label>Email: </label>
//             <input
//               required
//               onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
//               type='email'
//               className="border-neutral-500 border-[1px] bg-transparent rounded-md h-8"
//               value={shippingInfo.email}
//             />

//             <label>Phone: </label>
//             <input
//               required
//               onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
//               type='tel'
//               className="border-neutral-500 border-[1px] bg-transparent rounded-md h-8"
//               value={shippingInfo.phone}
//             />
//           </div>

//           <button className={` ${isloading ? 'bg-neutral-200 text-black border-black' : ''} items-end w-full p-4 mt-2 border-[1px] border-neutral-400`}>Continue</button>
//         </form>
//       </section>

//       {/* Billing Information */}
//       <section className={`${currentForm ? 'hidden' : 'h-full'}`}>
//         <div className={`flex justify-between pb-2`}>
//           <h3 className='font-semibold text-3xl'>Billing Information</h3>
//           <button className='' onClick={() => setCurrentForm(true)}>
//             <MdOutlineCancel className='w-10 h-10' />
//           </button>
//         </div>

//         <hr />

//         <form onSubmit={(e) => saveBillingInfo(e)} className='pt-2 pb-12 h-full flex flex-col justify-between'>
//           <div className='flex flex-col gap-1'>

//             <label>Cardholder Name: </label>
//             <input
//               required
//               onChange={(e) => setBillingInfo({...billingInfo, card_name: e.target.value})}
//               type='text'
//               className="border-neutral-500 border-[1px] bg-transparent rounded-md h-8"
//               value={billingInfo.card_name}
//             />

//             <label>Card Number: </label>
//             <input
//               required
//               onChange={(e) => setBillingInfo({...billingInfo, card_number: e.target.value})}
//               type='text'
//               className="border-neutral-500 border-[1px] bg-transparent rounded-md h-8"
//               value={billingInfo.card_number}
//             />

//             <label>CVV: </label>
//             <input
//               required
//               onChange={(e) => setBillingInfo({...billingInfo, cvv: e.target.value})}
//               type='text'
//               className="border-neutral-500 border-[1px] bg-transparent rounded-md h-8"
//               value={billingInfo.cvv}
//             />

//             <label>Expiration Date: </label>
//             <input
//               required
//               onChange={(e) => setBillingInfo({...billingInfo, expirationDate: e.target.value})}
//               type='text'
//               className="border-neutral-500 border-[1px] bg-transparent rounded-md h-8"
//               value={billingInfo.expirationDate}
//             />
//           </div>

//           <button className={`${isloading ? 'bg-neutral-200 text-black border-black' : ''} items-end w-full p-4 mt-2 border-[1px] border-neutral-400`}>Place Order</button>
//         </form>
//       </section>
//     </div>
//   )
// }