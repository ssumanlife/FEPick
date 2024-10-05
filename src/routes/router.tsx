import LastPage from "@/pages/LastPage"
import Quiz from "@/components/Quiz"
import Home from "@/pages/Home"
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
  {
    path: "/clearQuiz",
    element: <LastPage />,
  },
])
export default router
