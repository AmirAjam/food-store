import SecondaryButton from '@/components/Ui/Button/SecondaryButton'
import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <section>
      <div className="container">
        <div className='border border-gray-200 mt-5 md:mt-8 flex justify-center flex-col gap-5
        bg-[url(/images/cart/cart-mobile.png)] md:bg-[url(/images/cart/cart-desktop.png)] 
          bg-no-repeat bg-center h-75 md:h-110 rounded-lg'>
          <p className='text-sm md:text-xl font-Estedad-Medium text-gray-600 mt-20 text-center'>
            شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
          </p>
          <div className='w-38 md:w-48 mx-auto bg-white'>
            <SecondaryButton>
              <Link className=''>منوی رستوران</Link>
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmptyCart