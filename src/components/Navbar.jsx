function Navbar() {
  return (
    <nav className="bg-[#6b4226] text-[#f7f1e3] px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <a href="#home" className="text-2xl font-bold">
          The Book Nook
        </a>

        <div className="hidden md:flex gap-8">
          <a href="#home" className="hover:text-[#d6b47a]">Home</a>
          <a href="#categories" className="hover:text-[#d6b47a]">Categories</a>
          <a href="#books" className="hover:text-[#d6b47a]">Books</a>
          <a href="#about" className="hover:text-[#d6b47a]">About</a>
          <a href="#contact" className="hover:text-[#d6b47a]">Contact</a>
        </div>

        <div className="flex gap-3">
          <button className="border border-[#f7f1e3] px-4 py-2 rounded-lg">
            Login
          </button>

          <button className="bg-[#d6b47a] text-[#3d2b1f] px-4 py-2 rounded-lg">
            Cart
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar