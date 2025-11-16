import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import AdminInput from '../../ui/AdminInput'
import AddProductInput from './AddProductInput'
import { useDispatch, useSelector } from 'react-redux'
import { AdminSelect } from '../../ui/AdminSelect'
import { SelectItem } from "@/components/Ui/select"
import PrimaryButton from '@/components/Ui/Button/PrimaryButton'
import { useForm } from 'react-hook-form'
import { toast, Toaster } from 'sonner'
import { addProduct, editProduct, findProduct, uploadProductImage } from '@/store/productSlice'
import { useParams } from 'react-router-dom'
import { removeProductImageApi } from '@/api/productApi'


const AddProduct = () => {
    const categories = useSelector((state) => state.categories.categories)
    const products = useSelector((state) => state.products.products)

    const fileInputRef = useRef()
    const [categoryId, setCategoryId] = useState("")
    const [preview, setPreview] = useState(null)
    const [fileInput, setFileInput] = useState(null)

    const token = useSelector((state) => state.auth.accessToken)

    const productParam = useParams()
    const productDetials = findProduct(products, productParam.id)


    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch()


    const changeCategory = (value, id) => {
        setCategoryId(value)
    }

    const deleteImage = async () => {
        setPreview(null)
        setFileInput(null)
        fileInputRef.current.value = ""
    }

    const fileInputChange = (e) => {
        if (e.target.files[0]) {
            setFileInput(e.target.files[0])
            setPreview(URL.createObjectURL(e.target.files[0]))
        }
    }

    const addImageProduct = (id) => {
        const formData = new FormData();
        formData.append("images", fileInput);
        dispatch(uploadProductImage({ token, id, file: formData }))
    }

    const resetForm = () => {
        reset()
        setPreview(null)
        setFileInput(null)
    }

    const editProductHandler = (data) => {
        if (fileInput === true) {
            dispatch(editProduct({ token, id: productDetials._id, data }))
            toast.success("ویرایش با موفقیت انجام شد.");
        }
        else if (!fileInput){
            toast.error("لطفا عکس محصول را وارد کنید.");
        }
        else{
            addImageProduct(productDetials._id)
            removeProductImageApi(token, productDetials._id, productDetials.gallery[0])
            dispatch(editProduct({ token, id: productDetials._id, data }))
            toast.success("ویرایش با موفقیت انجام شد.");
        }
    }


    const onSubmit = async (data) => {
        data.category = categoryId
        if (productDetials) {
            editProductHandler(data)
            return
        }
        if (fileInput) {
            try {
                const res = await dispatch(addProduct({ token, data })).unwrap()
                const productID = res.product._id
                addImageProduct(productID)
                toast.success("محصول با موفقیت اضافه شد.")
                resetForm()
            }
            catch (error) {
                console.log(error)
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


    const setDefaultValue = () => {
        if (productDetials) {
            setFileInput(true)
            const imageSrc = `https://tarkhineh-api.liara.run/public${productDetials.gallery[0]}`
            reset({
                title: productDetials.title,
                description: productDetials.description,
                slug: productDetials.slug,
                price: productDetials.price,
                quantity: productDetials.quantity,
            })
            setCategoryId(productDetials.category._id)
            setPreview(imageSrc)
        }
    }


    useEffect(() => {
        if (categories[0] && productParam.id) {
            setDefaultValue()
        } else {
            categories[0] && setCategoryId(categories[0]._id)
        }
    }, [categories, productDetials])


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
                                {
                                    categoryId && productParam.id &&
                                    <AdminSelect defaultValue={categoryId} changeHandler={changeCategory} itemId={""} >
                                        {categories.map(category =>
                                            <SelectItem key={category._id} value={category._id}
                                                className="text-right cursor-pointer py-1">{category.title}</SelectItem>)
                                        }
                                    </AdminSelect>}

                                {categories[0] && !productDetials && !productParam.id &&
                                    <>
                                        <AdminSelect defaultValue={categories[0]?._id} changeHandler={changeCategory} itemId={""} >
                                            {categories.map(category =>
                                                <SelectItem key={category._id} value={category._id}
                                                    className="text-right cursor-pointer py-1">{category.title}</SelectItem>)
                                            }

                                        </AdminSelect>
                                    </>
                                }
                            </div>
                            <div className='mt-12'>
                                <h2 className='font-Estedad-Medium'>عکس محصول</h2>
                                <div className='min-h-70 flex items-center justify-center border-3 border-dashed
                                border-gray-500/80 mt-8 rounded-lg flex-col'>

                                    {preview ?
                                        <>
                                            <div className='w-42 mt-12'>
                                                <PrimaryButton text="حذف عکس"
                                                    onClick={deleteImage} danger />
                                            </div>
                                            <img
                                                src={preview}
                                                alt="preview"
                                                className="object-contain rounded mt-8 max-w-full h-auto"
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
                            {productDetials ?
                                <PrimaryButton text="ویرایش کردن محصول" type='submit' />
                                :
                                <PrimaryButton text="اضافه کردن محصول" type='submit' />
                            }
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