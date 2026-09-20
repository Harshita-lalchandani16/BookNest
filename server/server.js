import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import rateLimit from "express-rate-limit"
import authRoutes from "./routes/authRoutes.js"

import connectDB from "./config/db.js"
import bookRoutes from "./routes/bookRoutes.js"

dotenv.config()

const app = express()

// CONNECT DATABASE
connectDB()

// ===============================
// SECURITY MIDDLEWARE
// ===============================

// Helmet - adds security-related HTTP headers
app.use(helmet())

// CORS - allow requests from React frontend
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
)

// JSON BODY PARSER
// Limits incoming JSON request size to 10 KB
app.use(express.json({ limit: "10kb" }))

// ===============================
// RATE LIMITER
// ===============================

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
})

// Apply rate limiter to all /api routes
app.use("/api", apiLimiter)

// ===============================
// HEALTH CHECK
// ===============================

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "BookNest API is running",
  })
})

// ===============================
// BOOK ROUTES
// ===============================

app.use("/api/books", bookRoutes)

// ===============================
// 404 HANDLER
// ===============================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  })
})

// ===============================
// GLOBAL ERROR HANDLER
// ===============================

app.use((err, req, res, next) => {
  console.error(err.stack)

  res.status(err.status || 500).json({
    success: false,
    message:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : err.message,
  })
})
app.use("/api/auth", authRoutes)
// ===============================
// START SERVER
// ===============================

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`BookNest API running on http://localhost:${PORT}`)
})