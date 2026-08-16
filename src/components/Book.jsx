import books from "../data/book"

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
            <div
              key={book.id}
              className="book-card bg-white rounded-2xl overflow-hidden shadow-md"
            >

              <div className="relative bg-[#EDE0CA] p-4 h-[270px] overflow-hidden">
                
              <img
              src={book.image}
              alt={book.title}
              className="w-full h-full object-contain"
              />
            </div>

              <div className="p-5">

                <h3 className="text-xl font-bold mb-2">
                  {book.title}
                </h3>

                <p className="text-gray-600 mb-2">
                  {book.author}
                </p>

                <p className="text-sm text-[#a06b3b] mb-3">
                  {book.category}
                </p>

                <div className="flex justify-between items-center">

                  <span className="text-lg font-bold text-[#6b4226]">
                    ₹{book.price}
                  </span>

                  <button className="bg-[#6b4226] text-white px-4 py-2 rounded-lg">
                    View Book
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Books