import { useNavigate } from "react-router-dom"
import { css } from "@emotion/react"
import { QuizCategory } from "@/types/quizType"

interface ButtonProps {
  children: QuizCategory
  bgColor: string
}
const Button = ({ children, bgColor }: ButtonProps) => {
  const navigate = useNavigate()

  const handleCategoryClick = (category: string) => {
    navigate(`/${category}?questionId=1`)
  }
  return (
    <button css={btn(bgColor)} onClick={() => handleCategoryClick(children)}>
      {children}
    </button>
  )
}

export default Button

const btn = (bgColor: string) => css`
  width: 90%;
  height: 50px;
  background-color: #${bgColor};
  margin: 1.5em 0;
  border-radius: 1rem;
  font-size: 1em;
  font-weight: 700;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
  ${bgColor === "000" &&
  `
    color: #fff;
  `}
`
