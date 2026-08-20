import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function Navbar() {
  const [menu, setMenu] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navigate = useNavigate()
  const location = useLocation()

  // Scroll to selected section after Home page loads
  useEffect(() => {
    const section = sessionStorage.getItem("scrollToSection")

    if (location.pathname === "/" && section) {
      sessionStorage.removeItem("scrollToSection")

      // First go to top
      window.scrollTo(0, 0)

      // Wait for Home page to render completely
      setTimeout(() => {
        const element = document.getElementById(section)

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }, 300)
    }
  }, [location.pathname])

  // HOME
  const goHome = () => {
    setMenu(false)
    setActiveSection("home")

    sessionStorage.removeItem("scrollToSection")

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      navigate("/")
    }
  }

  // SECTION NAVIGATION
  const goToSection = (section) => {
    setMenu(false)
    setActiveSection(section)

    // Already on Home page
    if (location.pathname === "/") {
      const element = document.getElementById(section)

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }

      return
    }

    // Coming from category page
    sessionStorage.setItem("scrollToSection", section)

    // Navigate to Home
    navigate("/")
  }

  return (
    <nav className="bg-[#6B4226] text-white px-5 py-4 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <button
          onClick={goHome}
          className="text-2xl font-bold hover:text-[#E8C878] transition"
        >
          📚 BookNest
        </button>

        {/* DESKTOP NAVBAR */}
        <div className="hidden md:flex items-center gap-7">

          {/* HOME */}
          <button
            onClick={goHome}
            className={`transition ${
              activeSection === "home"
                ? "text-[#E8C878] font-semibold"
                : "text-white hover:text-[#E8C878]"
            }`}
          >
            Home
          </button>

          {/* CATEGORIES */}
          <button
            onClick={() => goToSection("categories")}
            className={`transition ${
              activeSection === "categories"
                ? "text-[#E8C878] font-semibold"
                : "text-white hover:text-[#E8C878]"
            }`}
          >
            Categories
          </button>

          {/* BOOKS */}
          <button
            onClick={() => goToSection("books")}
            className={`transition ${
              activeSection === "books"
                ? "text-[#E8C878] font-semibold"
                : "text-white hover:text-[#E8C878]"
            }`}
          >
            Books
          </button>

          {/* ABOUT */}
          <button
            onClick={() => goToSection("about")}
            className={`transition ${
              activeSection === "about"
                ? "text-[#E8C878] font-semibold"
                : "text-white hover:text-[#E8C878]"
            }`}
          >
            About
          </button>

          {/* CONTACT */}
          <button
            onClick={() => goToSection("contact")}
            className={`transition ${
              activeSection === "contact"
                ? "text-[#E8C878] font-semibold"
                : "text-white hover:text-[#E8C878]"
            }`}
          >
            Contact
          </button>

          {/* LOGIN */}
          <button
            className="
              border border-white
              px-4 py-2
              rounded-lg
              hover:bg-[#E8C878]
              hover:text-[#3B2415]
              transition
            "
          >
            Login
          </button>

          {/* SIGN UP */}
          <button
            className="
              bg-[#E8C878]
              text-[#3B2415]
              px-4 py-2
              rounded-lg
              hover:bg-[#D6B45F]
              transition
            "
          >
            Sign Up
          </button>

          {/* CART */}
          <button
            className="
              text-2xl
              text-[#E8C878]
              hover:text-[#F3D38A]
              transition
            "
          >
            🛒
          </button>

        </div>

        {/* MOBILE */}
        <div className="md:hidden flex items-center gap-4">

          <button className="text-2xl text-[#E8C878]">
            🛒
          </button>

          <button
            onClick={() => setMenu(!menu)}
            className="text-2xl"
          >
            {menu ? "✕" : "☰"}
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {menu && (
        <div className="md:hidden mt-4 border-t border-[#8A5B3B] pt-4">

          <div className="flex flex-col gap-4">

            {/* HOME */}
            <button
              onClick={goHome}
              className={`text-left transition ${
                activeSection === "home"
                  ? "text-[#E8C878] font-semibold"
                  : "text-white hover:text-[#E8C878]"
              }`}
            >
              Home
            </button>

            {/* CATEGORIES */}
            <button
              onClick={() => goToSection("categories")}
              className={`text-left transition ${
                activeSection === "categories"
                  ? "text-[#E8C878] font-semibold"
                  : "text-white hover:text-[#E8C878]"
              }`}
            >
              Categories
            </button>

            {/* BOOKS */}
            <button
              onClick={() => goToSection("books")}
              className={`text-left transition ${
                activeSection === "books"
                  ? "text-[#E8C878] font-semibold"
                  : "text-white hover:text-[#E8C878]"
              }`}
            >
              Books
            </button>

            {/* ABOUT */}
            <button
              onClick={() => goToSection("about")}
              className={`text-left transition ${
                activeSection === "about"
                  ? "text-[#E8C878] font-semibold"
                  : "text-white hover:text-[#E8C878]"
              }`}
            >
              About
            </button>

            {/* CONTACT */}
            <button
              onClick={() => goToSection("contact")}
              className={`text-left transition ${
                activeSection === "contact"
                  ? "text-[#E8C878] font-semibold"
                  : "text-white hover:text-[#E8C878]"
              }`}
            >
              Contact
            </button>

            {/* LOGIN + SIGN UP */}
            <div className="flex items-center gap-3 pt-2">

              <button
                className="
                  border border-white
                  px-4 py-2
                  rounded-lg
                  hover:bg-[#E8C878]
                  hover:text-[#3B2415]
                  transition
                "
              >
                Login
              </button>

              <button
                className="
                  bg-[#E8C878]
                  text-[#3B2415]
                  px-4 py-2
                  rounded-lg
                  hover:bg-[#D6B45F]
                  transition
                "
              >
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