import { useNavigate } from "react-router-dom"
import { css } from "@emotion/react"
import cssImage from "@/assets/css.png"
import htmlImage from "@/assets/html.png"
import javascriptImage from "@/assets/javascript.png"
import nextjsImage from "@/assets/nextjs.png"
import reactImage from "@/assets/react.png"
import typescript from "@/assets/typescript.png"

interface ButtonProps {
  menu: string
  number: string
}
const Button = ({ menu, number }: ButtonProps) => {
  const navigate = useNavigate()

  const handleCategoryClick = () => {
    navigate(`/${menu}-${number}?questionId=1`)
  }

  let bgColor = ""
  let image = ""
  switch (menu) {
    case "Javascript":
      bgColor = "fbe74f"
      image = javascriptImage
      break
    case "HTML5":
      bgColor = "f96238"
      image = htmlImage
      break
    case "CSS3":
      bgColor = "36a9fb"
      image = cssImage
      break
    case "React":
      bgColor = "000"
      image = reactImage
      break
    case "Typescript":
      bgColor = "3178C6"
      image = typescript
      break
    case "NextJS":
      bgColor = "fff"
      image = nextjsImage
      break
    default:
      bgColor = "transparent"
  }

  return (
    <>
      <button css={btn(bgColor, image, number)} onClick={handleCategoryClick}></button>
    </>
  )
}

export default Button

const btn = (bgColor: string, image: string, number: string) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 120px;
  height: 120px;
  background-color: #${bgColor};
  background-image: url(${image});
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: content-box;
  border-radius: 50%;
  font-size: 1em;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  transform-style: preserve-3d;
  position: relative;
  color: #fff;
  backface-visibility: hidden;
  ::after {
    content: "${number}";
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #${bgColor};
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    transform: rotateY(-180deg);
    backface-visibility: hidden;
    z-index: 1;
    font-size: 2em;
    font-weight: bold;
  }
  :hover {
    /* transform: scale(1.1); */
    transform: rotateY(180deg);
  }
  ${bgColor === "fff" &&
  `
    background-size:105px 100px;
    padding:10px;
    color:#000
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
