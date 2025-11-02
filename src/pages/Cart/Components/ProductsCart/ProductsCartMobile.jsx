import React, { useEffect } from 'react'
import ProductCartMobile from '../ProductCartMobile'
import { calAllOff } from '@/utils/utils'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '@/store/cartSlice'
import PrimaryButton from '@/components/Ui/Button/PrimaryButton'
import { Link } from 'react-router-dom'

const ProductsCartMobile = ({ cart, productsDiscounts, text, settlement, addressId }) => {

  return (
    <section className='mt-8'>
      <div className='container'>
        <div className='border-gray-300 border-2 rounded-lg p-4 '>
          <div className="mb-5 font-Estedad-Bold">
            <p>سبد خرید ({cart.items.length})</p>
          </div>
          <div className='border-b-2 border-gray-300 pb-5'>
            <div className='max-h-49 overflow-y-auto px-3'>
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
            <p className='text-primary-color font-Estedad-Bold'>{cart.finalPrice.toLocaleString()}</p>
          </div>

          <Link to={`${settlement ? `/payment/${addressId}` : "/complete-information"}`}
            className='mt-5 block text-sm sm:text-base'>
            <PrimaryButton text={text} />
          </Link>
        </div>
      </div>
    </section >
  )
}

export default ProductsCartMobile