import { RouterProvider } from "react-router-dom"
import router from "@/routes/router"
import { css, ThemeProvider } from "@emotion/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      main: "#42e476",
    },
  },
})
function App() {
  const queryClient = new QueryClient()

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <div css={wrapper}>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
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
