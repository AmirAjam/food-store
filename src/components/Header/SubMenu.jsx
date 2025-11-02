import icons from '@/icons';
import { logout } from '@/store/authSlice';
import { cartLogout } from '@/store/cartSlice';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'

const SubMenu = ({ isOpen, list }) => {
    const { LogOut } = icons;
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
        dispatch(cartLogout());
    }
    return (
        <ul className={`bg-white z-30 w-42 shadow-black/90 shadow-lg top-12 rounded-sm left-5 md:left-auto
        ${isOpen ? "absolute" : "hidden"}`}>
            {list.map(item =>
                <li key={crypto.randomUUID()} className={`flex items-center gap-2 p-2 border-b border-gray-300 
                last:border-none hover:text-primary-color! text-[#414141] ${item.icon ? "text-xs" : "text-sm"}`}>
                    {item.icon &&
                        item.icon}
                    <NavLink to={!item.icon ? `/menu/${item.slug}` : `/${item.slug}`} className='size-full'>{item.title}</NavLink>
                </li>
            )}
            {list[0]?.icon &&
                <li className='flex items-center gap-2 p-2 border-b border-gray-300 
                last:border-none hover:ext-red-700! text-red-600 text-xs'>
                    <LogOut className='text-xl' />
                    <Link onClick={logoutHandler} className='size-full'>خروج از حساب</Link>
                </li>
            }
        </ul >
    )
}

export default SubMenu