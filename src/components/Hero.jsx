function Hero() {
  return (
    <section id="home" className="py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-[#a06b3b] font-semibold mb-3">
            WELCOME TO BookNest
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Stories that stay with you.
          </h1>

          <p className="text-lg text-gray-700 mb-8">
            Discover timeless classics, inspiring stories and wonderful
            books for every kind of reader.
          </p>

          <a
            href="#books"
            className="inline-block bg-[#6b4226] text-white px-6 py-3 rounded-lg hover:bg-[#4f301d]"
          >
            Explore Books
          </a>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80"
            alt="Books"
            className="w-full h-96 object-cover rounded-3xl shadow-xl"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero