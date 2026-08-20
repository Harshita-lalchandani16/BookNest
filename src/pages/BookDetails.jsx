import { useParams } from "react-router-dom"
import { useState } from "react"
import books from "../data/book"

function BookDetails() {
  const { id } = useParams()

  const [message, setMessage] = useState("")

  const book = books.find((item) => item.id === Number(id))

  // =========================
  // ADD BOOK TO CART
  // =========================

  const addToCart = () => {
    console.log("ADD TO CART CLICKED ✅")
    console.log("BOOK:", book)

    try {
      // Get existing cart
      const cartData = localStorage.getItem("cart")

      console.log("CART DATA FROM STORAGE:", cartData)

      const existingCart = cartData
        ? JSON.parse(cartData)
        : []

      console.log("EXISTING CART:", existingCart)

      // Check if book already exists
      const alreadyInCart = existingCart.some(
        (item) => item.id === book.id
      )

      if (alreadyInCart) {
        setMessage("Book is already in your cart.")
        return
      }

      // Add book
      const updatedCart = [
        ...existingCart,
        {
          id: book.id,
          title: book.title,
          author: book.author,
          price: book.price,
          oldPrice: book.oldPrice,
          category: book.category,
          rating: book.rating,
          image: book.image,
        },
      ]

      console.log("UPDATED CART:", updatedCart)

      // Save to localStorage
      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
      )

      // Verify immediately
      const verifyCart = localStorage.getItem("cart")

      console.log(
        "LOCAL STORAGE AFTER SAVE:",
        verifyCart
      )

      setMessage("Book added to cart successfully!")

    } catch (error) {
      console.error(
        "Error while adding book to cart:",
        error
      )

      setMessage("Something went wrong. Please try again.")
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

  // =========================
  // PAGE
  // =========================

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

            {/* CATEGORY */}

            <p className="text-sm font-semibold text-[#a06b3b] uppercase tracking-wider mb-3">
              {book.category}
            </p>


            {/* TITLE */}

            <h1 className="text-4xl md:text-5xl font-bold text-[#292524] mb-4">
              {book.title}
            </h1>


            {/* AUTHOR */}

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
              Discover this wonderful book and add it to your personal
              collection. Enjoy an engaging reading experience with this
              popular title from our bookstore.
            </p>


            {/* ================= BUTTONS ================= */}

            <div className="flex gap-4">

              {/* ADD TO CART */}

              <button
                type="button"
                onClick={addToCart}
                className="bg-[#6b4226] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#8b5e34] transition"
              >
                Add to Cart
              </button>


              {/* BUY NOW */}

              <button
                type="button"
                className="border-2 border-[#6b4226] text-[#6b4226] px-6 py-3 rounded-lg font-semibold hover:bg-[#6b4226] hover:text-white transition"
              >
                Buy Now
              </button>

            </div>


            {/* ================= MESSAGE ================= */}

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