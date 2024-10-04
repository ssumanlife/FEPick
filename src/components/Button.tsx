import { useNavigate } from "react-router-dom"
import { css } from "@emotion/react"
import { QuizCategory } from "@/types/quizType"

interface ButtonProps {
  children: QuizCategory
}
const Button = ({ children }: ButtonProps) => {
  const navigate = useNavigate()

  const handleCategoryClick = (category: string) => {
    navigate(`/${category}?questionId=1`)
  }
  return (
    <button css={btn} onClick={() => handleCategoryClick(children)}>
      {children}
    </button>
  )
}

export default Button

const btn = css`
  width: 100%;
  height: 80px;
  background-color: #fff;
  margin: 1.5rem 0;
  border-radius: 1rem;
  font-size: 2em;
  font-weight: 700;
`
