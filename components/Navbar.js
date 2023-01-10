import s from '../styles/Navbar.module.css'
import Link from 'next/link'
import Cart from './Cart'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiOutlineFaceSmile } from 'react-icons/hi2'

export default function Navbar({ toggleCartView, cartView }) {
  // State to toggle the mobile nav menu
  const [mobileNav, setMobileNav] = useState(false)

  // Toggle mobile nav function
  const toggleMobileNavMenu = () => {
    setMobileNav(prevNav => !prevNav)
  }

  return (
    <nav className={`${s.container} flex justify-between gap-4 px-1 py-1 sticky z-10`}>
      {/*Logo*/}
      <Link href='/'>
        <img src='/images/DGC-TITLE.jpg' className={`h-[4.5rem] cursor-pointer`} />
      </Link>

      {/*Desktop/Tablet Navbar*/}
      <nav className='hidden sm:flex items-center ml-auto'>
        <ul className={`${s.navLinks} flex items-center gap-3 text-lg font-semibold`}>
          <li><Link href='/'>HOME</Link></li>
          <li><Link href='/shop/apparel'>SHOP</Link></li>
          <li><Link href='/Sponsors'>SPONSORS</Link></li>
          <li><Link href='/Terms'>TERMS / INFO</Link></li>

          {/*Cart Icon*/}
          <Cart toggleCartView={toggleCartView} cartView={cartView} />
        </ul>
      </nav>

      {/*Mobile Navbar*/}
      <nav className='flex gap-5 pr-4 sm:hidden'>
        {/*Cart Icon*/}
        <Cart toggleCartView={toggleCartView} cartView={cartView} />

        {/*Hamburger Menu Icon*/}
        <button className='mt-2' onClick={toggleMobileNavMenu}>
          <GiHamburgerMenu className='sm:hidden h-10 w-10'>
          </GiHamburgerMenu>
        </button>

        {/*Mobile Nav Dropdown*/}
        <ul className={`${mobileNav ? 'opacity-1 top-0 h-screen' : 'opacity-1 top-0 translate-y-[-500px]'} ${s.mobileNavLinks} p-6 pt-16 bg-black/90 absolute left-0 right-0 text-white duration-300 ease-in-out flex flex-col gap-6 text-2xl`}>
          
          {/* Links */}
          <li>
            <button onClick={toggleMobileNavMenu}>
              <Link href='/'>HOME</Link>
            </button>
          </li>
          <li>
            <button onClick={toggleMobileNavMenu}>
              <Link href='/shop/apparel'>SHOP</Link>
            </button>
          </li>
          <li>
            <button onClick={toggleMobileNavMenu}>
              <Link href='/Sponsors'>SPONSORS</Link>
            </button>
          </li>
          <li>
            <button onClick={toggleMobileNavMenu}>
              <Link href='/Terms'>TERMS / INFO</Link>
            </button>
          </li>

          {/* Smile */}
          <li className='absolute right-3 bottom-3'>
            <a href='https://www.youtube.com/watch?v=xvFZjo5PgG0'>
            <HiOutlineFaceSmile className='w-8 h-8'/>
            </a>
          </li>
        </ul>

        
      </nav>
    </nav>
  )
}
