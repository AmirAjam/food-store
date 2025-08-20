import { useDispatch } from 'react-redux';
import store from "@/store/index";
import { addUser, deleteUser } from '@/store/usersSlice';
import { useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { DataTable } from '../../ui/DataTable';
import AdminButton from "../../ui/AdminButton";
import { AdminAlertDialog } from '../../ui/AlertDialog';
import { useEffect, useRef, useState } from 'react';
import { toast, Toaster } from 'sonner';
import { AdminSheet } from '../../ui/AdminSheet';
import PrimaryButton from '@/components/Ui/Button/PrimaryButton';
import AdminInput from '../../ui/AdminInput';
import { signupSchema } from '@/schema/authSchema';
import { getOneUserApi } from '@/api/usersApi';


const Users = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [isOpenSheet, setIsOpenSheet] = useState(false)
  const [userID, setUserID] = useState(null)
  const [userData, setUserData] = useState(null)

  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.users)
  const token = useSelector((state) => state.auth.accessToken)

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(signupSchema),
  });

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
        <AdminButton text="ویرایش" onClick={() => editHandler(row.original._id)} />
        <AdminButton onClick={() => openAlertDialog(row.original._id)} danger text="حذف" />
        <AdminButton text="بن" />
      </div>,
      enableSorting: false
    },
  ]

  const openAlertDialog = (id) => {
    setIsOpenDialog(true)
    setUserID(id)
  }

  const deleteHandler = () => {
    dispatch(deleteUser({ token, id: userID }))
    toast.success("با موفقیت حذف شد.");
    setUserID(null)
  }

  const editHandler = (id) => {
    setUserID(id)
    setIsOpenSheet(true)
  }

  const onSubmit = async (data) => {
    try {
      const result = await dispatch(addUser(data)).unwrap();
      toast.success("کاربر با موفقیت ساخته شد.")
      reset()
      setIsOpenSheet(false)
    } catch (err) {
      toast.error("ایمیل وارد شده تکراری می باشد.")
    }
  };

  const onError = (errors) => {
    const errorValues = Object.values(errors);

    if (errorValues.length > 0) {
      toast.error(errorValues[0].message);
    }
    console.log("Err")
  }

  useEffect(() => {
    if (userID) {
      getOneUserApi(userID)
        .then((res) => setUserData(res.user))
    } else {
      setUserData(null)
    }
  }, [userID, reset]);

  useEffect(() => {
    if (userData) {
      reset({
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
      });
    } else {
      reset({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      });
    }
  }, [userData])
  return (
    <>
      <Toaster richColors position="top-left" className="font-Estedad-Medium!" />
      <section className='bg-gray-300 mt-12 rounded-lg px-4 py-2 mb-12'>
        <div className='w-42 mt-5'>
          <PrimaryButton text="افزودن کاربر جدید" onClick={() => {
            setUserID(null)
            setIsOpenSheet(true)
          }} />
        </div>
        <DataTable data={users.users} columns={columns} />
        <AdminAlertDialog
          title="آیا از حذف کاربر مطمئن هستید؟"
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
              {...register("firstname")}
              error={errors.firstname?.message}
              label="نام کاربر"
              placeholder="نام کاربر را وارد کنید..." />

            <AdminInput
              {...register("lastname")}
              error={errors.lastname?.message}
              label="فامیل کاربر"
              placeholder="فامیل کاربر را وارد کنید..." />

            <AdminInput
              {...register("email")}
              error={errors.email?.message}
              label="ایمیل کاربر"
              placeholder="ایمیل کاربر را وارد کنید..." />
            {!userID &&
              <AdminInput
                {...register("password")}
                error={errors.password?.message}
                label="رمز عبور کاربر"
                placeholder="رمز عبور کاربر را وارد کنید..." />
            }

          </form>
        </AdminSheet>
      </section >
    </>
  )
}

export default Users