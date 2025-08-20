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
import { Toaster, toast } from 'sonner'
import useFetch from "@/hooks/useFetch"
import { signupSchema } from "@/schema/authSchema"

const { Close } = icons

const Signup = ({ isOpenSignup, setIsOpenSignup, setIsOpenLogin }) => {
    const {sendRequest } = useFetch();

    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signupSchema),
    });

    const onSubmit = (data) => {
        sendRequest('auth/register', 'POST', data)
            .then(res => {
                toast.success("حساب کاربری با موفقیت ساخته شد. لطفا وارد شوید.")
                setTimeout(() => {
                    setIsOpenSignup(false)
                    setIsOpenLogin(true)
                },3000)
            })
            .catch(() => {
                toast.error("ایمیل وارد شده تکراری می باشد")
            })
    };

    const onError = (errors) => {
        const errorValues = Object.values(errors);

        if (errorValues.length > 0) {
            toast.error(errorValues[0].message);
        }
    }

    return (
        <Dialog open={isOpenSignup} onOpenChange={() => setIsOpenSignup(false)} className="">
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
                        <DialogTitle className="text-center">عضویت</DialogTitle>
                        <AuthInput
                            placeholder="اسم را وارد کنید"
                            label="اسم"
                            {...register("firstname")}
                            error={errors.firstname?.message}
                        />
                        <AuthInput
                            placeholder="فامیل را وارد کنید"
                            label="فامیل"
                            {...register("lastname")}
                            error={errors.lastname?.message}
                        />
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
                        <p className="text-right text-sm mt-2">قبلا ثبت نام کرده اید؟
                            <span onClick={() => {
                                setIsOpenSignup(false)
                                setIsOpenLogin(true)
                            }}
                                className="mr-1 font-Estedad-Bold text-primary-color cursor-pointer">وارد شوید</span>
                        </p>
                    </DialogHeader>

                    <DialogFooter className="items-center justify-center! w-42 mx-auto mt-2">
                        <PrimaryButton type="submit" text="عضویت" />
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default Signup