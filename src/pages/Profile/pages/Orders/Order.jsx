import icons from "@/icons"
import { changeDateFormat } from "@/utils/utils"
import OrderProgress from "./OrderProgress/OrderProgress"
import OrderProduct from "./OrderProduct"
import PrimaryButton from "@/components/Ui/Button/PrimaryButton"

const Order = ({ orderDetails }) => {
    const { Calendar, Location } = icons
    const jalaliDate = changeDateFormat(orderDetails.createdAt)
    let progressStep;

    if (orderDetails.orderStatus === "pending") {
        progressStep = 1;
    } else if (orderDetails.orderStatus === "processing") {
        progressStep = 2;
    } else if (orderDetails.orderStatus === "shipped") {
        progressStep = 3;
    } else {
        progressStep = 0;
    }
    return (
        <>
            <div className='mt-5 text-sm first:md:mt-0 md:w-full h-98/100 border-2 border-gray-300 
            rounded-lg px-5 py-3'>
                <div className="flex justify-between items-center flex-wrap gap-5">
                    <p className="">{orderDetails.shippingAddress.fullName}</p>
                    <div className="flex text-xs items-center gap-5">
                        <div className="bg-gray-200 py-1 px-3 rounded-sm">
                            <span>
                                {orderDetails.paymentMethod === "cod" ?
                                    "پرداخت در محل"
                                    : "پرداخت اینترنتی"}
                            </span>
                        </div>
                        <div>
                            {orderDetails.orderStatus === "shipped" ?
                                <span className="bg-green-300/40 text-green-700 py-0.5 px-3 
                            rounded-sm
                            ">
                                    تحویل شده
                                </span>
                                :
                                <span className="bg-amber-300/40 text-amber-700 py-0.5 px-3 
                            rounded-sm
                            ">
                                    {orderDetails.orderStatus === "pending" ? "در حال آماده‌سازی"
                                        : "ارسال توسط پیک "}
                                </span>
                            }
                        </div>
                    </div>
                </div>
                <div className="lg:flex justify-between items-center md:mt-4">
                    <div className="mt-5 md:mt-0 flex items-center gap-2 text-gray-500">
                        <Calendar className="text-lg" />
                        <span className="text-xs">{jalaliDate} - {orderDetails.finalPrice.toLocaleString()} تومان</span>
                    </div>
                    <div className="mt-3 lg:mt-0 flex items-center gap-2 text-gray-500">
                        <Location className="text-lg" />
                        <span className="text-xs">{orderDetails.shippingAddress.addressLine}</span>
                    </div>
                </div>
                {progressStep !== 3 &&
                    <OrderProgress progressStep={progressStep} />
                }
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
                mt-8 gap-5">
                    {orderDetails.items.map(product =>
                        <OrderProduct key={product.product._id} productDetails={product} />)}
                </div>
            </div>
        </>
    )
}

export default Order