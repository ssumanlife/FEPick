import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { MongoClient } from "mongodb"

const app = express()

app.use(
  cors({
    origin: "*",
  })
)
app.use(express.json())
dotenv.config()

const PORT = process.env.VITE_PORT
const MONGOURL = process.env.VITE_MONGO_URL

const dbName = "fepick"
let database

const connectToDB = async () => {
  try {
    const client = await MongoClient.connect(MONGOURL)
    database = client.db(dbName)
    app.listen(PORT, "0.0.0.0", () => console.log(`listening on port ${PORT}`))
  } catch (error) {
    console.error(error)
  }
}
connectToDB()

app.get("/api/guestBook", async (req, res) => {
  try {
    const result = await database.collection("guestBook").find({}).toArray()

    return res.send(result)
  } catch (error) {
    console.error("데이터 읽기 실패", error)
  }
})

app.put("/api/guestBook/update-comment", async (req, res) => {
  try {
    const result = await database.collection("guestBook").insertOne(req.body)
    return res.send(result)
  } catch (error) {
    console.error("방명록 업데이트 실패", error)
  }
})
