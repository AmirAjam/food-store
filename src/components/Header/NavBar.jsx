
import { NavLink } from "react-router-dom";
import SubMenu from "./SubMenu";
import { useSelector } from "react-redux";
import icons from "@/icons";
import { useEffect, useState } from "react";



const NavBar = () => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
    const categories = useSelector((state) => state.categories.categories)
    const { ArrowDown } = icons

    return (
        <nav className="hidden md:block">
            <ul className="flex gap-6 text-sm lg:text-base ">
                <li className="duration-300 hover:text-primary-color">
                    <NavLink className="text-primary-color font-Estedad-Bold border-primary-color border-b-1 pb-1">
                        صفحه اصلی
                    </NavLink>
                </li>
                <li className="relative">
                    <div onClick={() => setIsSubMenuOpen(prev => !prev)}
                        className="hover:text-primary-color duration-300 flex items-center gap-1 cursor-pointer">
                        <span className="">منو</span>
                        <ArrowDown className={`text-sm duration-200 ${isSubMenuOpen ? "rotate-180" : ""}`} />
                    </div>
                    <SubMenu list={categories} isOpen={isSubMenuOpen} />
                </li>
                <li className="duration-300 hover:text-primary-color">
                    <NavLink>درباره ما</NavLink>
                </li>
                <li className="duration-300 hover:text-primary-color">
                    <NavLink>تماس با ما</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar