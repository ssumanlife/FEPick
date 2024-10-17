import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { MongoClient } from "mongodb"

const app = express()

app.use(cors())
app.use(express.json())
dotenv.config()

const PORT = process.env.PORT || 3000
const MONGOURL = process.env.MONGO_URL

const dbName = "fepick"
let database

const connectToDB = async () => {
  try {
    const client = await MongoClient.connect(MONGOURL)
    database = client.db(dbName)
    app.listen(PORT, () => console.log(`listening on port ${PORT}`))
  } catch (error) {
    console.error(error)
  }
}
connectToDB()
