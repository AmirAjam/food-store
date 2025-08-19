import icons from '@/icons';
import { Link, NavLink } from 'react-router-dom';


const MobileNavbar = ({ isOpen, closeNav }) => {
    const { Dashboard, AddProduct, Category, Users,Cart2,Close } = icons
    return (
        <div className={`lg:hidden fixed z-50 inset-y-0 bg-gray-300 w-62 py-4 px-5 duration-300 ${isOpen ? "right-0" : "-right-200"}`}>
            <div className='flex justify-between items-center'>
                <Link to="/" className='w-25'>
                    <img className='' src="/public/images/logo/logo.png" alt="logo" />
                </Link>
                <Close onClick={closeNav} className='text-3xl' />
            </div>
            <ul className='mt-10 flex flex-col gap-4'>
                <li className=''>
                    <NavLink onClick={closeNav} to="/p-admin" end className={({ isActive }) =>
                        `flex items-center gap-2 py-2 px-2 rounded-lg ${isActive && "bg-dark"}`
                    }>
                        <Dashboard className='text-2xl' />
                        <span className='font-Vazirmatn-Medium'>داشبورد</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={closeNav} to="/p-admin/product-list" className={({ isActive }) =>
                        `flex items-center gap-2 py-2 px-2 rounded-lg ${isActive && "bg-dark"}`
                    }>
                        <Cart2 className='text-2xl' />
                        <span className='font-Vazirmatn-Medium'>لیست محصولات</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink onClick={closeNav} to="/p-admin/add-product" className={({ isActive }) =>
                        `flex items-center gap-2 py-2 px-2 rounded-lg ${isActive && "bg-dark"}`
                    }>
                        <AddProduct className='text-2xl' />
                        <span className='font-Vazirmatn-Medium'>افزودن محصول</span>
                    </NavLink>

                </li>
                <li>
                    <NavLink onClick={closeNav} to="/p-admin/category" className={({ isActive }) =>
                        `flex items-center gap-2 py-2 px-2 rounded-lg ${isActive && "bg-dark"}`
                    }>
                        <Category className='text-2xl' />
                        <span className='font-Vazirmatn-Medium'>دسته‌بندی</span>
                    </NavLink>

                </li>
                <li>
                    <NavLink onClick={closeNav} to="/p-admin/users" className={({ isActive }) =>
                        `flex items-center gap-2 py-2 px-2 rounded-lg ${isActive && "bg-dark"}`
                    }>
                        <Users className='text-2xl' />
                        <span className='font-Vazirmatn-Medium'>کاربران</span>
                    </NavLink>

                </li>
            </ul>
        </div >
    )
}

export default MobileNavbar