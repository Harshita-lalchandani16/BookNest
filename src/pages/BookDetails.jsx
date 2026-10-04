import { useParams, useSearchParams } from "react-router-dom"
import { useState } from "react"
import { useBooks } from "../context/BookContext"
import { useCart } from "../context/CartContext"
import { useWishlist } from "../context/WishlistContext"

function BookDetails() {
  const { id } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const { books } = useBooks()
  const { cart, addToCart } = useCart()
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist()

  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const book = books.find(
    (item) => item.id === Number(id)
  )

  const isAdmin = localStorage.getItem("role") === "admin"
  const isEditMode = searchParams.get("edit") === "true"

  const [formData, setFormData] = useState(() => ({
    title: book?.title || "",
    author: book?.author || "",
    price: book?.price || "",
    oldPrice: book?.oldPrice || "",
    category: book?.category || "",
    rating: book?.rating || "",
    image: book?.image || "",
    description: book?.description || "",
  }))

  const isWishlisted = book
    ? wishlist.some((item) => item.id === book.id)
    : false

  const handleAddToCart = () => {
    if (!book) return

    const alreadyInCart = cart.some(
      (item) => item.id === book.id
    )

    addToCart(book)

    if (alreadyInCart) {
      setMessage("Book quantity increased in your cart.")
    } else {
      setMessage("Book added to cart successfully!")
    }
  }

  const handleWishlist = () => {
    if (!book) return

    if (isWishlisted) {
      removeFromWishlist(book.id)
    } else {
      addToWishlist(book)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleUpdate = async (e) => {
    e.preventDefault()

    const token = localStorage.getItem("token")

    if (!token) {
      setMessage("Please login first.")
      return
    }

    setLoading(true)
    setMessage("")

    try {
      const response = await fetch(
        `https://booknest-backend-jv6i.onrender.com/api/books/${book.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title: formData.title,
            author: formData.author,
            price: Number(formData.price),
            oldPrice: Number(formData.oldPrice),
            category: formData.category,
            rating: Number(formData.rating),
            image: formData.image,
            description: formData.description,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update book"
        )
      }

      setMessage("Book updated successfully!")

      setSearchParams({})
      
      setTimeout(() => {
        window.location.reload()
      }, 800)
    } catch (error) {
      setMessage(error.message)
    } finally {
      setLoading(false)
    }
  }

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F1E3]">
        <h2 className="text-2xl font-bold text-[#6b4226]">
          Book not found
        </h2>
      </div>
    )
  }

  /*
    ADMIN EDIT MODE
  */

  if (isAdmin && isEditMode) {
    return (
      <section className="min-h-screen bg-[#F7F1E3] px-6 py-16">
        <div className="max-w-4xl mx-auto">

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <div className="mb-8">
              <p className="text-[#C89B3C] uppercase tracking-[3px] text-sm font-semibold">
                Admin Panel
              </p>

              <h1 className="text-4xl font-bold text-[#6B4226] mt-2">
                Edit Book
              </h1>

              <p className="text-gray-600 mt-2">
                Update the book details below.
              </p>
            </div>

            <form
              onSubmit={handleUpdate}
              className="space-y-6"
            >

              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-[#6B4226] mb-2">
                  Book Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border border-[#D9C4A5] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#E8C878]"
                  required
                />
              </div>

              {/* Author */}
              <div>
                <label className="block text-sm font-semibold text-[#6B4226] mb-2">
                  Author
                </label>

                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className="w-full border border-[#D9C4A5] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#E8C878]"
                  required
                />
              </div>

              {/* Price */}
              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm font-semibold text-[#6B4226] mb-2">
                    Price
                  </label>

                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full border border-[#D9C4A5] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#E8C878]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#6B4226] mb-2">
                    Old Price
                  </label>

                  <input
                    type="number"
                    name="oldPrice"
                    value={formData.oldPrice}
                    onChange={handleChange}
                    className="w-full border border-[#D9C4A5] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#E8C878]"
                    required
                  />
                </div>

              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-semibold text-[#6B4226] mb-2">
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border border-[#D9C4A5] rounded-lg px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-[#E8C878]"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Self Help">Self Help</option>
                  <option value="Finance">Finance</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Classic">Classic</option>
                  <option value="Productivity">Productivity</option>
                  <option value="Romance">Romance</option>
                  <option value="Kids">Kids</option>
                  <option value="Mystery">Mystery</option>
                </select>
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-semibold text-[#6B4226] mb-2">
                  Rating
                </label>

                <input
                  type="number"
                  name="rating"
                  min="0"
                  max="5"
                  step="0.1"
                  value={formData.rating}
                  onChange={handleChange}
                  className="w-full border border-[#D9C4A5] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#E8C878]"
                  required
                />
              </div>

              {/* Image */}
              <div>
                <label className="block text-sm font-semibold text-[#6B4226] mb-2">
                  Image URL
                </label>

                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full border border-[#D9C4A5] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#E8C878]"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-[#6B4226] mb-2">
                  Description
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="5"
                  className="w-full border border-[#D9C4A5] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#E8C878]"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#6B4226] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4F301D] transition disabled:opacity-50"
                >
                  {loading ? "Updating..." : "Update Book"}
                </button>

                <button
                  type="button"
                  onClick={() => setSearchParams({})}
                  className="border-2 border-[#6B4226] text-[#6B4226] px-6 py-3 rounded-lg font-semibold hover:bg-[#6B4226] hover:text-white transition"
                >
                  Cancel
                </button>

              </div>

              {message && (
                <p
                  className={`font-semibold ${
                    message.includes("successfully")
                      ? "text-green-700"
                      : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}

            </form>

          </div>
        </div>
      </section>
    )
  }

  /*
    NORMAL BOOK DETAILS PAGE
  */

  return (
    <section className="min-h-screen bg-[#F7F1E3] px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="bg-[#EDE0CA] rounded-2xl p-8 h-[500px] flex items-center justify-center">

            <img
              src={book.image}
              alt={book.title}
              className="max-h-full max-w-full object-contain"
            />

          </div>

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
              {book.description}
            </p>

            <div className="flex flex-wrap gap-4">

              <button
                type="button"
                onClick={handleAddToCart}
                className="bg-[#6b4226] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#8b5e34] transition"
              >
                Add to Cart
              </button>

              <button
                type="button"
                onClick={handleWishlist}
                className="border-2 border-[#6b4226] text-[#6b4226] px-6 py-3 rounded-lg font-semibold hover:bg-[#6b4226] hover:text-white transition"
              >
                {isWishlisted
                  ? "❤️ Remove from Wishlist"
                  : "♡ Add to Wishlist"}
              </button>

              <button
                type="button"
                className="border-2 border-[#6b4226] text-[#6b4226] px-6 py-3 rounded-lg font-semibold hover:bg-[#6b4226] hover:text-white transition"
              >
                Buy Now
              </button>

              {isAdmin && (
                <button
                  type="button"
                  onClick={() => setSearchParams({ edit: "true" })}
                  className="bg-[#C89B3C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#A87922] transition"
                >
                  ✏️ Edit Book
                </button>
              )}

            </div>

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