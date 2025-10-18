import React from 'react'
import ProductCartMobile from '../ProductCartMobile'

const ProductsCartMobile = ({cart}) => {
  return (
    <section className='mt-8'>
      <div className='container'>
        <div className='border-gray-300 border-2 rounded-lg p-4'>
          <div>
            {cart.map((item,index) => <ProductCartMobile 
            key={item._id} 
            cartItem={item}
            index={index}/>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsCartMobile