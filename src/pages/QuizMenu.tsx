import { css } from "@emotion/react"
import { data } from "@/data/mockData"
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import Button from "@/components/Button"

const QuizMenu = () => {
  const { menu } = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const menuData = data[menu as keyof typeof data]
  if (!menuData) {
    return <p>데이터가 없습니다.</p>
  }
  const isQuizRoute = location.pathname.startsWith(`/${menu}/`)

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
