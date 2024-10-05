import { useState, useEffect } from "react"
import { css } from "@emotion/react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { QuestionData } from "@/types/quizType"
import useNumOfCorrectStore from "@/stores/useNumOfCorrectStore"

interface QuestionsProps {
  selectedQuestion: QuestionData
  setStop: (stop: boolean) => void
  stop: boolean
}

const Questions = ({ selectedQuestion, setStop, stop }: QuestionsProps) => {
  const [checkedIndex, setCheckedIndex] = useState<number | null>(null)
  const [checkedOption, setCheckedOption] = useState<string | null>(null)
  const [correctIndex, setCorrectIndex] = useState<number | null>(null)
  const [correct, setCorrect] = useState<boolean | null>(null)
  const incrementCorrect = useNumOfCorrectStore((state) => state.incrementCorrect)
  const { category } = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const questionId = new URLSearchParams(location.search).get("questionId") || 1

  useEffect(() => {
    setCheckedIndex(null)
    setCheckedOption(null)
    setCorrect(null)
    setCorrectIndex(null)
  }, [questionId, category])

  if (!category) {
    return <p>해당 데이터가 존재하지 않습니다.</p>
  }

  const handleCheckboxChange = (index: number, option: string) => {
    setCheckedIndex(index)
    setCheckedOption(option)
  }

  const handleSubmit = () => {
    if (!checkedOption) return
    if (checkedOption === selectedQuestion.answer) {
      setCorrect(true)
      setStop(true)
      incrementCorrect()
    } else {
      setCorrect(false)
      setStop(true)
      setCorrectIndex(selectedQuestion.options.findIndex((o) => o === selectedQuestion.answer))
    }
  }

  if (stop && correct === null) {
    setCorrect(false)
    setCorrectIndex(selectedQuestion.options.findIndex((o) => o === selectedQuestion.answer))
  }

  const handleNext = () => {
    const nextId = Number(questionId) + 1
    if (nextId === 31) {
      navigate("/clearQuiz")
    } else {
      navigate(`/${category}?questionId=${nextId}`)
    }
  }

  return (
    <>
      <ul>
        {selectedQuestion.options.map((option, index) => (
          <li key={index}>
            <button
              css={itemWrapper(checkedIndex, index, correct, correctIndex)}
              onClick={() => handleCheckboxChange(index, option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      <div css={{ display: "flex", justifyContent: "end" }}>
        {stop ? (
          <button css={submitBtn} onClick={handleNext}>
            다음
          </button>
        ) : (
          <button css={submitBtn} onClick={handleSubmit}>
            제출
          </button>
        )}
      </div>
    </>
  )
}

export default Questions

const itemWrapper = (
  checkedIndex: number | null,
  index: number | null,
  correct: boolean | null,
  correctIndex: number | null
) => css`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 50px;
  height: 3rem;
  width: 100%;
  padding-left: 2rem;
  margin: 1.5rem 0;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  ${checkedIndex === index &&
  correct === null &&
  `
    border: 3px solid #f75e43;
    transform: scale(1.05);
  `}
  ${checkedIndex === index &&
  correct === true &&
  `
    background: #6ffd52;
    transform: scale(1.05);
    border: 3px solid #42ad2d;
  `}
  ${checkedIndex === index &&
  correct === false &&
  `
    background: #d92727;
  `}
  ${correctIndex === index &&
  correct === false &&
  `
    background: #6ffd52;
    transform: scale(1.05);
    border: 3px solid #42ad2d;
  `}
`

const submitBtn = css`
  width: 100%;
  height: 3rem;
  background-color: #ff735e;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 5px 20px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #f75e43;
  }
`
