import { create } from "zustand"

interface State {
  modal: boolean
}
interface Action {
  openModal: () => void
  closeModal: () => void
}

const useModalStore = create<State & Action>((set) => ({
  modal: false,
  openModal: () => set({ modal: true }),
  closeModal: () => set({ modal: false }),
}))
export default useModalStore
