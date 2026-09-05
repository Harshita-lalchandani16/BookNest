import { useParams } from "react-router-dom"
import { useState } from "react"
import { useBooks } from "../context/BookContext"
import { useCart } from "../context/CartContext"
import { useWishlist } from "../context/WishlistContext"

function BookDetails() {
  const { id } = useParams()

  const { books } = useBooks()
  
  const [message, setMessage] = useState("")

  const { cart, addToCart } = useCart()

    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist()

  const book = books.find(
    (item) => item.id === Number(id)
  )
  
  const isWishlisted = wishlist.some(
  (item) => item.id === book.id
)

  // =========================
  // ADD TO CART
  // =========================

  const handleAddToCart = () => {
    if (!book) return

    const alreadyInCart = cart.some(
      (item) => item.id === book.id
    )

    addToCart(book)

    if (alreadyInCart) {
      setMessage(
        "Book quantity increased in your cart."
      )
    } else {
      setMessage(
        "Book added to cart successfully!"
      )
    }
  }

  const handleWishlist = () => {
  if (isWishlisted) {
    removeFromWishlist(book.id)
  } else {
    addToWishlist(book)
  }
}
  // =========================
  // BOOK NOT FOUND
  // =========================

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F1E3]">
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

          {/* ================= IMAGE ================= */}

          <div className="bg-[#EDE0CA] rounded-2xl p-8 h-[500px] flex items-center justify-center">

            <img
              src={book.image}
              alt={book.title}
              className="max-h-full max-w-full object-contain"
            />

          </div>

          {/* ================= DETAILS ================= */}

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

            {/* RATING */}

            <div className="flex items-center gap-3 mb-6">

              <span className="text-[#C89B3C] text-lg">
                ⭐ {book.rating}
              </span>

              <span className="text-gray-500">
                Customer Rating
              </span>

            </div>

            {/* PRICE */}

            <div className="flex items-center gap-4 mb-6">

              <span className="text-3xl font-bold text-[#6b4226]">
                ₹{book.price}
              </span>

              <span className="text-lg text-gray-400 line-through">
                ₹{book.oldPrice}
              </span>

            </div>

            {/* DESCRIPTION */}

            <p className="text-gray-600 leading-relaxed mb-8">
              Discover this wonderful book and add it to
              your personal collection. Enjoy an engaging
              reading experience with this popular title
              from our bookstore.
            </p>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-4">

  {/* ADD TO CART */}

  <button
    type="button"
    onClick={handleAddToCart}
    className="
      bg-[#6b4226]
      text-white
      px-6
      py-3
      rounded-lg
      font-semibold
      hover:bg-[#8b5e34]
      transition
    "
  >
    Add to Cart
  </button>


  {/* WISHLIST */}

  <button
    type="button"
    onClick={handleWishlist}
    className="
      border-2
      border-[#6b4226]
      text-[#6b4226]
      px-6
      py-3
      rounded-lg
      font-semibold
      hover:bg-[#6b4226]
      hover:text-white
      transition
    "
  >
    {isWishlisted
      ? "❤️ Remove from Wishlist"
      : "♡ Add to Wishlist"}
  </button>


  {/* BUY NOW */}

  <button
    type="button"
    className="
      border-2
      border-[#6b4226]
      text-[#6b4226]
      px-6
      py-3
      rounded-lg
      font-semibold
      hover:bg-[#6b4226]
      hover:text-white
      transition
    "
  >
    Buy Now
  </button>

</div>

            {/* MESSAGE */}

            {message && (
              <p className="mt-4 text-green-700 font-semibold">
                {message}
              </p>
            )}

          </div>

        </div>

      </div>

    </section>
  )
}

export default BookDetails