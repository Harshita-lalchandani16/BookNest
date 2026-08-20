import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart")

    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

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

    window.dispatchEvent(new Event("cartUpdated"))
  }

  const removeFromCart = (bookId) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== bookId
      )
    )

    window.dispatchEvent(new Event("cartUpdated"))
  }

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

    window.dispatchEvent(new Event("cartUpdated"))
  }

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
        .filter((item) => item.quantity > 0)
    )

    window.dispatchEvent(new Event("cartUpdated"))
  }

  const clearCart = () => {
    setCart([])

    window.dispatchEvent(new Event("cartUpdated"))
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const cartTotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
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

export function useCart() {
  return useContext(CartContext)
}