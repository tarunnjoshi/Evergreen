import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { AiFillCloseCircle } from 'react-icons/ai';
import { MdOutlineShoppingCartCheckout } from 'react-icons/md';


const Navbar = () => {
  const togglecart = () =>{
    if (ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }

  }
  const ref = useRef()

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
      <div onClick={togglecart} className="cart absolute right-0 top-4 mx-5 cursor-pointer">
        <AiOutlineShoppingCart className='text-xl md:text-2xl '></AiOutlineShoppingCart>
      </div>
      <div ref={ref} className="w-72 sidebar absolute top-0 right-0 bg-pink-100 p-10 transition-transform translate-x-full transform" >
        <h2 className='font-bold text-xl text-center'>shopping cart</h2>
        <span onClick={togglecart} className='absolute top-5 right-3 cursor-pointer text-2xl text-pink-500'><AiFillCloseCircle/></span>
        <ol className='list-decimal font-semibold' >
          <li>
            <div className="item flex ">
            <div className='w-2/3 font-semibold'>Tshirt - wear the code</div>
            <div className='flex font-semibold items-center justify-center w-1/3 divlue-800 text-2-xl'><AiOutlinePlusCircle className='mr-2 text-2xl'/>1<AiOutlineMinusCircle className='ml-2 text-2xl'/></div>
            </div>
          </li>
        </ol>
        <button className="flex mx-auto mt-16 text-white bg-pink-400 border-0 py-2 px-8 focus:outline-none hover:bg-pink-500 rounded text-lg"><MdOutlineShoppingCartCheckout className='mt-1'/>Checkout</button>
      </div>
    </div>
  )
}

export default Navbar