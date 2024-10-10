import { data } from "@/data/mockData"
import Button from "@/components/Button"
import { QuizCategory } from "@/types/quizType"
import { css } from "@emotion/react"
import useNumOfCorrectStore from "@/stores/useNumOfCorrectStore"
import { useEffect, useState } from "react"
import { MousePointerClick, ShieldQuestion } from "lucide-react"
import Modal from "@/components/Modal"
import useModalStore from "@/stores/useModalStore"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const [colorChange, setColorChange] = useState(false)
  const resetCorrect = useNumOfCorrectStore((state) => state.resetCorrect)
  const modal = useModalStore((state) => state.modal)
  const openModal = useModalStore((state) => state.openModal)
  const navigate = useNavigate()
  const category: QuizCategory[] = Object.keys(data) as QuizCategory[]

  useEffect(() => {
    resetCorrect()
    const timer = setTimeout(() => {
      setColorChange(true)
    }, 2400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div css={homeWrapper}>
      <div>
        <div css={pickIcon}>
          <MousePointerClick size={"32px"} />
        </div>
        {colorChange ? (
          <h1 css={{ color: "#42e476" }} onClick={() => navigate("/")}>
            {" "}
            F . E . P
          </h1>
        ) : (
          <h1 onClick={() => navigate("/")}> F . E . P</h1>
        )}
      </div>
      <div css={iconWrapper} onClick={openModal}>
        <ShieldQuestion size={"32px"} />
      </div>
      <div css={line}></div>
      <div css={btnWrapper}>
        {category.map((item) => {
          const [menu, number] = item.split("-")
          return (
            <div css={{ position: "relative" }} key={item}>
              <Button menu={menu} number={number} />
            </div>
          )
        })}
      </div>
      {modal ? <Modal /> : null}
    </div>
  )
}

export default Home

const homeWrapper = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  & h1 {
    margin-top: 2rem;
    font-size: 2rem;
    cursor: pointer;
  }
`
const pickIcon = css`
  position: absolute;
  top: 40px;
  left: -30px;
  animation: pick 3s linear 1;
  @keyframes pick {
    0% {
      top: 40px;
      left: -10px;
      transform: rotate(0);
    }
    20% {
      top: 10px;
      left: 70px;
      transform: rotate(0);
    }
    30% {
      top: 0px;
      left: 100px;
      transform: rotate(0);
    }
    45% {
      top: 80px;
      left: 210px;
      transform: rotate(0);
    }
    65% {
      top: 32px;
      left: 310px;
      transform: rotate(0);
    }
    66% {
      left: 310px;
      transform: rotate(0);
    }
    85% {
      left: 310px;
      transform: rotate(-30deg) scale(1.2);
    }
    100% {
      left: 310px;
      transform: rotate(0);
    }
  }
`
const iconWrapper = css`
  position: absolute;
  top: 1.8rem;
  right: 1rem;
  width: 50px;
  height: 50px;
  font-weight: 700;
  color: #42e476;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.2);
  }
`
const line = css`
  width: 100%;
  height: 0.2rem;
  margin-top: 20px;
  background-color: #333;
`
const btnWrapper = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`
