import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

const BookContext = createContext()

const API_URL = "http://localhost:5000/api/books"

export function BookProvider({ children }) {
  const [booksData, setBooksData] = useState([])

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [sortBy, setSortBy] = useState("default")

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  // =========================
  // FETCH BOOKS FROM API
  // =========================

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true)
        setError("")

        const response = await fetch(API_URL)

        if (!response.ok) {
          throw new Error("Failed to fetch books")
        }

        const result = await response.json()

        setBooksData(result.data)
      } catch (err) {
        console.error(err)
        setError("Unable to load books from server.")
      } finally {
        setLoading(false)
      }
    }

    fetchBooks()
  }, [])

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
          book.title.toLowerCase().includes(searchText) ||
          book.author.toLowerCase().includes(searchText)
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
  }, [booksData, search, category, sortBy])

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

    loading,
    error,
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