import React from 'react'

const AddressInput = ({ placeHolder }) => {
  return (
    <div className='border border-gray-300 focus-within:border-gray-400 py-1.5 px-2 rounded-sm 
    text-sm '>
      <input type="text" placeholder={placeHolder}
        className='outline-0 w-full' />
    </div>
  )
}

export default AddressInput