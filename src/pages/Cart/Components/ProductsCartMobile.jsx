import React, { useEffect } from 'react'
import ProductCartMobile from '../ProductCartMobile'
import { calAllOff } from '@/utils/utils'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '@/store/cartSlice'

const ProductsCartMobile = () => {

  let productsDiscounts = 0

  const cart = useSelector(state => state.cart.cart)
  const token = useSelector((state) => state.auth.accessToken)

  const dispatch = useDispatch()

  cart.forEach(item => productsDiscounts += (calAllOff(item)));

  console.log(cart)


  useEffect(() => {
    dispatch(getCart({ token }))
  }, [])


  return (
    <section className='mt-8'>
      <div className='container'>
        <div className='border-gray-300 border-2 rounded-lg p-4 '>

          <div className='border-b-2 border-gray-300 pb-5'>
            <div className='h-50 overflow-y-scroll px-3'>
              {cart.map((item, index) => <ProductCartMobile
                key={item._id}
                cartItem={item}
                index={index} />)}
            </div>
          </div>

          <div className='border-b-2 border-gray-300 py-5 flex justify-between text-sm'>
            <p>تخفیف محصولات</p>
            <p>{productsDiscounts.toLocaleString()}</p>
          </div>

          <div className='border-b-2 border-gray-300 py-5 flex justify-between text-sm'>
            <p>مبلغ قابل پرداخت</p>
            <p>{productsDiscounts.toLocaleString()}</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProductsCartMobile