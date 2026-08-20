import { useState, useEffect } from "react"
import {
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom"
import { useCart } from "../context/CartContext"

function Navbar() {
  const [menu, setMenu] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navigate = useNavigate()
  const location = useLocation()

  // =========================
  // CART COUNT
  // =========================

const { cartCount } = useCart()

  // =========================
  // ACTIVE SECTION
  // =========================

  useEffect(() => {
    // Category pages
    if (location.pathname.startsWith("/category/")) {
      setActiveSection("categories")
      return
    }

    // Book details page
    if (location.pathname.startsWith("/book/")) {
      setActiveSection("books")
      return
    }

    // Cart page
    if (location.pathname === "/cart") {
      setActiveSection("")
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
              a.boundingClientRect.top -
              b.boundingClientRect.top
          )

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          )
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

  // =========================
  // GO HOME
  // =========================

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

  // =========================
  // GO TO SECTION
  // =========================

  const goToSection = (section) => {
    setMenu(false)

    if (location.pathname === "/") {
      const element =
        document.getElementById(section)

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }

      return
    }

    navigate("/")

    setTimeout(() => {
      const element =
        document.getElementById(section)

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }, 150)
  }

  // =========================
  // ACTIVE NAV CLASS
  // =========================

  const navClass = (section) => {
    return `transition ${
      activeSection === section
        ? "text-[#E8C878] font-semibold"
        : "text-white hover:text-[#E8C878]"
    }`
  }

  // =========================
  // CART BUTTON
  // =========================

  const CartButton = ({ mobile = false }) => {
    return (
      <Link
        to="/cart"
        onClick={() => setMenu(false)}
        className={`relative ${
          mobile
            ? "text-2xl text-[#E8C878]"
            : "text-2xl text-[#E8C878] hover:text-[#F3D38A] transition"
        }`}
      >
        🛒

        {cartCount > 0 && (
          <span
            className="
              absolute
              -top-2
              -right-3
              min-w-[20px]
              h-5
              px-1
              rounded-full
              bg-[#E8C878]
              text-[#3B2415]
              text-xs
              font-bold
              flex
              items-center
              justify-center
            "
          >
            {cartCount}
          </span>
        )}
      </Link>
    )
  }

  return (
    <nav className="bg-[#6B4226] text-white px-5 py-4 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* ================= LOGO ================= */}

        <button
          onClick={goHome}
          className="text-2xl font-bold hover:text-[#E8C878] transition"
        >
          📚 BookNest
        </button>


        {/* ================= DESKTOP ================= */}

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
            onClick={() =>
              goToSection("categories")
            }
            className={navClass("categories")}
          >
            Categories
          </button>


          {/* BOOKS */}

          <button
            onClick={() =>
              goToSection("books")
            }
            className={navClass("books")}
          >
            Books
          </button>


          {/* ABOUT */}

          <button
            onClick={() =>
              goToSection("about")
            }
            className={navClass("about")}
          >
            About
          </button>


          {/* CONTACT */}

          <button
            onClick={() =>
              goToSection("contact")
            }
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

          <CartButton />

        </div>


        {/* ================= MOBILE ================= */}

        <div className="md:hidden flex items-center gap-4">

          <CartButton mobile />

          <button
            onClick={() => setMenu(!menu)}
            className="text-2xl"
          >
            {menu ? "✕" : "☰"}
          </button>

        </div>

      </div>


      {/* ================= MOBILE MENU ================= */}

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
              onClick={() =>
                goToSection("categories")
              }
              className={`text-left ${navClass(
                "categories"
              )}`}
            >
              Categories
            </button>


            {/* BOOKS */}

            <button
              onClick={() =>
                goToSection("books")
              }
              className={`text-left ${navClass(
                "books"
              )}`}
            >
              Books
            </button>


            {/* ABOUT */}

            <button
              onClick={() =>
                goToSection("about")
              }
              className={`text-left ${navClass(
                "about"
              )}`}
            >
              About
            </button>


            {/* CONTACT */}

            <button
              onClick={() =>
                goToSection("contact")
              }
              className={`text-left ${navClass(
                "contact"
              )}`}
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