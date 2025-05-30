import React from 'react';
import { FaShieldAlt, FaCertificate, FaCheckCircle } from 'react-icons/fa';

export default function TrustBadges() {
  return (
    <section className="flex justify-center gap-8 py-6 bg-white shadow-sm">
      <div className="flex flex-col items-center">
        <FaShieldAlt className="text-3xl text-blue-600 mb-2" />
        <span className="font-semibold text-gray-700">100% Safe & Insured</span>
      </div>
      <div className="flex flex-col items-center">
        <FaCertificate className="text-3xl text-green-600 mb-2" />
        <span className="font-semibold text-gray-700">ISO Certified</span>
      </div>
      <div className="flex flex-col items-center">
        <FaCheckCircle className="text-3xl text-yellow-500 mb-2" />
        <span className="font-semibold text-gray-700">IBA Approved</span>
      </div>
    </section>
  );
} 