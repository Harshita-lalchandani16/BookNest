import { Link } from "react-router-dom"

function Login() {
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

          <form className="space-y-5">

            <div>
              <label className="block text-sm font-semibold text-[#6B4226] mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
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


            <div>
              <label className="block text-sm font-semibold text-[#6B4226] mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
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


            <button
              type="submit"
              className="
                w-full
                bg-[#6B4226]
                text-white
                py-3
                rounded-lg
                font-semibold
                hover:bg-[#4F301D]
                transition
              "
            >
              Login
            </button>

          </form>


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