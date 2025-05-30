import React from 'react';

const moves = [
  {
    before: 'https://images.pexels.com/photos/4246100/pexels-photo-4246100.jpeg?auto=compress&w=400',
    after: 'https://images.pexels.com/photos/7464706/pexels-photo-7464706.jpeg?auto=compress&w=400',
    label: 'Home Relocation',
  },
  {
    before: 'https://images.pexels.com/photos/4246090/pexels-photo-4246090.jpeg?auto=compress&w=400',
    after: 'https://images.pexels.com/photos/5025502/pexels-photo-5025502.jpeg?auto=compress&w=400',
    label: 'Office Move',
  },
];

export default function BeforeAfterGallery() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-8">Before & After Gallery</h3>
        <div className="space-y-8">
          {moves.map((move, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <div className="flex-1 text-center">
                <img src={move.before} alt="Before" className="rounded-lg shadow w-full h-40 object-cover mb-2" loading="lazy" />
                <div className="text-sm text-gray-600">Before: {move.label}</div>
              </div>
              <div className="flex-1 text-center">
                <img src={move.after} alt="After" className="rounded-lg shadow w-full h-40 object-cover mb-2" loading="lazy" />
                <div className="text-sm text-gray-600">After: {move.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 