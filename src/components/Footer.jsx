function Footer() {
  return (
    <footer className="bg-[#6b4226] text-white px-6 py-10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold">
            📚 BookNest
          </h2>

          <p className="text-[#f3dfc1] mt-3">
            Your one-stop destination for books, stories,
            knowledge and inspiration.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">
            Quick Links
          </h3>

          <div className="flex flex-col gap-2 text-[#f3dfc1]">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#books" className="hover:text-white">Books</a>
            <a href="#categories" className="hover:text-white">Categories</a>
            <a href="#about" className="hover:text-white">About Us</a>
          </div>
        </div>

         <div>
          <h3 className="font-semibold mb-3">Categories</h3>

          <div className="flex flex-col gap-2 text-[#F3DFC1]">
            <p>Fiction</p>
            <p>Fantasy</p>
            <p>Self Help</p>
            <p>Classic Literature</p>
          </div>
        </div>

      </div>

      <div className="border-t border-[#8a5b3b] mt-8 pt-5 text-center text-[#d8b894] text-sm">
        © 2026 BookNest. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer