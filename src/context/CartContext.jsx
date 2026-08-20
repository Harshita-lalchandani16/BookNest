import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart")

    return savedCart
      ? JSON.parse(savedCart)
      : []
  })

  // =========================
  // SAVE CART TO LOCAL STORAGE
  // =========================

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    )
  }, [cart])

  // =========================
  // ADD TO CART
  // =========================

  const addToCart = (book) => {
    setCart((currentCart) => {
      const existingBook = currentCart.find(
        (item) => item.id === book.id
      )

      if (existingBook) {
        return currentCart.map((item) =>
          item.id === book.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      }

      return [
        ...currentCart,
        {
          ...book,
          quantity: 1,
        },
      ]
    })
  }

  // =========================
  // REMOVE FROM CART
  // =========================

  const removeFromCart = (bookId) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== bookId
      )
    )
  }

  // =========================
  // INCREASE QUANTITY
  // =========================

  const increaseQuantity = (bookId) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === bookId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    )
  }

  // =========================
  // DECREASE QUANTITY
  // =========================

  const decreaseQuantity = (bookId) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === bookId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    )
  }

  // =========================
  // CLEAR CART
  // =========================

  const clearCart = () => {
    setCart([])
  }

  // =========================
  // CART COUNT
  // =========================

  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  )

  // =========================
  // CART TOTAL
  // =========================

  const cartTotal = cart.reduce(
    (total, item) =>
      total +
      Number(item.price || 0) *
        item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// =========================
// CUSTOM HOOK
// =========================

export function useCart() {
  return useContext(CartContext)
}