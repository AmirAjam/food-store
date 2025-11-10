import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import icons from "@/icons";

import NavBar from "./NavBar";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "@/hooks/useFetch";
import SubMenu from "./SubMenu";
import MobileNavbar from "./MobileNavbar";
import Cover from "../Cover/Cover";
import { getCart } from "@/store/cartSlice";

const Header = ({ openLogin = false }) => {
  const { sendRequest } = useFetch();
  const [isOpenLogin, setIsOpenLogin] = useState(openLogin);
  const [isOpenSignup, setIsOpenSignup] = useState(false);
  const [username, setUsername] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

  const dispatch = useDispatch()

  const id = useSelector((state) => state.auth.userId);
  const cart = useSelector((state) => state.cart?.cart?.items);
  const token = useSelector((state) => state.auth.accessToken)

  const { Menu, Search, Cart, UserLu, ArrowDown, Card, Heart, Location } = icons;

  const subMenuList = [
    { id: 1, title: "پروفایل", slug: "profile/information", icon: <UserLu className="text-xl" /> },
    { id: 2, title: "پیگیری سفارش", slug: "profile/orders", icon: <Card className="text-lg " /> },
    { id: 3, title: "علاقه‌مندی‌ها", slug: "profile/favourite", icon: <Heart className="text-lg " /> },
    { id: 3, title: "آدرس‌های من", slug: "profile/locations", icon: <Location className="text-lg " /> },
  ]

  useEffect(() => {
    dispatch(getCart({ token }))
  }, [])

  useEffect(() => {
    if (!id) {
      setUsername(null)
      return;
    }
    sendRequest(`user/${id}`, "GET")
      .then(res => setUsername(res.user.firstname + " " + res.user.lastname))
  }, [id])

  useEffect(() => {
    setIsOpenLogin(openLogin)
  }, [openLogin])

  return (
    <>
      <div className="bg-primary-color text-gray-200 p-3 text-sm md:text-base leading-7">
        <p>برای ورود به پنل ادمین لطفا با ایمیل
          <span className="text-white font-Estedad-Medium "> admin@gmail.com </span>
          و رمزعبور
          <span className="text-white font-Estedad-Medium"> Admin@123 </span>
          وارد شوید.
          <Link className="mr-5 text-gray-200">https://tarkhineh-view.liara.run/p-admin</Link>
        </p>
      </div>
      <header className="mt-5 sm:mt6 shadow-sm  pb-5">
        <div className="container flex justify-between items-center relative">
          <div className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="text-3xl text-primary-color" />
          </div>

          <div className="w-fit flex justify-center">
            <Link to="/">
              <img src="/images/logo/logo.png" alt="Logo" className="h-10" />
            </Link>
          </div>

          <NavBar />

          <div className="flex items-center gap-1.5 md:gap-4 md:w-40 justify-end">

            <NavLink to="/cart"
              className={({ isActive }) =>
                `md:block bg-green-200 p-2 rounded-lg cursor-pointer hover:bg-primary-color 
            text-primary-color hover:text-green-200 duration-300 relative 
            ${isActive ? "bg-primary-color text-green-200!" : ""}`}
            >
              <div>
                <Cart className="text-xl" />
              </div>
              <div className="absolute bg-primary-color px-1.5 py-0.5 rounded-full -top-1.5 -right-1">
                <span className="text-xs text-white block">{cart ? cart.length : 0}</span>
              </div>
            </NavLink>

            {
              username ?
                <>
                  <div onClick={() => setIsSubMenuOpen(prev => !prev)}
                    className="flex justify-center items-center gap-0.5bg-green-200 p-2 rounded-lg bg-green-200
                  cursor-pointer hover:bg-primary-color text-primary-color hover:text-green-200 
                  duration-300">
                    <UserLu className="text-xl" />
                    <ArrowDown className={`duration-200 ${isSubMenuOpen ? "rotate-180" : ""}`} />
                  </div>
                  <SubMenu list={subMenuList} isOpen={isSubMenuOpen} />
                </>
                :
                <div
                  onClick={() => setIsOpenLogin((prev) => !prev)}
                  className="md:block bg-green-200 p-2 rounded-lg cursor-pointer hover:bg-primary-color
                            text-primary-color hover:text-green-200 duration-300"
                >
                  <UserLu className="text-xl" />

                </div>
            }
          </div>
        </div>

        <Login isOpenLogin={isOpenLogin}
          setIsOpenLogin={setIsOpenLogin}
          setIsOpenSignup={setIsOpenSignup} />

        <Signup isOpenSignup={isOpenSignup}
          setIsOpenSignup={setIsOpenSignup}
          setIsOpenLogin={setIsOpenLogin} />

        <MobileNavbar closeMenu={() => setIsMobileMenuOpen(false)}
          isOpen={isMobileMenuOpen} />

        <Cover onClick={() => setIsMobileMenuOpen(false)}
          isShow={isMobileMenuOpen} />
      </header>
    </>
  );
};

export default Header;
