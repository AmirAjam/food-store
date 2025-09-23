import React, { useState } from 'react'
import PrimaryButton from '../Ui/Button/PrimaryButton'
import icons from '@/icons'
import ProductCounter from './ProductCounter'

const Product = ({ products }) => {
  const [count, setCount] = useState()
  const { Heart } = icons
  return (
    <div className='border-2 border-gray-300 rounded-lg overflow-hidden flex gap-2 justify-between'>
      <div className='w-1/3'>
        <img src="/images/products/1.png" alt="" className='h-full w-full object-cover' />
      </div>
      <div className='px-1 sm:px-2 py-2.5 w-2/3 flex flex-col justify-between'>
        <div className='flex justify-between items-center w-full'>
          <p className='text-sm'>کوفته برنجی</p>
          <div className='text-xs flex items-center gap-2'>
            <p className='text-gray-400 line-through'>۱۸۰٬۰۰۰</p>
            <span className='block bg-red-200 text-red-500 py-0.5 px-1.5 rounded-sm'>۳۵ %</span>
          </div>
        </div>
        <div className='mt-2.5 text-xs flex gap-2'>
          <p className='line-clamp-1 md:line-clamp-2'>برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز</p>
          <p className='text-nowrap lg:text-base'>۱۴۲٬۵۰۰ تومان</p>
        </div>
        <div className='text-xs lg:text-sm flex justify-between items-center mt-2.5 gap-5'>
          {count ?
            <ProductCounter setCount={setCount} count={count} />
            :
            <PrimaryButton text="افزودن به سبد خرید" onClick={() => setCount(1)} />
          }
          <Heart className='text-xl lg:text-2xl text-gray-500 cursor-pointer hover:text-red-500 duration-300' />
        </div>
      </div>
    </div>
  )
}

export default Product