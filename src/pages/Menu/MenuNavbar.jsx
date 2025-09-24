import Input from '@/components/Ui/Input/Input'
import icons from '@/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const MenuNavbar = ({categories}) => {
    const { Search } = icons
    return (
        <nav className='bg-gray-200 px-[1rem] text-sm md:text-base text-gray-600'>
            <div className="container md:flex justify-between py-2">
                <ul className='flex gap-5 scroll-auto overflow-scroll [scrollbar-width:none] py-[2px]'>
                    {categories.map(category =>
                        <li>
                            <NavLink to={`/menu/${category.slug}`} className={({ isActive }) =>
                                `text-nowrap  block h-full relative py-2 lg:py-4Aa123456@ ${isActive ?
                                    'px-2 after:absolute after:inset-0 after:h-[2px] after:bg-primary-color after:top-full rounded-full text-primary-color font-Estedad-Bold'
                                    : ''}`
                            }>
                                {category.title}
                            </NavLink>
                        </li>
                    )}
                </ul>
                <div className="hidden md:flex justify-between w-xs border border-gray-400 items-center py-0 
                text-sm px-4 rounded-lg ">
                    <input type="text" placeholder="جستجو" className="w-full border-none outline-none" />
                    <Search className='text-xl cursor-pointer' />
                </div>
            </div>
        </nav>
    )
}

export default MenuNavbar