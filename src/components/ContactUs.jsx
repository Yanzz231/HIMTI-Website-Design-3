export default function ContactUs() {
    return (
      <div className="bg-[#15114A] text-white py-16 px-8" id="contact">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">CONTACT US</h1>
            <p className="text-lg leading-relaxed text-[#B9B8D0] mb-6">
              We'd love to hear from you! Whether you have questions, feedback, or
              need assistance, please feel free to reach out. Enter your email
              beside, and our team will get back to you as soon as possible.
            </p>
            <button className="bg-[#6D5BD0] hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg shadow-md transition">
              Submit →
            </button>
          </div>
  
          <div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message..."
                  rows="5"
                  className="w-full p-4 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  