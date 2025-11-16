import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React, { useEffect, useState } from 'react'
import TopCart from './Components/TopCart'
import EmptyCart from './Components/EmptyCart'
import CartNavbar from './Components/CartNavbar'
import ProductsCartMobile from './Components/ProductsCart/ProductsCartMobile'
import SecondaryButton from '@/components/Ui/Button/SecondaryButton'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getCart } from '@/store/cartSlice'
import ProductsCartDesktop from './Components/ProductsCart/ProductsCartDesktop'
import { calAllOff } from '@/utils/utils'
import icons from '@/icons'
import { AdminAlertDialog } from '../Admin/ui/AlertDialog'

const Cart = () => {
    const { Trash } = icons

    const [isOpenDialog, setIsOpenDialog] = useState(false)


    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart)
    const token = useSelector((state) => state.auth.accessToken)


    let productsDiscounts = 0
    cart?.items?.forEach(item => productsDiscounts += (calAllOff(item)));

    const clearCartHandler = () => {
        dispatch(clearCart(token))
    }

    useEffect(() => {
        dispatch(getCart({ token }))
    }, [])

    return (
        <>
            <Header />
            <CartNavbar step={1} />

            <TopCart text="سبد خرید">
                <Trash onClick={() => setIsOpenDialog(true)} className='text-xl' />
            </TopCart>

            {!cart?.items?.length ?
                <div className='mt-5 md:mt-8'>
                    <EmptyCart text="شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!">
                        <SecondaryButton>
                            <Link to='/' className=''>منوی رستوران</Link>
                        </SecondaryButton>
                    </EmptyCart>
                </div>
                :
                <>
                    <div className='lg:hidden'>
                        <ProductsCartMobile
                            cart={cart}
                            productsDiscounts={productsDiscounts}
                            text='تکمیل اطلاعات'
                            settlement />
                    </div>
                    <ProductsCartDesktop cart={cart} productsDiscounts={productsDiscounts} />
                </>}

            <AdminAlertDialog
                title="همه محصولات سبد خرید شما حذف شود؟"
                isOpenDialog={isOpenDialog}
                setIsOpenDialog={setIsOpenDialog}
                confirmAlert={clearCartHandler} />

            <Footer />
        </>

    )
}

export default Cart