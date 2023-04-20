import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:jus justify-center items-center py-2'>
      <div className="logo mx-5">
        <Image src="/navlogo.png" alt="" width={127} height={40} />
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-2 font-bold md:text-xl'>
          <Link href={'/'}> <li>Tshirt</li> </Link>
          <Link href={'/'}><li>Hoodies</li></Link>
          <Link href={'/'}> <li>Snikers</li> </Link>
          <Link href={'/'}> <li>Mugs</li> </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-4 mx-5">
        <AiOutlineShoppingCart className='text-xl md:text-3xl'></AiOutlineShoppingCart>
      </div>
    </div>
  )
}

export default Navbar