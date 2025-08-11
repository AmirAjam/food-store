import { IoIosArrowDown } from "react-icons/io";

import { NavLink } from "react-router-dom";



const NavBar = () => {
    return (
        <nav className="hidden md:block">
            <ul className="flex gap-6 text-sm lg:text-base ">
                <li className="duration-300 hover:text-primary">
                    <NavLink className="text-primary font-Estedad-Bold border-primary border-b-1 pb-1">صفحه اصلی</NavLink>
                </li>
                <li className="duration-300 hover:text-primary flex items-center gap-1">
                    <NavLink>شعبه</NavLink>
                    <IoIosArrowDown className="text-sm"/>
                </li>
                <li className="duration-300 hover:text-primary flex items-center gap-1">
                    <NavLink>منو</NavLink>
                    <IoIosArrowDown className="text-sm"/>
                </li>
                <li className="duration-300 hover:text-primary">
                    <NavLink>درباره ما</NavLink>
                </li>
                <li className="duration-300 hover:text-primary">
                    <NavLink>تماس با ما</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default  NavBar