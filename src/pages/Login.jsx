import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()

    setMessage("")
    setLoading(true)

    try {
      const response = await fetch(
        "https://booknest-backend-jv6i.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        setMessage(data.message || "Login failed")
        setLoading(false)
        return
      }

      // SAVE JWT TOKEN
      localStorage.setItem("token", data.token)

      // SAVE USER ROLE
      localStorage.setItem(
        "role",
        data.user?.role || "user"
      )

      // SAVE USER DATA
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      )

      setMessage("Login successful!")

      // Go to home page
      setTimeout(() => {
        navigate("/")
      }, 500)

    } catch (error) {
      console.error(error)
      setMessage("Unable to connect to server")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#F7F1E3] px-6 py-16 flex items-center">

      <div className="max-w-md w-full mx-auto">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          {/* HEADING */}

          <div className="text-center mb-8">

            <p className="text-[#C89B3C] uppercase tracking-[3px] text-sm font-semibold">
              Welcome Back
            </p>

            <h1 className="text-4xl font-bold text-[#6B4226] mt-2">
              Login
            </h1>

            <p className="text-[#6B5140] mt-2">
              Login to continue to BookNest.
            </p>

          </div>

          {/* FORM */}

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            {/* EMAIL */}

            <div>

              <label className="block text-sm font-semibold text-[#6B4226] mb-2">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="
                  w-full
                  border
                  border-[#D9C4A5]
                  rounded-lg
                  px-4
                  py-3
                  outline-none
                  focus:ring-2
                  focus:ring-[#E8C878]
                "
              />

            </div>

            {/* PASSWORD */}

            <div>

              <label className="block text-sm font-semibold text-[#6B4226] mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="
                  w-full
                  border
                  border-[#D9C4A5]
                  rounded-lg
                  px-4
                  py-3
                  outline-none
                  focus:ring-2
                  focus:ring-[#E8C878]
                "
              />

            </div>

            {/* LOGIN BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-[#6B4226]
                text-white
                py-3
                rounded-lg
                font-semibold
                hover:bg-[#4F301D]
                transition
                disabled:opacity-60
              "
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          {/* MESSAGE */}

          {message && (
            <p className="mt-4 text-center font-semibold text-green-700">
              {message}
            </p>
          )}

          {/* SIGNUP LINK */}

          <p className="text-center text-gray-600 mt-6">

            Don't have an account?{" "}

            <Link
              to="/signup"
              className="font-semibold text-[#6B4226] hover:text-[#C89B3C]"
            >
              Sign Up
            </Link>

          </p>

        </div>

      </div>

    </main>
  )
}

export default Login