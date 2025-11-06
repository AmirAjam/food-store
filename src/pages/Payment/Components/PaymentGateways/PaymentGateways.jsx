import React, { useState } from 'react'
import PaymentGateway from './PaymentGateway'

const PaymentGateways = () => {
    const [activePayment, setActivePayment] = useState(1)

    const paymentGateways = [
        { id: 1, src: "/images/PaymentGateway/saman.png" },
        { id: 2, src: "/images/PaymentGateway/melat.png" },
        { id: 3, src: "/images/PaymentGateway/parsian.png" },
    ]

    return (
        <section className='border-2 border-gray-300 rounded-lg px-1.5 py-5 text-sm'>
            <div className="container">
                <div className='flex justify-between md:justify-center md:gap-10'>
                    {paymentGateways.map(item =>
                        <PaymentGateway key={item.id}
                            dtails={item}
                            activePayment={activePayment}
                            setActivePayment={setActivePayment} />)}
                </div>
                <p className='mt-5 text-xs text-gray-500 text-center'>
                    پرداخت از طریق کلیه کارت‌های عضو شتاب امکان‌پذیر است.‌
                </p>
                <p className='mt-2 text-xs text-gray-500 text-center'>
                    (لطفا قبل از پرداخت فیلترشکن خود را خاموش کنید.)
                </p>
            </div>
        </section>
    )
}

export default PaymentGateways