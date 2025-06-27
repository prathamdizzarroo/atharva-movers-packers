import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaCalculator, FaBox, FaTruck } from 'react-icons/fa';

const steps = [
  {
    icon: <FaPhone className="text-3xl" />,
    title: 'Request Quote',
    description: 'Contact us for a free quote and consultation.',
    image: 'https://images.pexels.com/photos/3182764/pexels-photo-3182764.jpeg?auto=compress&w=400', // Person on phone or filling form
  },
  {
    icon: <FaCalculator className="text-3xl" />,
    title: 'Get Estimate',
    description: 'Receive a detailed estimate based on your requirements.',
    image: 'https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg?auto=compress&w=400', // Calculator, paperwork, business meeting
  },
  {
    icon: <FaBox className="text-3xl" />,
    title: 'Packing & Loading',
    description: 'Professional packing and careful loading of your belongings.',
    image: 'https://images.pexels.com/photos/5025502/pexels-photo-5025502.jpeg?auto=compress&w=400', // Packers loading boxes
  },
  {
    icon: <FaTruck className="text-3xl" />,
    title: 'Safe Delivery',
    description: 'Timely delivery and unpacking at your new location.',
    image: 'https://images.pexels.com/photos/4246100/pexels-photo-4246100.jpeg?auto=compress&w=400', // Happy family receiving boxes
  }
];

export default function Process() {
  return (
    <motion.section
      id="process"
      className="py-20 bg-gradient-to-r from-secondary-50 via-white to-primary-50 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-800">Our Moving Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We follow a systematic approach to ensure a smooth and stress-free moving experience.
          </p>
        </div>
        {/* Timeline/Stepper */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0 overflow-x-auto pb-8">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-accent-200 to-secondary-200 z-0" style={{transform: 'translateY(-50%)'}} />
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center bg-white rounded-2xl shadow-lg px-6 py-8 w-full max-w-xs mx-auto lg:mx-0 lg:w-64 group"
            >
              {/* Step Number Circle */}
              <div className={`flex items-center justify-center w-14 h-14 rounded-full text-2xl font-bold mb-4 border-4 ${index === 0 ? 'bg-primary-500 border-primary-200 text-white' : index === steps.length-1 ? 'bg-secondary-500 border-secondary-200 text-white' : 'bg-accent-500 border-accent-200 text-white'} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {index + 1}
              </div>
              {/* Icon */}
              <div className="mb-4 text-3xl text-primary-600 group-hover:text-accent-500 transition-colors duration-300">
                {step.icon}
              </div>
              {/* Image */}
              <div className="h-24 w-24 mb-4 rounded-xl overflow-hidden shadow">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary-800">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
              {/* Connector for mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden w-1 h-8 bg-gradient-to-b from-primary-200 via-accent-200 to-secondary-200 my-2 rounded-full" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 