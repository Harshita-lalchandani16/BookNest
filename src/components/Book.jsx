import books from "../data/book"
import BookCard from "./BookCard"

function Books() {
  return (
    <section id="books" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold">
              Popular Books
            </h2>

            <p className="text-gray-600 mt-2">
              Handpicked books for every reader.
            </p>
          </div>

          <input
            type="text"
            placeholder="Search books..."
            className="hidden md:block border border-[#b9a58b] bg-white px-4 py-3 rounded-lg"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Books