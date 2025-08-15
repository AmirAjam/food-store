import PrimaryButton from '@/components/Ui/Button/PrimaryButton'
import React from 'react'
import { Link } from 'react-router-dom'

const MobileSliderItem = ({title}) => {
    return (
        <div className='w-full'>
            <img src="../src/assets/images/Slider/1-mobile.png" alt="" className='w-full' />
            <div className='absolute inset-0 bg-black/60 flex justify-center items-center flex-col gap-4'>
                <p className='font-Estedad-Bold text-[#E5F2E9] sm:text-2xl'>{title}</p>
                <div className='text-[10px] sm:text-sm sm:mt-10'>
                <Link to="" className='text-xs w-32 block'>
                    <PrimaryButton text="سفارش آنلاین غذا"/>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default MobileSliderItem