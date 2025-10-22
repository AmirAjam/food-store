import React from 'react'
import AddressItem from './AddressItem'
import PrimaryButton from '@/components/Ui/Button/PrimaryButton'
import SecondaryButton from '@/components/Ui/Button/SecondaryButton'

const Addresses = ({addresses,setIsOpenAddress}) => {
  return (
    <div  className='mt-5 md:mt-0 border-2 border-gray-300 rounded-lg px-3 py-5'>
        {addresses.map(address => <AddressItem key={address._id} addressDetails={address} />)}

        <div className='text-xs w-32 mx-auto mt-5'>
            <SecondaryButton onClick={() => setIsOpenAddress(true)} text="افزودن آدرس"/> 
        </div>
    </div>
  )
}

export default Addresses