import { getCategoryInfoApi } from '@/api/categoryApi'
import PrimaryButton from '@/components/Ui/Button/PrimaryButton'
import AdminButton from '@/pages/Admin/ui/AdminButton'
import AdminInput from '@/pages/Admin/ui/AdminInput'
import { AdminSheet } from '@/pages/Admin/ui/AdminSheet'
import { AdminAlertDialog } from '@/pages/Admin/ui/AlertDialog'
import { DataTable } from '@/pages/Admin/ui/DataTable'
import { addCategory, deleteCategory, editCategory } from '@/store/categorySlice'
import { activateCoupen, addCoupen, deactivateCoupen, editCoupen, removeCoupen } from '@/store/coupensSlice'
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
            enableSorting: false
        },
        {
            accessorKey: "value",
            header: "مقدار تخفیف",
            cell: ({ row }) => <div className="capitalize w-2/20 mr-5">{row.getValue("value")}</div>,
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
                if (!row.isActive) return 0;
                const daysLeft = calDaysLeft(row.expiresAt);
                return daysLeft > 0 ? 2 : 1;
            },
            cell: ({ getValue, row }) => (
                <div className="capitalize mr-3 w-32!">
                    {row.original.isActive
                        ? getValue() === 2
                            ? <span className="py-1 px-3 rounded-sm bg-green-700 text-white">فعال</span>
                            : <span className="py-1 px-3 rounded-sm bg-red-500 text-white">منقضی</span>
                        : <span className="py-1 px-3 rounded-sm bg-red-500 text-white">غیر فعال</span>
                    }
                </div>
            ),
        },
        {
            accessorKey: "action",
            header: "عملیات",
            cell: ({ row }) => <div className="capitalize flex items-center gap-5 w-2/20!">
                <AdminButton text="ویرایش" onClick={() => editHandler(row.original._id)} />
                <AdminButton onClick={() => openAlertDialog(row.original._id)} danger text="حذف" />
                {row.original.isActive ?
                    <AdminButton onClick={() => deactivateCoupenHandler(row.original._id)} text="غیر فعال کردن" />
                    :
                    <AdminButton onClick={() => activateCoupenHandler(row.original._id)} text="فعال کردن" />
                }
            </div>,
            enableSorting: false
        },
    ]

    const addCoupenHandler = async (data) => {
        try {
            const res = await dispatch(addCoupen({ token, data })).unwrap()
            toast.success(" کد تخفیف با موفقیت ساخته شد.")
            reset()
            setIsOpenSheet(false)
        } catch (error) {
            toast.error("کد وارد شده تکراری می باشد.")
        }
    }

    const editCoupenHandler = async (data) => {
        try {
            const res = await dispatch(editCoupen({ token, id: coupenID, data })).unwrap()
            toast.success(" کد تخفیف با موفقیت ویرایش شد.")
            reset()
            setIsOpenSheet(false)
            setCoupenID(null)
        } catch (error) {
            console.log(error)
            toast.error("کد وارد شده تکراری می باشد.")
        }
    }

    const activateCoupenHandler = (id) => {
        dispatch(activateCoupen({ token, id }))
    }

    const deactivateCoupenHandler = (id) => {
        dispatch(deactivateCoupen({ token, id }))
    }

    const onSubmit = data => {
        console.log(data)
        data.type = "percentage"
        data.expiresAt = (DateCollection(data.expiresAt))
        coupenID ? editCoupenHandler(data) : addCoupenHandler(data)
    }

    const onError = (errors) => {
        const errorValues = Object.values(errors);

        if (errorValues.length > 0) {
            toast.error(errorValues[0].message);
        }
    };

    const openAlertDialog = (id) => {
        setIsOpenDialog(true)
        setCoupenID(id)
    }

    const deleteHandler = () => {
        dispatch(removeCoupen({ token, id: coupenID }))
        toast.success("کد تخفیف با موفقیت حذف شد.")
    }

    const editHandler = (id) => {
        setCoupenID(id)
        setIsOpenSheet(true)
    }

    const setDefaultValue = async () => {
        const res = await getCategoryInfoApi(token, coupenID)
        const coupenInfo = res.coupen
        reset({
            code: coupenInfo.code,
            value: coupenInfo.value,
            usageLimit: coupenInfo.usageLimit,
        })
    }



    useEffect(() => {
        if (coupenID)
            setDefaultValue()
        else 
            reset({
            code: "",
            value: "",
            usageLimit: "",
        })

    }, [coupenID]);

    useEffect(() => {
        console.log(coupenID)
        console.log(isOpenSheet)
        if(isOpenSheet && !coupenID){
            console.log("OK")
            reset()
        }
    }, [isOpenSheet]);
    
    return (
        <>
            <Toaster richColors position="top-left" className="font-Estedad-Medium!" />
            <section className='bg-gray-300 mt-12 rounded-lg px-4 py-2 mb-12'>
                <div className='w-42 mt-5'>
                    <PrimaryButton text="افزودن کد تخفیف" onClick={() => {
                        setCoupenID(null)
                        setIsOpenSheet(true)
                        reset()
                    }} />
                </div>

                <DataTable data={coupens} columns={columns} />
                <AdminAlertDialog
                    title="آیا از حذف کد تخفیف مطمئن هستید؟"
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
                                required: "نام کد تخفیف الزامی است",
                                minLength: {
                                    value: 3,
                                    message: "نام کد تخفیف باید حداقل ۳ کاراکتر باشد"
                                }
                            })}
                            error={errors.code?.message}
                            label="نام کد تخفیف"
                            placeholder="نام کد تخفیف را وارد کنید."
                        />

                        <AdminInput
                            {...register("value", {
                                required: "مقدار تخفیف کد تخفیف را وارد کنید.",
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "لطفا فقط عدد انگلیسی وارد کنید."
                                }
                            })}
                            error={errors.value?.message}
                            label="مقدار تخفیف کد تخفیف "
                            placeholder="مقدار تخفیف کد تخفیف را وارد کنید..."
                        />

                        <AdminInput
                            {...register("usageLimit", {
                                required: "تعداد محاز استفاده از کد تخفیف را وارد کنید",
                            })}
                            error={errors.usageLimit?.message}
                            label="مقدار مجاز"
                            placeholder="مقدار مجاز استفاده را وارد کنید..."
                        />
                        <AdminInput
                            {...register("expiresAt", {
                                required: "تعداد روز های کد تخفیف را وارد کنید",
                            })}
                            error={errors.expiresAt?.message}
                            label="روز"
                            placeholder="تعداد روز های کد تخفیف را وارد کنید..."
                        />
                    </form>
                </AdminSheet>
            </section>
        </>
    )
}

export default Coupen