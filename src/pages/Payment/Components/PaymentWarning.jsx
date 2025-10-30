import icons from '@/icons'
import React from 'react'

const PaymentWarning = () => {
    const { Warning } = icons
    return (
        <section className='mt-5 border-2 border-gray-300 rounded-lg p-3 text-sm'>
            <div className="container lg:flex items-center justify-between">
                <div className='flex items-center gap-2 border-b-2 border-gray-300 pb-4 
                    lg:border-0 lg:pb-0 lg:w-1/3'>
                    <Warning className='text-lg lg:text-xl mt-1 lg:mt-0' />
                    <h2 className='font-Estedad-Medium'>قابل توجه</h2>
                </div>
                <div className='mt-2'>
                    <p className='text-gray-500 text-xs lg:text-sm text-justify px-1 leading-5'>
                        هزینه سفارش شما در حین تحویل کالا دریافت خواهد شد. لطفا قبل از تحویل کالا کارت بانکی یا پول نقد همراه خود داشته باشید و از درخواست برای پرداخت در زمان بعدی یا نسیه خودداری فرمایید. با تشکر از همراهی شما.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default PaymentWarning