import { NavLink } from "react-router-dom"

function Categories() {
  const categories = [
    {
      name: "Classic",
      image:
        "https://images.unsplash.com/photo-1591351816538-a8c806605682?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDcwfHxib29rc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Mystery",
      image:
        "https://media.istockphoto.com/id/1302857591/photo/the-concept-of-looking-at-everything-based-on-knowledge.jpg?s=612x612&w=0&k=20&c=JyBsDTXYM9flIhlY8Cqp82WM1Z1M3ItoSruiow2gLyQ=",
    },
    {
      name: "Romance",
      image:
       "https://images.unsplash.com/photo-1543747097-79f58aea6430?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIzfHxib29rc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Fantasy",
      image:
        "https://media.istockphoto.com/id/1203194312/photo/magic-book-open.webp?a=1&b=1&s=612x612&w=0&k=20&c=26_8YRFEmV8GCLz7F9Rbxl17FmMDSUXe5itB4lcaeIo=",
    },
    {
      name: "Self Help",
      image:
        "https://media.istockphoto.com/id/2265029220/photo/miniature-people-on-stack-of-books-with-ladder-and-pencils-education-and-knowledge-concept.jpg?s=612x612&w=0&k=20&c=JIFXBCbYNDEU9MPS_9NO3pNQ2Rf7BzN3cc2e-zANQFU=",
    },
    {
  name: "Kids",
  image:
    "https://images.unsplash.com/photo-1782150924537-7a4fe94d837f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGtpZHMlMjBib29rfGVufDB8fDB8fHww",
},
  ]

  return (
    <section id="categories" className="py-16 px-6 bg-[#F7F1E3]">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-[#6B4226] mb-3">
          Browse by Category
        </h2>

        <p className="text-center text-[#6B5140] mb-10">
          Find your next favorite book.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

          {categories.map((category) => (
            <NavLink
              key={category.name}
              to={`/category/${encodeURIComponent(category.name)}`}
              className="group bg-[#EADCC4] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1"
            >

              <div className="h-32 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="font-semibold text-[#6B4226]">
                  {category.name}
                </h3>

                <p className="text-xs text-[#8A6A4A] mt-1">
                  Explore Books →
                </p>
              </div>

            </NavLink>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Categories