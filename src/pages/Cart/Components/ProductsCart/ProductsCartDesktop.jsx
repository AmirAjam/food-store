import React from 'react'
import ProductCart from './ProductCart'

const ProductsCartDesktop = ({cart}) => {
  console.log(cart)
  return (
    <section className='mt-12 hidden lg:block'>
      <div className="container flex justify-between gap-5">
        <div className='w-7/12 border-2 border-gray-300 rounded-lg p-5 '>
          {cart.items.map(item => <ProductCart cartItem={item}/>)}
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default ProductsCartDesktop