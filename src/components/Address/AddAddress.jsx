
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import PrimaryButton from "../Ui/Button/PrimaryButton"

const AddAddress = ({isOpenAddress,setIsOpenAddress}) => {
    return (
        <Dialog open={isOpenAddress} onOpenChange={() => setIsOpenAddress(false)}>
            <DialogContent showCloseButton={false} className="sm:max-w-[425px] p-4">

                    <DialogClose asChild className="absolute left-5 top-5">
                        <Close className="text-xl cursor-pointer hover:text-red-600/80 duration-300" />
                    </DialogClose>

                    <DialogHeader>
                        <DialogTitle className="text-center">ورود</DialogTitle>
                    </DialogHeader>

                    <DialogFooter className="items-center justify-center! w-42 mx-auto mt-2">
                        <PrimaryButton type="submit" text="ورود" />
                    </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AddAddress