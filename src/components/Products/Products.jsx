import React, { useEffect } from 'react'
import Product from './Product'
import { getCart } from '@/store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getFavorite } from '@/store/favouriteSlice'

const Products = ({ products, setOpenLogin }) => {
  const token = useSelector((state) => state.auth.accessToken)
  const id = useSelector((state) => state.auth.userId)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCart({ token }))
    dispatch(getFavorite({ token, id }))
  }, [])

  return (
    <section className='mt-8'>
      <div className="container flex flex-wrap gap-5 justify-between" >
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