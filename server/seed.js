import dotenv from "dotenv"
import mongoose from "mongoose"
import connectDB from "./config/db.js"
import Book from "./models/Book.js"
import books from "../src/data/book.js"

dotenv.config()

const seedBooks = async () => {
  try {
    await connectDB()

    await Book.deleteMany()
    await Book.insertMany(books)

    console.log(`${books.length} books inserted successfully`)

    await mongoose.connection.close()
    process.exit(0)
  } catch (error) {
    console.error("Seeding failed:", error.message)

    await mongoose.connection.close()
    process.exit(1)
  }
}

seedBooks()