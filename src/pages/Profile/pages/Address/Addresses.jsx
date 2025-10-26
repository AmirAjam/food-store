import React from 'react'
import AddressItem from './AddressItem'
import PrimaryButton from '@/components/Ui/Button/PrimaryButton'
import SecondaryButton from '@/components/Ui/Button/SecondaryButton'

const Addresses = ({ addresses, setIsOpenAddress }) => {
  return (
    <div className='mt-5 h-full md:mt-0 border-2 border-gray-300 rounded-lg py-3 md:py-3.5'>
      <div className='pb-4 px-3 border-b border-gray-300 hidden lg:flex items-center justify-between'>
        <h2 className='font-Estedad-Bold'>آدرس‌ها</h2>
        <div className='text-xs w-32 lg:block hidden'>
          <SecondaryButton onClick={() => setIsOpenAddress(true)} text="افزودن آدرس" />
        </div>
      </div>

      <div className='px-2'>
        <h2 className='font-Estedad-Bold lg:hidden px-3'>آدرس‌ها</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 max-h-62 md:max-h-62
      overflow-y-auto mt-4 lg:px-4'>
          {addresses.map(address => <AddressItem key={address._id} addressDetails={address} />)}
        </div>
      </div>

      <div className='text-xs w-32 mx-auto mt-5 lg:hidden'>
        <SecondaryButton onClick={() => setIsOpenAddress(true)} text="افزودن آدرس" />
      </div>
    </div>
  )
}

export default Addresses