import React from 'react'

const BrancheItem = ({ branche }) => {
    return (
        <div className='flex border border-gray-300 rounded-lg mt-5 first:mt-0 overflow-hidden 
        items-center sm:h-32 sm:mt-0 md:block md:h-auto'>
            <img src={branche.mobileImage} alt="" className='h-full object-cover w-40 md:hidden' />
            <img src={branche.desktopImage} alt="" className='object-cover w-full md:block hidden h-42 lg:h-52' />
            <div className='text-center w-full'>
                <h4 className='text-sm md:text-base md:font-Estedad-Medium md:mt-3'>{branche.name}</h4>
                <p className='text-xs md:text-base mt-2 text-gray-700 md:mb-4'>{branche.address}</p>
            </div>
        </div>
    )
}

export default BrancheItem