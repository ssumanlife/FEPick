export type Category = "HTML5" | "CSS3" | "Javascript" | "React" | "Typescript" | "NextJS"
export type QuizCategory =
  | "HTML5-1"
  | "CSS3-1"
  | "Javascript-1"
  | "React-1"
  | "Typescript-1"
  | "NextJS-1"
  | "HTML5-2"
  | "CSS3-2"
  | "Javascript-2"
  | "React-2"
  | "Typescript-2"
  | "NextJS-2"
  | "HTML5-3"
  | "CSS3-3"
  | "Javascript-3"
  | "React-3"
  | "Typescript-3"
  | "NextJS-3"

export interface QuestionData {
  id: number
  question: string
  options: string[]
  answer: string
}

export interface DataType {
  "Javascript-1": QuestionData[]
  "Javascript-2": QuestionData[]
  "Javascript-3": QuestionData[]
  "HTML5-1": QuestionData[]
  "HTML5-2": QuestionData[]
  "HTML5-3": QuestionData[]
  "CSS3-1": QuestionData[]
  "CSS3-2": QuestionData[]
  "CSS3-3": QuestionData[]
  "React-1": QuestionData[]
  "React-2": QuestionData[]
  "React-3": QuestionData[]
  "Typescript-1": QuestionData[]
  "Typescript-2": QuestionData[]
  "Typescript-3": QuestionData[]
  "NextJS-1": QuestionData[]
  "NextJS-2": QuestionData[]
  "NextJS-3": QuestionData[]
}
