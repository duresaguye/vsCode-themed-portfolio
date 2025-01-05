"use client";
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [status, setStatus] = useState(''); // Tracks submission status

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/contact', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="p-6 font-mono">
      <h1 className="text-3xl text-blue-400 font-semibold mb-6">Contact Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Form */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl text-blue-400 font-semibold mb-4">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
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

          {/* Feedback Message */}
          {status === 'loading' && <p className="text-blue-400 mt-4">Sending message...</p>}
          {status === 'success' && <p className="text-green-400 mt-4">Message sent successfully!</p>}
          {status === 'error' && <p className="text-red-400 mt-4">Failed to send message. Please try again.</p>}
        </div>

        {/* Social Media Links */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl text-blue-400 font-semibold mb-4">Connect With Me</h2>
          <ul className="space-y-4">
            <li>
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin size={24} className="mr-3" />
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
                <FaGithub size={24} className="mr-3" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="mailto:youremail@example.com"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaEnvelope size={24} className="mr-3" />
                Email Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
