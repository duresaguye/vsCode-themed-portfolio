export default function Contact() {
    return (
      <div className="p-6 bg-gray-900 text-white font-mono">
        <h1 className="text-3xl text-blue-400 font-semibold mb-6">Contact Me</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Form */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl text-blue-400 font-semibold mb-4">Get In Touch</h2>
            <form
              action="https://formspree.io/f/mjvqjzjw" // Replace with your form endpoint
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-gray-400">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="youremail@example.com"
                  required
                  className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message here..."
                  required
                  className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-400 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
  
          {/* Social Media Links */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl text-blue-400 font-semibold mb-4">Connect With Me</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 mr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0zM12 12v8m-4-4h8"
                    />
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 mr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v16h16V4H4zm9 14h-4v-5h4v5zm-2-6h-2V7h2v5z"
                    />
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:youremail@example.com"
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 mr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 4h18v16H3V4zm0 0L12 13l9-9m-9 9v12"
                    />
                  </svg>
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  