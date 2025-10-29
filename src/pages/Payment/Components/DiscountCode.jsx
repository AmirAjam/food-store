import PrimaryButton from '@/components/Ui/Button/PrimaryButton'
import icons from '@/icons'
import React from 'react'

const DiscountCode = () => {
    const { Discount } = icons
    return (
        <section className='mt-8 border-2 border-gray-300 rounded-lg p-3'>
            <div className='flex gap-2 items-center border-b-2 pb-4 border-gray-300'>
                <Discount className='text-xl' />
                <p className='text-sm'>ثبت کد تخفیف</p>
            </div>
            <div className='mt-5 flex items-center justify-between'>
                <input
                    type="text"
                    placeholder='کد تخفیف'
                    className=' border border-gray-300 py-1.5 px-3 w-4/6 rounded-lg text-sm' />
                <div className='w-2/8 text-xs'>
                    <PrimaryButton text="ثبت کد" />
                </div>
            </div>
        </section>
    )
}

export default DiscountCode