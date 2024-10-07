import { useEffect, useRef, useState } from "react"
import { css } from "@emotion/react"
import { useLocation, useParams } from "react-router-dom"
import Questions from "@/components/Questions"
import { data } from "@/data/mockData"
import { DataType } from "@/types/quizType"
import useNumOfCorrectStore from "@/stores/useNumOfCorrectStore"
import TimeOver from "@/components/TimeOver"
import warningSound from "@/assets/warningSound.mp3"

const Quiz = () => {
  const [stop, setStop] = useState(false)
  const [startTime, setStartTime] = useState<number | null>(null)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [timeover, setTimeOver] = useState(false)
  const numOfCorrect = useNumOfCorrectStore((state) => state.numOfCorrect)
  const { category } = useParams()
  const location = useLocation()
  const warningRef = useRef<HTMLAudioElement>(null)

  const questionId = new URLSearchParams(location.search).get("questionId") || 1

  useEffect(() => {
    setStartTime(performance.now())
    setStop(false)
    setElapsedTime(0)
    setTimeOver(false)
  }, [questionId])

  useEffect(() => {
    if (!stop) {
      const interval = setInterval(() => {
        const currentTime = performance.now()
        const timeElapsed = Math.min((currentTime - (startTime || 0)) / 1000, 30)
        setElapsedTime(timeElapsed)
      }, 100)

      return () => clearInterval(interval)
    }
  }, [stop, startTime])

  const calculateWidth = () => {
    const percent = (elapsedTime / 30) * 100
    return percent
  }

  const width = calculateWidth()

  useEffect(() => {
    if (width >= 100 && !stop) {
      setStop(true)
      setTimeOver(true)
      if (warningRef.current) {
        warningRef.current.play()
      }
    }
  }, [width, stop])

  if (!category) {
    return <p>해당 데이터가 존재하지 않습니다.</p>
  }

  const selectedQuestion = data[category as keyof DataType]?.find((q) => q.id === Number(questionId))
  const answersNum = data[category as keyof DataType]?.length

  if (!selectedQuestion) {
    return <p>해당 질문이 존재하지 않습니다.</p>
  }
  return (
    <section css={{ width: "100%" }}>
      <audio ref={warningRef} src={warningSound}></audio>
      <div css={{ display: "flex", flexDirection: "column" }}>
        <div css={questionArea}>
          <div css={timeBar(width)}> </div>
          <h1 css={{ fontSize: "24px" }}>Question {selectedQuestion.id}</h1>
          <h1 css={{ padding: "40px 20px 20px", fontSize: "18px" }}>{selectedQuestion.question}</h1>
          <Questions selectedQuestion={selectedQuestion} setStop={setStop} stop={stop} warningRef={warningRef} />
          <p>
            정답: {numOfCorrect} / 총 문항: {answersNum}
          </p>
          {timeover ? <TimeOver /> : null}
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

const timeBar = (width: number) => css`
  position: relative;
  background: #d6d6d6;
  width: 100%;
  height: 7px;
  border-radius: 50px;
  margin-bottom: 30px;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${width}%;
    height: 100%;
    background-color: #ff735e;
    border-radius: 3px;
  }
`
