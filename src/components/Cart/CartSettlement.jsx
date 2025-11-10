import icons from '@/icons'
import { calAllOff } from '@/utils/utils'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CartSettlement = () => {
  const { Trash } = icons

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart.cart)
  const token = useSelector((state) => state.auth.accessToken)


  let productsDiscounts = 0
  cart.items.forEach(item => productsDiscounts += (calAllOff(item)));

  return (
    <section className='mt-8 border-2 border-gray-300 rounded-lg px-1.5 py-3 text-sm'>

    </section>
  )
}

export default CartSettlement