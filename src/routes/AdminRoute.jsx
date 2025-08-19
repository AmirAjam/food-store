import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const { loading, sendRequest } = useFetch();
    const id = useSelector((state) => state.auth.userId);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        sendRequest(`user/${id}`, "GET")
            .then(res => {
                if (res.user) setUserRole(res.user.role);
            })
    }, [id]);

    if (userRole && loading && id) return <div>Loading...</div>; // میتونی spinner بذاری

    if (userRole !== "admin" && !loading) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default AdminRoute;
