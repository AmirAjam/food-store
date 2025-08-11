import { useRoutes } from "react-router-dom"

import Home from "./pages/Home"
import {routes} from "./routes/routes"

const App =() => {

  const router = useRoutes(routes)

  return (
    <>
      {router}
    </>
  )
}

export default App
