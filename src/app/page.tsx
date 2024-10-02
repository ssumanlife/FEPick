"use client"
import QuizBtn from "@/components/QuizBtn"
import { data } from "@/data/mockData"

const home = () => {
  const category = Object.keys(data)
  return (
    <>
      {category.map((i) => (
        <QuizBtn key={i} category={i} />
      ))}
    </>
  )
}

export default home
