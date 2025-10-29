import Header from '@/components/Header/Header'
import React from 'react'
import CartNavbar from '../Cart/Components/CartNavbar'
import Footer from '@/components/Footer/Footer'
import TopCart from '../Cart/Components/TopCart'
import DiscountCode from './Components/DiscountCode'

const Payment = () => {
    return (
        <>
            <Header />
            <CartNavbar step={3} />
            <TopCart text="پرداخت" />
            <div className="container">
                <DiscountCode />
            </div>
            <Footer />
        </>
    )
}

export default Payment