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
import { useDispatch, useSelector } from "react-redux"
import { addAddress } from "@/store/addressSlice"


const CreateAddrees = ({ isOpen, setIsOpen }) => {

    console.log(isOpen)
    const { Close } = icons
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const token = useSelector((state) => state.auth.accessToken)
    const dispatch = useDispatch()


    const onSubmit = (data) => {
        dispatch(addAddress({ token,data }))
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
                    <DialogTitle 
                    className="text-center text-sm md:text-base font-Estedad-Bold">ثبت آدرس</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit, onError)}
                    className="mt-1 flex flex-col gap-5">

                    <AddressInput
                        placeholder="نام و نام‌خانوادگی"
                        {...register("fullName", {
                            required: "وارد کردن نام و نام‌خانوادگی الزامی است.",
                        })}
                        error={errors.fullName}
                    />

                    <AddressInput
                        placeholder="شماره همراه"
                        {...register("phone", {
                            required: "وارد کردن شماره همراه الزامی است.",
                            minLength: {
                                value: 11,
                                message: "شماره همراه باید ۱۱ رقم باشد.",
                            },
                            maxLength: {
                                value: 11,
                                message: "شماره همراه باید ۱۱ رقم باشد.",
                            },
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "فقط عدد مجاز است.",
                            },
                        })}
                        error={errors.phone}
                    />

                    <div className="sm:flex-row flex-col flex gap-5">

                        <AddressInput
                            placeholder="استان"
                            {...register("province", {
                                required: "وارد کردن استان الزامی است."
                            })}
                            error={errors.province} />

                        <AddressInput
                            placeholder="شهر"
                            {...register("city", {
                                required: "وارد کردن شهر الزامی است."
                            })}
                            error={errors.fullName} />

                    </div>

                    <AddressInput
                        placeholder="کد پستی"
                        {...register("postalCode", {
                            required: "وارد کردن کد پستی الزامی است."
                        })}
                        error={errors.postalCode} />

                    <textarea className="border border-gray-300 focus-within:border-gray-400 
                    w-full rounded-sm text-sm p-2 resize-none outline-0 h-22"

                        placeholder="آدرس دقیق"
                        {...register("addressLine", {
                            required: "وارد کردن آدرس الزامی است."
                        })}
                        error={errors.addressLine} />

                    <div className="text-sm">
                        <PrimaryButton type="submit" text="ثبت آدرس" />
                    </div>
                </form>

                <DialogFooter className="items-center justify-center! w-42 mx-auto mt-2">
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default CreateAddrees