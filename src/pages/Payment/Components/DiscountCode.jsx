import PrimaryButton from '@/components/Ui/Button/PrimaryButton'
import icons from '@/icons'
import React from 'react'

const DiscountCode = () => {
    const { Discount } = icons
    return (
        <section className='mt-5 border-2 border-gray-300 rounded-lg py-5 px-1.5'>
            <div className="container lg:flex lg:justify-between">
                <div className='flex gap-2 items-center border-b-2 lg:border-0 pb-4 lg:pb-0 border-gray-300'>
                    <Discount className='text-xl lg:text-2xl' />
                    <p className='text-sm lg:text-base'>ثبت کد تخفیف</p>
                </div>
                <div className='mt-5 lg:mt-0 flex items-center justify-between lg:w-7/12'>
                    <input
                        type="text"
                        placeholder='کد تخفیف'
                        className=' border border-gray-300 py-1.5 lg:py-2 px-3 w-4/6 rounded-lg text-sm' />
                    <div className='w-2/8 text-xs lg:text-sm'>
                        <PrimaryButton text="ثبت کد" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DiscountCode