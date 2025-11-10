import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/Ui/alert-dialog"
import AdminButton from "./AdminButton"
import PrimaryButton from "@/components/Ui/Button/PrimaryButton"
import WhiteButton from "@/components/Ui/Button/WhiteButton"
import SecondaryButton from "@/components/Ui/Button/SecondaryButton"

export function AdminAlertDialog({ title, isOpenDialog, setIsOpenDialog,confirmAlert}) {
    const closeALertHandler = () => {
        setIsOpenDialog(false)
    }
    const confirmAlertHandler = () => {
        setIsOpenDialog(false)
        confirmAlert()
    }
    return (
        <AlertDialog open={isOpenDialog}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>

                    <AlertDialogAction asChild>
                        <PrimaryButton text="تایید" onClick={confirmAlertHandler}/>
                    </AlertDialogAction>

                    <AlertDialogCancel asChild>
                        <SecondaryButton text="لغو" onClick={closeALertHandler} />
                    </AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
