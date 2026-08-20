import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart()

  // =========================
  // CALCULATE TOTAL
  // =========================

  const totalPrice = cart.reduce(
    (total, book) =>
      total +
      Number(book.price || 0) *
        Number(book.quantity || 1),
    0
  )

  // =========================
  // TOTAL ITEMS
  // =========================

  const totalItems = cart.reduce(
    (total, book) =>
      total + Number(book.quantity || 1),
    0
  )

  return (
    <main className="min-h-screen bg-[#F7F1E3] px-6 py-16">

      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}

        <div className="mb-10">

          <p className="text-[#C89B3C] uppercase tracking-[3px] text-sm font-semibold">
            BookNest
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#6B4226] mt-2">
            Your Cart 🛒
          </h1>

          <p className="text-[#6B5140] mt-3">
            Review your selected books before checkout.
          </p>

        </div>

        {/* ================= EMPTY CART ================= */}

        {cart.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-md p-12 text-center">

            <p className="text-6xl mb-5">
              📚
            </p>

            <h2 className="text-2xl font-bold text-[#6B4226]">
              Your cart is empty
            </h2>

            <p className="text-gray-600 mt-2">
              Looks like you haven't added any books yet.
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

          <div className="grid lg:grid-cols-3 gap-8">

            {/* ================= CART ITEMS ================= */}

            <div className="lg:col-span-2 space-y-5">

              {cart.map((book) => (

                <div
                  key={book.id}
                  className="
                    bg-white
                    rounded-2xl
                    shadow-md
                    p-5
                    flex
                    flex-col
                    sm:flex-row
                    gap-5
                  "
                >

                  {/* ================= BOOK IMAGE ================= */}

                  <div
                    className="
                      w-full
                      sm:w-32
                      h-40
                      bg-[#EDE0CA]
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      p-3
                    "
                  >

                    <img
                      src={book.image}
                      alt={book.title}
                      className="max-h-full max-w-full object-contain"
                    />

                  </div>

                  {/* ================= BOOK INFORMATION ================= */}

                  <div className="flex-1">

                    <p className="text-sm text-[#A06B3B] font-semibold uppercase">
                      {book.category}
                    </p>

                    <h2 className="text-xl font-bold text-[#3D2B1F] mt-1">
                      {book.title}
                    </h2>

                    <p className="text-gray-600 mt-1">
                      {book.author}
                    </p>

                    <p className="text-xl font-bold text-[#6B4226] mt-4">
                      ₹{book.price}
                    </p>

                    {/* ================= QUANTITY ================= */}

                    <div className="flex items-center gap-3 mt-4">

                      <span className="font-semibold text-[#6B4226]">
                        Quantity:
                      </span>

                      <div className="flex items-center border border-[#D9C4A5] rounded-lg overflow-hidden">

                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(book.id)
                          }
                          className="
                            w-9
                            h-9
                            bg-[#F7F1E3]
                            text-[#6B4226]
                            font-bold
                            hover:bg-[#EDE0CA]
                            transition
                          "
                        >
                          −
                        </button>

                        <span className="w-10 text-center font-semibold">
                          {book.quantity || 1}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(book.id)
                          }
                          className="
                            w-9
                            h-9
                            bg-[#F7F1E3]
                            text-[#6B4226]
                            font-bold
                            hover:bg-[#EDE0CA]
                            transition
                          "
                        >
                          +
                        </button>

                      </div>

                    </div>

                    {/* ================= REMOVE ================= */}

                    <button
                      type="button"
                      onClick={() =>
                        removeFromCart(book.id)
                      }
                      className="
                        mt-4
                        text-red-600
                        font-semibold
                        hover:text-red-800
                        transition
                      "
                    >
                      Remove
                    </button>

                  </div>

                  {/* ================= BOOK TOTAL ================= */}

                  <div className="sm:text-right">

                    <p className="text-sm text-gray-500">
                      Book Total
                    </p>

                    <p className="text-xl font-bold text-[#6B4226] mt-1">
                      ₹
                      {Number(book.price || 0) *
                        Number(book.quantity || 1)}
                    </p>

                  </div>

                </div>

              ))}

            </div>

            {/* ================= ORDER SUMMARY ================= */}

            <div className="bg-white rounded-2xl shadow-md p-6 h-fit">

              <h2 className="text-2xl font-bold text-[#6B4226] mb-6">
                Order Summary
              </h2>

              {/* ITEMS */}

              <div className="flex justify-between text-gray-600 mb-4">

                <span>
                  Items
                </span>

                <span>
                  {totalItems}
                </span>

              </div>

              {/* UNIQUE BOOKS */}

              <div className="flex justify-between text-gray-600 mb-4">

                <span>
                  Books
                </span>

                <span>
                  {cart.length}
                </span>

              </div>

              {/* SUBTOTAL */}

              <div className="flex justify-between text-gray-600 mb-4">

                <span>
                  Subtotal
                </span>

                <span>
                  ₹{totalPrice}
                </span>

              </div>

              {/* TOTAL */}

              <div className="border-t border-[#D9C4A5] pt-4">

                <div className="flex justify-between text-lg font-bold text-[#6B4226]">

                  <span>
                    Total
                  </span>

                  <span>
                    ₹{totalPrice}
                  </span>

                </div>

              </div>

              {/* ================= CLEAR CART ================= */}

              <button
                type="button"
                onClick={clearCart}
                className="
                  w-full
                  mt-4
                  border
                  border-red-300
                  text-red-600
                  py-3
                  rounded-lg
                  font-semibold
                  hover:bg-red-50
                  transition
                "
              >
                Clear Cart
              </button>

              {/* ================= CHECKOUT ================= */}

              <button
                type="button"
                className="
                  w-full
                  mt-3
                  bg-[#6B4226]
                  text-white
                  py-3
                  rounded-lg
                  font-semibold
                  hover:bg-[#4F301D]
                  transition
                "
              >
                Proceed to Checkout
              </button>

            </div>

          </div>

        )}

      </div>

    </main>
  )
}

export default CartPage