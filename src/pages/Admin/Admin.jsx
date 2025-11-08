import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import DesktopNavber from './components/DesktopNavber'
import MobileNavbar from './components/MobileNavbar'
import Cover from '@/components/Ui/Cover'
import store from "@/store/index";
import { useDispatch } from 'react-redux'
import { fetchUsers } from '@/store/usersSlice'
import { getCategories } from '@/store/categorySlice'
import { getProducts } from '@/store/productSlice'
import { getCoupens } from '@/store/coupensSlice'
import { getAllOrders } from '@/store/orderSlice'


const AdminPanel = () => {
    const [isOpenMobileNav, setIsOpenMobileNav] = useState(false)
    const navigate=useNavigate()
    const dispatch = useDispatch();
    const token = localStorage.getItem("accessToken");

    useEffect(() => {
        dispatch(fetchUsers(token))
        dispatch(getProducts(token))
        dispatch(getCoupens(token))
        dispatch(getAllOrders(token))
        window.location.pathname === "/p-admin" && navigate("/p-admin/users")
    },[])

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