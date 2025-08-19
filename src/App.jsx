import { useRoutes } from "react-router-dom"
import { routes } from "./routes/routes"
import store from "./store";
import { setAccessToken, setUserId } from "./store/authSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("accessToken");
  const id = localStorage.getItem("userId");


  if (token) {
    store.dispatch(setAccessToken(token));
    store.dispatch(setUserId(id));
  }

  const router = useRoutes(routes)

  return (
    <>
      {router}
    </>
  )
}

export default App
