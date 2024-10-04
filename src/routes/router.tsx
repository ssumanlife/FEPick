import Quiz from "@/components/Quiz"
import Home from "@/Home"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:category",
    element: <Quiz />,
  },
])
export default router
