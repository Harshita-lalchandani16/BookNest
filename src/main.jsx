import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { CartProvider } from "./context/CartContext"
import { BookProvider } from "./context/BookContext.jsx"
import { WishlistProvider } from "./context/WishlistContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProvider>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </BookProvider>
  </StrictMode>
)