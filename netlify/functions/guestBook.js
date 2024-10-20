import { MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const dbName = "fepick"
let database

const connectToDB = async () => {
  if (!database) {
    const client = await MongoClient.connect(process.env.VITE_MONGO_URL)
    database = client.db(dbName)
  }
}

export async function handler(event, context) {
  await connectToDB()

  if (event.httpMethod === "GET") {
    try {
      const result = await database.collection("guestBook").find({}).toArray()
      return {
        statusCode: 200,
        body: JSON.stringify(result),
      }
    } catch (error) {
      console.error("데이터 읽기 실패", error)
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Internal Server Error" }),
      }
    }
  } else if (event.httpMethod === "PUT") {
    try {
      const body = JSON.parse(event.body)
      const result = await database.collection("guestBook").insertOne(body)
      return {
        statusCode: 200,
        body: JSON.stringify(result),
      }
    } catch (error) {
      console.error("방명록 업데이트 실패", error)
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Internal Server Error" }),
      }
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: "Method Not Allowed" }),
  }
}
