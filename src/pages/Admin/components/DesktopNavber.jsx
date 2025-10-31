
import { Link, NavLink } from 'react-router-dom';
import icons from '@/icons';

const DesktopNavber = () => {
    const {Cart2,AddProduct,Category,Users,Discount2} = icons
    return (
        <nav className="lg:block lg:fixed right-0 hidden top-0 bottom-0 bg-gray-300 w-1/5 py-4 px-5">
            <div className='flex justify-between items-center'>
                <Link to="/" className='px-10 mx-auto'>
                    <img className='size-3/4 mt-5' src="/public/images/logo/logo.png" alt="logo" />
                </Link>
            </div>
            <ul className='mt-10 flex flex-col gap-2'>
                <li className='flex items-center gap-4 '>
                    <NavLink
                        to="/p-admin"
                        end
                        className={({ isActive }) =>
                            `w-full flex gap-4 items-center py-3 px-2 hover:bg-gray-200
                            duration-300 rounded-lg ${isActive ? 'bg-gray-200' : ''}`
                        }
                    >
                        <Cart2 className='text-2xl' />
                        <span className='font-Vazirmatn-Medium'>داشبورد</span>
                    </NavLink>
                </li>
                <li className='flex items-center gap-4 '>
                    <NavLink
                        to="/p-admin/products"
                        className={({ isActive }) =>
                            `w-full flex gap-4 items-center py-3 px-2 hover:bg-gray-200
                            duration-300 rounded-lg ${isActive ? 'bg-gray-200' : ''}`
                        }
                    >
                        <Category className='text-2xl' />
                        <span className='font-Vazirmatn-Medium'>لیست محصولات</span>
                    </NavLink>
                </li>
                <li className='flex items-center gap-4 '>
                    <NavLink
                        to="/p-admin/add-product"
                        className={({ isActive }) =>
                            `w-full flex gap-4 items-center py-3 px-2 hover:bg-gray-200
                            duration-300 rounded-lg ${isActive ? 'bg-gray-200' : ''}`
                        }
                    >
                        <AddProduct className='text-2xl' />
                        <span className='font-Vazirmatn-Medium'>افزودن محصول</span>
                    </NavLink>
                </li>
                <li className='flex items-center gap-4 '>
                    <NavLink
                        to="/p-admin/category"
                        className={({ isActive }) =>
                            `w-full flex gap-4 items-center py-3 px-2 hover:bg-gray-200
                            duration-300 rounded-lg ${isActive ? 'bg-gray-200' : ''}`
                        }
                    >
                        <Category className='text-2xl' />
                        <span className='font-Vazirmatn-Medium'>دسته‌بندی</span>
                    </NavLink>
                </li>
                <li className='flex items-center gap-4 '>
                    <NavLink
                        to="/p-admin/users"
                        className={({ isActive }) =>
                            `w-full flex gap-4 items-center py-3 px-2 hover:bg-gray-200
                            duration-300 rounded-lg ${isActive ? 'bg-gray-200' : ''}`
                        }
                    >
                        <Users className='text-2xl' />
                        <span className='font-Vazirmatn-Medium'>کاربران</span>
                    </NavLink>
                </li>
                <li className='flex items-center gap-4 '>
                    <NavLink
                        to="/p-admin/discount"
                        className={({ isActive }) =>
                            `w-full flex gap-4 items-center py-3 px-2 hover:bg-gray-200
                            duration-300 rounded-lg ${isActive ? 'bg-gray-200' : ''}`
                        }
                    >
                        <Discount2 className='text-2xl' />
                        <span className='font-Vazirmatn-Medium'>کد های تخفیف</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default DesktopNavber