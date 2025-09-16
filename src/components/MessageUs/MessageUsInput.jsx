import React from 'react'

const MessageUsInput = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className='border border-gray-400 text-sm p-2 rounded-sm w-64' />
  )
}

export default MessageUsInput