import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import rateLimit from "express-rate-limit"


import connectDB from "./config/db.js"
import bookRoutes from "./routes/bookRoutes.js"

dotenv.config()

const app = express()

// CONNECT DATABASE
connectDB()

// SECURITY MIDDLEWARE
app.use(helmet())

// MIDDLEWARE
app.use(cors())
app.use(express.json({ limit: "10kb" }))
// RATE LIMITER
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    message: "Too many requests. Please try again later.",
  },
})

app.use("/api", apiLimiter)

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