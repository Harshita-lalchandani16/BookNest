function About() {
  return (
    <section id="about" className="bg-[#F7F1E3] px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-[#C89B3C] uppercase tracking-[3px] text-sm font-semibold">
            About BookNest
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#6B4226] mt-3">
            A Little Place for
            <span className="block text-[#A06B3B]">
              Every Book Lover
            </span>
          </h2>

          <p className="text-[#6B5140] mt-5 leading-7">
            At BookNest, we believe every book has a story worth discovering.
            From timeless classics to modern favourites, our collection is
            made for readers who love getting lost in a good story.
          </p>

          <p className="text-[#6B5140] mt-3 leading-7">
            Pick a book, turn a page, and let your next adventure begin.
          </p>

          <a
            href="#books"
            className="inline-block mt-6 bg-[#6B4226] text-white px-6 py-3 rounded-lg hover:bg-[#4F301D]"
          >
            Explore Our Books
          </a>
        </div>

        <div className="bg-[#6B4226] rounded-3xl p-8 text-[#FFF8EA]">
          <p className="text-[#E8C878] text-5xl">❝</p>

          <p className="text-2xl font-serif leading-relaxed mt-3">
            “A room without books is like a body without a soul.”
          </p>

          <div className="w-16 h-px bg-[#C89B3C] my-5"></div>

          <p className="text-[#E8D8C1]">
            — A place where stories find their readers.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About