import { useParams, Link } from "react-router-dom"
import { useEffect } from "react"
import books from "../data/book"

function CategoryPage() {
  const { category } = useParams()

  const decodedCategory = decodeURIComponent(category)

  useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  })
}, [category])

  const categoryBooks = books.filter(
    (book) =>
      book.category.toLowerCase() === decodedCategory.toLowerCase()
  )

  return (
    <main className="min-h-screen bg-[#F7F1E3] px-6 py-16">

      <div className="max-w-7xl mx-auto">

        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-[#6B4226] font-semibold hover:text-[#A06B3B] mb-8"
        >
          ← Back to Home
        </Link>

        {/* Heading */}
        <div className="mb-10">

          <p className="text-[#C89B3C] uppercase tracking-[3px] text-sm font-semibold">
            BookNest Collection
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#6B4226] mt-2">
            {decodedCategory} Books
          </h1>

          <p className="text-[#6B5140] mt-3">
            Explore our collection of {decodedCategory.toLowerCase()} books.
          </p>

        </div>

        {/* Books */}
        {categoryBooks.length > 0 ? (

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

            {categoryBooks.map((book) => (

              <Link
              key={book.id}
              to={`/book/${book.id}`}
              className="book-card bg-white rounded-2xl overflow-hidden shadow-md block"
            >

                <div className="relative bg-[#EDE0CA] p-4 h-[270px] overflow-hidden">

                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-contain"
                  />

                </div>

                <div className="p-5">

                  <h2 className="text-xl font-bold mb-2 text-[#3D2B1F]">
                    {book.title}
                  </h2>

                  <p className="text-gray-600 mb-2">
                    {book.author}
                  </p>

                  <p className="text-sm text-[#A06B3B] mb-3">
                    {book.category}
                  </p>

                  <div className="flex justify-between items-center">

                    <span className="text-lg font-bold text-[#6B4226]">
                      ₹{book.price}
                    </span>

                    <button className="bg-[#6B4226] text-white px-4 py-2 rounded-lg hover:bg-[#4F301D] transition">
                      View Book
                    </button>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        ) : (

          <div className="bg-white rounded-2xl p-10 text-center shadow-md">

            <p className="text-5xl mb-4">
              📚
            </p>

            <h2 className="text-2xl font-bold text-[#6B4226]">
              No Books Found
            </h2>

            <p className="text-gray-600 mt-2">
              We don't have any books in this category yet.
            </p>

            <Link
              to="/"
              className="inline-block mt-6 bg-[#6B4226] text-white px-6 py-3 rounded-lg hover:bg-[#4F301D]"
            >
              Browse All Books
            </Link>

          </div>

        )}

      </div>

    </main>
  )
}

export default CategoryPage