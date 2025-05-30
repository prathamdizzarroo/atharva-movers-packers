import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaFileSignature } from 'react-icons/fa';

export default function StickyContactBar() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-4 bg-white shadow-lg rounded-full px-6 py-3 border border-gray-200 items-center">
      <a href="tel:+919999999999" className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-800 transition">
        <FaPhoneAlt /> Call
      </a>
      <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-500 font-semibold hover:text-green-700 transition">
        <FaWhatsapp /> WhatsApp
      </a>
      <a href="#quote" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
        <FaFileSignature /> Get Quote
      </a>
    </div>
  );
} 