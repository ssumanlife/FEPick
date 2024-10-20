import useGetCommentData from "@/api/useGetCommnetData"
import useUpdateCommentData from "@/api/useUpdateCommentData"
import { GuestBookData } from "@/types/guestBookType"
import { css } from "@emotion/react"
import { Pagination } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"

const COUNT_PER_PAGE = 6
const GuestBook = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [commentData, setCommentData] = useState<GuestBookData[]>([])
  const nameRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLTextAreaElement>(null)
  const { data } = useGetCommentData()
  const { mutate } = useUpdateCommentData()
  const location = useLocation()
  const today = new Date()
  const createdAt = today.toLocaleDateString().slice(2, 12)

  useEffect(() => {
    if (data) {
      setCommentData(data)
    }
  }, [location])

  const limitData = [...commentData]
    .reverse()
    .slice(COUNT_PER_PAGE * (currentPage - 1), COUNT_PER_PAGE * (currentPage - 1) + COUNT_PER_PAGE)

  const fetchComment = async () => {
    if (nameRef.current && contentRef.current) {
      if (nameRef.current.value !== "" && contentRef.current.value !== "") {
        const newCommentData = {
          id: String(commentData.length + 1),
          name: nameRef.current.value,
          content: contentRef.current.value,
          createdAt,
        }
        try {
          mutate({ newCommentData })
          setCommentData([...commentData, newCommentData])
          nameRef.current.value = ""
          contentRef.current.value = ""
        } catch (error) {
          console.error(error)
        }
      }
    }
  }

  const handleCurrentPage = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page)
  }
  return (
    <div css={guestBookWrapper}>
      <div css={formstyle}>
        <div>
          <input ref={nameRef} type="text" placeholder="닉네임" maxLength={10} />
          <button onClick={fetchComment}>등록</button>
        </div>
        <textarea
          ref={contentRef}
          css={{ height: "82px", lineHeight: "20px" }}
          placeholder="퀴즈 카테고리 추천 혹은 응원의 한마디를 남겨주세요."
          maxLength={90}
        />
      </div>
      <ul css={comentList}>
        {limitData.map((item) => (
          <li key={item.id}>
            <div>
              <strong>{item.name}</strong>
              <span>{item.createdAt}</span>
            </div>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
      <div css={paginationWrapper}>
        <Pagination
          count={Math.ceil(commentData.length / COUNT_PER_PAGE)}
          onChange={handleCurrentPage}
          color="primary"
          size="small"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#777",
            },
            "& .MuiPaginationItem-icon": {
              color: "#fff",
            },
          }}
        />
      </div>
    </div>
  )
}

export default GuestBook

const guestBookWrapper = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const formstyle = css`
  display: flex;
  flex-direction: column;
  margin: 20px;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  input,
  textarea {
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #999;
    border-radius: 8px;
    color: #fff;
    ::placeholder {
      color: #999;
    }
  }
  button {
    width: 120px;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    :hover {
      background-color: #555;
    }
  }
`
const comentList = css`
  padding: 0 30px 45px;
  overflow-y: scroll;
  li {
    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    margin-bottom: 20px;
    p {
      line-height: 20px;
      margin: 10px 10px 30px;
      font-size: 14px;
    }
    span {
      font-size: 14px;
      color: #888;
    }
  }
  ::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
`
const paginationWrapper = css`
  width: 430px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 15px 0;
  position: fixed;
  bottom: 0px;
  background-color: #272727;
`
