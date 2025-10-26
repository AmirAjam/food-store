import icons from '@/icons'
import { removeAddress } from '@/store/addressSlice'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CreateAddrees from './CreateAddrees'
import { toast, Toaster } from 'sonner'

const AddressItem = ({ addressDetails }) => {
    const { Edit, Trash } = icons

    const [isOpenAddress, setIsOpenAddress] = useState(false)

    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.accessToken)
    const addresses = useSelector((state) => state.address.addresses)

    const removeAddressHandler = () => {
        dispatch(removeAddress({ token, id: addressDetails._id }))
        toast.success("با موفقیت حذف شد.")
    }

    const editHandler = () => {
        setIsOpenAddress(true)
    }
    return (
        <div className='px-2'>
            <div className='bg-gray-100 border-2 border-gray-300 p-2 rounded-lg mt-5 first:mt-0'>
                <div className='flex  justify-between'>
                    <p className='text-xs w-9/12'>{addressDetails.addressLine}</p>
                    <div className='flex justify-end text-xl gap-3 w-1/6 text-gray-600'>
                        <Edit onClick={editHandler}/>
                        <Trash onClick={removeAddressHandler} />
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

            <CreateAddrees
                isOpen={isOpenAddress}
                setIsOpen={setIsOpenAddress}
                addressDetails={addressDetails} />

            <Toaster richColors position="top-left" className="font-Estedad-Medium!" />
        </div>
    )
}

export default AddressItem