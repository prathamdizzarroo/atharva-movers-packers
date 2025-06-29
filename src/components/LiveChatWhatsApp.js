import React from 'react';
import { FaWhatsapp, FaComments } from 'react-icons/fa';

export default function LiveChatWhatsApp() {
  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-4 items-end">
      <a
        href="https://wa.me/919699840437"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center text-2xl animate-bounce"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg p-4 flex items-center justify-center text-2xl"
        title="Live Chat (Coming Soon)"
      >
        <FaComments />
      </button>
    </div>
  );
} 