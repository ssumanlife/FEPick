import { css } from "@emotion/react"
import { data } from "@/data/mockData"
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import Button from "@/components/Button"
import useNumOfCorrectStore from "@/stores/useNumOfCorrectStore"
import { useEffect } from "react"
import NotFound from "@/pages/NotFound"

const QuizMenu = () => {
  const { menu } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const resetCorrect = useNumOfCorrectStore((state) => state.resetCorrect)
  const isQuizRoute = location.pathname.startsWith(`/${menu}/`)

  useEffect(() => {
    resetCorrect()
  }, [isQuizRoute])

  const menuData = data[menu as keyof typeof data]
  if (!menuData) {
    return <NotFound />
  }

  return (
    <div css={quizMenuWrapper}>
      {!isQuizRoute &&
        menuData.map((menuItem) => (
          <Button
            key={menuItem.title}
            onClick={() => navigate(`/${menu}/${encodeURIComponent(menuItem.title)}?questionId=1`)}
          >
            {menuItem.title}
          </Button>
        ))}
      <Outlet />
    </div>
  )
}

export default QuizMenu

const quizMenuWrapper = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
