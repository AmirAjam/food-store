import { useDispatch, useSelector } from "react-redux";
import Order from "./Order"
import { useEffect } from "react";
import { getUserOrder } from "@/store/orderSlice";
import EmptyCart from "@/pages/Cart/Components/EmptyCart";
import SecondaryButton from "@/components/Ui/Button/SecondaryButton";
import { Link } from "react-router-dom";

const AllOrders = () => {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.accessToken)
    const orders = useSelector((state) => state.order.orders)

    useEffect(() => {
        dispatch(getUserOrder(token))
    }, [])

    return (
        <>
            {
                orders.length ?
                    <section className='mt-5 md:mt-0 md:w-full h-98/100 border-2 border-gray-300 
                    rounded-lg p-5 mb-5'>
                        <div className="pb-4 px-3 border-b border-gray-300">
                            <h2 className="font-Estedad-Bold">سفارشات</h2>
                        </div>
                        <div className="mt-8">
                            {orders.map(order => <Order key={order._id} orderDetails={order} />)}
                        </div>
                    </section >
                    :
                    <div className='md:mt-0 mt-5'>
                        <EmptyCart text="شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!">
                            <Link to="/">
                                <SecondaryButton text="منوی رستوران" />
                            </Link>
                        </EmptyCart>
                    </div>
            }
        </>
    )
}

export default AllOrders