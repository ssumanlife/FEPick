import { useState, useEffect, useRef } from "react"
import { css } from "@emotion/react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import useNumOfCorrectStore from "@/stores/useNumOfCorrectStore"
import bingoSound from "@/assets/bingoSound.mp3"
import NotFound from "@/pages/NotFound"

interface QuestionsProps {
  options: string[]
  answer: string
  setStop: (stop: boolean) => void
  stop: boolean
  warningRef: React.RefObject<HTMLAudioElement>
}

const Questions = ({ options = [], answer, setStop, stop, warningRef }: QuestionsProps) => {
  const [checkedIndex, setCheckedIndex] = useState<number | null>(null)
  const [checkedOption, setCheckedOption] = useState<string | null>(null)
  const [correctIndex, setCorrectIndex] = useState<number | null>(null)
  const [correct, setCorrect] = useState<boolean | null>(null)
  const incrementCorrect = useNumOfCorrectStore((state) => state.incrementCorrect)
  const { menu, title } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const bingoRef = useRef<HTMLAudioElement>(null)

  const questionId = new URLSearchParams(location.search).get("questionId") || 1

  useEffect(() => {
    setCheckedIndex(null)
    setCheckedOption(null)
    setCorrect(null)
    setCorrectIndex(null)
  }, [menu, title, questionId])

  if (!menu || !title) {
    return <NotFound />
  }

  const handleCheckboxChange = (index: number, option: string) => {
    setCheckedIndex(index)
    setCheckedOption(option)
  }

  const handleSubmit = () => {
    if (!checkedOption) return
    if (checkedOption === answer) {
      setCorrect(true)
      setStop(true)
      incrementCorrect()
      if (bingoRef.current) {
        bingoRef.current.play()
      }
    } else {
      setCorrect(false)
      setStop(true)
      setCorrectIndex(options.findIndex((o) => o === answer))
      if (warningRef.current) {
        warningRef.current.play()
      }
    }
  }

  if (stop && correct === null) {
    setCorrect(false)
    setCorrectIndex(options.findIndex((o) => o === answer))
  }

  const handleNext = () => {
    const nextId = Number(questionId) + 1
    if (nextId === 11) {
      navigate("/clear-quiz")
    } else {
      navigate(`/${menu}/${encodeURIComponent(title)}?questionId=${nextId}`)
    }
  }

  return (
    <>
      <audio ref={bingoRef} src={bingoSound}></audio>
      <ul>
        {options.map((option, index) => (
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
  padding: 0 2rem;
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
