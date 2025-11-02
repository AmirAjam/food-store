import useFetch from '@/hooks/useFetch';
import icons from '@/icons';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProfileNavbarItem from './ProfileNavbarItem';
import { logout } from '@/store/authSlice';
import { useNavigate } from 'react-router-dom';
import { cartLogout, getCart } from '@/store/cartSlice';

const ProfileNavbar = () => {
  const { LogOut, UserLu, Card, Heart, Location } = icons;

  const [username, setUsername] = useState(null)
  const id = useSelector((state) => state.auth.userId);


  const { sendRequest } = useFetch();

  const NavbarList = [
    { id: 1, title: "پروفایل", slug: "/profile/information", icon: UserLu },
    { id: 2, title: "پیگیری سفارش", slug: "/profile/orders", icon: Card },
    { id: 3, title: "علاقه‌مندی‌ها", slug: "/profile/favourite", icon: Heart },
    { id: 4, title: "آدرس‌های من", slug: "/profile/locations", icon: Location },
  ]

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(cartLogout());
    navigate("/")
    
  }

  useEffect(() => {
    if (!id) return;
    sendRequest(`user/${id}`, "GET")
      .then(res => setUsername(res.user.firstname + " " + res.user.lastname))
  }, [])

  return (
    <div className="container md:w-1/3 lg:w-1/4 h-full">
      <nav className='border-2 border-gray-300 rounded-lg p-2.5 h-full' >
        <div className="conytainer">
          <div className='flex gap-4 items-center border-b-2 border-gray-300 pb-3'>
            <div className='w-10 md:w-18 '>
              <img src="/images/user/user.jpg" alt="" className='rounded-full w-full' />
            </div>
            <p className='text-sm'>{username}</p>
          </div>
          <div className='mt-2 '>
            {NavbarList.map(item => <ProfileNavbarItem
              key={item.id}
              item={item} />)}


            <div onClick={logoutHandler}
              className="text-red-500 flex items-center px-2 py-1 mt-2 hover:text-red-700 cursor-pointer
        duration-200 gap-2 mr-1">
              <LogOut className='text-lg' />
              <span>خروج</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default ProfileNavbar