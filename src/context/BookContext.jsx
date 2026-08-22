import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react"

import booksData from "../data/book"

const BookContext = createContext()

export function BookProvider({ children }) {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [sortBy, setSortBy] = useState("default")

  // =========================
  // FILTER + SEARCH + SORT
  // =========================

  const books = useMemo(() => {
    let filteredBooks = [...booksData]

    // CATEGORY FILTER
    if (category !== "All") {
      filteredBooks = filteredBooks.filter(
        (book) => book.category === category
      )
    }

    // SEARCH
    if (search.trim() !== "") {
      const searchText = search.toLowerCase()

      filteredBooks = filteredBooks.filter(
        (book) =>
          book.title
            .toLowerCase()
            .includes(searchText) ||
          book.author
            .toLowerCase()
            .includes(searchText)
      )
    }

    // SORT
    if (sortBy === "price-low") {
      filteredBooks.sort(
        (a, b) => Number(a.price) - Number(b.price)
      )
    }

    if (sortBy === "price-high") {
      filteredBooks.sort(
        (a, b) => Number(b.price) - Number(a.price)
      )
    }

    if (sortBy === "rating") {
      filteredBooks.sort(
        (a, b) => Number(b.rating) - Number(a.rating)
      )
    }

    return filteredBooks
  }, [search, category, sortBy])

  // =========================
  // CONTEXT VALUE
  // =========================

  const value = {
    books,

    search,
    setSearch,

    category,
    setCategory,

    sortBy,
    setSortBy,
  }

  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  )
}

// =========================
// CUSTOM HOOK
// =========================

export function useBooks() {
  return useContext(BookContext)
}