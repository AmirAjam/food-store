import React from 'react'

const InformationInput = ({ isDisabled, placeholder , ...props }) => {
    return (
        <div className={`border rounded-sm p-1.5 
            ${isDisabled ? "border-gray-300 text-gray-400 " : "text-gray-700 border-gray-600"}`}>
            <input disabled={isDisabled}
                type="text"
                placeholder={placeholder}
                className='border-none outline-0 w-full text-sm' 
                {...props}/>
        </div>
    )
}

export default InformationInput