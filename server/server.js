import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import connectDB from "./config/db.js"
import bookRoutes from "./routes/bookRoutes.js"

dotenv.config()

const app = express()

// CONNECT DATABASE
connectDB()

// MIDDLEWARE
app.use(cors())
app.use(express.json())

// HEALTH CHECK
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "BookNest API is running",
  })
})

// BOOK ROUTES
app.use("/api/books", bookRoutes)

// SERVER
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`BookNest API running on http://localhost:${PORT}`)
})