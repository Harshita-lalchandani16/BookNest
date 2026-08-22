import { Link } from "react-router-dom"
import { useWishlist } from "../context/WishlistContext"

function WishlistPage() {
  const {
    wishlist,
    wishlistCount,
    removeFromWishlist,
    clearWishlist,
  } = useWishlist()

  return (
    <main className="min-h-screen bg-[#F7F1E3] px-6 py-16">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="mb-10">

          <p className="text-[#C89B3C] uppercase tracking-[3px] text-sm font-semibold">
            BookNest
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#6B4226] mt-2">
            My Wishlist ❤️
          </h1>

          <p className="text-[#6B5140] mt-3">
            {wishlistCount} book
            {wishlistCount !== 1 ? "s" : ""} saved
            for later.
          </p>

        </div>

        {/* EMPTY */}

        {wishlist.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-md p-12 text-center">

            <p className="text-6xl mb-5">
              🤍
            </p>

            <h2 className="text-2xl font-bold text-[#6B4226]">
              Your wishlist is empty
            </h2>

            <p className="text-gray-600 mt-2">
              Add books you love to your wishlist.
            </p>

            <Link
              to="/"
              className="
                inline-block
                mt-6
                bg-[#6B4226]
                text-white
                px-6
                py-3
                rounded-lg
                hover:bg-[#4F301D]
                transition
              "
            >
              Browse Books
            </Link>

          </div>

        ) : (

          <>

            {/* CLEAR */}

            <div className="flex justify-end mb-6">

              <button
                type="button"
                onClick={clearWishlist}
                className="
                  border
                  border-red-300
                  text-red-600
                  px-5
                  py-2
                  rounded-lg
                  font-semibold
                  hover:bg-red-50
                  transition
                "
              >
                Clear Wishlist
              </button>

            </div>

            {/* GRID */}

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {wishlist.map((book) => (

                <div
                  key={book.id}
                  className="
                    bg-white
                    rounded-2xl
                    overflow-hidden
                    shadow-md
                    hover:shadow-xl
                    transition
                  "
                >

                  <Link to={`/book/${book.id}`}>

                    <div className="h-72 bg-[#EDE0CA] p-4 flex items-center justify-center">

                      <img
                        src={book.image}
                        alt={book.title}
                        className="h-full w-full object-contain"
                      />

                    </div>

                  </Link>

                  <div className="p-5">

                    <h2 className="font-bold text-lg text-[#3D2B1F] line-clamp-1">
                      {book.title}
                    </h2>

                    <p className="text-gray-600 mt-1">
                      {book.author}
                    </p>

                    <div className="flex justify-between items-center mt-4">

                      <span className="font-bold text-[#6B4226]">
                        ₹{book.price}
                      </span>

                      <span className="text-[#C89B3C]">
                        ⭐ {book.rating}
                      </span>

                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        removeFromWishlist(book.id)
                      }
                      className="
                        w-full
                        mt-4
                        border
                        border-red-300
                        text-red-600
                        py-2
                        rounded-lg
                        font-semibold
                        hover:bg-red-50
                        transition
                      "
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </>

        )}

      </div>

    </main>
  )
}

export default WishlistPage