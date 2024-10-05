import { create } from "zustand"

interface State {
  numOfCorrect: number
}
interface Action {
  incrementCorrect: () => void
  resetCorrect: () => void
}

const useNumOfCorrectStore = create<State & Action>((set) => ({
  numOfCorrect: 0,
  incrementCorrect: () => set((state) => ({ numOfCorrect: state.numOfCorrect + 1 })),
  resetCorrect: () => set({ numOfCorrect: 0 }),
}))

export default useNumOfCorrectStore
