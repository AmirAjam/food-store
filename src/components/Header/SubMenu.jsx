import icons from '@/icons';
import React from 'react'
import { Link } from 'react-router-dom'

const SubMenu = ({ isOpen, list }) => {
    console.log("list => ", list)
    const { LogOut } = icons;
    return (
        <ul className={`bg-white z-20 w-42 shadow-black/90 shadow-lg top-12 rounded-sm 
        ${isOpen ? "absolute" : "hidden"}`}>
            {list.map(item =>
                <li key={item._id} className={`flex items-center gap-2 p-2 border-b border-gray-300 
                last:border-none hover:text-primary-color! text-[#414141] ${item.icon ? "text-xs" : "text-sm"}`}>
                    {item.icon &&
                        item.icon}
                    <Link className='size-full'>{item.title}</Link>
                </li>
            )}
            {list[0]?.icon &&
                <li className='flex items-center gap-2 p-2 border-b border-gray-300 
                last:border-none hover:text-primary-color! text-[#414141] text-xs'>
                    <LogOut className='text-xl' />
                    <Link className='size-full'>خروج از حساب</Link>
                </li>
            }
        </ul >
    )
}

export default SubMenu