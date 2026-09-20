import Book from "../models/Book.js"
const validateBookData = (data) => {
  const requiredFields = [
    "id",
    "title",
    "author",
    "price",
    "oldPrice",
    "category",
    "rating",
    "image",
    "description",
  ]

  const missingFields = requiredFields.filter(
    (field) =>
      data[field] === undefined ||
      data[field] === null ||
      data[field] === ""
  )

  if (missingFields.length > 0) {
    return `Missing required fields: ${missingFields.join(", ")}`
  }

  if (typeof data.title !== "string" || data.title.trim().length < 2) {
    return "Title must contain at least 2 characters"
  }

  if (typeof data.author !== "string" || data.author.trim().length < 2) {
    return "Author must contain at least 2 characters"
  }

  if (Number(data.price) < 0 || Number(data.oldPrice) < 0) {
    return "Price cannot be negative"
  }

  if (Number(data.rating) < 0 || Number(data.rating) > 5) {
    return "Rating must be between 0 and 5"
  }

  return null
}
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


export const createBook = async (req, res) => {
  try {
    const validationError = validateBookData(req.body)

    if (validationError) {
      return res.status(400).json({
        success: false,
        message: validationError,
      })
    }

    const book = await Book.create(req.body)

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: book,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
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