import icons from "@/icons"

const OrderProduct = ({ productDetails }) => {
    const {Close} = icons
    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="h-18 md:h-24 relative">
                <img className="size-full object-cover "
                    src={`http://127.0.0.1:369/public/${productDetails.product.gallery[0]}`} alt="" />
                    <div className="absolute bottom-1 flex items-center bg-green-200 
                    text-primary-color rounded-sm px-1 left-1">
                        <span className="text-sm">{productDetails.quantity}</span>
                        <Close className="text-xs"/>
                    </div>
            </div>
            <div>
                <p className="text-center text-sm mt-2">{productDetails.product.title}</p>
                <p className="text-center text-xs mt-1 mb-2">
                    {(productDetails.price * productDetails.quantity).toLocaleString()} تومان
                </p>
            </div>
        </div>
    )
}

export default OrderProduct