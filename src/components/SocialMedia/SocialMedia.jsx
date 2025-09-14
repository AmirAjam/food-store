import React from 'react'
import icons from '@/icons'
import { Link } from 'react-router-dom'

const SocialMedia = () => {
    const { Twitter, Instagram, Telegram } = icons
    return (
        <div className='flex mt-5 gap-3'>
            <Link>
                <Twitter className='text-2xl' />
            </Link>
            <Link>
                <Instagram className='text-2xl' />
            </Link>
            <Link>
                <Telegram className='text-2xl' />
            </Link>            
        </div>
    )
}

export default SocialMedia