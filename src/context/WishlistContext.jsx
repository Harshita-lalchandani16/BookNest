import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

const WishlistContext = createContext()

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist =
      localStorage.getItem("wishlist")

    return savedWishlist
      ? JSON.parse(savedWishlist)
      : []
  })

  // =========================
  // SAVE WISHLIST
  // =========================

  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    )
  }, [wishlist])

  // =========================
  // ADD TO WISHLIST
  // =========================

  const addToWishlist = (book) => {
    setWishlist((currentWishlist) => {
      const alreadyExists = currentWishlist.some(
        (item) => item.id === book.id
      )

      if (alreadyExists) {
        return currentWishlist
      }

      return [...currentWishlist, book]
    })
  }

  // =========================
  // REMOVE FROM WISHLIST
  // =========================

  const removeFromWishlist = (bookId) => {
    setWishlist((currentWishlist) =>
      currentWishlist.filter(
        (item) => item.id !== bookId
      )
    )
  }

  // =========================
  // CHECK WISHLIST
  // =========================

  const isInWishlist = (bookId) => {
    return wishlist.some(
      (item) => item.id === bookId
    )
  }

  // =========================
  // CLEAR WISHLIST
  // =========================

  const clearWishlist = () => {
    setWishlist([])
  }

  // =========================
  // WISHLIST COUNT
  // =========================

  const wishlistCount = wishlist.length

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

// =========================
// CUSTOM HOOK
// =========================

export function useWishlist() {
  return useContext(WishlistContext)
}