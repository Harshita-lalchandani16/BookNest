import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import Book from "./components/Book"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

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
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App