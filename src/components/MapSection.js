import React from 'react';

export default function MapSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-8">Our Branch Location</h3>
        <div className="rounded-lg overflow-hidden shadow-lg border">
          <iframe
            title="Atharva Movers & Packers Hyderabad Branch"
            src="https://www.google.com/maps?q=63C,+C+Block,+Hanuman+Nagar,+Raghavendra+Colony,+Shilpa+Hills,+Kondapur,+Hyderabad,+Telangana+500084&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
} 