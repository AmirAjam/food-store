import Admin from "@/pages/Admin/Admin";
import Users from "@/pages/Admin/Pages/Users/Users";
import Home from "../pages/Home/Home";
import AdminRoute from "./AdminRoute";
import Category from "@/pages/Admin/Pages/Users/Category/Category";


export const routes = [
    { path: "/", element: <Home /> },
    {
        path: "/p-admin", element: <AdminRoute><Admin /></AdminRoute>,
        children: [
            {path: "/p-admin/users",element:<Users />},
            {path: "/p-admin/category",element:<Category />}
        ]
    },

]