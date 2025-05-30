import React from 'react';
import { FaHeadset, FaUserTie, FaShippingFast, FaShieldAlt, FaDoorOpen, FaSmile } from 'react-icons/fa';

const features = [
  { icon: <FaHeadset className="text-3xl text-blue-600" />, title: '24/7 Support' },
  { icon: <FaUserTie className="text-3xl text-blue-600" />, title: 'Trained Staff' },
  { icon: <FaShippingFast className="text-3xl text-blue-600" />, title: 'Fast Delivery' },
  { icon: <FaShieldAlt className="text-3xl text-blue-600" />, title: 'Insurance' },
  { icon: <FaDoorOpen className="text-3xl text-blue-600" />, title: 'Door-to-Door Service' },
  { icon: <FaSmile className="text-3xl text-blue-600" />, title: 'Customer Satisfaction' },
];

export default function WhyUs() {
  return (
    <section id="whyus" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
              {feature.icon}
              <span className="mt-4 font-semibold text-lg text-gray-700">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 