import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import DesktopNavber from './components/DesktopNavber'
import MobileNavbar from './components/MobileNavbar'
import Cover from '@/components/Ui/Cover'
import store from "@/store/index";
import { useDispatch } from 'react-redux'
import { fetchUsers } from '@/store/usersSlice'


const AdminPanel = () => {
    const [isOpenMobileNav, setIsOpenMobileNav] = useState(false)

    const dispatch = useDispatch();
    const token = localStorage.getItem("accessToken");

    useEffect(() => {
        dispatch(fetchUsers(token))
    })

    return (
        <>
            <div className='lg:float-end lg:w-80/100'>
                <div className='container'>
                    <Header openMobileNav={() => setIsOpenMobileNav(true)} />
                    <Outlet />
                </div>
                <DesktopNavber />

                <MobileNavbar isOpen={isOpenMobileNav} closeNav={() => setIsOpenMobileNav(false)} />
                <Cover onClick={() => setIsOpenMobileNav(false)} coverStatus={isOpenMobileNav} />
            </div>
        </>
    )
}

export default AdminPanel