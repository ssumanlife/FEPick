import { GuestBookData } from "@/types/guestBookType"
import { useMutation } from "@tanstack/react-query"

const useUpdateCommentData = () => {
  return useMutation<GuestBookData[] | null, Error, { newCommentData: GuestBookData }>({
    mutationFn: async ({ newCommentData }): Promise<GuestBookData[]> => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/guestBook`, {
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
