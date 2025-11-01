import { getCategoryInfoApi } from '@/api/categoryApi'
import PrimaryButton from '@/components/Ui/Button/PrimaryButton'
import AdminButton from '@/pages/Admin/ui/AdminButton'
import AdminInput from '@/pages/Admin/ui/AdminInput'
import { AdminSheet } from '@/pages/Admin/ui/AdminSheet'
import { AdminAlertDialog } from '@/pages/Admin/ui/AlertDialog'
import { DataTable } from '@/pages/Admin/ui/DataTable'
import { addCategory, deleteCategory, editCategory } from '@/store/categorySlice'
import { addCoupen } from '@/store/coupensSlice'
import { calDaysLeft, DateCollection } from '@/utils/utils'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { toast, Toaster } from 'sonner'

const Coupen = () => {
    const [isOpenDialog, setIsOpenDialog] = useState(false)
    const [isOpenSheet, setIsOpenSheet] = useState(false)
    const [coupenID, setCoupenID] = useState(null)

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.accessToken)
    const coupens = useSelector((state) => state.coupen.coupens)


    const columns = [
        {
            accessorKey: "code",
            header: "کد",
            cell: ({ row }) => <div className="capitalize text-right! w-5/20">{row.getValue("code")}</div>,
        },
        {
            accessorKey: "value",
            header: "مقدار تخفیف",
            cell: ({ row }) => <div className="capitalize w-2/20">{row.getValue("value")}</div>,
            enableSorting: false
        },
        {
            accessorKey: "usageLimit",
            header: "مقدار کل",
            cell: ({ row }) => <div className="capitalize w-5/20 mr-4">{row.getValue("usageLimit")}</div>,
        },
        {
            accessorKey: "usedCount",
            header: "مقدار استفاده شده",
            cell: ({ row }) => <div className="capitalize w-2/20 mr-4!">{row.getValue("usedCount")}</div>,
        },
        {
            accessorKey: "expiresAt",
            header: "روز باقی مانده",
            accessorFn: (row) => {
                return calDaysLeft(row.expiresAt) > 0 ? calDaysLeft(row.expiresAt) : 0
            },
            cell: ({ getValue }) => <div className="capitalize w-2/20 mr-4">
                {getValue().toLocaleString()}</div>,
        },
        {
            accessorKey: "isActive",
            header: "وضعیت",
            accessorFn: (row) => {
                return calDaysLeft(row.expiresAt)
            },
            cell: ({ row, getValue }) => (
                <div className="capitalize mr-3 w-32!">
                    {row.original.isActive ?
                        getValue() > 0 ? <span className="py-1 px-3 rounded-sm bg-green-700 text-white">فعال</span> :
                            <span className="py-1 px-3 rounded-sm bg-red-500 text-white">منقضی</span>
                        :
                        <span className="py-1 px-3 rounded-sm bg-red-500 text-white">غیر فعال</span>}
                </div>
            ),
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

    const onSubmit = async (data) => {
        console.log(data)
        data.type = "percentage"
        data.expiresAt = (DateCollection(data.expiresAt))
        console.log(data)
        try {
            const res = await dispatch(addCoupen({ token, data })).unwrap()
            toast.success(" کوپن با موفقیت ساخته شد.")
            reset()
            setIsOpenSheet(false)
        } catch (error) {
            toast.error("کد وارد شده تکراری می باشد.")
        }
    }

    const onError = (errors) => {
        const errorValues = Object.values(errors);

        if (errorValues.length > 0) {
            toast.error(errorValues[0].message);
        }
    };

    const openAlertDialog = (id) => {
        setIsOpenDialog(true)
    }

    const deleteHandler = () => {
        console.log("OK DEL")
        // toast.success("دسته بندی با موفقیت حذف شد.")
    }

    const editHandler = (id) => {
        setCoupenID(id)
        setIsOpenSheet(true)
    }

    useEffect(() => {
        console.log(coupenID)
    }, [coupenID]);
    return (
        <>
            <Toaster richColors position="top-left" className="font-Estedad-Medium!" />
            <section className='bg-gray-300 mt-12 rounded-lg px-4 py-2 mb-12'>
                <div className='w-42 mt-5'>
                    <PrimaryButton text="افزودن کوپن" onClick={() => setIsOpenSheet(true)} />
                </div>

                <DataTable data={coupens} columns={columns} />
                <AdminAlertDialog
                    title="آیا از حذف کوپن مطمئن هستید؟"
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
                            {...register("code", {
                                required: "نام کوپن الزامی است",
                                minLength: {
                                    value: 3,
                                    message: "نام کوپن باید حداقل ۳ کاراکتر باشد"
                                }
                            })}
                            error={errors.code?.message}
                            label="نام دسته بندی"
                            placeholder="نام کوپن را وارد کنید."
                        />

                        <AdminInput
                            {...register("value", {
                                required: "مقدار تخفیف کوپن را وارد کنید.",
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "لطفا فقط عدد انگلیسی وارد کنید."
                                }
                            })}
                            error={errors.value?.message}
                            label="مقدار تخفیف کوپن "
                            placeholder="مقدار تخفیف کوپن را وارد کنید..."
                        />

                        <AdminInput
                            {...register("usageLimit", {
                                required: "تعداد محاز استفاده از کوپن را وارد کنید",
                            })}
                            error={errors.usageLimit?.message}
                            label="مقدار مجاز"
                            placeholder="مقدار مجاز استفاده را وارد کنید..."
                        />
                        <AdminInput
                            {...register("expiresAt", {
                                required: "تعداد روز های کوپن را وارد کنید",
                            })}
                            error={errors.expiresAt?.message}
                            label="روز"
                            placeholder="تعداد روز های کوپن را وارد کنید..."
                        />
                    </form>
                </AdminSheet>
            </section>
        </>
    )
}

export default Coupen