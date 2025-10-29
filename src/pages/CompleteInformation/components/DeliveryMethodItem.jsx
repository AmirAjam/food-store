import React from 'react'

const DeliveryMethodItem = ({ children, isMethodActive, methodActive, setMethodActive,text,description }) => {
    const handleClick = () => {
        if (methodActive === 0) {
            setMethodActive(1)
        }
        else {
            setMethodActive(0)
        }
    }
    return (
        <div className='mt-3 flex gap-1 md:gap-3 items-center md:mt-0'>
            <div onClick={handleClick} className='size-3.5 border-2 border-gray-500 
            rounded-full flex justify-center items-center md:p-[3px] md:size-5'>
                <span className={`size-3/5 md:size-4/5 block rounded-full 
                    ${isMethodActive ? "bg-primary-color" : ""}`}></span>
            </div>
            <div>
                <p className='text-xs md:text-sm text-gray-500'>{text}</p>
                <p className='text-[10px] text-gray-500 hidden md:block mt-1'>{description}</p>
            </div>
            {children}
        </div>
    )
}

export default DeliveryMethodItem