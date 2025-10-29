import icons from '@/icons'
import TopCart from '@/pages/Cart/Components/TopCart'
import React, { useState } from 'react'
import DeliveryMethodItem from './DeliveryMethodItem'

const DeliveryMethod = () => {
  const { Truck, Backpack, Motor } = icons

  const [methodActive, setMethodActive] = useState(0)
  return (
    <section className='mt-8 border-2 border-gray-300 rounded-lg px-1.5 py-3 text-sm'>
      <div className="container">
        <div className='flex items-center gap-2 border-b border-gray-300 pb-3'>
          <Truck className='text-lg' />
          <h2 className='font-Estedad-Medium'>روش تحویل سفارش</h2>
        </div>

        <DeliveryMethodItem
          isMethodActive={methodActive === 0}
          methodActive={methodActive}
          setMethodActive={setMethodActive}
          text="تحویل حضوری"
          className='mt-3 flex gap-1 items-center'>
          <Backpack />
        </DeliveryMethodItem>

        <DeliveryMethodItem
          isMethodActive={methodActive === 1}
          methodActive={methodActive}
          setMethodActive={setMethodActive}
          text="ارسال توسط پیک"
          className='mt-3 flex gap-1 items-center'>
          <Motor className='text-lg' />
        </DeliveryMethodItem>
      </div>
    </section>
  )
}

export default DeliveryMethod