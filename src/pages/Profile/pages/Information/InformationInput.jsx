import React from 'react'

const InformationInput = ({ isDisabled, placeholder }) => {
    console.log(isDisabled)
    return (
        <div className={`border rounded-sm p-1.5 
            ${isDisabled ? "border-gray-300 text-gray-400 " : "text-gray-700 border-gray-600"}`}>
            <input disabled={isDisabled}
                type="text"
                placeholder={placeholder}
                className='border-none outline-0 w-full ' />
        </div>
    )
}

export default InformationInput