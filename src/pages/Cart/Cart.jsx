import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'
import TopCart from './Components/TopCart'
import EmptyCart from './Components/EmptyCart'
import CartNavbar from './Components/CartNavbar'
import ProductsCartMobile from './Components/ProductsCartMobile'
import SecondaryButton from '@/components/Ui/Button/SecondaryButton'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <>
            <Header />
            <CartNavbar step={1} />
            <TopCart />
            <div className='mt-5 md:mt-8'>
                <EmptyCart text="شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!">
                    <SecondaryButton>
                        <Link className=''>منوی رستوران</Link>
                    </SecondaryButton>
                </EmptyCart>
            </div>
            <ProductsCartMobile />
            <Footer />
        </>

    )
}

export default Cart