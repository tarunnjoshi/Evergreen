import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center mb-1 shadow-xl'>
      <div className="logo mx-5">
        <Link href={'/'}>
        <Image src="/navlogo.png" alt="" width={127} height={40} />
        </Link>
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-6 font-bold md:text-md'>
          <Link href={'/tshirts'}> <li>Tshirt</li> </Link>
          <Link href={'/hoodies'}><li>Hoodies</li></Link>
          <Link href={'/stickers'}> <li>Stickers</li> </Link>
          <Link href={'/mugs'}> <li>Mugs</li> </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-4 mx-5">
        <AiOutlineShoppingCart className='text-xl md:text-2xl'></AiOutlineShoppingCart>
      </div>
    </div>
  )
}

export default Navbar