import icons from '@/icons'
import React from 'react'

const AddressItem = ({ addressDetails }) => {
    const { Edit, Trash } = icons
    console.log(addressDetails)
    return (
        <div className='bg-gray-200 p-3 rounded-lg mt-5 first:mt-0'>
            <div className='flex  justify-between'>
                <p className='text-xs w-9/12'>{addressDetails.addressLine}</p>
                <div className='flex text-xl justify-between w-1/6 text-gray-600'>
                    <Edit />
                    <Trash />
                </div>
            </div>
            <div className='text-xs mt-3 text-gray-500 flex justify-between'>
                <p>{addressDetails.province}</p>
                <p>{addressDetails.city}</p>
                <p>{addressDetails.fullName}</p>
            </div>
            <div className='text-xs mt-4 text-gray-500 flex justify-between'>
                <p>تلفن همراه: {addressDetails.phone}</p>
                <p>کد پستی: {addressDetails.postalCode}</p>
            </div>
        </div>
    )
}

export default AddressItem