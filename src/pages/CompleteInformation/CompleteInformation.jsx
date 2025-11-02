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
  const [selectAddress, setSelectAddress] = useState(null)

  const cart = useSelector(state => state.cart.cart)

  let productsDiscounts = 0
  cart.items.forEach(item => productsDiscounts += (calAllOff(item)));

  return (
    <>
      <Header />
      <CartNavbar step={2} />
      <TopCart text="تکمیل اطلاعات" />
      <div className="container flex justify-between gap-10">

        <div className="w-full md:w-8/12 flex flex-col md:gap-5">
          <DeliveryMethod />
          <Address selectAddress={selectAddress} setSelectAddress={setSelectAddress} />
          <CartInformation selectAddress={selectAddress}/>
        </div>

        <div className="w-4/12 hidden md:block">
          <ProductsCartMobile
            cart={cart}
            productsDiscounts={productsDiscounts}
            text="ثبت سفارش"
            addressId={selectAddress}
            settlement
          />
        </div>

      </div>
      <Footer />
    </>
  )
}

export default CompleteInformation