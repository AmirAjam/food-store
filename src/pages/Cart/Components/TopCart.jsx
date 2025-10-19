import icons from '@/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const TopCart = () => {
  const { ArrowDown, Trash } = icons
  const navigate = useNavigate()

  return (
    <section className='mt-8 lg:hidden'>
      <div className="container flex items-center justify-between">
        <ArrowDown onClick={() => navigate(-1)} className='text-2xl -rotate-90' />
        <h2 className='font-Estedad-Bold'>سبد خرید</h2>
        <Trash className='text-xl' />
      </div>
    </section>
  )
}

export default TopCart