import { useEffect, useRef, useState } from "react"
import { css } from "@emotion/react"
import { useLocation, useParams } from "react-router-dom"
import Questions from "@/components/Questions"
import { data } from "@/data/mockData"
import useNumOfCorrectStore from "@/stores/useNumOfCorrectStore"
import TimeOver from "@/components/TimeOver"
import warningSound from "@/assets/warningSound.mp3"
import NotFound from "@/pages/NotFound"
import { Volume2, VolumeOff } from "lucide-react"

const Quiz = () => {
  const [stop, setStop] = useState(false)
  const [startTime, setStartTime] = useState<number | null>(null)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [timeover, setTimeOver] = useState(false)
  const [sound, setSound] = useState(true)
  const [selectedQuestion, setSelectedQuestion] = useState<any>([])
  const numOfCorrect = useNumOfCorrectStore((state) => state.numOfCorrect)
  const { menu, title } = useParams()
  const location = useLocation()
  const warningRef = useRef<HTMLAudioElement>(null)
  const questionId = new URLSearchParams(location.search).get("questionId") || 1
  const decodedCategory = decodeURIComponent(title || "")

  useEffect(() => {
    setStartTime(performance.now())
    setStop(false)
    setElapsedTime(0)
    setTimeOver(false)
    if (!menu || !decodedCategory) return

    const menuData = data[menu as keyof typeof data]
    if (!menuData) return

    const matchingQuiz = menuData.find((item) => item.title === decodedCategory)

    if (matchingQuiz) {
      const question = matchingQuiz.quiz.find((q) => q.id === Number(questionId))
      setSelectedQuestion(question)
    }
  }, [menu, title, questionId])

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
      if (sound && warningRef.current) {
        warningRef.current.play()
      }
    }
  }, [width, stop])

  if (!title || !selectedQuestion) {
    return <NotFound />
  }

  return (
    <section css={{ width: "100%" }}>
      <audio ref={warningRef} src={warningSound}></audio>
      <div css={{ display: "flex", flexDirection: "column" }}>
        <div css={questionArea}>
          <div css={timeBar(width)}> </div>
          <div css={titleArea}>
            <p>Question {selectedQuestion.id}</p>
            <button onClick={() => setSound(!sound)}>{sound ? <Volume2 /> : <VolumeOff />}</button>
          </div>
          <p css={{ padding: "30px 20px 20px", lineHeight: "1.5" }}>{selectedQuestion.question}</p>
          <Questions
            options={selectedQuestion.options}
            answer={selectedQuestion.answer}
            setStop={setStop}
            stop={stop}
            warningRef={warningRef}
            sound={sound}
          />
          <p css={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
            정답: {numOfCorrect} / 총 문항: 10
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
  padding: 20px;
  & p {
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

const titleArea = css`
  display: flex;
  justify-content: space-between;
  & button {
    color: #fff;
    transition: transform 0.2s ease-in-out;
    :hover {
      transform: scale(1.2);
    }
  }
`
