import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React, { useEffect } from 'react'
import TopCart from './Components/TopCart'
import EmptyCart from './Components/EmptyCart'
import CartNavbar from './Components/CartNavbar'
import ProductsCartMobile from './Components/ProductsCartMobile'
import SecondaryButton from '@/components/Ui/Button/SecondaryButton'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '@/store/cartSlice'

const Cart = () => {

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart.cart)
    const token = useSelector((state) => state.auth.accessToken)

    useEffect(() => {
        dispatch(getCart({ token }))
    }, [])

    return (
        <>
            <Header />
            <CartNavbar step={1} />
            <TopCart />
            {!cart.length ?
                <div className='mt-5 md:mt-8'>
                    <EmptyCart text="شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!">
                        <SecondaryButton>
                            <Link className=''>منوی رستوران</Link>
                        </SecondaryButton>
                    </EmptyCart>
                </div> 
                :
                <>
                    <ProductsCartMobile/>
                </>}

            <Footer />
        </>

    )
}

export default Cart