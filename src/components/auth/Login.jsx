import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Link } from "react-router-dom"
import icons from "@/icons"
import AuthInput from "./AuthInput"
import PrimaryButton from "../Ui/Button/PrimaryButton"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schema/authSchema"
import { Toaster, toast } from 'sonner'
import useFetch from "@/hooks/useFetch"
import { setAccessToken, setUserId } from "@/store/authSlice";
import { useDispatch } from "react-redux"

const { Close } = icons

const Login = ({ isOpenLogin, setIsOpenLogin, setIsOpenSignup }) => {
    const dispatch = useDispatch();

    const { sendRequest } = useFetch();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = (data) => {
        console.log(data)
        sendRequest('auth/login', 'POST', data)
            .then(res => {
                if (res.user) {
                    dispatch(setAccessToken(res.user.token));
                    dispatch(setUserId(res.user.id));
                    toast.success("با موفقیت وارد شدید");
                    setIsOpenLogin(false)
                } else {
                    toast.error("نام کاربری یا رمز عبور اشتباه است.");
                }
            })
    };

    const onError = (errors) => {
        const errorValues = Object.values(errors);
        if (errorValues.length > 0) {
            toast.error(errorValues[0].message);
        }
    }
    return (
        <Dialog open={isOpenLogin} onOpenChange={() => setIsOpenLogin(false)} className="">
            <Toaster richColors position="top-left" className="font-Estedad-Medium!" />
            <DialogContent showCloseButton={false} className="sm:max-w-[425px] p-4">
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <Link className="mx-auto w-fit">
                        <img src="/images/logo/logo.png" alt="" className="h-10" />
                    </Link>

                    <DialogClose asChild className="absolute left-5 top-5">
                        <Close className="text-xl cursor-pointer hover:text-red-600/80 duration-300" />
                    </DialogClose>

                    <DialogHeader>
                        <DialogTitle className="text-center">ورود</DialogTitle>
                        <AuthInput
                            placeholder="ایمیل"
                            label="ایمیل را وارد کنید"
                            {...register("email")}
                            error={errors.email?.message}
                        />

                        <AuthInput
                            placeholder="رمز عبور را وارد کنید"
                            label="رمز عبور"
                            type="password"
                            {...register("password")}
                            error={errors.password?.message}
                        />
                        <p className="text-right text-sm mt-2">حساب کاربری ندارید؟
                            <span onClick={() => {
                                setIsOpenSignup(true)
                                setIsOpenLogin(false)
                            }}
                                className="mr-1 font-Estedad-Bold text-primary-color cursor-pointer">ثبت نام کنید</span>
                        </p>
                    </DialogHeader>

                    <DialogFooter className="items-center justify-center! w-42 mx-auto mt-2">
                        <PrimaryButton type="submit" text="ورود" />
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default Login