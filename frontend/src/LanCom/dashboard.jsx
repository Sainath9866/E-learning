// src/components/Courses.js
import React, { useState } from 'react';
import checkboxState from '../checkbox-state';
import { useNavigate } from 'react-router-dom';
export const Dashboard = () => {
    // Adding default progress values to the course data
    const navigate = useNavigate()
    const courseList1 = [
        { id: 1, title: "SQL", description: "In this track, we'll be learning about SQL databases, and how they're different from NoSQL databases", progress: 30 }
    ];
    const courseList2 = [ { id: 1, title: "CPP", description: "In this track, we'll be learning C++ basics,It's object-oriented, meaning it uses data fields (objects) instead of logic or functions", progress: 30 }];
    const courseList3 = [ { id: 1, title: "JAVA", description: "The main ideas behind Java's Object-Oriented Programming, OOP concepts include abstraction, encapsulation, inheritance and polymorphism.", progress: 30 }];
    // onClick function to handle the button click
    const handleLearnNowClick = (courseTitle) => {
       if(courseTitle=="SQL"){
        navigate("/sql-1")
       } 
       else if(courseTitle=="CPP"){
        navigate("/cpp-1")
       }else{
        navigate("/java-1")
       }

    };
    const checkedPagesCount = Object.values(checkboxState).filter((isChecked) => isChecked).length;
    const progress = (checkedPagesCount / 11) * 100;
    const roundedValue = progress.toFixed(2);
    

    return (
        <section id="courses" className="py-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Daily Code</h1>
            <div className='flex justify-center'>
            <div className="px-4">
                {courseList1.map((course) => (
                    <div
                        key={course.id}
                        className="course-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">{course.title}</h3>
                        <p className="text-gray-600 mb-6">{course.description}</p>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                            <div
                                className="bg-blue-500 h-4 rounded-full"
                                style={{ width: `${roundedValue}%` }}
                            ></div>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">Progress: {roundedValue}%</p>

                        {/* Learn Now Button with onClick */}
                        <button
                            className="btn-secondary bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                            onClick={() => handleLearnNowClick(course.title)}
                        >
                            Learn Now
                        </button>
                    </div>
                ))}
            </div>

            <div className="">
                {courseList2.map((course) => (
                    <div
                        key={course.id}
                        className="course-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">{course.title}</h3>
                        <p className="text-gray-600 mb-6">{course.description}</p>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                            <div
                                className="bg-blue-500 h-4 rounded-full"
                                style={{ width: `60%` }}
                            ></div>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">Progress: 0%</p>

                        {/* Learn Now Button with onClick */}
                        <button
                            className="btn-secondary bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                            onClick={() => handleLearnNowClick(course.title)}
                        >
                            Learn Now
                        </button>
                    </div>
                ))}
            </div>
            <div className="">
                {courseList3.map((course) => (
                    <div
                        key={course.id}
                        className="course-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">{course.title}</h3>
                        <p className="text-gray-600 mb-6">{course.description}</p>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                            <div
                                className="bg-blue-500 h-4 rounded-full"
                                style={{ width: `90%` }}
                            ></div>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">Progress: 0%</p>

                        {/* Learn Now Button with onClick */}
                        <button
                            className="btn-secondary bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                            onClick={() => handleLearnNowClick(course.title)}
                        >
                            Learn Now
                        </button>
                    </div>
                ))}
            </div>
            
            </div>
        </section>
    );
};
