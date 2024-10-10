import { data } from "@/data/mockData"
import Button from "@/components/Button"
import { QuizCategory } from "@/types/quizType"
import { css } from "@emotion/react"
import useNumOfCorrectStore from "@/stores/useNumOfCorrectStore"
import { useEffect } from "react"
import { ShieldQuestion } from "lucide-react"
import Modal from "@/components/Modal"
import useModalStore from "@/stores/useModalStore"

const Home = () => {
  const resetCorrect = useNumOfCorrectStore((state) => state.resetCorrect)
  const modal = useModalStore((state) => state.modal)
  const openModal = useModalStore((state) => state.openModal)
  const category: QuizCategory[] = Object.keys(data) as QuizCategory[]

  useEffect(() => {
    resetCorrect()
  }, [])

  return (
    <div css={homeWrapper}>
      <h1>DevQuiz</h1>
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
    color: #42e476;
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
