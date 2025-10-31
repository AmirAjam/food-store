import Products from '@/components/Products/Products';
import { getFavorite } from '@/store/favouriteSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Favourites = () => {
  const [openLogin, setOpenLogin] = useState(false)

  const dispatch = useDispatch()
  const favourite = useSelector(state => state.favorite.favourite)
  const id = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.accessToken)


  useEffect(() => {
    dispatch(getFavorite({id,token}))
  }, [])

  useEffect(() => {
    console.log(favourite)
  }, [favourite])
  return (
    <section className='mt-5 md:mt-0 md:w-full border border-gray-300 rounded-lg pb-8'>
      <Products products={favourite}/>
    </section>
  )
}

export default Favourites