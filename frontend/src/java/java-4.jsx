import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Java4() {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    function handlePrev() {
        navigate("/java-3"); // Adjust path if needed
    }

    function handleNext() {
        navigate("/java-next"); // Adjust path if needed
    }

    function handleCheckboxChange() {
        setIsChecked(!isChecked);
    }

    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <header className="bg-gray-900 text-white py-4 px-6 fixed top-0 w-full z-10">
                <div className="flex justify-between items-center">
                    {/* Left side: Title */}
                    <h1 className="text-2xl font-bold">DailyCode</h1>

                    {/* Right side: Prev, Current, and Next buttons */}
                    <div className="flex items-center space-x-4">
                        <button onClick={handlePrev} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
                            Prev
                        </button>
                        <p className="text-lg">Java Variables (4 / 4)</p>
                        <button onClick={handleNext} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
                            Next
                        </button>
                    </div>

                    {/* Checkbox */}
                    
                </div>
            </header>

            <div className="mt-24">
                {/* Step Title */}
                <h2 className="text-3xl font-bold mb-4">Java Variables</h2>

                {/* Introduction Text */}
                <p className="text-lg mb-4">
                    Variables are containers for storing data values. In Java, there are different types of variables:
                </p>

                {/* Variable Types Section */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Variable Types</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>String</strong> - stores text, such as "Hello". String values are surrounded by double quotes.</li>
                        <li><strong>int</strong> - stores integers (whole numbers), without decimals, such as 123 or -123.</li>
                        <li><strong>float</strong> - stores floating point numbers, with decimals, such as 19.99 or -19.99.</li>
                        <li><strong>char</strong> - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes.</li>
                        <li><strong>boolean</strong> - stores values with two states: true or false.</li>
                    </ul>
                </div>

                {/* Declaring Variables Section */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Declaring (Creating) Variables</h3>
                    <p className="text-lg mb-4">
                        To create a variable, you must specify the type and assign it a value:
                    </p>
                    <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                        type variableName = value;
                    </pre>
                    <p className="text-lg mb-4">
                        Example for a String variable:
                    </p>
                    <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                        String name = "John";{'\n'}
                        System.out.println(name);
                    </pre>
                    <p className="text-lg mb-4">
                        Example for an int variable:
                    </p>
                    <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                        int myNum = 15;{'\n'}
                        System.out.println(myNum);
                    </pre>
                </div>

                {/* Final Variables Section */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Final Variables</h3>
                    <p className="text-lg mb-4">
                        If you don't want others (or yourself) to overwrite existing values, use the <code>final</code> keyword:
                    </p>
                    <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                        final int myNum = 15;{'\n'}
                        myNum = 20;  // will generate an error
                    </pre>
                </div>

                {/* Other Types Section */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Other Types</h3>
                    <p className="text-lg mb-4">
                        A demonstration of how to declare variables of other types:
                    </p>
                    <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                        int myNum = 5;{'\n'}
                        float myFloatNum = 5.99f;{'\n'}
                        char myLetter = 'D';{'\n'}
                        boolean myBool = true;{'\n'}
                        String myText = "Hello";
                    </pre>
                </div>

                {/* Test Yourself Section */}
                <div>
                    <h3 className="text-2xl font-bold mb-2">Test Yourself</h3>
                    <p className="text-lg mb-4">
                        Exercise: Create a variable named <code>carName</code> and assign the value <code>Volvo</code> to it.
                    </p>
                    <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                        String carName = "Volvo";
                    </pre>
                </div>
            </div>
        </div>
    );
}