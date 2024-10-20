import { css, SerializedStyles } from "@emotion/react"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  customStyle?: SerializedStyles
}

const Button = ({ children, onClick, customStyle }: ButtonProps) => {
  return (
    <button css={[btn, customStyle]} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

const btn = css`
  display: flex;
  align-items: center;
  margin: 1em 0;
  width: 80%;
  height: 3rem;
  padding: 0 2rem;
  box-sizing: border-box;
  border: none;
  background-color: #333;
  border-radius: 50px;
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  transition: transform 0.3s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
`
