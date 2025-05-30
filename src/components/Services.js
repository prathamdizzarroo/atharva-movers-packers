import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaBuilding, FaCar, FaTruck, FaWarehouse, FaBox } from 'react-icons/fa';

const services = [
  {
    icon: <FaHome className="text-3xl" />,
    title: 'Home Relocation',
    description: 'Complete home shifting services with professional packing and unpacking.',
    image: 'https://images.pexels.com/photos/4246100/pexels-photo-4246100.jpeg?auto=compress&w=400', // Indian family with boxes
  },
  {
    icon: <FaBuilding className="text-3xl" />,
    title: 'Office Shifting',
    description: 'Efficient office relocation with minimal business disruption.',
    image: 'https://images.pexels.com/photos/4246090/pexels-photo-4246090.jpeg?auto=compress&w=400', // Indian office move
  },
  {
    icon: <FaCar className="text-3xl" />,
    title: 'Car/Bike Transportation',
    description: 'Safe and secure vehicle transportation services.',
    image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&w=400', // Indian family with car
  },
  {
    icon: <FaTruck className="text-3xl" />,
    title: 'Local & Interstate Moves',
    description: 'Reliable moving services for both local and interstate relocations.',
    image: 'https://images.unsplash.com/photo-1600585153937-01c3b6c1b2b8?auto=format&fit=crop&w=400&q=80', // Indian movers with boxes
  },
  {
    icon: <FaWarehouse className="text-3xl" />,
    title: 'Warehousing',
    description: 'Secure storage solutions for your belongings.',
    image: 'https://images.pexels.com/photos/5025502/pexels-photo-5025502.jpeg?auto=compress&w=400', // Indian warehouse
  },
  {
    icon: <FaBox className="text-3xl" />,
    title: 'Packing & Unpacking',
    description: 'Professional packing services using high-quality materials.',
    image: 'https://images.pexels.com/photos/1439226/pexels-photo-1439226.jpeg?auto=compress&w=400', // Indian workers packing
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive moving and packing services to make your relocation smooth and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-white bg-blue-600 p-3 rounded-full">
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 