import { useParams } from "react-router-dom"
import books from "../data/book"

function BookDetails() {
  const { id } = useParams()

  const book = books.find((item) => item.id === Number(id))

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-[#6b4226]">
          Book not found
        </h2>
      </div>
    )
  }

  return (
    <section className="min-h-screen bg-[#F7F1E3] px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Book Image */}
          <div className="bg-[#EDE0CA] rounded-2xl p-8 h-[500px] flex items-center justify-center">
            <img
              src={book.image}
              alt={book.title}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Book Details */}
          <div>

            <p className="text-sm font-semibold text-[#a06b3b] uppercase tracking-wider mb-3">
              {book.category}
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-[#292524] mb-4">
              {book.title}
            </h1>

            <p className="text-lg text-gray-600 mb-5">
              by {book.author}
            </p>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#C89B3C] text-lg">
                ⭐ {book.rating}
              </span>

              <span className="text-gray-500">
                Customer Rating
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-[#6b4226]">
                ₹{book.price}
              </span>

              <span className="text-lg text-gray-400 line-through">
                ₹{book.oldPrice}
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              Discover this wonderful book and add it to your personal
              collection. Enjoy an engaging reading experience with this
              popular title from our bookstore.
            </p>

            <div className="flex gap-4">

              <button className="bg-[#6b4226] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#8b5e34] transition">
                Add to Cart
              </button>

              <button className="border-2 border-[#6b4226] text-[#6b4226] px-6 py-3 rounded-lg font-semibold hover:bg-[#6b4226] hover:text-white transition">
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default BookDetails