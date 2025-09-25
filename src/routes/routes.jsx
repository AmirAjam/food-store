import Admin from "@/pages/Admin/Admin";
import Users from "@/pages/Admin/Pages/Users/Users";
import Home from "../pages/Home/Home";
import AdminRoute from "./AdminRoute";
import Category from "@/pages/Admin/Pages/Category/Category";
import AddProduct from "@/pages/Admin/Pages/AddProduct/AddProduct";
import Products from "@/pages/Admin/Pages/Products/Products";
import Menu from "@/pages/Menu/Menu";
import Cart from "@/pages/Cart/Cart";


export const routes = [
    { path: "/", element: <Home /> },
    { path: "/menu/:id", element: <Menu /> },
    { path: "/cart", element: <Cart /> },
    {
        path: "/p-admin", element: <AdminRoute><Admin /></AdminRoute>,
        children: [
            { path: "/p-admin/users", element: <Users /> },
            { path: "/p-admin/add-product/:id", element: <AddProduct /> },
            { path: "/p-admin/add-product", element: <AddProduct /> },
            { path: "/p-admin/products", element: <Products /> },
            { path: "/p-admin/category", element: <Category /> },
        ]
    },

]