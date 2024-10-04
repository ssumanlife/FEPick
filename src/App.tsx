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
  width: 400px;
`
