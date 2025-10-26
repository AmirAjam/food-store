import icons from '@/icons'
import TopCart from '@/pages/Cart/Components/TopCart'
import React from 'react'

const DeliveryMethod = () => {
  const { Truck,Backpack } = icons
  return (
    <section className='mt-8 border-2 border-gray-300 rounded-lg px-1.5 py-3 text-sm'>
      <div className="container">
        <div className='flex items-center gap-2 border-b border-gray-300 pb-3'>
          <Truck className='text-lg'/>
          <h2 className='font-Estedad-Medium'>روش تحویل سفارش</h2>
        </div>
        <div className='mt-3 flex gap-1 items-center'>
          <div className='size-4 border-2 border-gray-500 rounded-full p-[2px]'>
            <span className='size-full block bg-primary-color rounded-full'></span>
          </div>
          <span className='text-xs text-gray-500'>تحویل حضوری</span>
          <Backpack />
        </div>
      </div>
    </section>
  )
}

export default DeliveryMethod