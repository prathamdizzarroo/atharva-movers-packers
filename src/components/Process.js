import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaCalculator, FaBox, FaTruck } from 'react-icons/fa';

const steps = [
  {
    icon: <FaPhone className="text-3xl" />,
    title: 'Request Quote',
    description: 'Contact us for a free quote and consultation.',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&w=400', // Indian consultation
  },
  {
    icon: <FaCalculator className="text-3xl" />,
    title: 'Get Estimate',
    description: 'Receive a detailed estimate based on your requirements.',
    image: 'https://images.pexels.com/photos/4246090/pexels-photo-4246090.jpeg?auto=compress&w=400', // Indian office move
  },
  {
    icon: <FaBox className="text-3xl" />,
    title: 'Packing & Loading',
    description: 'Professional packing and careful loading of your belongings.',
    image: 'https://images.pexels.com/photos/1439226/pexels-photo-1439226.jpeg?auto=compress&w=400', // Indian workers packing
  },
  {
    icon: <FaTruck className="text-3xl" />,
    title: 'Safe Delivery',
    description: 'Timely delivery and unpacking at your new location.',
    image: 'https://images.unsplash.com/photo-1600585153937-01c3b6c1b2b8?auto=format&fit=crop&w=400&q=80', // Indian movers with boxes
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Moving Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We follow a systematic approach to ensure a smooth and stress-free moving experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-white bg-blue-600 p-3 rounded-full">
                    {step.icon}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 