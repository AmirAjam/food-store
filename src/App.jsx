import { useRoutes } from "react-router-dom"
import { routes } from "./routes/routes"
import store from "./store";
import { setAccessToken, setUserId } from "./store/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "./store/categorySlice";


const App = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("accessToken");
  const id = localStorage.getItem("userId");



  if (token) {
    dispatch(setAccessToken(token));
    dispatch(setUserId(id));
  }

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  const router = useRoutes(routes)

  return (
    <>
      {router}
    </>
  )
}

export default App
