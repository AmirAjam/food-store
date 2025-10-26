import Header from "@/components/Header/Header"
import TopCart from "../Cart/Components/TopCart"
import Address from "../Profile/pages/Address/Address"
import DeliveryMethod from "./components/DeliveryMethod"
import Footer from "@/components/Footer/Footer"
import CartNavbar from "../Cart/Components/CartNavbar"

const CompleteInformation = () => {
  return (
    <>
      <Header />
      <CartNavbar step={2} />
      <div className="container">
        <TopCart text="تکمیل اطلاعات"></TopCart>
        <DeliveryMethod />
        <Address />
      </div>
      <Footer />
    </>
  )
}

export default CompleteInformation