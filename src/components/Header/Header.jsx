import { useState } from "react";
import { Link } from "react-router-dom";
import icons from "@/icons";

import NavBar from "./NavBar";
import Login from "../auth/Login";

const Header = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  const { Menu, Search, Cart, UserLu } = icons;

  return (
    <header className="mt-6">
      <div className="container flex justify-between items-center">
        <div className="md:hidden">
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
            <Search className="text-xl" />
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

          <div
            onClick={() => setIsOpenLogin((prev) => !prev)}
            className="md:block bg-green-200 p-2 rounded-lg cursor-pointer hover:bg-primary-color
                            text-primary-color hover:text-green-200 duration-300"
          >
            <UserLu className="text-xl" />
          </div>
        </div>
      </div>

      <Login isOpenLogin={isOpenLogin} setIsOpenLogin={setIsOpenLogin} />
    </header>
  );
};

export default Header;
