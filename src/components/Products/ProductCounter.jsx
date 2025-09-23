import icons from '@/icons'
import React from 'react'

const ProductCounter = ({setCount,count}) => {
  const {Plus,Minus} = icons
  return (
    <div className='flex justify-between items-center gap-2 bg-green-200 px-0.5 py-2 rounded-sm select-none'>
      <Plus onClick={() => setCount(prev => prev + 1)} className='text-lg text-primary-color cursor-pointer' />
      <span  className='text-sm md:text-base'>{count}</span>
      <Minus onClick={() => setCount(prev => prev - 1)} className='text-lg text-primary-color cursor-pointer' />
    </div>
  )
}

export default ProductCounter