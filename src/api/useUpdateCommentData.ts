import { GuestBookData } from "@/types/guestBookType"
import { useMutation } from "@tanstack/react-query"

const ENDPOINT = import.meta.env.VITE_ENDPOINT
const useUpdateCommentData = () => {
  return useMutation<GuestBookData[] | null, Error, { newCommentData: GuestBookData }>({
    mutationFn: async ({ newCommentData }): Promise<GuestBookData[]> => {
      try {
        const res = await fetch(ENDPOINT, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newCommentData),
        })
        return res.json()
      } catch (error) {
        console.error(error)
        throw error
      }
    },
  })
}
export default useUpdateCommentData
