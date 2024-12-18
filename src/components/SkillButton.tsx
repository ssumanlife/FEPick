import { useNavigate } from "react-router-dom"
import { css } from "@emotion/react"
import cssImage from "@/assets/css.png"
import htmlImage from "@/assets/html.png"
import javascriptImage from "@/assets/javascript.png"
import nextjsImage from "@/assets/nextjs.png"
import reactImage from "@/assets/react.png"
import typescript from "@/assets/typescript.png"

const SKILL_DATA = {
  javascript: { bgColor: "fbe74f", image: javascriptImage },
  html: { bgColor: "f96238", image: htmlImage },
  css: { bgColor: "36a9fb", image: cssImage },
  react: { bgColor: "000", image: reactImage },
  typescript: { bgColor: "3178C6", image: typescript },
  nextJS: { bgColor: "fff", image: nextjsImage },
}

interface SkillButtonProps {
  menu: keyof typeof SKILL_DATA
}

const SkillButton = ({ menu }: SkillButtonProps) => {
  const navigate = useNavigate()

  const handleCategoryClick = () => {
    navigate(`/${menu}`)
  }

  const skill = SKILL_DATA[menu]
  if (!skill) return null

  return (
    <>
      <button css={btn(skill.bgColor, skill.image)} onClick={handleCategoryClick}></button>
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
  color: #fff;

  :hover {
    transform: scale(1.1);
  }
  ${bgColor === "fff" && `background-size:105px 100px; padding:10px;`}
  ${bgColor === "000" && `background-size:105px 103px; padding:8px;`}
  ${bgColor === "f96238" && `background-size:90px 90px; padding:22px 15px 10px;`}
  ${bgColor === "fbe74f" && `background-size:110px 95px; padding:20px 5px 10px;`}
  ${bgColor === "36a9fb" && `background-size:105px 90px; padding:22px 8px 10px;`}
`
