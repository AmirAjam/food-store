import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MobileSubMenu = ({ isOpen }) => {
    const categories = useSelector((state) => state.categories.categories)
    
    return (
        <ul className={`mb-4 bg-green-100 px-3 rounded-lg text-gray-700 
        ${isOpen ? "block" : "hidden"}`}>
            {categories.map(category =>
                <li className='text-sm py-1'>
                    <Link to={`menu/${category.slug}`}>{category.title}</Link>
                </li>
            )}
        </ul>
    )
}

export default MobileSubMenu