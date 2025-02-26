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
          <div className="flex flex-wrap -m-4 justify-center">
            {products.map((item) => (
              <Link passHref={true} key={item._id} href={`/product/${item.slug}`} legacyBehavior>
                <a className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                  <div className="cursor-pointer shadow-lg rounded-lg overflow-hidden">
                    <div className="block relative rounded overflow-hidden">
                      <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[30vh] block" src={item.img} />
                    </div>
                    <div className="mt-4 text-center md:text-left">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                      <p className="mt-1">₹{item.price}</p>
                      <p className="mt-1">S, M, L, XL, XX</p>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div >
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  let products = await Product.find({ category: 'tshirt' });

  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  }

}

export default Tshirts