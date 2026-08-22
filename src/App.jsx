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

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Book />
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
        <Route path="/" element={<Home />} />
        
        <Route path="/category/:category" element={<CategoryPage />} />

        <Route path="/book/:id" element={<BookDetails />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/wishlist" element={<WishlistPage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App