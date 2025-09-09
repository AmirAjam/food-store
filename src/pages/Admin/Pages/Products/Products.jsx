import PrimaryButton from '@/components/Ui/Button/PrimaryButton'
import React, { useState } from 'react'
import { toast, Toaster } from 'sonner'
import { DataTable } from '../../ui/DataTable'
import { useDispatch, useSelector } from 'react-redux'
import { calFinalPrice } from '@/utils/utils'
import AdminButton from '../../ui/AdminButton'
import { Link } from 'react-router-dom'
import { AdminAlertDialog } from '../../ui/AlertDialog'
import { deleteProduct, publisProduct } from '@/store/productSlice'

const Products = () => {
    const [isOpenDialog, setIsOpenDialog] = useState(false)
    const [productID, setProductID] = useState(null)

    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.accessToken)
    const products = useSelector((state) => state.products.products)

    console.log("products => ", products)

    const columns = [
        {
            accessorKey: "title",
            header: "تیتر",
            cell: ({ row }) => <div className="capitalize text-right! w-5/20">{row.getValue("title")}</div>,
        },
        {
            accessorKey: "slug",
            header: "لینک",
            cell: ({ row }) => <div className="capitalize w-5/20">{row.getValue("slug")}</div>,
            enableSorting: false
        },
        {
            accessorKey: "price",
            header: "قیمت",
            cell: ({ row }) => <div className="capitalize w-10!">
                {row.getValue("price").toLocaleString()}
            </div>,
        },
        {
            accessorKey: "quantity",
            header: "تخفیف",
            cell: ({ row }) => <div className="capitalize w-10!">
                {row.getValue("quantity")}
            </div>,
        },
        {
            accessorKey: "finalPrice",
            header: "قیمت نهایی",
            accessorFn: (row) => {
                return calFinalPrice(row.price, row.quantity)
            },
            cell: ({ getValue }) => <div className="capitalize w-2/20">
                {getValue().toLocaleString()}
            </div>,
        },
        {
            accessorKey: "category",
            header: "دسته بندی",
            accessorFn: (row) => row.category?.title || "",
            cell: ({ row }) => (
                <div className="capitalize w-5/20!">
                    {row.original.category?.title}
                </div>
            ),
        },
        {
            accessorKey: "published",
            header: "وضعیت",
            accessorFn: (row) => {
                return row.statusProduct
            },
            cell: ({ getValue }) => (
                <div className="capitalize mr-3 w-32!">
                    {getValue() === "Unpublished" ?
                        <span className="py-1 px-3 rounded-sm bg-red-500 text-white">غیر فعال</span>
                        :
                        <span className="py-1 px-3 rounded-sm bg-green-700 text-white">فعال</span>}
                </div>
            ),
        },
        {
            accessorKey: "action",
            header: "عملیات",
            cell: ({ row }) => <div className="capitalize flex items-center gap-5 w-10/20!">
                <Link to={`/p-admin/add-product?${row.original._id}`}>
                    <AdminButton text="ویرایش" onClick={() => editHandler(row.original._id)} />
                </Link>
                <AdminButton onClick={() => openAlertDialog(row.original._id)} danger text="حذف" />
                {row.original.statusProduct === "Unpublished" ?
                    <AdminButton text="فعال سازی"
                        onClick={() => publisProductHandler(row.original._id)} />
                    :
                    <AdminButton text="غیرفعال کردن"
                        onClick={() => dispatch(publisProduct({ token, id: row.original._id }))} />
                }
            </div>,
            enableSorting: false
        },
    ]

    const deleteHandler = () => {
        dispatch(deleteProduct({ token, id: productID }))
        toast.success("محصول با موفقیت حذف شد.")
    }

    const publisProductHandler = (id) => {
        dispatch(publisProduct({token,id}))
        toast.success("محصول با موفقیت منتشر شد.")
    }
 
    const openAlertDialog = (id) => {
        setIsOpenDialog(true)
        setProductID(id)
    }

    return (
        <>
            <Toaster richColors position="top-left" className="font-Estedad-Medium!" />
            <section className='bg-gray-300 mt-12 rounded-lg px-4 py-2 mb-12'>
                <div className='w-42 mt-5'>
                    <PrimaryButton text="افزودن دسته بندی" onClick={() => {
                        setCategoryID(null)
                        setIsOpenSheet(true)
                    }} />
                </div>

                <DataTable data={products} columns={columns} />
                <AdminAlertDialog
                    title="آیا از حذف محصول مطمئن هستید؟"
                    confirmAlert={deleteHandler}
                    setIsOpenDialog={setIsOpenDialog}
                    isOpenDialog={isOpenDialog}
                />
            </section>
        </>
    )
}

export default Products