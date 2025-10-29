import React from 'react'

const PaymentGateway = ({ dtails, activePayment, setActivePayment }) => {
    return (
        <div onClick={() => setActivePayment(dtails.id)}
            className={`border-2 border-gray-300 rounded-lg w-1/4 max-w-25
            ${activePayment === dtails.id ? "border-primary-color shadow-primary-color/30 shadow-lg" : ""}`}>
            <img src={dtails.src} alt="" className='rounded-lg size-full' />
        </div>
    )
}


export default PaymentGateway