import PrimaryButton from '@/components/Ui/Button/PrimaryButton'
import React from 'react'
import { Link } from 'react-router-dom'

const SliderItem = ({title}) => {
    return (
        <div className='w-full'>
            <img src="../src/assets/images/Slider/1.png" alt="" className='w-full' />
            <div className='absolute inset-0 bg-black/60 flex items-center flex-col gap-8 lg:justify-center lg:gap-20'>
                <p className='text-xl font-Estedad-Bold text-[#E5F2E9] lg:text-3xl mt-5 lg:0'>{title}</p>
                <Link to="" className='text-sm w-42 block'>
                    <PrimaryButton text="سفارش آنلاین غذا"/>
                </Link>
            </div>
        </div>
    )
}

export default SliderItem