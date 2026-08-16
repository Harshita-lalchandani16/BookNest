import { useState } from "react"

function Navbar() {
  const [menu, setMenu] = useState(false)

  return (
    <nav className="bg-[#6B4226] text-white px-5 py-4 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold"
        >
          📚 BookNest
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7">

          <a href="#home" className="hover:text-[#E8C878] transition">
            Home
          </a>

          <a href="#categories" className="hover:text-[#E8C878] transition">
            Categories
          </a>

          <a href="#books" className="hover:text-[#E8C878] transition">
            Books
          </a>

          <a href="#about" className="hover:text-[#E8C878] transition">
            About
          </a>

          <a href="#contact" className="hover:text-[#E8C878] transition">
            Contact
          </a>

          {/* Login */}
          <button className="border border-white px-4 py-2 rounded-lg hover:bg-[#E8C878] hover:text-[#3B2415] transition">
            Login
          </button>

          {/* Sign Up */}
          <button className="bg-[#E8C878] text-[#3B2415] px-4 py-2 rounded-lg hover:bg-[#D6B45F] transition">
            Sign Up
          </button>

          {/* Cart */}
          <button className="text-2xl text-[#E8C878] hover:text-[#F3D38A] transition">
            🛒
          </button>

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">

        <button className="text-2xl text-[#E8C878]">
         🛒
         </button>
        <button
          onClick={() => setMenu(!menu)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden mt-4 border-t border-[#8A5B3B] pt-4">

          <div className="flex flex-col gap-4">

            <a
              href="#home"
              onClick={() => setMenu(false)}
              className="hover:text-[#E8C878]"
            >
              Home
            </a>

            <a
              href="#categories"
              onClick={() => setMenu(false)}
              className="hover:text-[#E8C878]"
            >
              Categories
            </a>

            <a
              href="#books"
              onClick={() => setMenu(false)}
              className="hover:text-[#E8C878]"
            >
              Books
            </a>

            <a
              href="#about"
              onClick={() => setMenu(false)}
              className="hover:text-[#E8C878]"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setMenu(false)}
              className="hover:text-[#E8C878]"
            >
              Contact
            </a>

            {/* Mobile Buttons */}
            <div className="flex items-center gap-3 pt-2">

              <button className="border border-white px-4 py-2 rounded-lg hover:bg-[#E8C878] hover:text-[#3B2415] transition">
                Login
              </button>

              <button className="bg-[#E8C878] text-[#3B2415] px-4 py-2 rounded-lg hover:bg-[#D6B45F] transition">
                Sign Up
              </button>

            </div>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar