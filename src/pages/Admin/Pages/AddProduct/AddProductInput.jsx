import React, { memo } from 'react'

const AddProductInput = memo(({ placeholder, ...props }, ref) => {
    return (
        <input placeholder={placeholder}
            ref={ref}
            {...props}
            className='py-2 px-3 border border-gray-400 rounded-lg w-full' />
    )
})

export default AddProductInput