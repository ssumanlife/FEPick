import useModalStore from "@/stores/useModalStore"
import { css } from "@emotion/react"

const Modal = () => {
  const closeModal = useModalStore((state) => state.closeModal)
  return (
    <div css={modalArea} onClick={closeModal}>
      <div css={modalWrapper}>
        <p>
          <span css={{ color: "#00601e", fontWeight: "700" }}>펩픽</span>에 오신 것을 환영합니다.
        </p>
        <p>
          각 카드는 <span css={{ color: "#00601e", fontWeight: "700" }}>10문항</span>으로 이루어져있습니다.
        </p>
        <p>
          한 문제당 <span css={{ color: "#00601e", fontWeight: "700" }}>30초</span>의 카운트가 있으며,
        </p>
        <p>
          30초가 지날 시 자동으로 <span css={{ color: "#d01010", fontWeight: "700" }}>오답처리</span> 됩니다.
        </p>
        <p>프론트엔드 기초 문제로 이루어져있으니,</p>
        <p>
          <span css={{ color: "#00601e", fontWeight: "700" }}>펩픽</span>에서 유익한 시간 되시길 바랍니다.
        </p>
        <p>감사합니다. 😎</p>
      </div>
    </div>
  )
}

export default Modal

const modalArea = css`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
`
const modalWrapper = css`
  position: absolute;
  z-index: 300;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #30b85bf7;
  border-radius: 10px;
  width: 370px;
  height: 270px;
  font-size: 1.1rem;
  box-sizing: border-box;
  padding: 0 1.2rem;
  & p {
    margin: 1.2rem 0;
  }
`
