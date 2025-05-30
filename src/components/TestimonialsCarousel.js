import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Rahul Sharma',
    feedback: 'Atharva Movers made my relocation stress-free and smooth. Highly recommended!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    name: 'Priya Singh',
    feedback: 'Professional team and timely delivery. Will use their services again!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Amit Patel',
    feedback: 'Great packing and careful handling of my belongings. Very satisfied!',
    rating: 4.5,
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  const t = testimonials[index];
  return (
    <section className="bg-white py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-8">What Our Customers Say</h3>
        <div className="bg-yellow-100 rounded-lg p-8 shadow flex flex-col items-center">
          <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-yellow-400" loading="lazy" />
          <p className="italic mb-4">"{t.feedback}"</p>
          <div className="flex gap-1 mb-2">
            {[...Array(Math.floor(t.rating))].map((_, i) => <FaStar key={i} className="text-yellow-500" />)}
            {t.rating % 1 !== 0 && <FaStar className="text-yellow-300" />}
          </div>
          <span className="font-bold text-yellow-700">- {t.name}</span>
        </div>
      </div>
    </section>
  );
} 