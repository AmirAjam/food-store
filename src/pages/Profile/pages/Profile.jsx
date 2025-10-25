import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React, { useEffect } from 'react'
import ProfileNavbar from '../Components/ProfileNavbar'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAddresses } from '@/store/addressSlice'


const Profile = () => {
    const token = useSelector((state) => state.auth.accessToken)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAddresses(token))
    })

    return (
        <>
            <Header />
            <section className='mt-12'>
                <div className="md:flex gap-8 md:h-80">
                    <ProfileNavbar />
                    <div className="container">
                        <Outlet />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Profile