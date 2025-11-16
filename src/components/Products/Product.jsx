import React, { useEffect, useState } from 'react'
import PrimaryButton from '../Ui/Button/PrimaryButton'
import icons from '@/icons'
import ProductCounter from './ProductCounter'
import { calFinalPrice } from '@/utils/utils'
import useFetch from '@/hooks/useFetch'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart} from '@/store/cartSlice'
import { addToFavorite, removeFromFavorite } from '@/store/favouriteSlice'
// import { addToFavorite, removeFromFavorite } from '@/store/favoriteSlice'

const Product = ({ productDetails, setOpenLogin }) => {
  const { Heart, FullHeart } = icons
  const dispatch = useDispatch()

  const [isUserLogin, setIsUserLogin] = useState(false)

  const cart = useSelector(state => state.cart.cart?.items)
  const favourite = useSelector(state => state.favorite.favourite)
  const id = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.accessToken)
  const { sendRequest } = useFetch();

  const [count, setCount] = useState()
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    if (!id) return;
    sendRequest(`user/${id}`, "GET")
      .then(res => res.success && setIsUserLogin(true))
  }, [id])

  const addProductToCart = () => {
    setCount(1)
    dispatch(addToCart({
      token,
      data: { productId: productDetails._id, quantity: 1 }
    }))
  }

  const addToFavoriteHandler = () => {
    dispatch(addToFavorite({
      token,
      productId: productDetails._id
    }))
    setIsFavorite(true)
  }
  const removeFromFavoriteHandler = () => {
    dispatch(removeFromFavorite({
      token,
      productId: productDetails._id
    }))
    setIsFavorite(false)
  }

  const findQuantityProduct = () => {
    const product = cart?.find(item => item.product._id === productDetails._id)
    if (product) {
      setCount(product.quantity)
    }
  }

  const findFavourite = () => {
    const product = favourite.find(item => item._id === productDetails._id)
    if (product) {
      setCount(setIsFavorite(true))
    }
  }

  useEffect(() => {
    findQuantityProduct()
    findFavourite()
  }, [])

  return (
    <div className='border-2 border-gray-300 rounded-lg overflow-hidden flex gap-2 justify-between 
    lg:max-w-105 max-w-full  md:max-w-80'>
      <div className='w-1/3'>

        <img src={`https://tarkhineh-api.liara.run/public/${productDetails.gallery[0]}`} alt=""
          className='h-full w-full object-cover' />
      </div>
      <div className='px-1 sm:px-2 py-2.5 w-2/3 flex flex-col justify-between'>
        <div className='flex justify-between items-center w-full'>
          <p className='text-sm md:text-base font-Estedad-Bold'>{productDetails.title}</p>
          {productDetails.quantity ?
            <div className='text-xs items-center gap-2 hidden md:flex'>
              <p className='text-gray-400 line-through'>{productDetails.price.toLocaleString()}</p>
              <span className='block bg-red-200 text-red-500 py-0.5 px-1.5 rounded-sm'>{productDetails.quantity} %</span>
            </div>
            :
            ""
          }
        </div>
        <div className='mt-2.5 text-xs md:flex gap-2'>
          <p className='line-clamp-1 md:line-clamp-2 leading-5 text-xs'>{productDetails.description}</p>
          {!productDetails.quantity ?
            <p className='text-nowrap text-sm lg:text-base font-Estedad-Medium mt-2.5'>
              {productDetails.price.toLocaleString()} تومان</p>
            :
            <div className='flex items-center mt-2.5 justify-around'>

              <p className='text-nowrap text-sm lg:text-base font-Estedad-Medium'>
                {calFinalPrice(productDetails.price, productDetails.quantity).toLocaleString()} تومان
              </p>

              <div className='text-xs items-center gap-2 flex mt-1 md:hidden'>
                <p className='text-gray-400 line-through'>{productDetails.price.toLocaleString()}</p>
                <span className='block bg-red-200 text-red-500 py-0.5 px-1.5 rounded-sm'>{productDetails.quantity} %</span>
              </div>
            </div>
          }
        </div>
        <div className='text-xs lg:text-sm flex justify-between items-center mt-2.5 gap-10'>
          <div className='w-2/3'>
            {count ?
              <ProductCounter
                setCount={setCount}
                count={count}
                productDetails={productDetails} />
              :
              <PrimaryButton text="افزودن به سبد خرید"
                onClick={() => isUserLogin ? addProductToCart() : setOpenLogin(true)} />
            }
          </div>
          {isFavorite ?
            <FullHeart onClick={removeFromFavoriteHandler}
              className='text-lg lg:text-xl text-red-500 cursor-pointer stroke-3' />
            :
            <Heart onClick={addToFavoriteHandler}
              className='text-xl lg:text-2xl text-gray-500 cursor-pointer hover:text-red-500 
              duration-300 stroke-3' />}
        </div>
      </div>
    </div>
  )
}

export default Product