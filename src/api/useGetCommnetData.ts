import { GuestBookData } from "@/types/guestBookType"
import { useQuery } from "@tanstack/react-query"

const useGetCommentData = () => {
  return useQuery({
    queryKey: ["guestBook"],
    queryFn: async (): Promise<GuestBookData[]> => {
      try {
        const res = await fetch(`${import.meta.env.API_URL}/api/guestBook`)
        return res.json()
      } catch (error) {
        console.error(error)
        throw error
      }
    },
  })
}
export default useGetCommentData
