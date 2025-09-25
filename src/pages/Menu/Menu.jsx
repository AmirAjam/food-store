import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Slider from '../Home/components/Slider/Slider'
import MenuNavbar from './MenuNavbar'
import Input from '@/components/Ui/Input/Input'
import icons from '@/icons'
import SectionTitle from '@/components/Ui/SectionTitle'
import SecondaryButton from '@/components/Ui/Button/SecondaryButton'
import Products from '@/components/Products/Products'
import { getProductsCategoryApi } from '@/api/productApi'
import { useSelector } from 'react-redux'

const Menu = () => {
  const[openLogin,setOpenLogin] = useState(false)

  const categories = useSelector((state) => state.categories.categories)


  const [products, setProducts] = useState(null)
  const params = useParams()
  const categorySlug = params.id

  const { Search, Cart } = icons

  const fetchProducts = async (categoryID) => {
    try {
      const res = await getProductsCategoryApi(categoryID)
      setProducts(res.products)
    } catch (error) {
      console.error("خطا در گرفتن محصولات:", error)
    }
  }

  const findCategoryID = (categorySlug) => {
    const findCategory = categories.find(category => category.slug === categorySlug)
    fetchProducts(findCategory._id)
  }




  useEffect(() => {
    if (categories.length) {
      findCategoryID(categorySlug)
    }
  }, [categories,categorySlug])

  return (
    <>
      <Header openLogin={openLogin}/>
      <Slider />
      <MenuNavbar categories={categories} />
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
      <Products products={products} setOpenLogin={setOpenLogin}/>
      <Footer />
    </>
  )
}

export default Menu