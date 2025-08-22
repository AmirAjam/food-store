import React, { useState } from 'react'
import AdminInput from '../../ui/AdminInput'
import AddProductInput from './AddProductInput'
import { useSelector } from 'react-redux'
import { AdminSelect } from '../../ui/AdminSelect'
import { SelectItem } from "@/components/ui/select"
import PrimaryButton from '@/components/Ui/Button/PrimaryButton'
import { useForm } from 'react-hook-form'
import { toast, Toaster } from 'sonner'
import { calFinalPrice } from '@/utils/utils'


const AddProduct = () => {
    const [categoryId, setCategoryId] = useState(null)
    const token = useSelector((state) => state.auth.accessToken)
    const categories = useSelector((state) => state.categories.categories)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const changeRole = (value, id) => {
        console.log(value)
        setCategoryId(value)
    }

    const onSubmit = (data) => {
        console.log("categoryId => ",categoryId)
        data.brand = "68a712d9f395443e82350fee"
        data.category = categoryId
        console.log("Submit => ",data)
    }

    const onError = (formErrors) => {
        console.log(calFinalPrice(500,0))
        const errorValues = Object.values(formErrors);
        if (errorValues.length > 0) {
            toast.error(errorValues[0].message);
        }
    };

    return (
        <>
            <Toaster richColors position="top-left" className="font-Estedad-Medium!" />
            <section className='mt-12 '>
                <form onSubmit={handleSubmit(onSubmit, onError)} className='flex justify-between gap-12'>
                    <div className='bg-gray-300 w-3/5 p-5 rounded-lg'>
                        <h2 className='font-Estedad-Medium'>اطلاعات محصول</h2>
                        <div className='flex-col flex justify-center h-full pb-10'>
                            <div className='flex justify-between items-center gap-5 mt-5'>
                                <AddProductInput placeholder="اسم محصول را وارد کنید..."
                                    {...register("title", {
                                        required: "اسم محصول الزامی است",
                                    })}
                                    error={errors.title?.message} />
                                <AddProductInput
                                    placeholder="لینک محصول را وارد کنید..."
                                    {...register("slug", {
                                        required: "لینک محصول الزامی است",
                                        pattern: {
                                            value: /^[a-z0-9-]+$/i,
                                            message: "لینک باید فقط شامل حروف، عدد و خط تیره باشد"
                                        }
                                    })}
                                    error={errors.slug?.message}
                                />
                            </div>
                            <div className='mt-5'>
                                <AddProductInput
                                    placeholder="توضیحات محصول را وارد کنید..."
                                    {...register("description", {
                                        required: "توضیحات محصول الزامی است",
                                    })}
                                    error={errors.description?.message} />
                            </div>

                            <div className='mt-8'>
                                <AdminSelect defaultValue={categories[0]?.slug} changeHandler={changeRole} itemId={""} >
                                    {categories.map(category =>
                                        <SelectItem key={category._id} value={category._id}
                                            className="text-right cursor-pointer py-1">{category.title}</SelectItem>)
                                    }

                                </AdminSelect>
                            </div>
                        </div>
                    </div>
                    <div className='w-2/5 bg-gray-300 p-5 rounded-lg'>
                        <h2 className='font-Estedad-Medium'>قیمت محصول</h2>
                        <div className='mt-5'>
                            <AddProductInput
                                placeholder="قیمت محصول را وارد کنید..."
                                {...register("price", {
                                    required: "قیمت محصول الزامی است",
                                })}
                                error={errors.price?.message} />
                        </div>
                        <div className='mt-5'>
                            <AddProductInput placeholder="تخیف را وارد کنید..."
                                {...register("quantity")}
                            />
                        </div>
                        <p className='mt-8 font-Estedad-Bold text-lg text-gray-700'>قیمت نهایی:150000</p>
                        <div className='mt-8'>
                            <PrimaryButton text="اضافه کردن محصول" type='submit' />
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default AddProduct