import React from 'react'

const AdminInput = ({ type = "text", placeholder,label ,...props }, ref) => {
    return (
        <div className={`${label ? "mt-8" : ""} first:mt-0`}>
            <label htmlFor="">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                ref={ref}
                {...props}
                className='w-full rounded-lg border border-gray-300 p-2 mt-2'
            />
        </div>
    )
}

export default AdminInput