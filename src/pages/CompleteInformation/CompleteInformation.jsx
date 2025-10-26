import TopCart from "../Cart/Components/TopCart"
import Address from "../Profile/pages/Address/Address"
import DeliveryMethod from "./components/DeliveryMethod"

const CompleteInformation = () => {
  return (
    <>
      <div className="container">
        <TopCart text="تکمیل اطلاعات"></TopCart>
        <DeliveryMethod />
        <Address />
      </div>
    </>
  )
}

export default CompleteInformation