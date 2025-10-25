import React, { useEffect, useState } from 'react'
import InformationInput from './InformationInput'
import SecondaryButton from '@/components/Ui/Button/SecondaryButton'
import icons from '@/icons'
import PrimaryButton from '@/components/Ui/Button/PrimaryButton'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import useFetch from '@/hooks/useFetch'
import { useSelector } from 'react-redux'
import { editUserInfoApi } from '@/api/usersApi'

const Information = () => {
    const [isDisabled, setIsDisabled] = useState(true)

    const { sendRequest } = useFetch();
    const id = useSelector((state) => state.auth.userId);
    const token = useSelector((state) => state.auth.accessToken)

    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const onSubmit = async (data) => {
        const res = await editUserInfoApi(token,data)
        if(res.success){
            toast.success("با موفقیت تغییر کرد.")
            setIsDisabled(true)
        }
        else{
            toast.success("مشکلی در سرور به وحود آمده است.")
        }
    }

    const onError = (formErrors) => {
        const errorValues = Object.values(formErrors);
        if (errorValues.length > 0) {
            toast.error(errorValues[0].message);
        }
    };

    const setDefaultValue = (userData) => {
        reset({
            firstname: userData.firstname,
            lastname: userData.lastname,
            email: userData.email,
        });
    }

    useEffect(() => {
        if (!id) return;
        sendRequest(`user/${id}`, "GET")
            .then(res => setDefaultValue(res.user))
    }, [])
    const { Edit } = icons
    return (
        <section className='mt-5 md:mt-0 md:w-full h-full border border-gray-300 rounded-lg p-5 '>
            <form onSubmit={handleSubmit(onSubmit, onError)} 
            className='flex flex-col space-between h-full'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <InformationInput
                        {...register("firstname", {
                            required: "لطفا نام خود را وارد کنید.",
                            minLength: {
                                value: 3,
                                message: "نام باید حداقل ۳ کاراکتر باشد"
                            }
                        })}
                        error={errors.firstname?.message}
                        isDisabled={isDisabled}
                        placeholder="نام" />

                    <InformationInput
                        {...register("lastname", {
                            required: "لطفا نام خانوادگی خود را وارد کنید.",
                            minLength: {
                                value: 3,
                                message: "نام خانوادگی باید حداقل ۳ کاراکتر باشد"
                            }
                        })}
                        error={errors.lastname?.message}
                        isDisabled={isDisabled}
                        placeholder="نام خانوادگی"
                    />
                    <InformationInput
                        {...register("email", {
                            required: "لطفا ایمیل خود را وارد کنید.",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "ایمیل وارد شده معتبر نمی باشد.",
                            },
                        })}
                        error={errors.email?.message}
                        isDisabled={isDisabled}
                        placeholder="آدرس ایمیل"
                    />
                </div>

                <div className={`w-fit text-xxs m-auto grow flex items-end ${!isDisabled ? "hidden" : ""}`}>
                    <SecondaryButton onClick={() => setIsDisabled(false)}>
                        <div className='flex items-center px-4'>
                            <Edit className='text-lg' />
                            ویرایش اطلاعات شخصی
                        </div>
                    </SecondaryButton>
                </div>

                <div className={`text-xxs sm:w-80 mx-auto mt-8 flex gap-5 grow flex items-end ${isDisabled ? "hidden" : ""}`}>
                    <SecondaryButton onClick={() => setIsDisabled(true)}>
                        <span className='px-5 -my-0.5 block'>
                            انصراف
                        </span>
                    </SecondaryButton>
                    <PrimaryButton text="ذخیره اطلاعات" type='submit' />
                </div>

            </form>
        </section>
    )
}

export default Information