import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import Book from "./components/Book"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

import CategoryPage from "./pages/CategoryPage"
import BookDetails from "./pages/BookDetails"
import CartPage from "./pages/CartPage"
import WishlistPage from "./pages/WishlistPage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import LiveUpdates from "./components/LiveUpdates";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Book />
      <LiveUpdates/>
      <About />
      <Contact />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ALL CATEGORIES */}
        <Route
          path="/categories"
          element={<Categories />}
        />

        {/* CATEGORY-WISE BOOKS */}
        <Route
          path="/category/:category"
          element={<CategoryPage />}
        />

        {/* BOOK DETAILS */}
        <Route
          path="/book/:id"
          element={<BookDetails />}
        />

        {/* CART */}
        <Route
          path="/cart"
          element={<CartPage />}
        />

        {/* WISHLIST */}
        <Route
          path="/wishlist"
          element={<WishlistPage />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* SIGNUP */}
        <Route
          path="/signup"
          element={<Signup />}
        />

      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App