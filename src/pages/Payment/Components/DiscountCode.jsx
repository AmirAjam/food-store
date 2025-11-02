import { getCoupenInfoApi } from '@/api/coupenApi'
import PrimaryButton from '@/components/Ui/Button/PrimaryButton'
import icons from '@/icons'
import { applyCoupen } from '@/store/cartSlice'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { toast, Toaster } from 'sonner'

const DiscountCode = ({ appliedCoupon }) => {
    const { Discount } = icons

    const [coupenInfo, setCoupenInfo] = useState(null)

    const token = useSelector((state) => state.auth.accessToken)
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await dispatch(applyCoupen({ token, data })).unwrap()
            toast.success("کد تخفیف با موفقیت اعمال شد.")
        } catch (error) {
            toast.error("کد تخفیف وارد شده منقضی یا اشتباه می باشد.")
        }
    }

    const onError = (formErrors) => {
        const errorValues = Object.values(formErrors);
        if (errorValues.length > 0) {
            toast.error(errorValues[0].message);
        }
    };

    useEffect(() => {
        if (appliedCoupon) {
            getCoupenInfoApi(token, appliedCoupon)
                .then(res => setCoupenInfo(res.coupen))
        }
    }, [appliedCoupon])

    useEffect(() => {
        coupenInfo &&
            reset({
                coupenCode: coupenInfo.code
            })
    }, [coupenInfo])
    return (
        <section className='mt-5 border-2 border-gray-300 rounded-lg py-5 px-1.5'>
            <Toaster richColors position="top-left" className="font-Estedad-Medium!" />
            <div className="container lg:flex lg:justify-between">
                <div className='flex gap-2 items-center border-b-2 lg:border-0 pb-4 lg:pb-0 border-gray-300'>
                    <Discount className='text-xl lg:text-2xl' />
                    <p className='text-sm lg:text-base'>ثبت کد تخفیف</p>
                </div>
                <div className=''>
                    <form onSubmit={handleSubmit(onSubmit, onError)}
                        className="">
                        <div className='mt-5 lg:mt-0 flex items-center justify-between lg:w-sm gap-5'>
                            <input
                                type="text"
                                placeholder='کد تخفیف'
                                className=' border border-gray-300 py-1.5 lg:py-2 px-3 w-5/6 
                            rounded-lg text-sm'
                                {...register("coupenCode", {
                                    required: "کد تخفیف را وارد کنید",
                                })} />
                            <div className='w-2/8 text-xs lg:text-sm'>
                                <PrimaryButton text="ثبت کد" type='submit' />
                            </div>
                        </div>
                        {coupenInfo &&
                            <p className='text-xs mt-2 text-center text-red-500'>
                                {coupenInfo.value}٪ با موفقیت از سبد شما کم شد.
                            </p>
                        }
                    </form>
                </div>
            </div>
        </section>
    )
}

export default DiscountCode