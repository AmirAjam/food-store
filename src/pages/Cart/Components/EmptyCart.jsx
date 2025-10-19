import React from 'react'

const EmptyCart = ({text,children}) => {
  return (
    <section>
      <div className="container">
        <div className='border-2 border-gray-200 flex justify-center flex-col gap-5
        bg-[url(/images/cart/cart-mobile.png)] md:bg-[url(/images/cart/cart-desktop.png)] 
          bg-no-repeat bg-center h-75 md:h-110 rounded-lg'>
          <p className='text-sm md:text-xl font-Estedad-Medium text-gray-600 mt-20 text-center'>
            {text}
          </p>
          <div className='w-32 md:w-48 mx-auto bg-white text-sm'>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmptyCart