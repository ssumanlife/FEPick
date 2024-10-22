import { data } from "@/data/mockData"
import SkillButton from "@/components/SkillButton"
import { Category } from "@/types/quizType"
import { css } from "@emotion/react"
import Button from "@/components/Button"
import { useNavigate } from "react-router-dom"
import useNumOfCorrectStore from "@/stores/useNumOfCorrectStore"
import { useEffect } from "react"

const Home = () => {
  const navigate = useNavigate()
  const resetCorrect = useNumOfCorrectStore((state) => state.resetCorrect)

  useEffect(() => {
    resetCorrect()
  }, [])
  const category: Category[] = Object.keys(data) as Category[]
  return (
    <div css={homeWrapper}>
      <div css={categoryWrapper}>
        {category.map((item) => {
          return (
            <div key={item}>
              <SkillButton menu={item} />
            </div>
          )
        })}
      </div>
      <Button
        customStyle={css`
          justify-content: center;
          color: #42e476;
        `}
        onClick={() => navigate("/guest-book")}
      >
        방명록
      </Button>
    </div>
  )
}

export default Home

const homeWrapper = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`

const categoryWrapper = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`
