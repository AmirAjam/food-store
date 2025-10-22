import React from 'react'

const AddressInput = ({placeHolder}) => {
  return (
    <div className='border border-gray-300 py-1.5 px-2 rounded-sm'>
        <input type="text" placeholder={placeHolder}
        className='outline-0 w-full'/>
    </div>
  )
}

export default AddressInput