import { useDispatch } from 'react-redux';
import store from "@/store/index";
import { addUser, blockUser, changeUserRole, deleteUser, editUser, unBlockUser } from '@/store/usersSlice';
import { useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { DataTable } from '../../ui/DataTable';
import AdminButton from "../../ui/AdminButton";
import { AdminAlertDialog } from '../../ui/AlertDialog';
import { useEffect, useId, useRef, useState } from 'react';
import { toast, Toaster } from 'sonner';
import { AdminSheet } from '../../ui/AdminSheet';
import PrimaryButton from '@/components/Ui/Button/PrimaryButton';
import AdminInput from '../../ui/AdminInput';
import { signupSchema } from '@/schema/authSchema';
import { blockUserApi, getOneUserApi } from '@/api/usersApi';
import { AdminSelect } from '../../ui/AdminSelect';
import { SelectItem } from "@/components/ui/select"
import { changeDateFormat } from '@/utils/utils';
import OrderProduct from '@/pages/Profile/pages/Orders/OrderProduct';
import { getOneOrderApi } from '@/api/orderApi';
import Order from '@/pages/Profile/pages/Orders/Order';
import Cover from '@/components/Cover/Cover';

const Orders = () => {

  const dispatch = useDispatch()
  const orders = useSelector((state) => state.order.adminOrders)
  const token = useSelector((state) => state.auth.accessToken)

  console.log("orders => ", orders)

  const columns = [
    {
      accessorKey: "firstname",
      header: "نام تحویل گیرنده",
      cell: ({ row }) => <div className="capitalize text-right! w-5/20 mr-3">
        {row.original.shippingAddress.fullName}
      </div>,
    },
    {
      accessorKey: "createdAt",
      header: "تاریخ",
      accessorFn: (row) => {
        return changeDateFormat(row.createdAt)
      },
      cell: ({ getValue }) => <div className="capitalize w-5/20 mr-3">{getValue()}</div>,
    },
    // {
    //   accessorKey: "role",
    //   header: "نقش",
    //   cell: ({ row }) => {
    //     const role = row.getValue("role");
    //     return (
    //       <div className="capitalize mr-3 w-4/20">
    //         <AdminSelect defaultValue={role} changeHandler={changeRole} itemId={row.original._id}>
    //           <SelectItem value="admin" className="text-right cursor-pointer">ادمین</SelectItem>
    //           <SelectItem value="user" className="text-right cursor-pointer">یوزر</SelectItem>
    //         </AdminSelect>
    //       </div>
    //     );
    //   },
    // },
    {
      accessorKey: "finalPrice",
      header: "قیمت نهایی",
      cell: ({ row }) => <div className="capitalize w-5/20 mr-3">{row.original.finalPrice.toLocaleString()}</div>,
    },
    {
      accessorKey: "phone",
      header: "تلفن همراه",
      cell: ({ row }) => <div className="capitalize w-5/20 mr-3">{row.original.shippingAddress.phone}</div>,
    },
    {
      accessorKey: "postalCode",
      header: "کد پستی",
      cell: ({ row }) => <div className="capitalize w-5/20 mr-3">{row.original.shippingAddress.postalCode}</div>,
    },
    {
      accessorKey: "action",
      header: "عملیات",
      cell: ({ row }) => <div className="capitalize flex items-center gap-5 w-2/20!">
        <AdminButton text="دیدن جزئیات" onClick={() => editHandler(row.original._id)} />
      </div>,
      enableSorting: false
    },
  ]

  const editHandler = async (id) => {
    getOneOrderApi(token, id)
    .then(res => setOrderData(res.order))
    setIsOpenSheet(true)
  }

  return (
    <>
      <Toaster richColors position="top-left" className="font-Estedad-Medium!" />
      <section className='bg-gray-300 mt-12 rounded-lg px-4 py-2 mb-12'>
        <div className='w-42 mt-2'>
          <h2 className='font-Estedad-Bold text-lg mr-3'>سفارشات</h2>
        </div>
        <DataTable data={orders} columns={columns} />
      </section >
      <div>

      </div>
      <Cover />
    </>
  )
}

export default Orders