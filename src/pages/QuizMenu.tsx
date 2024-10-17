import { css } from "@emotion/react"
import { data } from "@/data/mockData"
import { Link, Outlet, useLocation, useParams } from "react-router-dom"

const QuizMenu = () => {
  const { menu } = useParams()
  const location = useLocation()

  const menuData = data[menu as keyof typeof data]
  if (!menuData) {
    return <p>데이터가 없습니다.</p>
  }
  const isQuizRoute = location.pathname.startsWith(`/${menu}/`)

  return (
    <div>
      {/* <p css={{ marginLeft: "2rem" }}>{menu?.toUpperCase()}</p> */}
      {!isQuizRoute &&
        menuData.map((menuItem) => (
          <div key={menuItem.title} css={menuItemBtn}>
            <Link to={`/${menu}/${encodeURIComponent(menuItem.title)}?questionId=1`}>{menuItem.title}</Link>
          </div>
        ))}
      <Outlet />
    </div>
  )
}

export default QuizMenu

const menuItemBtn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2em 0;
  a {
    display: flex;
    align-items: center;
    width: 80%;
    height: 3rem;
    padding: 0 2rem;
    box-sizing: border-box;
    border: 1px solid #666;
    border-radius: 50px;
    text-decoration: none;
    color: #fff;
    transition: transform 0.3s ease-in-out;
    :hover {
      transform: scale(1.05);
    }
  }
`
