
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import PrimaryButton from "../Ui/Button/PrimaryButton"
import icons from "@/icons"
import AuthInput from "../auth/AuthInput"

const AddAddress = ({ isOpenAddress, setIsOpenAddress }) => {
    const { Close } = icons
    return (
        <Dialog open={isOpenAddress} onOpenChange={() => setIsOpenAddress(false)}>
            <DialogContent showCloseButton={false} className="sm:max-w-[425px] p-0">
                <DialogHeader className="bg-gray-300 rounded-lg p-3 -mt-1">
                    <DialogTitle className="text-center text-base">ثبت آدرس</DialogTitle>
                    <DialogClose asChild className="absolute left-1 top-1">
                        <Close className="text-2xl cursor-pointer hover:text-red-600/80 duration-300" />
                    </DialogClose>
                </DialogHeader>
                <div className="grid-cols-2 grid">
                    <AuthInput
                        placeholder="ایمیل"
                        label="ایمیل را وارد کنید" />
                    <AuthInput
                        placeholder="ایمیل"
                        label="ایمیل را وارد کنید" />
                </div>
                <DialogFooter className="items-center justify-center! w-42 mx-auto mt-2">
                    <PrimaryButton type="submit" text="ورود" />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AddAddress