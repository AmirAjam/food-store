import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Slider from '../Home/components/Slider/Slider'
import MenuNavbar from './MenuNavbar'
import Input from '@/components/Ui/Input/Input'
import icons from '@/icons'
import SectionTitle from '@/components/Ui/SectionTitle'
import SecondaryButton from '@/components/Ui/Button/SecondaryButton'

const Menu = () => {
  const params = useParams()
  const categoryID = params.id

  console.log("params => ", params)
  console.log("categoryID => ", categoryID)
  const { Search, Cart } = icons
  return (
    <>
      <Header />
      <Slider />
      <MenuNavbar />
      <div className="container mt-5 md:hidden">
        <Input placeHolder="جستجو">  <Search className="text-lg" /> </Input>
      </div>
      <div className='container mt-8 flex items-center justify-between'>
        <h2 className='font-Estedad-Bold md:text-lg lg:text-xl'>غذاهای ایرانی</h2>
        <Link className='flex items-center gap-1 text-sm md:text-base border border-primary-color 
        p-1.5 md:px-4 rounded-sm text-primary-color hover:bg-primary-color hover:text-white duration-200'>
          <Cart className='text-lg' />
          <span>تکمیل خرید</span>
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default Menu