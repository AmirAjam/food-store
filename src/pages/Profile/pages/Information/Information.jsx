import React, { useState } from 'react'
import InformationInput from './InformationInput'
import SecondaryButton from '@/components/Ui/Button/SecondaryButton'
import icons from '@/icons'

const Information = () => {
    const [isDisabled,setIsDisabled] = useState(true)
    const { Edit } = icons
    return (
        <div className='mt-5 md:mt-0 md:w-1/2 border border-gray-300 rounded-lg p-5 '>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <InformationInput isDisabled={isDisabled} placeholder="نام" />
                <InformationInput isDisabled={isDisabled} placeholder="نام خانوادگی" />
                <InformationInput isDisabled={isDisabled} placeholder="آدرس ایمیل" />
            </div>
            <div className='w-fit text-xxs mx-auto mt-8'>
                <SecondaryButton onClick={() => setIsDisabled(false)}>
                    <div className='flex items-center px-4'>
                        <Edit className='text-lg' />
                        ویرایش اطلاعات شخصی
                    </div>
                </SecondaryButton>
            </div>
        </div>
    )
}

export default Information