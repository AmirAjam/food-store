import { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import icons from "@/icons";

import NavBar from "./NavBar";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import { useSelector } from "react-redux";
import useFetch from "@/hooks/useFetch";
import SubMenu from "./SubMenu";
import MobileNavbar from "./MobileNavbar";
import Cover from "../Cover/Cover";

const Header = () => {
  const { sendRequest } = useFetch();
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenSignup, setIsOpenSignup] = useState(false);
  const [username, setUsername] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

  const { Menu, Search, Cart, UserLu, ArrowDown, Card, Heart, Location } = icons;


  const id = useSelector((state) => state.auth.userId);

  const subMenuList = [
    { id: 1, title: "پروفایل", slug: "profile", icon: <UserLu className="text-xl" /> },
    { id: 2, title: "پیگیری سفارش", slug: "orders", icon: <Card className="text-lg " /> },
    { id: 3, title: "علاقه‌مندی‌ها", slug: "favorites", icon: <Heart className="text-lg " /> },
    { id: 3, title: "آدرس‌های من", slug: "locations", icon: <Location className="text-lg " /> },
  ]

  useEffect(() => {
    if (!id) return;
    sendRequest(`user/${id}`, "GET")
      .then(res => setUsername(res.user.firstname + " " + res.user.lastname))
  }, [id])
  return (
    <header className="mt-6">
      <div className="container flex justify-between items-center relative">
        <div className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu className="text-3xl text-primary-color" />
        </div>

        <div className="w-fit flex justify-center">
          <Link to="/">
            <img src="images/logo/logo.png" alt="Logo" className="h-10" />
          </Link>
        </div>

        <NavBar />

        <div className="flex items-center gap-2">
          <div
            className="hidden md:block bg-green-200 p-2 rounded-lg cursor-pointer hover:bg-primary-color
                     text-primary-color hover:text-green-200 duration-300"
          >
            <Search className="text-xl stroke-1" />
          </div>

          <div
            className="md:block bg-green-200 p-2 rounded-lg cursor-pointer hover:bg-primary-color
                     text-primary-color hover:text-green-200 duration-300 relative"
          >
            <Link to="/cart">
              <Cart className="text-xl" />
            </Link>
            <div className="absolute bg-primary-color px-1.5 py-0.5 rounded-full -top-1.5 -right-1">
              <span className="text-xs text-white block">۲</span>
            </div>
          </div>

          {
            username ?
              <>
                <div onClick={() => setIsSubMenuOpen(prev => !prev)}
                  className="flex justify-center items-center gap-0.5bg-green-200 p-2 rounded-lg bg-green-200
                cursor-pointer hover:bg-primary-color text-primary-color hover:text-green-200 duration-300">
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
  );
};

export default Header;
