import React from 'react';
import { FaHeadset, FaUserTie, FaShippingFast, FaShieldAlt, FaDoorOpen, FaSmile } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
    <motion.section
      id="whyus"
      className="py-16 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {feature.icon}
              <span className="mt-4 font-semibold text-lg text-gray-700">{feature.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 