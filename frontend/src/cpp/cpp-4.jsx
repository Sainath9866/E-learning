import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Cpp4() {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    function handlePrev() {
        navigate("/cpp-3");
    }

    function handleNext() {
        navigate("/cpp-5");
    }

    function handleCheckboxChange() {
        setIsChecked(!isChecked);
    }

    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <header className="bg-gray-900 text-white py-4 px-6 fixed top-0 w-full z-10">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">CppGuide</h1>
                    <div className="flex items-center space-x-4">
                        <button onClick={handlePrev} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
                            Prev
                        </button>
                        <p className="text-lg">C++ Data Types (4 / 7)</p>
                        <button onClick={handleNext} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
                            Next
                        </button>
                    </div>
                    <div className="flex items-center space-x-4">
                        <label className="text-lg">
                            <input 
                                type="checkbox"
                                id="myCheckbox"
                                name="myCheckbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            Mark as Done
                        </label>
                    </div>
                </div>
            </header>

            <div className="mt-24">
                <h2 className="text-3xl font-bold mb-4">C++ Data Types</h2>

                <p className="text-lg mb-4">
                    In C++, variables must have a specified data type. Here are some basic examples:
                </p>

                <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                    int myNum = 5;             // Integer (whole number){'\n'}
                    float myFloatNum = 5.99;    // Floating point number{'\n'}
                    double myDoubleNum = 9.98;  // Double precision floating point{'\n'}
                    char myLetter = 'D';        // Character{'\n'}
                    bool myBoolean = true;      // Boolean value{'\n'}
                    string myText = "Hello";    // String
                </pre>

                <h3 className="text-2xl font-bold mb-2">Basic Data Types</h3>
                <p className="text-lg mb-4">
                    Here's a breakdown of some basic C++ data types and their sizes:
                </p>

                <table className="table-auto w-full mb-4">
                    <thead>
                        <tr className="bg-gray-700">
                            <th className="px-4 py-2">Data Type</th>
                            <th className="px-4 py-2">Size</th>
                            <th className="px-4 py-2">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-800">
                            <td className="border px-4 py-2">boolean</td>
                            <td className="border px-4 py-2">1 byte</td>
                            <td className="border px-4 py-2">Stores true or false values</td>
                        </tr>
                        <tr className="bg-gray-700">
                            <td className="border px-4 py-2">char</td>
                            <td className="border px-4 py-2">1 byte</td>
                            <td className="border px-4 py-2">Stores a single character/letter/number</td>
                        </tr>
                        <tr className="bg-gray-800">
                            <td className="border px-4 py-2">int</td>
                            <td className="border px-4 py-2">2 or 4 bytes</td>
                            <td className="border px-4 py-2">Stores whole numbers</td>
                        </tr>
                        <tr className="bg-gray-700">
                            <td className="border px-4 py-2">float</td>
                            <td className="border px-4 py-2">4 bytes</td>
                            <td className="border px-4 py-2">Stores fractional numbers (6-7 decimal digits)</td>
                        </tr>
                        <tr className="bg-gray-800">
                            <td className="border px-4 py-2">double</td>
                            <td className="border px-4 py-2">8 bytes</td>
                            <td className="border px-4 py-2">Stores fractional numbers (15 decimal digits)</td>
                        </tr>
                    </tbody>
                </table>

                <h3 className="text-2xl font-bold mb-2">Exercise:</h3>
                <p className="text-lg mb-4">
                    Add the correct data type for the following variables:
                </p>
                <pre className="bg-gray-800 p-4 rounded text-white">
                     myNum = 9;{'\n'}
                     myDoubleNum = 8.99;{'\n'}
                     myLetter = 'A';{'\n'}
                     myBool = false;{'\n'}
                     myText = "Hello World";
                </pre>
            </div>
        </div>
    );
}