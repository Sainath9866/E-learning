import React, { useState } from 'react';
import checkboxState from '../checkbox-state';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false); // State for dropdown menu visibility

    const courseList1 = [
        { id: 1, title: "SQL", description: "In this track, we'll be learning about SQL databases, and how they're different from NoSQL databases", progress: 30 }
    ];
    const courseList2 = [{ id: 1, title: "CPP", description: "In this track, we'll be learning C++ basics,It's object-oriented, meaning it uses data fields (objects) instead of logic or functions", progress: 30 }];
    const courseList3 = [{ id: 1, title: "JAVA", description: "The main ideas behind Java's Object-Oriented Programming, OOP concepts include abstraction, encapsulation, inheritance and polymorphism.", progress: 30 }];

    const handleLearnNowClick = (courseTitle) => {
        if (courseTitle === "SQL") {
            navigate("/sql-main");
        } else if (courseTitle === "CPP") {
            navigate("/cpp-main");
        } else {
            navigate("/java-main");
        }
    };

    const checkedPagesCount = Object.values(checkboxState).filter((isChecked) => isChecked).length;
    const progress = (checkedPagesCount / 11) * 100;
    const roundedValue = progress.toFixed(2);

    // Function to toggle dropdown menu visibility
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const handletest = () => {
        navigate("/tests/tests-main")
    }
    const handlecontact = () =>{
        navigate("/contactus")
    }
   

    return (
        <section id="courses" className="py-8">
            <button onClick={toggleMenu} className='btn-secondary bg-blue-500 ml-4 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300'>
                Menu
            </button>

            {/* Dense Dropdown Menu */}
            {menuOpen && (
                <div className="dropdown-menu mt-6 bg-blue-500 shadow-lg rounded-lg py-4 mt-2 absolute left-4 top-12 w-52 z-50">
                    <button className="block px-4 py-2 text-white text-lg hover:bg-blue-600 focus:outline-none">Courses</button>
                    <button onClick={handletest} className="block px-4 py-2 text-white text-lg hover:bg-blue-600 focus:outline-none">Tests</button>
                    <a href="http://localhost:5173/">
                    <button className="block px-4 py-2 text-white text-lg hover:bg-blue-600 focus:outline-none">Practice</button>
                    </a>
                    <button onClick={handlecontact} className="block px-4 py-2 text-white text-lg hover:bg-blue-600 focus:outline-none">Contact Us</button>
                </div>
            )}


            <h1 className="text-4xl font-bold text-center text-white bg-blue-500 py-1 px-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 cursor-pointer">
                Daily Code
            </h1>


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
