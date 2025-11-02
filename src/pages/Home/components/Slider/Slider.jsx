import { Link } from 'react-router-dom';

import PrimaryButton from '../../../../components/Ui/Button/PrimaryButton';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css';

import icons from '@/icons';
import SliderItem from './SliderItem';
import MobileSliderItem from './MobileSliderItem';




const Slider = () => {
    const { ChevronLeft,ChevronRight } = icons
    return (
        <>
            <div className='select-none relative hidden md:block'>
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
                        <SliderItem title="تجربه غذای سالم و گیاهی به سبک ترخینه"/>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <SliderItem title="یک ماجراجویی آشپزی برای تمام حواس"/>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <SliderItem title="تجربه غذای سالم و گیاهی به سبک ترخینه"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SliderItem title="یک ماجراجویی آشپزی برای تمام حواس"/>
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
                    <ChevronRight className='text-4xl text-white' />
                </button>

                <button id='prev-slide' className='absolute top-1/2 left-4 -translate-y-1/2 z-10 cursor-pointer'>
                    <ChevronLeft className='text-4xl text-white' />
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
                        <MobileSliderItem title="یک ماجراجویی آشپزی برای تمام حواس"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <MobileSliderItem title="تجربه غذای سالم و گیاهی به سبک ترخینه"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <MobileSliderItem title="یک ماجراجویی آشپزی برای تمام حواس"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <MobileSliderItem title="تجربه غذای سالم و گیاهی به سبک ترخینه"/>
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