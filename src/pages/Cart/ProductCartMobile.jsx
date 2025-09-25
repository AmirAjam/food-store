import ProductCounter from '@/components/Products/ProductCounter'
import React, { useState } from 'react'

const ProductCartMobile = () => {
    const [count, setCount] = useState(1)
    return (
        <div className='flex items-center justify-between bg-gray-200 p-2 
        first:rounded-t-lg last:rounded-b-lg '>
            <div className='text-sm'>
                <p>پاستا سبزیجات</p>
                <p className='text-xxs mt-1'>۱۴۰٬۰۰۰ تومان</p>
            </div>
            <div>
                <ProductCounter count={count} setCount={setCount} />
            </div>
        </div>
    )
}

export default ProductCartMobile