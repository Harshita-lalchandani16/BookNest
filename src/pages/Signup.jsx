import { Link } from "react-router-dom"

function Signup() {
  return (
    <main className="min-h-screen bg-[#F7F1E3] px-6 py-16 flex items-center">

      <div className="max-w-md w-full mx-auto">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          {/* HEADING */}

          <div className="text-center mb-8">

            <p className="text-[#C89B3C] uppercase tracking-[3px] text-sm font-semibold">
              Join BookNest
            </p>

            <h1 className="text-4xl font-bold text-[#6B4226] mt-2">
              Create Account
            </h1>

            <p className="text-[#6B5140] mt-2">
              Create your account and start exploring.
            </p>

          </div>


          {/* FORM */}

          <form className="space-y-5">

            {/* NAME */}

            <div>
              <label className="block text-sm font-semibold text-[#6B4226] mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
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


            {/* EMAIL */}

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


            {/* PASSWORD */}

            <div>
              <label className="block text-sm font-semibold text-[#6B4226] mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
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


            {/* CONFIRM PASSWORD */}

            <div>
              <label className="block text-sm font-semibold text-[#6B4226] mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm your password"
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
              Create Account
            </button>

          </form>


          {/* LOGIN LINK */}

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