import React from 'react'
import MessageUsInput from './MessageUsInput'
import SecondaryButton from '../Ui/Button/SecondaryButton'
import WhiteButton from '../Ui/Button/WhiteButton'

const MessageUs = () => {
    return (
        <>
            <h3 className='font-Estedad-Bold md:text-xl mb-5'>پیام به ترخینه </h3>
            <form action="" className='justify-between items-start flex gap-8'>
                <div className='flex flex-col gap-5'>
                    <MessageUsInput placeholder="نام و نام خانوادگی" />
                    <MessageUsInput placeholder="آدرس ایمیل" />
                    <MessageUsInput placeholder="موضوع" />
                </div>
                <div>
                    <textarea placeholder='پیام شما'
                        className='border border-gray-400 w-68 h-39 rounded-sm text-sm p-4 resize-none'></textarea>
                    <div className='flex justify-end text-sm text-gray-300'>
                        <span>۲۰۰/</span>
                        <span>۱</span>
                    </div>
                    <div className='flex justify-end mt-2'>
                        <WhiteButton text="ارسال پیام"/>
                    </div>
                </div>
            </form>
        </>
    )
}

export default MessageUs