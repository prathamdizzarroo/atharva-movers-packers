import React from 'react';
import { FaBoxOpen, FaTruckMoving, FaWarehouse, FaHome, FaBuilding, FaCar } from 'react-icons/fa';

const services = [
  { icon: <FaBoxOpen />, label: 'Packing' },
  { icon: <FaTruckMoving />, label: 'Moving' },
  { icon: <FaWarehouse />, label: 'Warehousing' },
  { icon: <FaHome />, label: 'Home Relocation' },
  { icon: <FaBuilding />, label: 'Office Shifting' },
  { icon: <FaCar />, label: 'Vehicle Transport' },
];

export default function AnimatedServiceIcons() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-8">Our Core Services</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {services.map((s, idx) => (
            <div
              key={s.label}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="text-5xl text-blue-600 mb-2 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                {s.icon}
              </div>
              <span className="font-semibold text-gray-700 text-lg group-hover:text-blue-700 transition-colors duration-300">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 