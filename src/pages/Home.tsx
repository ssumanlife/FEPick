import { data } from "@/data/mockData"
import Button from "@/components/Button"
import { QuizCategory } from "@/types/quizType"
import { css } from "@emotion/react"

const Home = () => {
  const category: QuizCategory[] = Object.keys(data) as QuizCategory[]

  return (
    <div css={btnWrapper}>
      <h1 css={{ marginTop: "2rem", fontSize: "1.5rem" }}>DevQuiz</h1>
      <Button bgColor={"E34F26"}>{category[1]}</Button>
      <Button bgColor={"1572B6"}>{category[2]}</Button>
      <Button bgColor={"F7DF1E"}>{category[0]}</Button>
      <Button bgColor={"3178C6"}>{category[4]}</Button>
      <Button bgColor={"61DAFB"}>{category[3]}</Button>
      <Button bgColor={"000"}>{category[5]}</Button>
    </div>
  )
}

export default Home

const btnWrapper = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
