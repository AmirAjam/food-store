import React from 'react'
import { NavLink } from 'react-router-dom'

const ProfileNavbarItem = ({ item }) => {
    const Icon = item.icon
    return (
        <NavLink to={item.slug} end className={({ isActive }) =>
            `flex items-center gap-2 hover:text-primary-color duration-200 group/active 
             relative px-2 py-1 mt-3
          ${isActive ? "active" : ""}`}>

            <Icon className='text-xl group-[.active]/active:text-2xl 
            group-[.active]/active:text-primary-color' />

            <span className='text-xs md:text-sm group-[.active]/active:text-primary-color 
            group-[.active]/active:font-Estedad-Bold'>
                {item.title}
            </span>
            <span className='group-[.active]/active:absolute -right-px inset-y-0 w-0.5 
            bg-primary-color'></span>
        </NavLink>
    )
}

export default ProfileNavbarItem