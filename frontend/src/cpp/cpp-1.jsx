import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Cpp1() {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    

    const handleNext = () => {
        navigate("/cpp-2");
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <header className="bg-gray-900 text-white py-4 px-6 fixed top-0 w-full z-10">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">DailyCode</h1>

                    <div className="flex items-center space-x-4">
                       
                        <p className="text-lg">C++ Introduction (1 / 7)</p>
                        <button onClick={handleNext} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
                            Next
                        </button>
                    </div>

                    <div className="flex items-center space-x-4">
                        <label className="text-lg">
                            <input
                                type="checkbox"
                                id="cppCheckbox"
                                name="cppCheckbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            Mark as Done
                        </label>
                    </div>
                </div>
            </header>

            <div className="mt-24">
                <h2 className="text-3xl font-bold mb-4">Introduction to C++</h2>
                <p className="text-lg mb-4">
                    C++ is a cross-platform language that can be used to create high-performance applications. 
                    Developed by Bjarne Stroustrup as an extension to C, it gives programmers high control over system resources and memory.
                </p>

                <h3 className="text-2xl font-bold mb-2">Why Use C++?</h3>
                <p className="text-lg mb-4">
                    C++ is one of the world's most popular programming languages, found in operating systems, GUIs, and embedded systems. 
                    Its object-oriented structure allows for code reuse and portability across platforms.
                </p>

                <h4 className="text-xl font-semibold mb-2">Difference between C and C++</h4>
                <p className="text-lg mb-4">
                    C++ was developed as an extension of C, with the main difference being support for classes and objects, which C lacks.
                </p>

                <h4 className="text-xl font-semibold mb-2">Getting Started</h4>
                <p className="text-lg mb-4">
                    This tutorial will guide you through the basics of C++, enabling you to write programs and real-life examples. No prior programming experience required!
                </p>
            </div>
        </div>
    );
}