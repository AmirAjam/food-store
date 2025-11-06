import icons from '@/icons'
import DeliveryMethod from '@/pages/CompleteInformation/components/DeliveryMethod'
import DeliveryMethodItem from '@/pages/CompleteInformation/components/DeliveryMethodItem'
import React, { useState } from 'react'

const PaymentMethod = ({methodActive, setMethodActive}) => {
    const { Wallet,Card,CardOff } = icons
    return (
        <section className='my-8 border-2 border-gray-300 rounded-lg p-3 text-sm'>
            <div className="container md:flex items-center justify-between">
                <div className='flex items-center gap-2 border-b-2 border-gray-300 pb-4 
                    md:border-0 md:pb-0'>
                    <Wallet className='text-lg mt-1' />
                    <h2 className='font-Estedad-Medium'>روش پرداخت</h2>
                </div>
                <div className='md:flex gap-20'>
                    <DeliveryMethodItem
                        isMethodActive={methodActive === 0}
                        methodActive={methodActive}
                        setMethodActive={setMethodActive}
                        text="پرداخت اینترنتی"
                        description="در درگاه اینترتی در لحظه پرداخت شود."
                        className='mt-3 flex gap-1 items-center'>
                        <Card className='md:text-xl' />
                    </DeliveryMethodItem>
                    <DeliveryMethodItem
                        isMethodActive={methodActive === 1}
                        methodActive={methodActive}
                        setMethodActive={setMethodActive}
                        text="پرداخت در محل"
                        description="زمان تحویل پرداخت شود."
                        className='mt-3 flex gap-1 items-center'>
                        <CardOff className='text-lg md:text-xl' />
                    </DeliveryMethodItem>
                </div>
            </div>
        </section>
    )
}

export default PaymentMethod