import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    q: 'How do I book a move with Atharva Movers & Packers?',
    a: 'You can book a move by filling out our online quote form, calling our customer care, or contacting us via WhatsApp.',
  },
  {
    q: 'Are my belongings insured during the move?',
    a: 'Yes, all moves are fully insured for your peace of mind. We offer 100% safe and insured services.',
  },
  {
    q: 'Do you provide packing materials?',
    a: 'Yes, we use high-quality packing materials for all moves, including boxes, bubble wrap, and more.',
  },
  {
    q: 'Can I track my shipment?',
    a: 'Yes, you can contact our support team for real-time updates on your shipment status.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We provide moving and packing services across all major cities in India.',
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState(null);
  return (
    <section className="bg-white py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-700 bg-gray-50 hover:bg-blue-50 focus:outline-none"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                {faq.q}
                <FaChevronDown className={`ml-2 transition-transform duration-200 ${open === idx ? 'rotate-180' : ''}`} />
              </button>
              {open === idx && (
                <div className="px-6 py-4 bg-white text-gray-600 border-t animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 