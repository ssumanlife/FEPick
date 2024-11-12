import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { MongoClient } from "mongodb"

const app = express()

app.use(
  cors({
    origin: ["https://fepick.me", "http://localhost:5173"],
  })
)
app.use(express.json())
dotenv.config()

const PORT = process.env.VITE_PORT
const MONGO_URL = process.env.VITE_MONGO_URL
const ENDPOINT = process.env.VITE_ENDPOINT
const COLLECTION = process.env.VITE_COLLECTION

const dbName = "fepick"
let database

const connectToDB = async () => {
  try {
    const client = await MongoClient.connect(MONGO_URL)
    database = client.db(dbName)
    app.listen(PORT, "0.0.0.0", () => console.log(`listening on port ${PORT}`))
  } catch (error) {
    console.error(error)
  }
}
connectToDB()

app.get(ENDPOINT, async (req, res) => {
  try {
    const result = await database.collection(COLLECTION).find({}).toArray()

    return res.send(result)
  } catch (error) {
    console.error("데이터 읽기 실패", error)
    return res.status(500).send("서버 오류")
  }
})

app.put(ENDPOINT, async (req, res) => {
  try {
    const result = await database.collection(COLLECTION).insertOne(req.body)
    return res.send(result)
  } catch (error) {
    console.error("방명록 업데이트 실패", error)
    return res.status(500).send("서버 오류")
  }
})
