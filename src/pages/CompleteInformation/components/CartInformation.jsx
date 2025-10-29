import PrimaryButton from '@/components/Ui/Button/PrimaryButton'
import { getCart } from '@/store/cartSlice'
import { calAllOff } from '@/utils/utils'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CartInformation = () => {

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart.cart)
    const token = useSelector((state) => state.auth.accessToken)

    let productsDiscounts = 0
    cart.items.forEach(item => productsDiscounts += (calAllOff(item)));

    useEffect(() => {
        dispatch(getCart({ token }))
    }, [])

    return (
        <section className='mt-8 border-2 border-gray-300 rounded-lg px-1.5 py-5 text-sm lg:hidden'>
            <div className="container">
                <div className='flex justify-between pb-5 border-b-2 border-gray-300'>
                    <p>تخفیف محصولات</p>
                    <p className='text-gray-500'>{productsDiscounts.toLocaleString()} تومان</p>
                </div>
                <div className='flex justify-between py-5 '>
                    <p>مبلغ قابل پرداخت</p>
                    <p className='text-primary-color font-Estedad-Bold'>
                        {cart.finalPrice?.toLocaleString()} تومان
                    </p>
                </div>
                <div className='block text-xs sm:text-base'>
                    <PrimaryButton text="ثبت سفارش"/>
                </div>
            </div>
        </section>
    )
}

export default CartInformation