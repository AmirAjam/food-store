import Admin from "@/pages/Admin/Admin";
import Users from "@/pages/Admin/Pages/Users/Users";
import Home from "../pages/Home/Home";
import AdminRoute from "./AdminRoute";


export const routes = [
    { path: "/", element: <Home /> },
    {
        path: "/p-admin", element: <AdminRoute><Admin /></AdminRoute>,
        children: [
            {path: "/p-admin/users",element:<Users />}
        ]
    },

]