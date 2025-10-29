import Header from "@/components/Header/Header"
import TopCart from "../Cart/Components/TopCart"
import Address from "../Profile/pages/Address/Address"
import DeliveryMethod from "./components/DeliveryMethod"
import Footer from "@/components/Footer/Footer"
import CartNavbar from "../Cart/Components/CartNavbar"
import CartInformation from "./components/CartInformation"
import { useState } from "react"
import CartSettlement from "@/components/Cart/CartSettlement"

const CompleteInformation = () => {
  const [selectAddress, setSelectAddress] = useState(null)
  return (
    <>
      <Header />
      <CartNavbar step={2} />
      <TopCart text="تکمیل اطلاعات" />
      <div className="container flex justify-between">

        <div className="w-full lg:w-8/12 flex flex-col lg:gap-5">
          <DeliveryMethod />
          <Address selectAddress={selectAddress} setSelectAddress={setSelectAddress} />
          <CartInformation />
        </div>

        <div className="w-3/12">
            <CartSettlement />
        </div>

      </div>
      <Footer />
    </>
  )
}

export default CompleteInformation