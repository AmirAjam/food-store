import icons from '@/icons'
import TopCart from '@/pages/Cart/Components/TopCart'
import React from 'react'

const DeliveryMethod = () => {
  const { Truck } = icons
  return (
    <section className='mt-8 border-2 border-gray-300 p-2'>
      <div className="container">
        <div className='flex items-center'>
          <Truck className='text-xl'/>
          <h2>روش تحویل سفارش</h2>
        </div>
      </div>
    </section>
  )
}

export default DeliveryMethod