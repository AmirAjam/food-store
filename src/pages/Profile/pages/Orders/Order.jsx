import icons from "@/icons"
import { changeDateFormat } from "@/utils/utils"
import OrderProgress from "./OrderProgress/OrderProgress"
import OrderProduct from "./OrderProduct"
import PrimaryButton from "@/components/Ui/Button/PrimaryButton"

const Order = ({ orderDetails }) => {
    const { Calendar, Location } = icons
    console.log(orderDetails)
    const jalaliDate = changeDateFormat(orderDetails.updatedAt)
    return (
        <>
            <div className='mt-5  text-sm  md:mt-0 md:w-full h-98/100 border-2 border-gray-300 
            rounded-lg p-5 '>
                <div className="flex justify-between">
                    <p className="">{orderDetails.shippingAddress.fullName}</p>
                    <div>
                        {orderDetails.paymentStatus === "pending" ?
                            <span className="bg-amber-300/40 text-xs text-amber-700 py-0.5 px-3 rounded-sm
                            ">
                                جاری
                            </span>
                            :
                            ""
                        }
                    </div>
                </div>
                <div className="md:flex justify-between items-center md:mt-8">
                    <div className="mt-5 md:mt-0 flex items-center gap-2 text-gray-500">
                        <Calendar className="text-lg" />
                        <span className="text-xs">{jalaliDate}</span>
                    </div>
                    <div className="mt-3 md:mt-0 flex items-center gap-2 text-gray-500">
                        <Location className="text-lg" />
                        <span className="text-xs">{orderDetails.shippingAddress.addressLine}</span>
                    </div>
                </div>
                <OrderProgress />
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
                mt-8 gap-5">
                    {orderDetails.items.map(product =>
                        <OrderProduct key={product.product._id} productDetails={product} />)}
                </div>
                <div className="w-40 mt-5">
                    {orderDetails.paymentStatus === "pending" &&
                        <PrimaryButton danger text="لغو سفارش" />
                    }
                </div>
            </div>
        </>
    )
}

export default Order