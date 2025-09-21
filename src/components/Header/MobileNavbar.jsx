import icons from '@/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileSubMenu from './MobileSubMenu'

const MobileNavbar = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const { Close, House, Users2, Phone, FastFoodOutline, ArrowDown } = icons
  return (
    <div className='fixed bg-white z-50 top-0 bottom-0 min-w-58'>
      <div className='bg-[url(/images/navbar/topFrame.png)] h-28 bg-no-repeat bg-cover relative text-white'>
        <div className='relative z-20 flex justify-between px-3 h-full py-4'>
          <div className=''>
            <img src="/images/logo/white-logo.png" alt="" className='w-22' />
          </div>
          <Close className='text-2xl' />
        </div>
        <div className="inset-0 bg-black/60 absolute z-10"></div>
      </div>
      <div>
        <ul className='px-4'>
          <li className=' border-b border-gray-300'>
            <Link className='flex gap-2 items-center py-3 text-sm'>
              <House className='text-lg' />
              <span>صفحه اصلی</span>
            </Link>
          </li>
          <li className='border-b border-gray-300'>
            <div onClick={() => setIsSubMenuOpen(prev => !prev)} className='py-3 text-sm flex justify-between items-center'>
              <Link className='flex gap-2 items-center'>
                <FastFoodOutline className={`${isSubMenuOpen ? "" :""}text-lg`} />
                <span>منو</span>
              </Link>
              <ArrowDown className='text-lg' />
            </div>
            <MobileSubMenu isOpen={isSubMenuOpen}/>
          </li>
          <li className=' border-b border-gray-300'>
            <Link className='flex gap-2 items-center py-3 text-sm'>
              <Users2 className='text-lg' />
              <span>درباره ما</span>
            </Link>
          </li>
          <li className=' border-b border-gray-300'>
            <Link className='flex gap-2 items-center py-3 text-sm'>
              <Phone className='text-lg' />
              <span>تماس با ما</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileNavbar