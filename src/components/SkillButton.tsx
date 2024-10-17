import { useNavigate } from "react-router-dom"
import { css } from "@emotion/react"
import cssImage from "@/assets/css.png"
import htmlImage from "@/assets/html.png"
import javascriptImage from "@/assets/javascript.png"
import nextjsImage from "@/assets/nextjs.png"
import reactImage from "@/assets/react.png"
import typescript from "@/assets/typescript.png"

interface SkillButtonProps {
  menu: string
}
const SkillButton = ({ menu }: SkillButtonProps) => {
  const navigate = useNavigate()

  const handleCategoryClick = () => {
    navigate(`/${menu}`)
  }

  let bgColor = ""
  let image = ""
  switch (menu) {
    case "javascript":
      bgColor = "fbe74f"
      image = javascriptImage
      break
    case "html":
      bgColor = "f96238"
      image = htmlImage
      break
    case "css":
      bgColor = "36a9fb"
      image = cssImage
      break
    case "react":
      bgColor = "000"
      image = reactImage
      break
    case "typescript":
      bgColor = "3178C6"
      image = typescript
      break
    case "nextJS":
      bgColor = "fff"
      image = nextjsImage
      break
    default:
      bgColor = "transparent"
  }

  return (
    <>
      <button css={btn(bgColor, image)} onClick={handleCategoryClick}></button>
    </>
  )
}

export default SkillButton

const btn = (bgColor: string, image: string) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 140px;
  height: 140px;
  background-color: #${bgColor};
  background-image: url(${image});
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: content-box;
  background-position: center;
  border-radius: 10px;
  font-size: 1em;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  position: relative;
  color: #fff;

  :hover {
    transform: scale(1.1);
  }
  ${bgColor === "fff" &&
  `
    background-size:105px 100px;
    padding:10px;
  `}
  ${bgColor === "000" &&
  `
    background-size:105px 103px;
    padding:8px;
  `}
    ${bgColor === "f96238" &&
  `
    background-size:90px 90px;
    padding:22px 15px 10px;
  `}
    ${bgColor === "fbe74f" &&
  `
    background-size:110px 95px;
    padding:20px 5px 10px;
  `}
    ${bgColor === "36a9fb" &&
  `
    background-size:105px 90px;
    padding:22px 8px 10px;
  `}
`
