function Contact() {
  return (
    <section id="contact" className="bg-[#EDE0CA] px-6 py-16">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <p className="text-[#C89B3C] uppercase tracking-[3px] text-sm font-semibold">
            Get in Touch
          </p>

          <h2 className="text-4xl font-bold text-[#6B4226] mt-2">
            We'd Love to Hear From You
          </h2>

          <p className="text-[#6B5140] mt-3">
            Have a question about a book? Just drop us a message.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-[#6B4226] rounded-2xl p-8 text-white">

            <h3 className="text-2xl font-bold mb-6">
              Contact BookNest
            </h3>

            <div className="space-y-5 text-[#E8D8C1]">
              <p>📧 support@booknest.com</p>
              <p>📞 +91 98765 43210</p>
              <p>📍 Mumbai, India</p>
            </div>

            <div className="border-t border-[#8A5B3B] mt-8 pt-6">
              <p className="text-[#E8C878]">
                Opening Hours
              </p>

              <p className="mt-2 text-[#E8D8C1]">
                Monday – Saturday: 10 AM – 7 PM
              </p>
            </div>

          </div>

          <div className="bg-[#F7F1E3] rounded-2xl p-8">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-[#D9C4A5] bg-white px-4 py-3 rounded-lg mb-4 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-[#D9C4A5] bg-white px-4 py-3 rounded-lg mb-4 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-[#D9C4A5] bg-white px-4 py-3 rounded-lg mb-4 outline-none"
            ></textarea>

            <button className="w-full bg-[#6B4226] text-white py-3 rounded-lg hover:bg-[#4F301D]">
              Send Message
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact