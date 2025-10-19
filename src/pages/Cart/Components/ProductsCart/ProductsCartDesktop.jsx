import React from 'react'
import ProductCart from './ProductCart'
import icons from '@/icons'
import PrimaryButton from '@/components/Ui/Button/PrimaryButton'

const ProductsCartDesktop = ({ cart, productsDiscounts }) => {
  const { Trash } = icons

  return (
    <section className='mt-10 hidden lg:block'>
      <div className="container flex justify-between gap-5">

        <div className='w-8/13 border-2 border-gray-300 rounded-lg p-2'>
          <div className='h-112 overflow-y-auto p-3'>
            {cart.items.map(item => <ProductCart key={item.product._id} cartItem={item} />)}
          </div>
        </div>

        <div className='w-4/12 border-gray-300 border-2 px-4 py-5 rounded-lg h-fit'>
          <div className='flex justify-between border-gray-300 border-b pb-4'>
            <p>سبد خرید ({cart.totalQuantity})</p>
            <Trash className='text-xl cursor-pointer hover:text-red-500 duration-300' />
          </div>
          <div className='flex justify-between border-gray-300 border-b py-4'>
            <p className='text-sm'>تخفیف محصولات</p>
            <p>{productsDiscounts.toLocaleString()}</p>
          </div>
          <div className='flex justify-between py-4'>
            <p className='text-sm'>مبلغ قابل پرداخت</p>
            <p>{cart.totalPrice.toLocaleString()}</p>
          </div>
          <div className='mt-5 text-sm sm:text-base'>
            <PrimaryButton text="تکمیل اطلاعات" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsCartDesktop