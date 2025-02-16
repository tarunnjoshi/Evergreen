/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Product from '@/models/Product';
import mongoose from 'mongoose';


const Tshirts = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg lg:mr-0.75">
              <a href={'/product/wear-the-code'} className="block rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-top w-full h-full block" src="https://m.media-amazon.com/images/I/71qStemLMxL._UX679_.jpg" />
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">EverGreen E-commerce</h2>
                  <p className="mt-1">₹550.00</p>
                  <p className="mt-1">S, M, L, XL, XX</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  let products = await Product.find();

  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  }

}

export default Tshirts