import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { CartProvider } from "./context/CartContext"
import { BookProvider } from "./context/BookContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </BookProvider>
  </StrictMode>
)