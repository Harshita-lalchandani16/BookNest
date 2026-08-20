import { useLocation, useNavigate } from "react-router-dom"

function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const goToSection = (section) => {
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

    // From category page → Home page
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

  const goHome = () => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      navigate("/")
    }
  }

  return (
    <footer className="bg-[#6B4226] text-white px-6 py-12">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <button
            onClick={goHome}
            className="text-2xl font-bold hover:text-[#E8C878] transition"
          >
            📚 BookNest
          </button>

          <p className="text-[#F3DFC1] mt-4 leading-7">
            Your one-stop destination for books, stories,
            knowledge and inspiration.
          </p>

          <p className="text-[#E8C878] mt-4 font-semibold">
            Read. Discover. Repeat. 📖
          </p>
        </div>


        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-[#F3DFC1]">

            <button
              onClick={goHome}
              className="text-left hover:text-[#E8C878] transition"
            >
              Home
            </button>

            <button
              onClick={() => goToSection("categories")}
              className="text-left hover:text-[#E8C878] transition"
            >
              Categories
            </button>

            <button
              onClick={() => goToSection("books")}
              className="text-left hover:text-[#E8C878] transition"
            >
              Books
            </button>

            <button
              onClick={() => goToSection("about")}
              className="text-left hover:text-[#E8C878] transition"
            >
              About Us
            </button>

            <button
              onClick={() => goToSection("contact")}
              className="text-left hover:text-[#E8C878] transition"
            >
              Contact
            </button>

          </div>
        </div>


        {/* WHY BOOKNEST */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Why BookNest?
          </h3>

          <div className="flex flex-col gap-3 text-[#F3DFC1]">

            <p>📚 Wide Collection of Books</p>

            <p>🚚 Fast & Reliable Delivery</p>

            <p>💰 Affordable Prices</p>

            <p>⭐ Quality Books for Every Reader</p>

            <p>🔒 Safe & Secure Shopping</p>

          </div>
        </div>

      </div>


      {/* BOTTOM */}
      <div className="border-t border-[#8A5B3B] mt-10 pt-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-[#D8B894] text-sm">
            © 2026 BookNest. All rights reserved.
          </p>

          <p className="text-[#D8B894] text-sm">
            Made with ❤️ for book lovers
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer