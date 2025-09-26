import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'
import ProfileNavbar from './Components/ProfileNavbar'

const Profile = () => {
    return (
        <>
            <Header />
            <section className='mt-12'>
                <div className="container">
                    <ProfileNavbar />

                </div>
            </section>
            <Footer />
        </>
    )
}

export default Profile