import { useDispatch } from 'react-redux';
import store from "@/store/index";
import { useSelector } from "react-redux"
import { DataTable } from '../../ui/DataTable';
import AdminButton from "../../ui/AdminButton";
import {useState } from 'react';
import { toast, Toaster } from 'sonner';
import { AdminSelect } from '../../ui/AdminSelect';
import { SelectItem } from "@/components/Ui/select"
import { changeDateFormat } from '@/utils/utils';
import Order from '@/pages/Profile/pages/Orders/Order';
import Cover from '@/components/Cover/Cover';
import icons from '@/icons';
import { changeOrderStatus } from '@/store/orderSlice';

const Orders = () => {
  const { Close } = icons
  const [openDetailBox, setOpenDetailBox] = useState(false)
  const [orderData, setOrderData] = useState(false)

  const dispatch = useDispatch()
  const orders = useSelector((state) => state.order.adminOrders)
  const token = useSelector((state) => state.auth.accessToken)


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
    {
      accessorKey: "orderStatus",
      header: "وضعیت",
      cell: ({ row }) => {
        return (
          <div className="capitalize mr-3 w-50!">
            <AdminSelect defaultValue={row.original.orderStatus}
              changeHandler={changeStatus}
              itemId={row.original._id}>
              <SelectItem value="pending" className="text-right cursor-pointer">در حال آماده‌سازی</SelectItem>
              <SelectItem value="processing" className="text-right cursor-pointer">ارسال توسط پیک</SelectItem>
              <SelectItem value="shipped" className="text-right cursor-pointer">تحویل داده شده</SelectItem>
            </AdminSelect>
          </div>
        );
      },
    },
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

  const changeStatus = (status, id) => {
    dispatch(changeOrderStatus({token,id,status}))
  }

  const editHandler = async (id) => {
    setOpenDetailBox(true)
     setOrderData(orders.find(order => order._id === id))
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
      {
        openDetailBox && orderData &&
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        bg-white z-50 rounded-lg w-2/3 pt-5 pb-8 px-8'>
          <div className='flex justify-between items-center -mx-2'>
            <h3>توضیحات</h3>
            <Close onClick={() => setOpenDetailBox(false)}
              className='text-2xl hover:text-red-700 cursor-pointer -ml-3' />
          </div>
          <Order orderDetails={orderData} />
        </div>
      }
      <Cover onClick={() => setOpenDetailBox(false)} isShow={openDetailBox} />
    </>
  )
}

export default Orders