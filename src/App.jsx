import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import Books from "./components/Books"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Books />
      <About />
      <Contact />

      <footer className="bg-[#6b4226] text-[#f7f1e3] text-center py-6">
        © 2026 The Book Nook. All Rights Reserved.
      </footer>
    </>
  )
}

export default App