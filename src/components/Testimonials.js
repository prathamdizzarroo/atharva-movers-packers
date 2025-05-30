import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  { name: 'Rahul Sharma', quote: 'Atharva Movers made my relocation stress-free and quick. Highly recommended!' },
  { name: 'Priya Desai', quote: 'Professional team and timely delivery. My goods arrived safely.' },
  { name: 'Amit Verma', quote: 'Excellent service and great support throughout the process.' },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">Customer Testimonials</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <p className="text-lg text-gray-700 mb-4">“{testimonials[index].quote}”</p>
              <span className="font-semibold text-blue-700">- {testimonials[index].name}</span>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-between mt-6">
            <button onClick={prev} className="px-4 py-2 bg-blue-100 rounded hover:bg-blue-200">Prev</button>
            <button onClick={next} className="px-4 py-2 bg-blue-100 rounded hover:bg-blue-200">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
} 