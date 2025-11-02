import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React, { useEffect } from 'react'
import ProfileNavbar from '../Components/ProfileNavbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAddresses } from '@/store/addressSlice'


const Profile = () => {
    const id = useSelector((state) => state.auth.userId);
    const navigate = useNavigate()
    useEffect(() => {
        if (!id) {
            navigate("/")
            console.log(id)
        }
    }, [id])
    return (
        <>
            <Header />
            <section className='mt-12'>
                <div className="md:flex gap-8 md:min-h-80">
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