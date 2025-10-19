import AddAddress from '@/components/Address/AddAddress'
import SecondaryButton from '@/components/Ui/Button/SecondaryButton'
import EmptyCart from '@/pages/Cart/Components/EmptyCart'
import React, { useState } from 'react'

const Address = () => {
    const [isOpenAddress, setIsOpenAddress] = useState(false)
    return (
        <section className='w-full'>
            <div className='md:mt-0 mt-5'>
                <EmptyCart text="شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!">
                    <SecondaryButton onClick={() => setIsOpenAddress(true)}>
                        افزودن آدرس
                    </SecondaryButton>
                </EmptyCart>
                <AddAddress
                    isOpenAddress={isOpenAddress}
                    setIsOpenAddress={setIsOpenAddress} />
            </div>
        </section>
    )
}

export default Address