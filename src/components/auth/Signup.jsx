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

const { Close } = icons

const Signup = ({ isOpenSignup, setIsOpenSignup, setIsOpenLogin }) => {
    
    return (
        <Dialog open={isOpenSignup} onOpenChange={() => setIsOpenSignup(false)} className="">
            <form>
                <DialogTrigger asChild>
                </DialogTrigger>
                <DialogContent showCloseButton={false} className="sm:max-w-[425px] p-4">
                    <Link className="mx-auto w-fit">
                        <img src="/images/logo/logo.png" alt="" className="h-10" />
                    </Link>

                    <DialogClose asChild className="absolute left-5 top-5">
                        <Close className="text-xl cursor-pointer hover:text-red-600/80 duration-300" />
                    </DialogClose>

                    <DialogHeader>
                        <DialogTitle className="text-center">عضویت</DialogTitle>
                        <AuthInput placeholder="اسم را وارد کنید" label="اسم" />
                        <AuthInput placeholder="فامیل را وارد کنید" label="فامیل" />
                        <AuthInput placeholder="ایمیل را وارد کنید" label="ایمیل" />
                        <AuthInput placeholder="رمز عبور را وارد کنید" label="رمز عبور" />
                        <p className="text-right text-sm mt-2">قبلا ثبت نام کرده اید؟
                            <span onClick={() => {
                                setIsOpenSignup(false)
                                setIsOpenLogin(true)
                            }}
                                className="mr-1 font-Estedad-Bold text-primary-color cursor-pointer">وارد شوید</span>
                        </p>
                    </DialogHeader>

                    <DialogFooter className="items-center justify-center! w-42 mx-auto mt-2">
                        <PrimaryButton text="عضویت" />
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}

export default Signup