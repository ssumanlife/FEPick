import { RouterProvider } from "react-router-dom"
import router from "@/routes/router"
import { css } from "@emotion/react"

function App() {
  return (
    <div css={wrapper}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
const wrapper = css`
  max-width: 430px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #232323;
  box-sizing: border-box;
`
