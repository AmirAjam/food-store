import React from 'react'
import { Link } from 'react-router-dom'

const FooterList = ({ list, title }) => {
    return (
        <div>
            <h3 className='font-Estedad-Bold md:text-xl'>{title}</h3>
            <ul className='mt-4 text-sm md:text-base'>
                {list.map(item =>
                    <li key={item.id} className='mt-3 lg:mt-5'>
                        <Link>{item.text}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default FooterList