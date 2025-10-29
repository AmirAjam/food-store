import React from 'react'

const DeliveryMethodItem = ({ children, isMethodActive, methodActive ,setMethodActive }) => {
    const handleClick = () => {
        if(methodActive === 0){
            setMethodActive(1)
        }
        else{
            setMethodActive(0)
        }
    }
    return (
        <div className='mt-3 flex gap-1 items-center'>
            <div onClick={handleClick} className='size-4 border-2 border-gray-500 rounded-full p-[2px]'>
                <span className={`size-full block rounded-full 
                    ${isMethodActive ? "bg-primary-color" : ""}`}></span>
            </div>
            <span className='text-xs text-gray-500'>تحویل حضوری</span>
            {children}
        </div>
    )
}

export default DeliveryMethodItem