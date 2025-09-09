import PrimaryButton from '@/components/Ui/Button/PrimaryButton'
import React from 'react'
import { Toaster } from 'sonner'
import { DataTable } from '../../ui/DataTable'
import { useSelector } from 'react-redux'
import { number } from 'yup'

const Products = () => {
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
            cell: ({ row }) => <div className="capitalize w-fit!">
                {row.getValue("quantity")}
            </div>,
        },
        {
            accessorKey: "finalPrice",
            header: "قیمت نهایی",
            cell: ({ row }) => <div className="capitalize w-2/20">
                ۲۰۰۰۰۰
            </div>,
        },
        {
            accessorKey: "category",
            header: "دسته بندی",
            cell: ({ row }) => <div className="capitalize w-5/20!">
                {row.original.category?.title}
            </div>,
        },
        {
            accessorKey: "description",
            header: "توصیحات",
            cell: ({ row }) => <div className="capitalize w-50! text-sm!">{row.getValue("description")}</div>,
            enableSorting: false
        },
        {
            accessorKey: "action",
            header: "عملیات",
            cell: ({ row }) => <div className="capitalize flex items-center gap-5 w-2/20!">
                {/* <AdminButto text="ویرایش" onClick={() => editHandler(row.original._id)} />
                <AdminButton onClick={() => openAlertDialog(row.original._id)} danger text="حذف" /> */}
            </div>,
            enableSorting: false
        },
    ]
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
                {/* <AdminAlertDialog
                    title="آیا از حذف محصول مطمئن هستید؟"
                    confirmAlert={deleteHandler}
                    setIsOpenDialog={setIsOpenDialog}
                    isOpenDialog={isOpenDialog}
                /> */}
            </section>
        </>
    )
}

export default Products