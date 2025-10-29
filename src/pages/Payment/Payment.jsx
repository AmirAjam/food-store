import Header from '@/components/Header/Header'
import React from 'react'
import CartNavbar from '../Cart/Components/CartNavbar'
import Footer from '@/components/Footer/Footer'
import TopCart from '../Cart/Components/TopCart'
import DiscountCode from './Components/DiscountCode'
import DeliveryMethod from '../CompleteInformation/components/DeliveryMethod'
import PaymentMethod from './Components/PaymentMethod'
import CartInformation from '../CompleteInformation/components/CartInformation'
import PaymentGateways from './Components/PaymentGateways/PaymentGateways'

const Payment = () => {
    return (
        <>
            <Header />
            <CartNavbar step={3} />
            <TopCart text="پرداخت" />
            <div className="container">
                <DiscountCode />
                <PaymentMethod />
                <PaymentGateways />
                <CartInformation />
            </div>
            <Footer />
        </>
    )
}

export default Payment