import Header from "@/components/Header/Header"
import TopCart from "../Cart/Components/TopCart"
import Address from "../Profile/pages/Address/Address"
import DeliveryMethod from "./components/DeliveryMethod"
import Footer from "@/components/Footer/Footer"
import CartNavbar from "../Cart/Components/CartNavbar"
import CartInformation from "./components/CartInformation"
import { useState } from "react"
import ProductsCartMobile from "../Cart/Components/ProductsCart/ProductsCartMobile"
import icons from '@/icons'
import { calAllOff } from '@/utils/utils'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CompleteInformation = () => {
  const { Trash } = icons

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart.cart)
  const token = useSelector((state) => state.auth.accessToken)


  let productsDiscounts = 0
  cart.items.forEach(item => productsDiscounts += (calAllOff(item)));
  const [selectAddress, setSelectAddress] = useState(null)
  return (
    <>
      <Header />
      <CartNavbar step={2} />
      <TopCart text="تکمیل اطلاعات" />
      <div className="container flex justify-between gap-10">

        <div className="w-full lg:w-8/12 flex flex-col lg:gap-5">
          <DeliveryMethod />
          <Address selectAddress={selectAddress} setSelectAddress={setSelectAddress} />
          <CartInformation />
        </div>

        <div className="w-4/12 hidden lg:block">
          <ProductsCartMobile
            cart={cart}
            productsDiscounts={productsDiscounts}
            text="ثبت سفارش"
            Settlement
          />
        </div>

      </div>
      <Footer />
    </>
  )
}

export default CompleteInformation