import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import AdminInput from "./AdminInput"
import PrimaryButton from "@/components/Ui/Button/PrimaryButton"
import SecondaryButton from "@/components/Ui/Button/SecondaryButton"

export function AdminSheet({children,isOpenSheet,setIsOpenSheet,onSubmitClick}) {
    return (
        <Sheet open={isOpenSheet} onOpenChange={setIsOpenSheet}>
            <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
            </SheetTrigger>
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
