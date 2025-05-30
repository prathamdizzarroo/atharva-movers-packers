import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <form className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
                <input type="tel" id="phone" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition">Send Message</button>
            </form>
          </div>
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaPhone className="text-blue-600 mr-3" />
                  <span>+91 9999999999</span>
                </div>
                <div className="flex items-center">
                  <FaWhatsapp className="text-green-600 mr-3" />
                  <span>+91 9999999999</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-blue-600 mr-3" />
                  <span>info@atharvamovers.com</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-blue-600 mr-3" />
                  <span>123, Main Street, Mumbai, India</span>
                </div>
              </div>
            </div>
            <div className="h-64 bg-gray-200 rounded-lg">
              <iframe
                title="Atharva Movers and Packers Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.066487346713!2d72.82821461490099!3d19.07598398710039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 