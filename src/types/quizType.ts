export type QuizCategory = "HTML5" | "CSS3" | "Javascript" | "React" | "Typescript" | "NextJS"

export interface QuestionData {
  id: string
  question: string
  options: string[]
  answer: string
}

export interface DataType {
  Javascript: QuestionData[]
  HTML5: QuestionData[]
  CSS3: QuestionData[]
  React: QuestionData[]
  Typescript: QuestionData[]
  NextJS: QuestionData[]
}
