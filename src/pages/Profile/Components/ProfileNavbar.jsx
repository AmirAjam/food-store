import useFetch from '@/hooks/useFetch';
import icons from '@/icons';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const ProfileNavbar = () => {
  const { Menu, Search, Cart, UserLu, ArrowDown, Card, Heart, Location } = icons;

  const [username, setUsername] = useState(null)
  const id = useSelector((state) => state.auth.userId);


  const { sendRequest } = useFetch();

  useEffect(() => {
    if (!id) return;
    sendRequest(`user/${id}`, "GET")
      .then(res => setUsername(res.user.firstname + " " + res.user.lastname))
  }, [])

  return (
    <div className='border-2 border-gray-300 w-1/4 p-2.5 rounded-lg'>
      <div className='flex gap-4 items-center border-b-2 border-gray-300 pb-3'>
        <div className='w-18 '>
          <img src="/images/user/user.jpg" alt="" className='rounded-full w-full' />
        </div>
        <p className='text-sm'>{username}</p>
      </div>
      <div className='mt-5'>
        <NavLink to="inforamtion" className={({ isActive }) =>
          `flex items-center gap-2 hover:text-primary-color duration-200`}>
          <UserLu className='text-xl'/>
          <span>پروفایل</span>
        </NavLink>
        <NavLink to="inforamtion" className={({ isActive }) =>
          `flex items-center gap-2 hover:text-primary-color duration-200`}>
          <UserLu className='text-xl'/>
          <span>پروفایل</span>
        </NavLink>
      </div>
    </div>
  )
}

export default ProfileNavbar