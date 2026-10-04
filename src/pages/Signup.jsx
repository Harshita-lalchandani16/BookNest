import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Signup() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setMessage("")

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setMessage("Please fill all fields.")
      return
    }

    if (formData.password.length < 6) {
      setMessage(
        "Password must contain at least 6 characters."
      )
      return
    }

    if (
      formData.password !== formData.confirmPassword
    ) {
      setMessage("Passwords do not match.")
      return
    }

    setLoading(true)

    try {
      const response = await fetch(
        "https://booknest-backend-jv6i.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message || "Registration failed"
        )
      }

      setMessage(
        "Account created successfully! Redirecting to login..."
      )

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      })

      setTimeout(() => {
        navigate("/login")
      }, 1200)
    } catch (error) {
      setMessage(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#F7F1E3] px-6 py-16 flex items-center">

      <div className="max-w-md w-full mx-auto">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          {/* Heading */}
          <div className="text-center mb-8">

            <p className="text-[#C89B3C] uppercase tracking-[3px] text-sm font-semibold">
              Join BookNest
            </p>

            <h1 className="text-4xl font-bold text-[#6B4226] mt-2">
              Sign Up
            </h1>

            <p className="text-[#6B5140] mt-2">
              Create your BookNest account.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Name */}
            <div>

              <label className="block text-sm font-semibold text-[#6B4226] mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-[#D9C4A5] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#E8C878]"
              />

            </div>

            {/* Email */}
            <div>

              <label className="block text-sm font-semibold text-[#6B4226] mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-[#D9C4A5] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#E8C878]"
              />

            </div>

            {/* Password */}
            <div>

              <label className="block text-sm font-semibold text-[#6B4226] mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full border border-[#D9C4A5] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#E8C878]"
              />

            </div>

            {/* Confirm Password */}
            <div>

              <label className="block text-sm font-semibold text-[#6B4226] mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full border border-[#D9C4A5] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#E8C878]"
              />

            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#6B4226] text-white py-3 rounded-lg font-semibold hover:bg-[#4F301D] transition disabled:opacity-50"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>

          </form>

          {/* Message */}
          {message && (
            <p
              className={`text-center mt-5 font-semibold ${
                message.includes("successfully")
                  ? "text-green-700"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          {/* Login */}
          <p className="text-center text-gray-600 mt-6">

            Already have an account?{" "}

            <Link
              to="/login"
              className="font-semibold text-[#6B4226] hover:text-[#C89B3C]"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </main>
  )
}

export default Signup