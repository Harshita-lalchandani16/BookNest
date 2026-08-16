function Contact() {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-4">
          Get in Touch
        </h2>

        <p className="text-gray-600 mb-8">
          Have a question? We would love to hear from you.
        </p>

        <div className="bg-white p-8 rounded-2xl shadow-md">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg mb-4"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border p-3 rounded-lg mb-4"
          />

          <button className="bg-[#6b4226] text-white px-6 py-3 rounded-lg">
            Send Message
          </button>

        </div>

      </div>
    </section>
  )
}

export default Contact