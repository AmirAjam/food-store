import React, { useState } from 'react'
import AdminInput from '../../ui/AdminInput'
import AddProductInput from './AddProductInput'
import { useSelector } from 'react-redux'
import { AdminSelect } from '../../ui/AdminSelect'
import { SelectItem } from "@/components/ui/select"
import PrimaryButton from '@/components/Ui/Button/PrimaryButton'


const AddProduct = () => {
    const [categoryId, setCategoryId] = useState(null)
    const token = useSelector((state) => state.auth.accessToken)
    const categories = useSelector((state) => state.categories.categories)

    const changeRole = (value, id) => {
        console.log("SSSSSSS")
        console.log(value)
        setCategoryId(value)
    }

    return (
        <section className='mt-12 '>
            <form action="" className='flex justify-between gap-12'>
                <div className='bg-gray-300 w-3/5 p-5 rounded-lg'>
                    <h2 className='font-Estedad-Medium'>اطلاعات محصول</h2>
                    <div className='flex-col flex justify-center h-full pb-10'>
                        <div className='flex justify-between items-center gap-5 mt-5'>
                            <AddProductInput placeholder="اسم محصول را وارد کنید..." />
                            <AddProductInput placeholder="لینک محصول را وارد کنید..." />
                        </div>
                        <div className='mt-5'>
                            <AddProductInput placeholder="توضیحات محصول را وارد کنید..." />
                        </div>

                        <div className='mt-8'>
                            <AdminSelect defaultValue={categories[0]?.slug} changeHandler={changeRole} itemId={""} >
                                {categories.map(category =>
                                    <SelectItem key={category._id} value={category.slug}
                                        className="text-right cursor-pointer py-1">{category.title}</SelectItem>)
                                }

                            </AdminSelect>
                        </div>
                    </div>
                </div>
                <div className='w-2/5 bg-gray-300 p-5 rounded-lg'>
                    <h2 className='font-Estedad-Medium'>قیمت محصول</h2>
                    <div className='mt-5'>
                        <AddProductInput placeholder="قیمت محصول را وارد کنید..." />
                    </div>
                    <div className='mt-5'>
                        <AddProductInput placeholder="تخیف را وارد کنید..." />
                    </div>
                    <p className='mt-8 font-Estedad-Bold text-lg text-gray-700'>قیمت نهایی:150000</p>
                    <div className='mt-8'>
                        <PrimaryButton text="اضافه کردن محصول" />
                    </div>
                </div>
            </form>
        </section>
    )
}

export default AddProduct