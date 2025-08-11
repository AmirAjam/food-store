import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
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

const Login = ({ isOpenLogin, setIsOpenLogin }) => {
    return (
        <Dialog open={isOpenLogin} onOpenChange={() => setIsOpenLogin(false)} className="">
            <form>
                <DialogTrigger asChild>
                </DialogTrigger>
                <DialogContent showCloseButton={false} className="sm:max-w-[425px] p-4">
                    <Link className="mx-auto w-fit">
                        <img src="/images/logo/logo.png" alt="" className="h-10" />
                    </Link>
                    <DialogClose asChild className="absolute left-5 top-5">
                        <Close className="text-xl cursor-pointer hover:text-red-600/80 duration-300"/>
                    </DialogClose>
                    <DialogHeader>
                        <DialogTitle className="text-center">ورود</DialogTitle>
                        <AuthInput placeholder="ایمیل را وارد کنید" label="ایمیل"/>
                        <AuthInput placeholder="رمز عبور را وارد کنید" label="رمز عبور"/>
                        <PrimaryButton>ادامه</PrimaryButton>
                    </DialogHeader>
                    <DialogFooter className="w-full">
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}

export default Login