import React from 'react'
import Product from './Product'

const Products = () => {
  return (
    <section className='mt-8'>
      <div className="container grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  )
}

export default Products