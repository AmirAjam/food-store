import Admin from "@/pages/Admin/Admin";
import Users from "@/pages/Admin/Pages/Users/Users";
import Home from "../pages/Home/Home";
import AdminRoute from "./AdminRoute";
import Category from "@/pages/Admin/Pages/Category/Category";
import AddProduct from "@/pages/Admin/Pages/AddProduct/AddProduct";
import Products from "@/pages/Admin/Pages/Products/Products";
import Menu from "@/pages/Menu/Menu";
import Cart from "@/pages/Cart/Cart";
import Profile from "@/pages/Profile/pages/Profile";
import Information from "@/pages/Profile/pages/Information/Information";
import Address from "@/pages/Profile/pages/Address/Address";
import CompleteInformation from "@/pages/CompleteInformation/CompleteInformation";
import Payment from "@/pages/Payment/Payment";
import Favourites from "@/pages/Profile/pages/Favourites/Favourites";
import AboutUs from "@/pages/AboutUs/AboutUs";
import FAQ from "@/pages/FAQ/FAQ";
import Coupen from "@/pages/Admin/Pages/Coupen/Coupen";
import AllOrders from "@/pages/Profile/pages/Orders/AllOrders";
import SuccessfulPayment from "@/pages/SuccessfulPayment/SuccessfulPayment";
import Orders from "@/pages/Admin/Pages/Orders/Orders";


export const routes = [
    { path: "/", element: <Home /> },
    { path: "/menu/:id", element: <Menu /> },
    { path: "/cart", element: <Cart /> },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/FAQ", element: <FAQ /> },
    { path: "/complete-information", element: <CompleteInformation /> },
    { path: "/payment/:addressId", element: <Payment /> },
    { path: "/successful-payment", element: <SuccessfulPayment /> },
    {
        path: "/profile", element: <Profile />,
        children: [
            { path: "/profile/information", element: <Information /> },
            { path: "/profile/locations", element: <Address /> },
            { path: "/profile/favourite", element: <Favourites /> },
            { path: "/profile/orders", element: <AllOrders /> },
        ]
    },
    {
        path: "/p-admin", element: <AdminRoute><Admin /></AdminRoute>,
        children: [
            { path: "/p-admin/users", element: <Users /> },
            { path: "/p-admin/add-product/:id", element: <AddProduct /> },
            { path: "/p-admin/add-product", element: <AddProduct /> },
            { path: "/p-admin/products", element: <Products /> },
            { path: "/p-admin/category", element: <Category /> },
            { path: "/p-admin/discount", element: <Coupen /> },
            { path: "/p-admin/orders", element: <Orders /> },
        ]
    },

]