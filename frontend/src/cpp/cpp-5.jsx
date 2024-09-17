import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Cpp5() {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    function handlePrev() {
        navigate("/cpp-4");
    }

    function handleNext() {
        navigate("/cpp-6");
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
                        <p className="text-lg">C++ Operators (5 / 7)</p>
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
                <h2 className="text-3xl font-bold mb-4">C++ Operators</h2>

                <p className="text-lg mb-4">
                    Operators in C++ are used to perform operations on variables and values. Let's look at an example where we use the <code>+</code> operator to add two values:
                </p>

                <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                    int x = 100 + 50;  // x is 150{'\n'}
                </pre>

                <p className="text-lg mb-4">
                    You can also add variables together or add a variable to a value:
                </p>

                <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                    int sum1 = 100 + 50;        // 150{'\n'}
                    int sum2 = sum1 + 250;      // 400{'\n'}
                    int sum3 = sum2 + sum2;     // 800
                </pre>

                <h3 className="text-2xl font-bold mb-2">Arithmetic Operators</h3>
                <p className="text-lg mb-4">
                    Arithmetic operators are used to perform basic mathematical operations. Here are some common ones:
                </p>

                <table className="table-auto w-full mb-4">
                    <thead>
                        <tr className="bg-gray-700">
                            <th className="px-4 py-2">Operator</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-800">
                            <td className="border px-4 py-2">+</td>
                            <td className="border px-4 py-2">Addition</td>
                            <td className="border px-4 py-2">Adds two values</td>
                            <td className="border px-4 py-2">x + y</td>
                        </tr>
                        <tr className="bg-gray-700">
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">Subtraction</td>
                            <td className="border px-4 py-2">Subtracts one value from another</td>
                            <td className="border px-4 py-2">x - y</td>
                        </tr>
                        <tr className="bg-gray-800">
                            <td className="border px-4 py-2">*</td>
                            <td className="border px-4 py-2">Multiplication</td>
                            <td className="border px-4 py-2">Multiplies two values</td>
                            <td className="border px-4 py-2">x * y</td>
                        </tr>
                        <tr className="bg-gray-700">
                            <td className="border px-4 py-2">/</td>
                            <td className="border px-4 py-2">Division</td>
                            <td className="border px-4 py-2">Divides one value by another</td>
                            <td className="border px-4 py-2">x / y</td>
                        </tr>
                        <tr className="bg-gray-800">
                            <td className="border px-4 py-2">%</td>
                            <td className="border px-4 py-2">Modulus</td>
                            <td className="border px-4 py-2">Returns the remainder of a division</td>
                            <td className="border px-4 py-2">x % y</td>
                        </tr>
                    </tbody>
                </table>

                <h3 className="text-2xl font-bold mb-2">Exercise:</h3>
                <p className="text-lg mb-4">
                    Multiply 10 by 5 and print the result:
                </p>

                <pre className="bg-gray-800 p-4 rounded text-white">
                    cout &lt;&lt; 10 * 5;
                </pre>
            </div>
        </div>
    );
}