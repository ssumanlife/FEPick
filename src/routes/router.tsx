import LastPage from "@/pages/LastPage"
import Quiz from "@/components/Quiz"
import Home from "@/pages/Home"
import { createBrowserRouter } from "react-router-dom"
import Header from "@/components/Header"
import QuizMenu from "@/pages/QuizMenu"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:menu",
        element: <QuizMenu />,
        children: [
          {
            path: "/:menu/:title",
            element: <Quiz />,
          },
        ],
      },
      {
        path: "/clearQuiz",
        element: <LastPage />,
      },
    ],
  },
])
export default router
