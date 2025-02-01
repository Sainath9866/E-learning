
import React, { useState } from 'react';
import checkboxState from '../checkbox-state';
import { useNavigate } from 'react-router-dom';
function Tests(){
    const navigate = useNavigate();

    

    const courseList1 = [
        { id: 1, title: "SQL", description: "Welcome to the SQL Test!This test consists of 20 questions, each carrying one mark. It is designed to evaluate your understanding of SQL (Structured Query Language), the standard language for managing and manipulating databases. You will encounter a range of questions from basic concepts to more complex queries. Your total score will reflect your knowledge of SQL syntax, functions, and best practices. Good luck!", progress: 30 }
    ];
    const courseList2 = [{ id: 1, title: "CPP", description: "Welcome to the C++ Test! This test comprises 20 questions, with each question worth one mark. It is crafted to challenge your proficiency in C++, a powerful programming language known for its performance and versatility. You'll face a variety of questions covering fundamental concepts, object-oriented programming, and advanced features of C++. This test is an excellent way to gauge your understanding of C++ and identify areas for improvement. Happy coding!", progress: 30 }];
    const courseList3 = [{ id: 1, title: "JAVA", description: "Welcome to the Java Test! Prepare to dive into the world of Java with this test featuring 20 questions, each carrying one mark. This assessment will evaluate your grasp of core Java concepts, object-oriented programming principles, and Java-specific libraries and frameworks. Whether you're a beginner or looking to refresh your knowledge, this test will help you evaluate your skills. Best of luck!", progress: 30 }];

    const handleLearnNowClick = (courseTitle) => {
        if (courseTitle === "SQL") {
            navigate("/tests/sql-test");
        } else if (courseTitle === "CPP") {
            navigate("/tests/cpp-test");
        } else {
            navigate("/tests/java-test");
        }
    };

    const checkedPagesCount = Object.values(checkboxState).filter((isChecked) => isChecked).length;
    const progress = (checkedPagesCount / 11) * 100;
    const roundedValue = progress.toFixed(2);

    // Function to toggle dropdown menu visibility
    
    

    return (
        <section id="courses" className="py-8">
            
            <h1 className=" text-4xl font-bold text-center text-gray-800 mb-8">Test your Caliber</h1>
            <div className='flex justify-center'>
                <div className="px-4">
                    {courseList1.map((course) => (
                        <div
                            key={course.id}
                            className="course-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">{course.title}</h3>
                            <p className="text-gray-600 mb-6">{course.description}</p>

                            <button
                                className="btn-secondary bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                                onClick={() => handleLearnNowClick(course.title)}
                            >
                                start
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

                            <button
                                className="btn-secondary bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                                onClick={() => handleLearnNowClick(course.title)}
                            >
                                start
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

                            <button
                                className="btn-secondary bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                                onClick={() => handleLearnNowClick(course.title)}
                            >
                                start
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );

}

export default Tests
