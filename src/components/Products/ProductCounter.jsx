import icons from '@/icons'
import { deleteCartItem, updateCart } from '@/store/cartSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ProductCounter = ({ setCount, count, productDetails }) => {
  const { Plus, Minus, Trash } = icons

  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.accessToken)

  useEffect(() => {
    if (count !== 0) {
      dispatch(updateCart({
        token,
        data: { productId: productDetails._id, quantity: count }
      }))
    }
    else {
      dispatch(deleteCartItem({
        token,
        productId: productDetails._id
      }))
    }
  }, [count])

  return (
    <div className='flex justify-between items-center gap-2 bg-green-200 px-0.5 py-2 rounded-sm 
    select-none w-20'>
      <Plus onClick={() => setCount(prev => prev + 1)} className='text-lg text-primary-color cursor-pointer' />
      <span className='text-sm md:text-base'>{count}</span>
      {count > 1 ?
        <Minus onClick={() => setCount(prev => prev - 1)} className='text-lg text-primary-color 
      cursor-pointer' />
        :
        <Trash onClick={() => setCount(0)} className='md:text-base text-primary-color cursor-pointer'/>}

    </div>
  )
}

export default ProductCounter