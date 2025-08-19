import { useDispatch } from 'react-redux';
import store from "@/store/index";
import { deleteUser } from '@/store/usersSlice';
import { useSelector } from "react-redux"

import { DataTable } from '../../ui/DataTable';
import AdminButton from "../../ui/AdminButton";


const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.users)
  const token = useSelector((state) => state.auth.accessToken)

  const columns = [
    {
      accessorKey: "firstname",
      header: "اسم",
      cell: ({ row }) => <div className="capitalize text-right! w-5/20">{row.getValue("firstname")} {" "}
        {row.original.lastname}</div>,
    },
    {
      accessorKey: "email",
      header: "ایمیل",
      cell: ({ row }) => <div className="capitalize w-5/20">{row.getValue("email")}</div>,
      enableSorting: false
    },
    {
      accessorKey: "role",
      header: "نقش",
      cell: ({ row }) => {
        const role = row.getValue("role");
        return (
          <div className="capitalize mr-3 w-4/20">
            {role === "admin" ?
              <span className="text-red-800 font-Estedad-Bold">{role}</span>
              : <span className="">{role}</span>}
          </div>
        );
      },
    },
    {
      accessorKey: "isBlock",
      header: "وضعیت",
      cell: ({ row }) => (
        <div className="capitalize mr-3 w-4/20">
          {row.getValue("isBlock") ?
            <span className="py-1 px-3 rounded-sm bg-red-500 text-white">مسدود شده</span>
            :
            <span className="py-1 px-3 rounded-sm bg-green-700 text-white">فعال</span>}
        </div>
      ),
    },
    {
      accessorKey: "action",
      header: "عملیات",
      cell: ({ row }) => <div className="capitalize flex items-center gap-5 w-2/20!">
        <AdminButton text="ویرایش" />
        <AdminButton onClick={() => deleteHandler(row.original._id)} danger text="حذف" />
        <AdminButton text="بن" />
      </div>,
      enableSorting: false
    },
  ]

  const deleteHandler = (id) => {
    dispatch(deleteUser({token,id}))
  }

  return (
    <section className='bg-gray-300 mt-12 rounded-lg px-4 py-2'>
      <DataTable data={users.users} columns={columns} />
    </section>
  )
}

export default Users