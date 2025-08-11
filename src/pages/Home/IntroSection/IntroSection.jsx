import WhiteButton from "../../../components/Ui/Button/WhiteButton"

import { CiUser } from "react-icons/ci";

import { FaChevronLeft } from "react-icons/fa6";
import { LuChartLine } from "react-icons/lu";
import { PiMaskHappyLight } from "react-icons/pi";
import { IoFastFoodOutline } from "react-icons/io5";

const IntroSection = () => {
    return (
        <section className="bg-[url(/src/assets/images/Intro/Introduction-mobile.png)] 
        md:bg-[url(/src/assets/images/Intro/about.png)] 
        relative py-8 bg-no-repeat bg-cover">

            <div className="container relative z-10 text-white md:flex justify-between items-center">
                <div className="md:w-1/2 lg:1/3">
                    <h2 className="font-Estedad-Bold text-xl">رستوران‌های زنجیره‌ای ترخینه</h2>
                    <p className="text-justify text-xs leading-6 mt-2 lg:text-base lg:leading-10">
                        مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.
                    </p>
                    <div className="mt-5">
                        <WhiteButton>
                            اطلاعات بیشتر
                            <FaChevronLeft />
                        </WhiteButton>
                    </div>
                </div>

                <div className="mt-5">
                    <div className="flex justify-between">
                        <div className="flex justify-center items-center flex-col w-44">
                            <CiUser className="text-4xl lg:text-5xl" />
                            <p className="text-xs  mt-2 lg:text-sm">پرسنلی مجرب و حرفه‌ای</p>
                        </div>

                        <div className="flex justify-center items-center flex-col w-44">
                            <LuChartLine className="text-4xl lg:text-5xl" />
                            <p className="text-xs lg:text-sm  mt-2">کیفیت بالای غذاها</p>
                        </div>
                    </div>
                    <div className="flex justify-between mt-8 lg:mt-12">
                        <div className="flex justify-center items-center flex-col w-44">
                            <PiMaskHappyLight className="text-4xl lg:text-5xl" />
                            <p className="text-xs lg:text-sm mt-2">محیطی دلنشین و آرام</p>
                        </div>

                        <div className="flex justify-center items-center flex-col w-44">
                            <IoFastFoodOutline className="text-4xl lg:text-5xl" />
                            <p className="text-xs lg:text-sm mt-2">منوی متنوع</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="inset-0 bg-black/60 absolute"></div>
        </section>
    )
}

export default IntroSection