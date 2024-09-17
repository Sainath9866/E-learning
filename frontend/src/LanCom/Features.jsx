import React, { useEffect, useState } from 'react';

const Features = () => {
  

  return (
    
    <section id="features" className="py-16 bg-gray-100">
      
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Our Features</h2>
        <div
          className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-opacity duration-700 opacity-100"}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Interactive Learning</h3>
            <p className="text-gray-600">Hands-on coding exercises and projects to reinforce learning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Expert Instructors</h3>
            <p className="text-gray-600">Learn from industry experts with real-world experience.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Flexible Schedule</h3>
            <p className="text-gray-600">Study at your own pace and on your own time.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Community Support</h3>
            <p className="text-gray-600">Join a vibrant community of learners and get support when needed.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;