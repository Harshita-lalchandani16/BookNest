import http from "http"
import { WebSocketServer } from "ws"
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import rateLimit from "express-rate-limit"

import authRoutes from "./routes/authRoutes.js"
import connectDB from "./config/db.js"
import bookRoutes from "./routes/bookRoutes.js"
import { protect } from "./middleware/authMiddleware.js"

dotenv.config()

const app = express()

// ===============================
// CONNECT DATABASE
// ===============================

connectDB()

// ===============================
// SECURITY MIDDLEWARE
// ===============================

// Helmet - adds security-related HTTP headers
app.use(helmet())

// ===============================
// CORS
// ===============================

// Allow requests from React frontend
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
)

// ===============================
// JSON BODY PARSER
// ===============================

// Limits incoming JSON request size to 10 KB
app.use(express.json({ limit: "10kb" }))

// ===============================
// RATE LIMITER
// ===============================

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 7,
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
// AUTHENTICATION ROUTES
// ===============================

app.use("/api/auth", authRoutes)

// ===============================
// PROTECTED TEST ROUTE
// ===============================

app.get("/api/profile", protect, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Protected route accessed successfully",
    user: req.user,
  })
})

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

// ===============================
// CREATE HTTP SERVER
// ===============================

const PORT = process.env.PORT || 5000

const server = http.createServer(app)

// ===============================
// WEBSOCKET SERVER
// ===============================

const wss = new WebSocketServer({
  server,
  path: "/ws",
})

// ===============================
// WEBSOCKET CONNECTION
// ===============================

wss.on("connection", (socket) => {
  console.log("WebSocket client connected")

  // Send welcome message to newly connected client
  socket.send(
    JSON.stringify({
      type: "welcome",
      message: "Connected to BookNest real-time server",
    })
  )

  // ===============================
  // RECEIVE MESSAGE
  // ===============================

  socket.on("message", (data) => {
    const message = data.toString()

    console.log("Received:", message)
    console.log("Connected clients:", wss.clients.size)

    // ===============================
    // BROADCAST MESSAGE
    // ===============================

    wss.clients.forEach((client) => {
      if (client.readyState === 1) {

        client.send(
          JSON.stringify({
            type: "live-update",
            message,
          })
        )
      }
    })
  })

  // ===============================
  // CLIENT DISCONNECTED
  // ===============================

  socket.on("close", () => {
    console.log("WebSocket client disconnected")
  })
})

// ===============================
// START SERVER
// ===============================

server.listen(PORT, () => {
  console.log(`BookNest API running on http://localhost:${PORT}`)
})