import React from 'react'
import { Link } from 'react-router-dom'

const FooterList = ({ list, title }) => {
    return (
        <div>
            <h3 className='font-Estedad-Bold'>{title}</h3>
            <ul className='mt-4 text-sm'>
                {list.map(item =>
                    <li key={item.id} className='mt-3'>
                        <Link>{item.text}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default FooterList