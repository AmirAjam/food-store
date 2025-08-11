import { Link } from 'react-router-dom';

import PrimaryButton from '../../../components/Ui/Button/PrimaryButton';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css';

import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";


const Slider = () => {

    return (
        <>
            <div className='mt-6 select-none relative hidden md:block'>
                <Swiper
                    pagination={{
                        el: "#pagination-slider",
                        clickable: true,
                        bulletClass: 'my-bullet',
                        bulletActiveClass: 'my-bullet-active'
                    }}

                    navigation={{
                        nextEl: '#next-slide',
                        prevEl: '#prev-slide',
                    }}

                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}

                    loop={true}

                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <div className='w-full'>
                            <img src="../src/assets/images/Slider/1.png" alt="" className='w-full' />
                            <div className='absolute inset-0 bg-black/60 flex items-center flex-col gap-8 lg:justify-center lg:gap-20'>
                                <p className='text-xl font-Estedad-Bold text-[#E5F2E9] lg:text-3xl mt-5 lg:0'>یک ماجراجویی آشپزی برای تمام حواس</p>
                                <div className='text-sm'>
                                    <PrimaryButton>
                                        <Link>سفارش آنلاین غذا</Link>
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='w-full'>
                            <img src="../src/assets/images/Slider/1.png" alt="" className='w-full' />
                            <div className='absolute inset-0 bg-black/60 flex items-center flex-col gap-8 lg:justify-center lg:gap-20'>
                                <p className='text-xl font-Estedad-Bold text-[#E5F2E9] lg:text-3xl mt-5 lg:0'>تجربه غذای سالم و گیاهی به سبک ترخینه</p>
                                <div className='text-sm'>
                                    <PrimaryButton>
                                        <Link>سفارش آنلاین غذا</Link>
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='w-full'>
                            <img src="../src/assets/images/Slider/1.png" alt="" className='w-full' />
                            <div className='absolute inset-0 bg-black/60 flex items-center flex-col gap-8 lg:justify-center lg:gap-20'>
                                <p className='text-xl font-Estedad-Bold text-[#E5F2E9] lg:text-3xl mt-5 lg:0'>یک ماجراجویی آشپزی برای تمام حواس</p>
                                <div className='text-sm'>
                                    <PrimaryButton>
                                        <Link>سفارش آنلاین غذا</Link>
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='w-full'>
                            <img src="../src/assets/images/Slider/1.png" alt="" className='w-full' />
                            <div className='absolute inset-0 bg-black/60 flex items-center flex-col gap-8 lg:justify-center lg:gap-20'>
                                <p className='text-xl font-Estedad-Bold text-[#E5F2E9] lg:text-3xl mt-5 lg:0'>تجربه غذای سالم و گیاهی به سبک ترخینه</p>
                                <div className='text-sm'>
                                    <PrimaryButton>
                                        <Link>سفارش آنلاین غذا</Link>
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className='bg-black/20 absolute left-1/2 -translate-x-1/2 bottom-0 z-20'>
                    <div id='pagination-slider' className='absolute z-30 flex bottom-2 left-1/2 -translate-x-1/2 
                w-36! justify-center'>
                    </div>
                    <div className='absolute z-20 w-36 bottom-0 left-1/2 -translate-x-1/2'>
                        <img src="../src/assets/images/Slider/shape.png" alt="" />
                    </div>
                </div>

                <button id='next-slide' className='absolute top-1/2 right-4 -translate-y-1/2 z-10 cursor-pointer'>
                    <FaChevronRight className='text-4xl text-white' />
                </button>

                <button id='prev-slide' className='absolute top-1/2 left-4 -translate-y-1/2 z-10 cursor-pointer'>
                    <FaChevronLeft className='text-4xl text-white' />
                </button>
            </div>

            <div className='mt-6 select-none relative md:hidden'>
                <Swiper
                    pagination={{
                        el: "#pagination-slider-mobile",
                        clickable: true,
                        bulletClass: 'my-bullet',
                        bulletActiveClass: 'my-bullet-active'
                    }}

                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}

                    loop={true}

                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <div className='w-full'>
                            <img src="../src/assets/images/Slider/1-mobile.png" alt="" className='w-full' />
                            <div className='absolute inset-0 bg-black/60 flex justify-center items-center flex-col gap-4'>
                                <p className='font-Estedad-Bold text-[#E5F2E9] sm:text-2xl'>یک ماجراجویی آشپزی برای تمام حواس</p>
                                <div className='text-[10px] sm:text-sm sm:mt-10'>
                                    <PrimaryButton>
                                        <Link>سفارش آنلاین غذا</Link>
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='w-full'>
                            <img src="../src/assets/images/Slider/1-mobile.png" alt="" className='w-full' />
                            <div className='absolute inset-0 bg-black/60 flex justify-center items-center flex-col gap-4'>
                                <p className='font-Estedad-Bold text-[#E5F2E9] sm:text-2xl'>تجربه غذای سالم و گیاهی به سبک ترخینه</p>
                                <div className='text-[10px] sm:text-sm sm:mt-10'>
                                    <PrimaryButton>
                                        <Link>سفارش آنلاین غذا</Link>
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='w-full'>
                            <img src="../src/assets/images/Slider/1-mobile.png" alt="" className='w-full' />
                            <div className='absolute inset-0 bg-black/60 flex justify-center items-center flex-col gap-4'>
                                <p className='font-Estedad-Bold text-[#E5F2E9] sm:text-2xl'>یک ماجراجویی آشپزی برای تمام حواس</p>
                                <div className='text-[10px] sm:text-sm sm:mt-10'>
                                    <PrimaryButton>
                                        <Link>سفارش آنلاین غذا</Link>
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='w-full'>
                            <img src="../src/assets/images/Slider/1-mobile.png" alt="" className='w-full' />
                            <div className='absolute inset-0 bg-black/60 flex justify-center items-center flex-col gap-4'>
                                <p className='font-Estedad-Bold text-[#E5F2E9] sm:text-2xl'>تجربه غذای سالم و گیاهی به سبک ترخینه</p>
                                <div className='text-[10px] sm:text-sm sm:mt-10'>
                                    <PrimaryButton>
                                        <Link>سفارش آنلاین غذا</Link>
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className='bg-black/20 absolute left-1/2 -translate-x-1/2 bottom-0 z-20'>
                    <div id='pagination-slider-mobile' className='absolute z-30 flex bottom-2 left-1/2 -translate-x-1/2 
                        w-28! justify-center'>
                    </div>
                    <div className='absolute z-20 w-28 bottom-0 left-1/2 -translate-x-1/2'>
                        <img src="../src/assets/images/Slider/shape.png" alt="" />
                    </div>
                </div>
            </div>
        </>

    );
};

export default Slider