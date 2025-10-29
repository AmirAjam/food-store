import icons from '@/icons'
import DeliveryMethod from '@/pages/CompleteInformation/components/DeliveryMethod'
import React from 'react'

const PaymentMethod = () => {
    const {Wallet} = icons
    return (
        <section className='mt-8 border-2 border-gray-300 rounded-lg p-3 text-sm'>
            <div className="md:flex items-center justify-between">
                <div className='flex items-center gap-2 border-b-2 border-gray-300 pb-4 
                    md:border-0 md:pb-0'>
                    <Wallet className='text-lg mt-1' />
                    <h2 className='font-Estedad-Medium'>روش پرداخت</h2>
                </div>
                <div>
                    
                </div>
            </div>
        </section>
    )
}

export default PaymentMethod