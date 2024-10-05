import { css } from "@emotion/react"
import useNumOfCorrectStore from "@/stores/useNumOfCorrectStore"
import { Link } from "react-router-dom"

const LastPage = () => {
  const numOfCorrect = useNumOfCorrectStore((state) => state.numOfCorrect)

  return (
    <div css={lastPage}>
      <h1>고생하셨습니다!!</h1>
      <p>👏👏👏👏👏</p>
      {numOfCorrect === 30 ? <p>💯💯💯</p> : null}
      <p>정답: {numOfCorrect} / 총 문항: 30</p>

      <Link to={"/"} css={linkBtn}>
        홈으로
      </Link>
    </div>
  )
}

export default LastPage

const lastPage = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h1 {
    margin-top: 5rem;
    font-size: 24px;
  }
  & p {
    margin-top: 30px;
    font-size: 24px;
  }
`

const linkBtn = css`
  width: 150px;
  height: 30px;
  margin-top: 50px;
  background-color: #ff735e;
  color: #fff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
