import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import PrimaryButton from "@/components/Ui/Button/PrimaryButton"
import SecondaryButton from "@/components/Ui/Button/SecondaryButton"
import { Link } from "react-router-dom"

const SuccessfulPayment = () => {
    return (
        <>
            <Header />
            <section className="h-[52vh] md:h-[80vh] flex items-center justify-center">
                <div className="container flex justify-center flex-col items-center">
                    <div>
                        <img className="md:hidden"
                            src="/images/successful-payment/mobile.png" alt="" />

                        <img className="hidden md:block"
                            src="/images/successful-payment/desktop.png" alt="" />
                    </div>
                    <p className="font-Estedad-Bold text-primary-color mt-8 md:mt-16 md:text-xl lg:text-4xl">
                        پرداخت شما با موفقیت انجام شد!
                    </p>
                    <div className="flex text-xs md:text-base w-full gap-5 mt-8 md:mt-16 justify-center">
                        <Link to="/" className="w-35 md:w-52">
                            <SecondaryButton text="بازگشت به صفحه اصلی" />
                        </Link>
                        <Link to="/profile/orders" className="w-35 md:w-52">
                            <PrimaryButton text="پیگیری سفارش" />
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default SuccessfulPayment