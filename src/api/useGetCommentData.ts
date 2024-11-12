import { GuestBookData } from "@/types/guestBookType"
import { useQuery } from "@tanstack/react-query"

const ENDPOINT = import.meta.env.VITE_ENDPOINT

const useGetCommentData = () => {
  return useQuery({
    queryKey: ["comment"],
    queryFn: async (): Promise<GuestBookData[]> => {
      try {
        const res = await fetch(ENDPOINT)
        return res.json()
      } catch (error) {
        console.error(error)
        throw error
      }
    },
  })
}
export default useGetCommentData
