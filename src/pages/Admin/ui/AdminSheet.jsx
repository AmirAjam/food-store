import { Button } from "@/components/Ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/Ui/sheet"
import AdminInput from "./AdminInput"
import PrimaryButton from "@/components/Ui/Button/PrimaryButton"
import SecondaryButton from "@/components/Ui/Button/SecondaryButton"

export function AdminSheet({children,isOpenSheet,setIsOpenSheet,onSubmitClick}) {
    return (
        <Sheet open={isOpenSheet} onOpenChange={setIsOpenSheet}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>افزودن کاربر</SheetTitle>
                </SheetHeader>
                {children}
                <SheetFooter>
                    <PrimaryButton type="submit" text="افزودن" onClick={onSubmitClick} />
                    <SheetClose asChild>
                        <SecondaryButton text="بستن" onClick={()=>setIsOpenSheet(false)}/>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
