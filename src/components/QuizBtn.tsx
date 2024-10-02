"use client"
import { useRouter } from "next/router"

interface QuizBtnProps {
  category: string
}

const QuizBtn = ({ category }: QuizBtnProps) => {
  const router = useRouter()

  const handleCategoryClick = (category: string) => {
    router.push(`/${category}?questionId=1`)
  }
  return (
    <>
      <button onClick={() => handleCategoryClick(category)}>{category}</button>
    </>
  )
}

export default QuizBtn
