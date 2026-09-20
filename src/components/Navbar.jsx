import { Link, NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"

function Navbar() {
  const navigate = useNavigate()

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  )

  const role = localStorage.getItem("role")
  const user = JSON.parse(localStorage.getItem("user") || "null")

  const isAdmin = role === "admin"

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    localStorage.removeItem("user")

    setIsLoggedIn(false)

    navigate("/login")
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#6B4226] text-white shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide"
          >
            📚 BookNest
          </Link>

          {/* NAVIGATION */}
          <div className="hidden md:flex items-center gap-6">

            <NavLink
              to="/"
              className="hover:text-[#E8C878] transition"
            >
              Home
            </NavLink>

            <NavLink
              to="/categories"
              className="hover:text-[#E8C878] transition"
            >
              Categories
            </NavLink>

            <NavLink
              to="/wishlist"
              className="hover:text-[#E8C878] transition"
            >
              Wishlist
            </NavLink>

            <NavLink
              to="/cart"
              className="hover:text-[#E8C878] transition"
            >
              🛒 Cart
            </NavLink>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="border border-[#E8C878] px-4 py-2 rounded-lg hover:bg-[#E8C878] hover:text-[#6B4226] transition"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="bg-[#C89B3C] px-4 py-2 rounded-lg font-semibold hover:bg-[#E8C878] hover:text-[#6B4226] transition"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                {/* USER INFO */}
                <div className="hidden lg:block text-right">

                  <p className="text-sm font-semibold">
                    {user?.name || user?.email || "User"}
                  </p>

                  <p className="text-xs text-[#E8C878] uppercase">
                    {role}
                  </p>

                </div>

                {/* ADMIN PANEL */}
                {isAdmin && (
                  <Link
                    to="/"
                    className="border border-[#E8C878] px-4 py-2 rounded-lg hover:bg-[#E8C878] hover:text-[#6B4226] transition"
                  >
                    ⚙️ Admin
                  </Link>
                )}

                {/* LOGOUT */}
                <button
                  type="button"
                  onClick={handleLogout}
                  className="bg-[#C89B3C] px-4 py-2 rounded-lg font-semibold hover:bg-[#E8C878] hover:text-[#6B4226] transition"
                >
                  Logout
                </button>
              </>
            )}

          </div>

        </div>

      </div>

    </nav>
  )
}

export default Navbar