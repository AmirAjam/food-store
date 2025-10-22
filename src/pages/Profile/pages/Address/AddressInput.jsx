import { forwardRef } from "react"

const AddressInput = forwardRef(({ placeholder, label, type = "text", ...props }, ref) => {
  return (
    <div className='border border-gray-300 focus-within:border-gray-400 py-1.5 px-2 rounded-sm 
    text-sm '>
      <input type="text"
        placeholder={placeholder}
        className='outline-0 w-full'
        ref={ref}
        {...props} />
    </div>
  )
})

export default AddressInput