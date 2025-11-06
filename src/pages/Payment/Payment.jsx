import Header from '@/components/Header/Header'
import React, { useEffect, useState } from 'react'
import CartNavbar from '../Cart/Components/CartNavbar'
import Footer from '@/components/Footer/Footer'
import TopCart from '../Cart/Components/TopCart'
import DiscountCode from './Components/DiscountCode'
import DeliveryMethod from '../CompleteInformation/components/DeliveryMethod'
import PaymentMethod from './Components/PaymentMethod'
import CartInformation from '../CompleteInformation/components/CartInformation'
import PaymentGateways from './Components/PaymentGateways/PaymentGateways'
import ProductsCartMobile from '../Cart/Components/ProductsCart/ProductsCartMobile'
import { useDispatch, useSelector } from 'react-redux'
import { calAllOff } from '@/utils/utils'
import PaymentWarning from './Components/PaymentWarning'
import { Activity } from 'react'
import { useParams } from 'react-router-dom'
import { createOrder } from '@/store/orderSlice'

const Payment = () => {
    const [methodActive, setMethodActive] = useState(0)

    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.accessToken)

    const cart = useSelector(state => state.cart.cart)

    let productsDiscounts = 0
    cart.items.forEach(item => productsDiscounts += (calAllOff(item)));

    const param = useParams()
    const payOrder = () => {
        dispatch(createOrder({
            token,
            addressId: param.addressId,
            paymentMethod: methodActive === 0 ? "online" : "cod"}))
    }
    console.log("payOrder")

    useEffect(() => {
    },[methodActive])
    return (
        <>
            <Header />
            <CartNavbar step={3} />
            <TopCart text="پرداخت" />
            <div className="container flex justify-between">
                <div className='w-full md:w-8/12 lg:mt-3'>
                    <DiscountCode appliedCoupon={cart.appliedCoupon} />
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
                        text="نهایی کردن"
                        onClick={payOrder}
                        payment
                    />
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Payment