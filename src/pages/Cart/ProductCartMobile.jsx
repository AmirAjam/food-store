import ProductCounter from '@/components/Products/ProductCounter'
import { calFinalPrice } from '@/utils/utils'
import React, { useState } from 'react'

const ProductCartMobile = ({ cartItem, index }) => {
    const [count, setCount] = useState(cartItem.quantity)
    console.log(cartItem)
    return (
        <div className={`flex items-center justify-between p-2 py-3 first:rounded-t-lg last:rounded-b-lg 
        ${index % 2 === 0 ? "bg-gray-200/50" : "bg-gray-200"}`}>
            <div className='text-sm'>
                <p>{cartItem.product.title}</p>
                <p className='text-xxs mt-1'>
                    {calFinalPrice(cartItem.product.price, cartItem.product.quantity).toLocaleString()} تومان
                </p>
            </div>
            <div>
                <ProductCounter 
                count={count} 
                setCount={setCount}
                productDetails={cartItem.product} />
            </div>
        </div>
    )
}

export default ProductCartMobile