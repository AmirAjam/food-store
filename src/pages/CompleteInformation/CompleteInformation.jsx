import Header from "@/components/Header/Header"
import TopCart from "../Cart/Components/TopCart"
import Address from "../Profile/pages/Address/Address"
import DeliveryMethod from "./components/DeliveryMethod"
import Footer from "@/components/Footer/Footer"
import CartNavbar from "../Cart/Components/CartNavbar"
import CartInformation from "./components/CartInformation"
import { useState } from "react"

const CompleteInformation = () => {
  const[selectAddress,setSelectAddress] = useState(null)
  return (
    <>
      <Header />
      <CartNavbar step={2} />
      <TopCart text="تکمیل اطلاعات" />
      <div className="container">
        <DeliveryMethod />
        <Address selectAddress={selectAddress} setSelectAddress={setSelectAddress}/>
        <CartInformation />
      </div>
      <Footer />
    </>
  )
}

export default CompleteInformation