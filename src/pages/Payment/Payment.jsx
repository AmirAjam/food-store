import Header from '@/components/Header/Header'
import React, { useState } from 'react'
import CartNavbar from '../Cart/Components/CartNavbar'
import Footer from '@/components/Footer/Footer'
import TopCart from '../Cart/Components/TopCart'
import DiscountCode from './Components/DiscountCode'
import DeliveryMethod from '../CompleteInformation/components/DeliveryMethod'
import PaymentMethod from './Components/PaymentMethod'
import CartInformation from '../CompleteInformation/components/CartInformation'
import PaymentGateways from './Components/PaymentGateways/PaymentGateways'
import ProductsCartMobile from '../Cart/Components/ProductsCart/ProductsCartMobile'
import { useSelector } from 'react-redux'
import { calAllOff } from '@/utils/utils'
import PaymentWarning from './Components/PaymentWarning'
import { Activity } from 'react'

const Payment = () => {
    const [methodActive, setMethodActive] = useState(0)

    const cart = useSelector(state => state.cart.cart)

    let productsDiscounts = 0
    cart.items.forEach(item => productsDiscounts += (calAllOff(item)));
    return (
        <>
            <Header />
            <CartNavbar step={3} />
            <TopCart text="پرداخت" />
            <div className="container flex justify-between">
                <div className='w-full md:w-8/12 lg:mt-3'>
                    <DiscountCode />
                    <PaymentMethod
                        methodActive={methodActive}
                        setMethodActive={setMethodActive} />
                    {methodActive === 0 ?
                        <PaymentGateways />
                        :
                        <PaymentWarning />
                    }
                    <CartInformation />
                </div>
                <div className="w-4/12 hidden md:block">
                    <ProductsCartMobile
                        cart={cart}
                        productsDiscounts={productsDiscounts}
                        text="ثبت سفارش"
                        settlement
                    />
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Payment