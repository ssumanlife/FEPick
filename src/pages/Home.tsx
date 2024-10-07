import { data } from "@/data/mockData"
import Button from "@/components/Button"
import { QuizCategory } from "@/types/quizType"
import { css } from "@emotion/react"
import useNumOfCorrectStore from "@/stores/useNumOfCorrectStore"
import { useEffect } from "react"

const Home = () => {
  const resetCorrect = useNumOfCorrectStore((state) => state.resetCorrect)
  const category: QuizCategory[] = Object.keys(data) as QuizCategory[]

  useEffect(() => {
    resetCorrect()
  }, [])

  return (
    <div css={homeWrapper}>
      <h1>DevQuiz</h1>
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
  & h1 {
    margin-top: 2rem;
    font-size: 2rem;
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
