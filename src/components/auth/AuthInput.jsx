import React from 'react'

const AuthInput = ({ placeholder, label }) => {
    return (
        <div className='relative mt-5'>
            <label htmlFor="2" className='absolute bottom-full 
            -top-3.5 text-sm right-5 bg-white z-20 px-5 py-3 flex justify-center items-center text-gray-500'>
                {label}
            </label>
            <input type="text" placeholder={placeholder} className='w-full rounded-lg border 
        border-gray-500 p-3'/>
        </div>
    )
}

export default AuthInput