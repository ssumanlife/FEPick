export type Category = "html" | "css" | "javascript" | "react" | "typescript" | "nextJS"

export interface Menu {
  title: string
  quiz: QuestionData[]
}
export interface QuestionData {
  id: number
  question: string
  options: string[]
  answer: string
}

export interface DataType {
  html: Menu[]
  css: Menu[]
  javascript: Menu[]
  typescript: Menu[]
  react: Menu[]
  nextJS: Menu[]
}
