import ProductCounter from '@/components/Products/ProductCounter'
import icons from '@/icons'
import React, { useState } from 'react'

const ProductCart = ({ cartItem }) => {
    const { Trash } = icons
    const productDetails = cartItem.product

    const [count, setCount] = useState(cartItem.quantity)

    console.log(productDetails.quantity)
    return (
        <div className='rounded-lg overflow-hidden flex gap-5 border-2 border-gray-300 mt-5 
        first:mt-0'>
            <div>
                <img src={`http://127.0.0.1:369/public/${productDetails.gallery[0]}`}
                    alt="" className='w-52 h-full object-cover' />
            </div>
            <div className='p-4 w-full'>
                <div className='flex justify-between items-center w-fulls'>
                    <h2 className='font-Estedad-Bold text-lg'>{productDetails.title}</h2>
                    <Trash className='text-xl cursor-pointer hover:text-red-500 duration-300' />
                </div>
                <div className='mt-4 flex justify-between items-center'>
                    <p className='text-sm w-2/3 line-clamp-2'>
                        {productDetails.description}
                    </p>
                    {productDetails.quantity > 0 &&
                        <div className='text-sm flex gap-2 items-center'>
                            <p className='text-gray-400 line-through pt-0.5'>
                                {productDetails.price.toLocaleString()}
                            </p>
                            <span className='block bg-red-200 text-red-500 py-0.5 pt-1 px-2
                            rounded-sm text-center text-xs'>%{productDetails.quantity}</span>
                        </div>
                    }
                </div>
                <div className='mt-4 flex items-center justify-between'>
                    <ProductCounter productDetails={productDetails}
                        count={count}
                        setCount={setCount} />
                    <p className='font-Estedad-Medium'>{productDetails.price.toLocaleString()} تومان</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCart