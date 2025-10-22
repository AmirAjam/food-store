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
import { toast, Toaster } from "sonner"
import AddressInput from "./AddressInput"
import PrimaryButton from "@/components/Ui/Button/PrimaryButton"
import { useForm } from "react-hook-form"
import { loginSchema } from "@/schema/authSchema"
import { yupResolver } from "@hookform/resolvers/yup"


const CreateAddrees = ({ isOpen, setIsOpen }) => {
    const { Close } = icons

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = (data) => {
        console.log("data => ", data)
    };

    const onError = (errors) => {
        const errorValues = Object.values(errors);
        if (errorValues.length > 0) {
            toast.error(errorValues[0].message);
        }
    }
    return (
        <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)} className="">
            <Toaster richColors position="top-left" className="font-Estedad-Medium!" />
            <DialogContent showCloseButton={false} className="sm:max-w-[425px] p-4">
                <DialogClose asChild className="absolute left-3 top-3">
                    <Close className="text-xl cursor-pointer hover:text-red-600/80 duration-300" />
                </DialogClose>

                <DialogHeader>
                    <DialogTitle className="text-center text-sm font-Estedad-Bold">ثبت آدرس</DialogTitle>
                </DialogHeader>

                <form className="mt-1 flex flex-col gap-5">

                    <AddressInput
                        placeHolder="نام و نام‌خانوادگی"
                        {...register("fullName")}
                        error={errors.fullName?.message} />

                    <AddressInput
                        placeHolder="شماره همراه"
                        {...register("phone")}
                        error={errors.phone?.message} />

                    <div className="sm:flex-row flex-col flex gap-5">

                        <AddressInput
                            placeHolder="استان"
                            {...register("province")}
                            error={errors.province?.message} />

                        <AddressInput
                            placeHolder="شهر"
                            {...register("city")}
                            error={errors.city?.message} />

                    </div>
                    <AddressInput
                        placeHolder="کد پستی"
                        {...register("postalCode")}
                        error={errors.postalCode?.message} />

                    <textarea className="border border-gray-300 focus-within:border-gray-400 
                    w-full rounded-sm text-sm p-2 resize-none outline-0"

                        placeHolder="آدرس دقیق"
                        {...register("addressLine")}
                        error={errors.addressLine?.message} />

                    <div className="text-sm">
                        <PrimaryButton text="ثبت آدرس" />
                    </div>
                </form>

                <DialogFooter className="items-center justify-center! w-42 mx-auto mt-2">
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default CreateAddrees