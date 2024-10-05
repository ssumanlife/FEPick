import { css } from "@emotion/react"
const TimeOver = () => {
  return (
    <div css={wrapper}>
      <div css={textbox}>🚨 Time Over 🚨</div>
    </div>
  )
}

export default TimeOver

const wrapper = css`
  width: 100%;
`
const textbox = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  color: #fc1414;
  font-size: 24px;
  font-weight: 700;
  animation: pulse 0.18s infinite;

  @keyframes pulse {
    0% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(5deg);
    }
  }
`
