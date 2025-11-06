import icons from "@/icons"

const OrderProgress = ({ ProgressNumber }) => {
    const { House, Truck } = icons
    return (
        <div className="mt-8 group step-1 flex items-center justify-center gap-3">
            <div className="flex gap-2 items-center text-primary-color">
                <House className="text-lg group-[.step-1]:text-2lg" />
                <span className='text-xs hidden lg:block font-Estedad-Regular 
                    group-[.step-1]:font-Estedad-Bold'>
                    در حال آماده‌سازی
                </span>
            </div>

            <div className="border-t-2 border-dashed border-primary-color w-30 lg:w-40
            group-[.step-1]:border-gray-400"></div>

            <div className="flex gap-2 items-center text-gray-500">
                <Truck className="text-lg text-gray-400 group-[.step-2]:text-lg" />
                <span className='text-xs hidden lg:block font-Estedad-Regular group-[.step-2]:text-sm 
                    group-[.step-2]:font-Estedad-Bold'>
                    ارسال توسط پیک
                </span>
            </div>
            <div className="border-t-2 border-dashed border-primary-color w-30 lg:w-40
            group-[.step-1]:border-gray-400"></div>

            <div className="flex gap-2 items-center text-gray-500">
                <Truck className="text-lg text-gray-400 group-[.step-2]:text-lg" />
                <span className='text-xs hidden lg:block font-Estedad-Regular group-[.step-3]:text-base 
                    group-[.step-2]:font-Estedad-Bold'>
                    تحویل سفارش
                </span>
            </div>
        </div>
    )
}

export default OrderProgress