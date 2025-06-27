import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaBuilding, FaCar, FaTruck, FaWarehouse, FaBox } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const services = [
  {
    icon: <FaHome className="text-3xl" />,
    title: 'Home Relocation',
    description: 'Complete home shifting services with professional packing and unpacking.',
    image: 'https://images.pexels.com/photos/4246100/pexels-photo-4246100.jpeg?auto=compress&w=400', // Family moving boxes in home
  },
  {
    icon: <FaBuilding className="text-3xl" />,
    title: 'Office Shifting',
    description: 'Efficient office relocation with minimal business disruption.',
    image: 'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&w=400', // Office workers moving boxes
  },
  {
    icon: <FaCar className="text-3xl" />,
    title: 'Car/Bike Transportation',
    description: 'Safe and secure vehicle transportation services.',
    image: 'https://images.pexels.com/photos/193993/pexels-photo-193993.jpeg?auto=compress&w=400', // Car being loaded for transport
  },
  {
    icon: <FaTruck className="text-3xl" />,
    title: 'Local & Interstate Moves',
    description: 'Reliable moving services for both local and interstate relocations.',
    image: 'https://images.pexels.com/photos/7464706/pexels-photo-7464706.jpeg?auto=compress&w=400', // Moving truck on road
  },
  {
    icon: <FaWarehouse className="text-3xl" />,
    title: 'Warehousing',
    description: 'Secure storage solutions for your belongings.',
    image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&w=400', // Modern warehouse
  },
  {
    icon: <FaBox className="text-3xl" />,
    title: 'Packing & Unpacking',
    description: 'Professional packing services using high-quality materials.',
    image: 'https://images.pexels.com/photos/5025502/pexels-photo-5025502.jpeg?auto=compress&w=400', // Packers wrapping/unpacking boxes
  }
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | Atharva Movers & Packers Indore, MP</title>
        <meta name="description" content="Explore our professional moving, packing, car transport, warehousing, and relocation services in Indore, Madhya Pradesh." />
        <meta name="keywords" content="services, movers, packers, relocation, Indore, MP, Madhya Pradesh, Atharva Movers" />
      </Helmet>
    <motion.section
      id="services"
      className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 z-20 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive moving and packing services to make your relocation smooth and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group border-l-8 border-accent-500"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100/40 via-white/0 to-accent-100/40 pointer-events-none z-0" />
              {/* Floating Icon */}
              <div className="absolute -top-7 left-6 z-10">
                <div className="bg-primary-500 text-white p-4 rounded-full shadow-lg border-4 border-white group-hover:scale-110 group-hover:bg-accent-500 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              {/* Service Image */}
              <div className="h-44 w-full overflow-hidden rounded-t-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8 pt-12 relative z-10">
                <h3 className="text-xl font-bold mb-2 text-primary-800">{service.title}</h3>
                <p className="text-gray-600 mb-2">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
    </>
  );
} 