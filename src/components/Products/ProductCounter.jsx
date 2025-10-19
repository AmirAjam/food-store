import icons from '@/icons'
import { deleteCartItem, updateCart } from '@/store/cartSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ProductCounter = ({ setCount, count, productDetails }) => {
  const { Plus, Minus, Trash } = icons

  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.accessToken)

  const deleteItem = () => {
    setCount(0)
    dispatch(deleteCartItem({
      token,
      productId: productDetails._id
    }))
  }

  const increaseQuantity = () => {
    dispatch(updateCart({
      token,
      data: { productId: productDetails._id, quantity: count + 1 }
    }))
    setCount(prev => prev + 1)
  }

  const minusQuantity = () => {
    dispatch(updateCart({
      token,
      data: { productId: productDetails._id, quantity: count - 1 }
    }))

    setCount(prev => prev - 1)
  }

  return (
    <div className='flex justify-between items-center gap-2 bg-green-200 p-1.5 rounded-sm 
    select-none w-16'>
      <Plus onClick={increaseQuantity} className='text-lg text-primary-color cursor-pointer' />
      <span className='text-sm'>{count}</span>
      {count > 1 ?
        <Minus onClick={minusQuantity} className='text-lg text-primary-color 
      cursor-pointer' />
        :
        <Trash onClick={deleteItem} className='text-base text-primary-color cursor-pointer' />}

    </div>
  )
}

export default ProductCounter