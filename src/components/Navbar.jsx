import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function Navbar() {
  const [menu, setMenu] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navigate = useNavigate()
  const location = useLocation()

  // Detect which section is currently visible
  useEffect(() => {
    // Category pages
    if (location.pathname.startsWith("/category/")) {
      setActiveSection("categories")
      return
    }

    // Only observe sections on Home page
    if (location.pathname !== "/") {
      return
    }

    const sections = [
      "home",
      "categories",
      "books",
      "about",
      "contact",
    ]

    const sectionElements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          )

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: "-100px 0px -55% 0px",
        threshold: 0,
      }
    )

    sectionElements.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [location.pathname])

  // Go to Home page top
  const goHome = () => {
    setMenu(false)

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      navigate("/")
    }
  }

  // Go to a section
  const goToSection = (section) => {
    setMenu(false)

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

    // Coming from Category page
    navigate("/")

    // Wait for Home page to render
    setTimeout(() => {
      const element = document.getElementById(section)

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }, 150)
  }

  // Active class
  const navClass = (section) => {
    return `transition ${
      activeSection === section
        ? "text-[#E8C878] font-semibold"
        : "text-white hover:text-[#E8C878]"
    }`
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
            className={navClass("home")}
          >
            Home
          </button>

          {/* CATEGORIES */}
          <button
            onClick={() => goToSection("categories")}
            className={navClass("categories")}
          >
            Categories
          </button>

          {/* BOOKS */}
          <button
            onClick={() => goToSection("books")}
            className={navClass("books")}
          >
            Books
          </button>

          {/* ABOUT */}
          <button
            onClick={() => goToSection("about")}
            className={navClass("about")}
          >
            About
          </button>

          {/* CONTACT */}
          <button
            onClick={() => goToSection("contact")}
            className={navClass("contact")}
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
              className={`text-left ${navClass("home")}`}
            >
              Home
            </button>

            {/* CATEGORIES */}
            <button
              onClick={() => goToSection("categories")}
              className={`text-left ${navClass("categories")}`}
            >
              Categories
            </button>

            {/* BOOKS */}
            <button
              onClick={() => goToSection("books")}
              className={`text-left ${navClass("books")}`}
            >
              Books
            </button>

            {/* ABOUT */}
            <button
              onClick={() => goToSection("about")}
              className={`text-left ${navClass("about")}`}
            >
              About
            </button>

            {/* CONTACT */}
            <button
              onClick={() => goToSection("contact")}
              className={`text-left ${navClass("contact")}`}
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