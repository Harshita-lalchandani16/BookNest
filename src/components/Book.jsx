import { useBooks } from "../context/BookContext"
import BookCard from "./BookCard"

function Books() {
  const {
    books,
    search,
    setSearch,
    category,
    setCategory,
    sortBy,
    setSortBy,
  } = useBooks()

  return (
    <section
      id="books"
      className="bg-[#F7F1E3] px-6 py-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}

        <div className="mb-8">

          <p className="text-[#C89B3C] uppercase tracking-[3px] text-sm font-semibold">
            Explore
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#6B4226] mt-2">
            Our Books
          </h2>

          <p className="text-[#6B5140] mt-2">
            Find your next favourite book.
          </p>

        </div>

        {/* ================= FILTER BAR ================= */}

        <div className="bg-white rounded-2xl shadow-md p-5 mb-8">

          <div className="grid md:grid-cols-3 gap-4">

            {/* ================= SEARCH ================= */}

            <div>

              <label className="block text-sm font-semibold text-[#6B4226] mb-2">
                Search Books
              </label>

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search by title or author..."
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

            {/* ================= CATEGORY ================= */}

            <div>

              <label className="block text-sm font-semibold text-[#6B4226] mb-2">
                Category
              </label>

              <select
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
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
                  bg-white
                "
              >

                <option value="All">
                  All Categories
                </option>

                <option value="Fiction">
                  Fiction
                </option>

                <option value="Self Help">
                  Self Help
                </option>

                <option value="Finance">
                  Finance
                </option>

                <option value="Fantasy">
                  Fantasy
                </option>

                <option value="Classic">
                  Classic
                </option>

                <option value="Productivity">
                  Productivity
                </option>

                <option value="Romance">
                  Romance
                </option>

                <option value="Kids">
                  Kids
                </option>

                <option value="Mystery">
                  Mystery
                </option>

              </select>

            </div>

            {/* ================= SORT ================= */}

            <div>

              <label className="block text-sm font-semibold text-[#6B4226] mb-2">
                Sort By
              </label>

              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value)
                }
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
                  bg-white
                "
              >

                <option value="default">
                  Default
                </option>

                <option value="price-low">
                  Price: Low to High
                </option>

                <option value="price-high">
                  Price: High to Low
                </option>

                <option value="rating">
                  Highest Rating
                </option>

              </select>

            </div>

          </div>

        </div>

        {/* ================= BOOK COUNT ================= */}

        <div className="mb-5">

          <p className="text-[#6B5140]">

            Showing{" "}

            <span className="font-bold text-[#6B4226]">
              {books.length}
            </span>{" "}

            books

          </p>

        </div>

        {/* ================= BOOK GRID ================= */}

        {books.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-md p-12 text-center">

            <p className="text-5xl mb-4">
              📚
            </p>

            <h3 className="text-2xl font-bold text-[#6B4226]">
              No books found
            </h3>

            <p className="text-gray-600 mt-2">
              Try a different search or category.
            </p>

          </div>

        ) : (

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-6
            "
          >

            {books.map((book) => (

              <BookCard
                key={book.id}
                book={book}
              />

            ))}

          </div>

        )}

      </div>
    </section>
  )
}

export default Books