import { data } from "@/data/mockData"
import Button from "@/components/Button"
import { QuizCategory } from "@/types/quizType"
import { css } from "@emotion/react"

const Home = () => {
  const category: QuizCategory[] = Object.keys(data) as QuizCategory[]

  return (
    <div>
      <h1>DevQuiz</h1>
      <Button>{category[1]}</Button>
      <Button>{category[2]}</Button>
      <Button>{category[0]}</Button>
      <Button>{category[4]}</Button>
      <Button>{category[3]}</Button>
      <Button>{category[5]}</Button>
    </div>
  )
}

export default Home

// const wrapper = css`
//   max-width: 900px;
//   background-color: orange;
// `
