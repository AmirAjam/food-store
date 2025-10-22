import SecondaryButton from '@/components/Ui/Button/SecondaryButton'
import EmptyCart from '@/pages/Cart/Components/EmptyCart'
import React, { useEffect, useState } from 'react'
import CreateAddrees from './CreateAddrees'
import { useDispatch } from 'react-redux'
import { getAddresses } from '@/store/addressSlice'

const Address = () => {
    const dispatch = useDispatch()

    const [isOpenAddress, setIsOpenAddress] = useState(false)

    useEffect(() => {
        dispatch(getAddresses(token))
    })
    return (
        <section className='w-full'>
            <div className='md:mt-0 mt-5'>
                <EmptyCart text="شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!">
                    <SecondaryButton onClick={() => setIsOpenAddress(true)}>
                        افزودن آدرس
                    </SecondaryButton>
                </EmptyCart>
                <CreateAddrees
                    isOpen={isOpenAddress}
                    setIsOpen={setIsOpenAddress} />
            </div>
            <CreateAddrees />
        </section>
    )
}

export default Address