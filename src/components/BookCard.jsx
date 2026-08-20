import { Link } from "react-router-dom"

function BookCard({ book }) {
  return (
    <Link
      to={`/book/${book.id}`}
      className="group block"
    >
      <div className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="flex h-72 items-center justify-center bg-[#F7F1E3] p-4">
          <img
            src={book.image}
            alt={book.title}
            className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <h3 className="line-clamp-1 text-lg font-semibold text-[#292524]">
            {book.title}
          </h3>

          <p className="mt-1 text-sm text-gray-600">
            {book.author}
          </p>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-bold text-[#6B4226]">
              ₹{book.price}
            </span>

            <span className="text-sm text-[#C89B3C]">
              ⭐ {book.rating}
            </span>
          </div>
        </div>

      </div>
    </Link>
  )
}

export default BookCard