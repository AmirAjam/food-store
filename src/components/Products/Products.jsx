import React from 'react'
import Product from './Product'

const Products = ({ products, setOpenLogin }) => {
  return (
    <section className='mt-8'>
      <div className="container grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products?.map(product =>
          <Product
            key={product._id}
            productDetails={product}
            setOpenLogin={setOpenLogin} />)}
      </div>
    </section>
  )
}

export default Products