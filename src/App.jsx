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

      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App