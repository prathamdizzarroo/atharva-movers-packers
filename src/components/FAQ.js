import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'How are moving charges calculated?',
    answer: 'Charges depend on distance, volume, type of goods, and additional services like packing or insurance.'
  },
  {
    question: 'Do you provide insurance?',
    answer: 'Yes, we offer transit insurance for your goods to ensure complete peace of mind.'
  },
  {
    question: 'How much in advance should I book?',
    answer: 'It is best to book at least 3-7 days in advance to ensure availability.'
  },
  {
    question: 'What items are not allowed to be moved?',
    answer: 'Hazardous materials, perishable items, and valuables like jewelry or cash are not allowed.'
  },
  {
    question: 'Can I track my shipment?',
    answer: 'Yes, we provide regular updates and tracking for your shipment.'
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 hover:bg-blue-50 focus:outline-none"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <FaChevronDown className={`ml-2 transition-transform ${open === idx ? 'rotate-180' : ''}`} />
              </button>
              {open === idx && (
                <div className="px-6 py-4 bg-white text-gray-700 border-t animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 