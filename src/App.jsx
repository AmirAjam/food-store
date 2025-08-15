import { useRoutes } from "react-router-dom"
import { routes } from "./routes/routes"
import store from "./store";
import { setAccessToken, setUser, setUserId } from "./store/authSlice";
import { useEffect } from "react";
import useFetch from "./hooks/useFetch";

const App = () => {
  const token = localStorage.getItem("accessToken");
  const id = localStorage.getItem("userId");

  if (token) {
    store.dispatch(setAccessToken(token));
    store.dispatch(setUserId(id));
  }


  useEffect(() => {
  }, [])
  const router = useRoutes(routes)

  return (
    <>
      {router}
    </>
  )
}

export default App
