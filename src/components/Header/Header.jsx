import { Link } from "react-router-dom";

import { IoIosMenu } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";
import { LuUser } from "react-icons/lu";
import { BiSearch } from "react-icons/bi";

import NavBar from "./NavBar";

const Header = () => {
    return (
        <header className="mt-6">
            <div className="container flex justify-between items-center">
                <div className="md:hidden">
                    <IoIosMenu className="text-3xl text-primary" />
                </div>

                <div className="w-fit flex justify-center">
                    <Link>
                        <img src="images/logo/logo.png" alt="" className="h-10" />
                    </Link>
                </div>

                <NavBar />

                <div className="flex items-center gap-2">
                    <div className="hidden md:block bg-green-200 p-2 rounded-lg cursor-pointer hover:bg-primary
                     text-primary hover:text-green-200 duration-300">
                        <BiSearch className="text-xl " />
                    </div>

                    <div className="md:block bg-green-200 p-2 rounded-lg cursor-pointer hover:bg-primary
                     text-primary hover:text-green-200 duration-300 relative">
                        <Link to="/cart">
                            <RiShoppingCartLine className="text-xl " />
                        </Link>
                        <div className="absolute bg-primary px-1.5 py-0.5 rounded-full -top-1.5 -right-1">
                            <span className="text-xs text-white block">۲</span>
                        </div>
                    </div>

                    <div className="md:block bg-green-200 p-2 rounded-lg cursor-pointer hover:bg-primary
                     text-primary hover:text-green-200 duration-300">
                        <Link >
                            <LuUser className="text-xl " />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header