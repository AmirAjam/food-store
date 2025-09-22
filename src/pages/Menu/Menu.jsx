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
  const { Search } = icons
  return (
    <>
      <Header />
      <Slider />
      <MenuNavbar />
      <div className="container mt-5 md:hidden">
        <Input placeHolder="جستجو">  <Search className="text-lg" /> </Input>
      </div>
      <div className='container mt-8 flex items-center'>
        <h2 className='font-Estedad-Bold'>غذاهای ایرانی</h2>
        <Link className='text-sm border border-primary-color p-1 rounded-sm text-primary-color'>
          <span>تکمیل خرید</span>
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default Menu