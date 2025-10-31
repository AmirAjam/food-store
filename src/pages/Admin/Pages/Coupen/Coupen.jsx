import { getCategoryInfoApi } from '@/api/categoryApi'
import PrimaryButton from '@/components/Ui/Button/PrimaryButton'
import AdminButton from '@/pages/Admin/ui/AdminButton'
import AdminInput from '@/pages/Admin/ui/AdminInput'
import { AdminSheet } from '@/pages/Admin/ui/AdminSheet'
import { AdminAlertDialog } from '@/pages/Admin/ui/AlertDialog'
import { DataTable } from '@/pages/Admin/ui/DataTable'
import { addCategory, deleteCategory, editCategory } from '@/store/categorySlice'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { toast, Toaster } from 'sonner'

const Coupen = () => {
    const [isOpenDialog, setIsOpenDialog] = useState(false)
    const [isOpenSheet, setIsOpenSheet] = useState(false)
    // const [categoryID, setCategoryID] = useState(null)
    const [coupens, setCoupens] = useState(null)

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const token = useSelector((state) => state.auth.accessToken)


    const columns = [
        {
            accessorKey: "title",
            header: "تیتر",
            cell: ({ row }) => <div className="capitalize text-right! w-5/20">{row.getValue("title")} {" "}
                {row.original.lastname}</div>,
        },
        {
            accessorKey: "slug",
            header: "لینک",
            cell: ({ row }) => <div className="capitalize w-5/20">{row.getValue("slug")}</div>,
            enableSorting: false
        },
        {
            accessorKey: "description",
            header: "توضیحات",
            cell: ({ row }) => <div className="capitalize w-5/20">{row.getValue("description")}</div>,
            enableSorting: false
        },
        {
            accessorKey: "action",
            header: "عملیات",
            cell: ({ row }) => <div className="capitalize flex items-center gap-5 w-2/20!">
                <AdminButton text="ویرایش" onClick={() => editHandler(row.original._id)} />
                <AdminButton onClick={() => openAlertDialog(row.original._id)} danger text="حذف" />
            </div>,
            enableSorting: false
        },
    ]

    const editHandler = (id) => {
        setIsOpenSheet(true)
    }


    const onSubmit = async (data) => {
        console.log(data)
    }

    const onError = () => {
        const errorValues = Object.values(errors);

        if (errorValues.length > 0) {
            toast.error(errorValues[0].message);
        }
    }

    const openAlertDialog = (id) => {
        setIsOpenDialog(true)
    }

    const deleteHandler = () => {
        dispatch(deleteCategory({ token, id: categoryID }))
        toast.success("دسته بندی با موفقیت حذف شد.")
    }

    useEffect(() => {

    }, []);    
    return (
        <>
            <Toaster richColors position="top-left" className="font-Estedad-Medium!" />
            {/* <section className='bg-gray-300 mt-12 rounded-lg px-4 py-2 mb-12'>
                <div className='w-42 mt-5'>
                    <PrimaryButton text="افزودن دسته بندی" onClick={() => setIsOpenSheet(true)} />
                </div>

                <DataTable data={categories} columns={columns} />
                <AdminAlertDialog
                    title="آیا از حذف دسته بندی مطمئن هستید؟"
                    confirmAlert={deleteHandler}
                    setIsOpenDialog={setIsOpenDialog}
                    isOpenDialog={isOpenDialog}
                />
                <AdminSheet
                    isOpenSheet={isOpenSheet}
                    setIsOpenSheet={setIsOpenSheet}
                    onSubmitClick={handleSubmit(onSubmit, onError)}>
                    <form onSubmit={handleSubmit(onSubmit, onError)} className='px-4'>
                        <AdminInput
                            {...register("title", {
                                required: "نام دسته بندی الزامی است",
                                minLength: {
                                    value: 3,
                                    message: "نام دسته بندی باید حداقل ۳ کاراکتر باشد"
                                }
                            })}
                            error={errors.title?.message}
                            label="نام دسته بندی"
                            placeholder="نام دسته بندی را وارد کنید..."
                        />

                        <AdminInput
                            {...register("slug", {
                                required: "لینک دسته بندی الزامی است",
                                pattern: {
                                    value: /^[a-z0-9-]+$/i,
                                    message: "لینک باید فقط شامل حروف، عدد و خط تیره باشد"
                                }
                            })}
                            error={errors.slug?.message}
                            label="لینک دسته بندی"
                            placeholder="لینک دسته بندی را وارد کنید..."
                        />

                        <AdminInput
                            {...register("description", {
                                required: "توضیحات الزامی است",
                                maxLength: {
                                    value: 200,
                                    message: "توضیحات نباید بیشتر از ۲۰۰ کاراکتر باشد"
                                }
                            })}
                            error={errors.description?.message}
                            label="توضیحات دسته بندی"
                            placeholder="توضیحات دسته بندی را وارد کنید..."
                        />
                    </form>
                </AdminSheet>
            </section> */}
        </>
    )
}

export default Coupen