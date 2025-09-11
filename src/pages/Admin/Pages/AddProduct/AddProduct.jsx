import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import AdminInput from '../../ui/AdminInput'
import AddProductInput from './AddProductInput'
import { useDispatch, useSelector } from 'react-redux'
import { AdminSelect } from '../../ui/AdminSelect'
import { SelectItem } from "@/components/ui/select"
import PrimaryButton from '@/components/Ui/Button/PrimaryButton'
import { useForm } from 'react-hook-form'
import { toast, Toaster } from 'sonner'
import { addProduct, uploadProductImage } from '@/store/productSlice'


const AddProduct = () => {
    const categories = useSelector((state) => state.categories.categories)

    const fileInputRef = useRef()
    const [categoryId, setCategoryId] = useState()
    const [preview, setPreview] = useState(null)
    const [fileInput, setFileInput] = useState(null)

    const token = useSelector((state) => state.auth.accessToken)

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch()


    const changeRole = (value, id) => {
        setCategoryId(value)
    }

    const fileInputChange = (e) => {
        if (e.target.files[0]) {
            setFileInput(e.target.files[0])
            setPreview(URL.createObjectURL(e.target.files[0]))
        }
        console.log(e.target.files[0])
    }

    const addImageProduct = (id) => {
        const formData = new FormData();
        formData.append("images", fileInput);
        dispatch(uploadProductImage({ token, id, file: formData }))
    }


    const onSubmit = async (data) => {
        if (fileInput) {
            try {
                data.brand = "68a712d9f395443e82350fee"
                data.category = categoryId
                console.log("data => ",data)
                const res = await dispatch(addProduct({ token, data })).unwrap()
                const productID = res.product._id
                addImageProduct(productID)
                toast.success("محصول با موفقیت اضافه شد.")
                reset()
                setPreview(null)
                setFileInput(null)
            } catch {
                toast.error("لینک وارد شده تکراری می باشد.")
            }
        } else {
            toast.error("لطفا عکس محصول را وارد کنید.");
        }
    }

    const onError = (formErrors) => {
        const errorValues = Object.values(formErrors);
        if (errorValues.length > 0) {
            toast.error(errorValues[0].message);
        }
    };

    useEffect(() => {
        categories[0] && setCategoryId(categories[0]._id)
    }, [categories])

    // useEffect(() => {
    //     console.log(fileInput)
    //     const formData = new FormData();
    //     formData.append("images", fileInput);
    //     dispatch(uploadProductImage({ token, id:"68bef5078fb6cead1eb390c8", file: formData }))
    // }, [fileInput])
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
                                {categories[0] &&
                                    <AdminSelect defaultValue={categories[0]?._id} changeHandler={changeRole} itemId={""} >
                                        {categories.map(category =>
                                            <SelectItem key={category._id} value={category._id}
                                                className="text-right cursor-pointer py-1">{category.title}</SelectItem>)
                                        }

                                    </AdminSelect>}
                            </div>
                            <div className='mt-12'>
                                <h2 className='font-Estedad-Medium'>عکس محصول</h2>
                                <div className='min-h-70 flex items-center justify-center border-3 border-dashed
                                border-gray-500/80 mt-8 rounded-lg flex-col'>

                                    {preview ?
                                        <>
                                            <div className='w-42 mt-12'>
                                                <PrimaryButton text="حذف عکس"
                                                    onClick={() => {
                                                        setPreview(null)
                                                        setFileInput(null)
                                                    }} danger />
                                            </div>
                                            <img
                                                src={preview}
                                                alt="preview"
                                                className="object-cover rounded mt-8 size-full p-10"
                                            />
                                        </>
                                        :
                                        <div className='w-42'>
                                            <PrimaryButton text="آپلود عکس"
                                                onClick={() => fileInputRef.current.click()} />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-2/5 bg-gray-300 p-5 rounded-lg h-fit'>
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
                        <div className='mt-8'>
                            <PrimaryButton text="اضافه کردن محصول" type='submit' />
                        </div>
                    </div>
                    <input type="file"
                        className='hidden'
                        ref={fileInputRef}
                        onChange={fileInputChange} />
                </form>
            </section>
        </>
    )
}

export default AddProduct