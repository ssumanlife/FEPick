import { BadgeHelp, MousePointerClick } from "lucide-react"
import { css } from "@emotion/react"
import { useEffect, useState } from "react"
import useModalStore from "@/stores/useModalStore"
import { Outlet, useNavigate } from "react-router-dom"
import useNumOfCorrectStore from "@/stores/useNumOfCorrectStore"
import Modal from "@/components/Modal"

const Header = () => {
  const [colorChange, setColorChange] = useState(false)
  const resetCorrect = useNumOfCorrectStore((state) => state.resetCorrect)
  const modal = useModalStore((state) => state.modal)
  const openModal = useModalStore((state) => state.openModal)
  const navigate = useNavigate()

  useEffect(() => {
    resetCorrect()
    const timer = setTimeout(() => {
      setColorChange(true)
    }, 1600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div css={headerWrapper(colorChange)}>
        <div>
          <div css={pickIcon}>
            <MousePointerClick size={"32px"} />
          </div>
          <h1 onClick={() => navigate("/")}>F E P i c k</h1>
        </div>
        <div css={iconWrapper} onClick={openModal}>
          <BadgeHelp size={"38px"} />
        </div>
      </div>
      {modal ? <Modal /> : null}
      <Outlet />
    </>
  )
}

export default Header
const headerWrapper = (colorChange: boolean) => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  & h1 {
    margin: 2rem 0 1rem;
    font-size: 2rem;
    cursor: pointer;
  }
  & div:last-child {
    color: ${colorChange ? "#42e476" : "#fff"};
  }
`
const pickIcon = css`
  position: absolute;
  top: 40px;
  left: -50px;
  animation: pick 2s linear 1;
  @keyframes pick {
    0% {
      top: 40px;
      left: -10px;
      transform: rotate(0);
    }
    10% {
      top: 20px;
      left: 60px;
      transform: rotate(0);
    }
    20% {
      top: 12px;
      left: 110px;
      transform: rotate(0);
    }
    30% {
      top: 25px;
      left: 170px;
      transform: rotate(0);
    }
    40% {
      top: 55px;
      left: 230px;
      transform: rotate(0);
    }
    50% {
      top: 65px;
      left: 290px;
      transform: rotate(0);
    }
    60% {
      top: 45px;
      left: 340px;
      transform: rotate(0);
    }
    65% {
      top: 40px;
      left: 380px;
      transform: rotate(0);
    }
    66% {
      left: 380px;
      transform: rotate(0);
    }
    85% {
      left: 380px;
      transform: rotate(-30deg) scale(1.2);
    }
    100% {
      left: 380px;
      transform: rotate(0);
    }
  }
`
const iconWrapper = css`
  position: absolute;
  top: 1.8rem;
  right: 1.8rem;
  width: 50px;
  height: 50px;
  font-weight: 700;
  color: #42e476;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.2);
  }
`
