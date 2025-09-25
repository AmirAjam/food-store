import icons from '@/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const CartNavbar = ({ step = 1 }) => {
  const { Cart, CheckBox, Card } = icons
  return (
    <section className='mt-8'>
      <div className={`container flex items-center justify-center gap-3 group
        ${step === 1 ? "step-1" : ""}
        ${step === 2 ? "step-2" : ""}
        ${step === 3 ? "step-3" : ""}`}>

        <Link to="/cart" className="flex gap-2 items-center text-primary-color">
          <Cart className='text-xl group-[.step-1]:text-2xl' />
          <span className='text-sm font-Estedad-Regular group-[.step-1]:text-base 
          group-[.step-1]:font-Estedad-Bold'>
            سبد خرید
          </span>
        </Link>

        <div className="border-t-2 border-dashed border-primary-color group-[.step-1]:border-gray-400 w-50"></div>

        <Link to="/completion-nformation " className='flex gap-2 items-center text-gray-400
        group-[.step-2]:text-primary-color group-[.step-3]:text-primary-color'>
          <CheckBox className='text-lg group-[.step-2]:text-xl' />
          <span className='text-sm group-[.step-2]:text-base group-[.step-2]:font-Estedad-Bold'>
            تکمیل اطلاعات
          </span>
        </Link>

        <div className="border-t-2 border-dashed border-gray-400 w-50 group-[.step-3]:border-primary-color"></div>

        <Link to="/payment " className='flex gap-2 items-center text-gray-400 group-[.step-3]:text-primary-color'>
          <Card className='text-xl group-[.step-3]:text-xl' />
          <span className='font-Estedad-Bold text-sm group-[.step-3]:text-base 
          group-[.step-3]:font-Estedad-Bold'>
            سبد خرید
          </span>
        </Link>

      </div>
    </section>
  )
}

export default CartNavbar