import AdminButton from '@/pages/Admin/ui/AdminButton'
import { DataTable } from '@/pages/Admin/ui/DataTable'
import React from 'react'
import { useSelector } from 'react-redux'
import { Toaster } from 'sonner'

const Category = () => {
    const categories = useSelector((state) => state.categories.categories)
    console.log("categories ,", categories)

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
            header: "توصیحات",
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
        console.log(id)
    }

    const openAlertDialog = () => {

    }

    return (
        <>
            <Toaster richColors position="top-left" className="font-Estedad-Medium!" />
            <section className='bg-gray-300 mt-12 rounded-lg px-4 py-2 mb-12'>
                <DataTable data={categories} columns={columns} />
            </section>
        </>
    )
}

export default Category