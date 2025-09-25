import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'
import TopCart from './Components/TopCart'
import EmptyCart from './Components/EmptyCart'
import CartNavbar from './Components/CartNavbar'
import ProductsCartMobile from './Components/ProductsCartMobile'

const Cart = () => {
    return (
        <>
            <Header />
            <CartNavbar step={1}/>
            <TopCart />
            {/* <EmptyCart /> */}
            <ProductsCartMobile />
            <Footer />
        </>

    )
}

export default Cart