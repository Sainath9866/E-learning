// src/components/Courses.js
import React from 'react';

const Courses = () => {
  const courseList = [
    { id: 1, title: "SQL", description: "In this track, we'll be learning about SQL databases, and how they're different from NoSQL databases" },
    { id: 2, title: "C++", description: "In this track, we'll be learning C++ basics,It's object-oriented, meaning it uses data fields (objects) instead of logic or functions" },
    { id: 3, title: "Java", description: "The main ideas behind Java's Object-Oriented Programming, OOP concepts include abstraction, encapsulation, inheritance and polymorphism." },
  ];

  return (
    <section id="courses" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-6">Popular Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseList.map(course => (
            <div key={course.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
