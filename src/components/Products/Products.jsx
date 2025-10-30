import React, { useEffect } from 'react'
import Product from './Product'
import { getCart } from '@/store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getFavorite } from '@/store/favoriteSlice'

const Products = ({ products, setOpenLogin }) => {
  const token = useSelector((state) => state.auth.accessToken)
  const id = useSelector((state) => state.auth.userId)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCart({ token }))
    dispatch(getFavorite({ token,id }))
  }, [])
  
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