import SecondaryButton from '@/components/Ui/Button/SecondaryButton'
import EmptyCart from '@/pages/Cart/Components/EmptyCart'
import React, { useEffect, useState } from 'react'
import CreateAddrees from './CreateAddrees'
import { useSelector } from 'react-redux'
import Addresses from './Addresses'
import PrimaryButton from '@/components/Ui/Button/PrimaryButton'

const Address = () => {

    const [isOpenAddress, setIsOpenAddress] = useState(false)
    const addresses = useSelector((state) => state.address.addresses)

    console.log(addresses)

    useEffect(() => {
        console.log(isOpenAddress)
    }, [isOpenAddress])

    return (
        <section className='w-full'>
            {addresses.length ?
                <Addresses addresses={addresses} setIsOpenAddress={setIsOpenAddress} />
                :
                <div className='md:mt-0 mt-5'>
                    <EmptyCart text="شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!">
                        <SecondaryButton onClick={() => setIsOpenAddress(true)}>
                            افزودن آدرس
                        </SecondaryButton>
                    </EmptyCart>
                </div>
            }

            <CreateAddrees
                isOpen={isOpenAddress}
                setIsOpen={setIsOpenAddress} />
        </section>
    )
}

export default Address