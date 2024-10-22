import { css } from "@emotion/react"

const NotFound = () => {
  return (
    <div css={pageWrapper}>
      <h1>404 Page Not Found</h1>
      <p>죄송합니다. 페이지를 찾을 수 없습니다.</p>
      <p>존재하지 않는 주소를 입력하셨거나</p>
      <p>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</p>
    </div>
  )
}

export default NotFound

const pageWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & h1 {
    margin-top: 5rem;
    font-size: 24px;
    color: #d92727;
  }
  & p {
    margin-top: 30px;
    font-size: 14px;
  }
`
