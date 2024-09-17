// Testimonials.js
import React from 'react';

function Testimonials() {
  const testimonials = [
    { name: "Sainath", quote: "Daily Code transformed my learning experience!" },
    { name: "Hemanth", quote: "The best platform to learn coding interactively!" },
    { name: "Sekhar", quote: "I love the flexibility and the community support." }
  ];

  return (
    <section className="py-16 bg-gray-100 mb-[50px]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-gray-800">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
