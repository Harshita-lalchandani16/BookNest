import { Link, useNavigate } from "react-router-dom"
import { useWishlist } from "../context/WishlistContext"

function BookCard({ book }) {
  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist()

  const navigate = useNavigate()

  const liked = isInWishlist(book.id)

  const isAdmin =
    localStorage.getItem("role") === "admin"

  const handleWishlist = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (liked) {
      removeFromWishlist(book.id)
    } else {
      addToWishlist(book)
    }
  }

  // =========================
  // DELETE BOOK
  // =========================

  const handleDelete = async (e) => {
    e.preventDefault()
    e.stopPropagation()

    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${book.title}"?`
    )

    if (!confirmDelete) return

    const token = localStorage.getItem("token")

    try {
      const response = await fetch(
        `https://booknest-backend-jv6i.onrender.com/api/books/${book.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      const data = await response.json()

      if (!response.ok) {
        alert(data.message || "Failed to delete book")
        return
      }

      alert("Book deleted successfully")

      window.location.reload()
    } catch (error) {
      console.error(error)
      alert("Unable to connect to server")
    }
  }

  // =========================
  // EDIT BOOK
  // =========================

  const handleEdit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    navigate(`/book/${book.id}?edit=true`)
  }

  return (
    <Link
      to={`/book/${book.id}`}
      className="group block"
    >
      <div className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        {/* IMAGE */}

        <div className="relative flex h-72 items-center justify-center bg-[#F7F1E3] p-4">

          <img
            src={book.image}
            alt={book.title}
            className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
          />

          {/* WISHLIST */}

          <button
            type="button"
            onClick={handleWishlist}
            className="
              absolute
              top-3
              right-3
              w-10
              h-10
              rounded-full
              bg-white
              shadow-md
              flex
              items-center
              justify-center
              text-xl
              hover:scale-110
              transition
            "
          >
            {liked ? "❤️" : "♡"}
          </button>

        </div>

        {/* DETAILS */}

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

          {/* ADMIN CONTROLS */}

          {isAdmin && (
            <div className="flex gap-2 mt-4">

              <button
                type="button"
                onClick={handleEdit}
                className="
                  flex-1
                  bg-[#C89B3C]
                  text-white
                  py-2
                  rounded-lg
                  font-semibold
                  hover:bg-[#A77C2F]
                  transition
                "
              >
                Edit
              </button>

              <button
                type="button"
                onClick={handleDelete}
                className="
                  flex-1
                  bg-red-700
                  text-white
                  py-2
                  rounded-lg
                  font-semibold
                  hover:bg-red-800
                  transition
                "
              >
                Delete
              </button>

            </div>
          )}

        </div>

      </div>
    </Link>
  )
}

export default BookCard