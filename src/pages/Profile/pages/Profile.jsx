import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'
import ProfileNavbar from '../Components/ProfileNavbar'
import { Outlet } from 'react-router-dom'

const Profile = () => {
    return (
        <>
            <Header />
            <section className='mt-12'>
                <div className="md:flex gap-8">
                    <ProfileNavbar />
                    <Outlet />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Profile