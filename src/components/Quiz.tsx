import { useEffect, useState } from "react"
import { css } from "@emotion/react"
import { useLocation, useParams } from "react-router-dom"
import Questions from "@/components/Questions"
import { data } from "@/data/mockData"
import { DataType } from "@/types/quizType"
import useNumOfCorrectStore from "@/stores/useNumOfCorrectStore"

const Quiz = () => {
  const [stop, setStop] = useState(false)
  const [startTime, setStartTime] = useState<number | null>(null)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [timeover, setTimeOver] = useState(false)
  const numOfCorrect = useNumOfCorrectStore((state) => state.numOfCorrect)
  const { category } = useParams()
  const location = useLocation()

  const questionId = new URLSearchParams(location.search).get("questionId") || 1

  useEffect(() => {
    setStartTime(performance.now())
    setStop(false)
    setElapsedTime(0)
  }, [questionId])

  useEffect(() => {
    if (!stop) {
      const interval = setInterval(() => {
        const currentTime = performance.now()
        const timeElapsed = Math.min((currentTime - (startTime || 0)) / 1000, 60)
        setElapsedTime(timeElapsed)
      }, 100)

      return () => clearInterval(interval)
    }
  }, [stop, startTime])

  const calculateWidth = () => {
    const percent = (elapsedTime / 60) * 100
    return percent
  }

  const width = calculateWidth()

  useEffect(() => {
    if (width >= 100 && !stop) {
      setStop(true)
      setTimeOver(true)
    }
  }, [width, stop])

  if (!category) {
    return <p>해당 데이터가 존재하지 않습니다.</p>
  }

  const selectedQuestion = data[category as keyof DataType].find((q) => q.id === String(questionId))
  const answersNum = data[category as keyof DataType].length

  if (!selectedQuestion) {
    return <p>해당 질문이 존재하지 않습니다.</p>
  }
  return (
    <section css={{ width: "100%" }}>
      <div css={{ display: "flex", flexDirection: "column" }}>
        <div css={questionArea}>
          <div css={timeBar(stop, width)}> </div>
          <h1 css={{ fontSize: "24px" }}>Question {selectedQuestion.id}</h1>
          <h1 css={{ padding: "40px 20px 20px", fontSize: "18px" }}>{selectedQuestion.question}</h1>
          <Questions selectedQuestion={selectedQuestion} setStop={setStop} stop={stop} />
          <p>
            정답: {numOfCorrect} / 총 문항: {answersNum}
          </p>
          {timeover ? <p>시간초과</p> : null}
        </div>
      </div>
    </section>
  )
}

export default Quiz

const questionArea = css`
  width: 100%;
  box-sizing: border-box;
  padding: 40px 20px;
  & p {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    font-size: 18px;
  }
`

const timeBar = (stop: boolean | null, width: number) => css`
  position: relative;
  background: #d6d6d6;
  width: 100%;
  height: 7px;
  border-radius: 50px;
  margin-bottom: 30px;
  ${stop
    ? `
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${width}%;
    height: 100%;
    background-color: #ff735e;
    border-radius: 3px;
  }
  `
    : `
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #ff735e;
    border-radius: 3px;
    animation: growBar 60s linear forwards;
  }
  `}
  @keyframes growBar {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
`
