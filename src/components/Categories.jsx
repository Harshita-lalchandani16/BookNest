function Categories() {
  const categories = [
    "Classic Literature",
    "Mystery",
    "Romance",
    "Fantasy",
    "Self Help",
    "History"
  ]

  return (
    <section id="categories" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-3">
          Browse by Category
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Find your next favorite book.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-[#eadcc4] p-6 rounded-2xl text-center hover:bg-[#d6b47a] cursor-pointer"
            >
              <h3 className="font-semibold">
                {category}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Categories