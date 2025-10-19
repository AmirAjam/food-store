import React, { useEffect } from 'react'
import ProductCartMobile from '../../ProductCartMobile'
import { calAllOff } from '@/utils/utils'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '@/store/cartSlice'
import PrimaryButton from '@/components/Ui/Button/PrimaryButton'

const ProductsCartMobile = ({cart}) => {

  let productsDiscounts = 0

  cart.items.forEach(item => productsDiscounts += (calAllOff(item)));

  console.log(cart)


  return (
    <section className='mt-8 lg:hidden'>
      <div className='container'>
        <div className='border-gray-300 border-2 rounded-lg p-4 '>

          <div className='border-b-2 border-gray-300 pb-5'>
            <div className='h-49 overflow-y-scroll px-3'>
              {cart.items.map((item, index) => <ProductCartMobile
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
            <p className='text-primary-color font-Estedad-Bold'>{cart.totalPrice.toLocaleString()}</p>
          </div>

          <div className='mt-5 text-sm sm:text-base'>
            <PrimaryButton text="تکمیل اطلاعات"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsCartMobile