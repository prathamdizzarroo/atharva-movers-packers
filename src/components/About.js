import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Atharva Movers & Packers | Indore, MP</title>
        <meta name="description" content="Learn about Atharva Movers & Packers, your trusted moving partner in Indore, Madhya Pradesh. Over 10 years of experience in home and office relocation." />
        <meta name="keywords" content="about movers, packers, relocation, Indore, MP, Madhya Pradesh, Atharva Movers" />
      </Helmet>
      <motion.section
        id="about"
        className="py-20 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/4246100/pexels-photo-4246100.jpeg?auto=compress&w=800"
                alt="Indian family moving with boxes"
                className="rounded-lg shadow-xl h-[400px] w-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Atharva Movers & Packers</h2>
              <p className="text-gray-600 mb-6">
                With over 10 years of experience in the moving industry, we have established ourselves as one of the most reliable and trusted moving companies in India. Our commitment to excellence and customer satisfaction sets us apart.
              </p>
              <ul className="space-y-3">
                {[
                  'Professional and experienced moving team',
                  'Safe and secure packing materials',
                  'Fully insured moving services',
                  '24/7 customer support',
                  'On-time delivery guarantee'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
} 