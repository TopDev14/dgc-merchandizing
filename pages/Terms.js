import s from '../styles/Terms.module.css'
import Image from 'next/image'

export default function Terms() {

  const terms = {
    Refunds: 'All purchases are final. No refunds or exchanges. If you did not recieve your order or it is defective please contact us by Email.',
    Shipping: 'All orders are proccessed on the 12th and 27th of every month.  We do NOT ship internationally.'
  }

  return (
    <main className='md:w-2/5 mx-auto'>
      <section className='
          flex flex-col justify-center 
          text-left mx-auto px-2 md:px-0 py-8 text-lg'
      >
        <p className='mb-4'><strong>Refunds -- </strong>{terms.Refunds}</p>
        <p className='mb-4'><strong>Shipping -- </strong>{terms.Shipping}</p>
      </section>

      <footer className='text-black border-2 bg-white border-black mx-2 rounded-xl mt-10 relative'>
        <Image
          src={'/images/white-mail-100.png'}
          width={100}
          height={100}
          className='border-2 bg-inherit border-black rounded-full mx-auto top-[-3.5rem] p-2 right-[-50%] left-[-50%] absolute shadow-lg drop-shadow-lg'
        />

        <h1 className='text-2xl font-bold pt-16 my-auto'>Want To Get In Touch?</h1>

        <ul className={`${s.contactLinks} my-5 text-lg text-black h-16  space-y-8`}>
          <li>Email: dgc.business69@gmail.com</li>
        </ul>

        <div className=' text-zinc-600 p-2'>DGC Merchandizing &copy;</div>
      </footer>
    </main>
  )
}