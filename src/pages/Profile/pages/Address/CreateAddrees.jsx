import AuthInput from "@/components/auth/AuthInput"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import icons from "@/icons"
import { Toaster } from "sonner"
import AddressInput from "./AddressInput"


const CreateAddrees = ({ isOpen, setIsOpen }) => {
    const { Close } = icons
    return (
        <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)} className="">
            <Toaster richColors position="top-left" className="font-Estedad-Medium!" />
            <DialogContent showCloseButton={false} className="sm:max-w-[425px] p-4">
                <DialogClose asChild className="absolute left-5 top-5">
                    <Close className="text-xl cursor-pointer hover:text-red-600/80 duration-300" />
                </DialogClose>

                <DialogHeader>
                    <DialogTitle className="text-center">ثبت آدرس</DialogTitle>
                </DialogHeader>

                <form className="mt-5">
                    <AddressInput placeHolder="عنوان آدرس" />
                </form>

                <DialogFooter className="items-center justify-center! w-42 mx-auto mt-2">
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default CreateAddrees