import Book from "../models/Book.js"

// GET ALL BOOKS
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ id: 1 })

    res.status(200).json({
      count: books.length,
      data: books,
    })
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch books",
      error: error.message,
    })
  }
}


// GET SINGLE BOOK
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findOne({
      id: Number(req.params.id),
    })

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      })
    }

    res.status(200).json(book)
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch book",
      error: error.message,
    })
  }
}


// CREATE BOOK
export const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body)

    res.status(201).json({
      message: "Book created successfully",
      data: book,
    })
  } catch (error) {
    res.status(400).json({
      message: "Failed to create book",
      error: error.message,
    })
  }
}


// UPDATE BOOK
export const updateBook = async (req, res) => {
  try {
    const book = await Book.findOneAndUpdate(
      { id: Number(req.params.id) },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    )

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      })
    }

    res.status(200).json({
      message: "Book updated successfully",
      data: book,
    })
  } catch (error) {
    res.status(400).json({
      message: "Failed to update book",
      error: error.message,
    })
  }
}


// DELETE BOOK
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findOneAndDelete({
      id: Number(req.params.id),
    })

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      })
    }

    res.status(200).json({
      message: "Book deleted successfully",
      data: book,
    })
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete book",
      error: error.message,
    })
  }
}