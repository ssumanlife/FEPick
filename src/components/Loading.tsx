import { css } from "@emotion/react"

const Loading = () => {
  return (
    <div css={container}>
      <div css={loadingSpinner}></div>
    </div>
  )
}

export default Loading

const container = css`
  width: 50px;
  margin: 50px auto;
`
const loadingSpinner = css`
  display: block;
  width: 40px;
  height: 40px;
  border: 7px solid #42e475d7;
  border-radius: 50%;
  border-top-color: #a7ecbddb;
  animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`
