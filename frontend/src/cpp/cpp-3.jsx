import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Cpp3() {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    function handlePrev() {
        navigate("/cpp-2");
    }

    function handleNext() {
        navigate("/cpp-4");
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
                        <p className="text-lg">C++ Variables (3 / 7)</p>
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
                <h2 className="text-3xl font-bold mb-4">C++ Variables</h2>

                <p className="text-lg mb-4">
                    Variables are containers for storing data values. In C++, different types of variables are defined with different keywords.
                </p>

                <h3 className="text-2xl font-bold mb-2">Types of Variables:</h3>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>int</strong> - stores integers (whole numbers) like 123 or -123</li>
                    <li><strong>double</strong> - stores floating point numbers, like 19.99</li>
                    <li><strong>char</strong> - stores single characters, like 'a'</li>
                    <li><strong>string</strong> - stores text, like "Hello World"</li>
                    <li><strong>bool</strong> - stores true or false values</li>
                </ul>

                <h3 className="text-2xl font-bold mb-2">Declaring Variables:</h3>
                <p className="text-lg mb-4">
                    To declare a variable, specify the type and assign a value using the syntax:
                </p>
                <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                    type variableName = value;
                </pre>

                <p className="text-lg mb-4">Example of declaring an <strong>int</strong> variable:</p>
                <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                    int myNum = 15;{'\n'}
                    cout &lt;&lt; myNum;
                </pre>

                <h3 className="text-2xl font-bold mb-2">Overwriting Variables:</h3>
                <p className="text-lg mb-4">
                    You can reassign a new value to an existing variable:
                </p>
                <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                    int myNum = 15;{'\n'}
                    myNum = 10;{'\n'}
                    cout &lt;&lt; myNum;  // Outputs 10
                </pre>

                <h3 className="text-2xl font-bold mb-2">Other Types Example:</h3>
                <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                    int myNum = 5;{'\n'}
                    double myFloatNum = 5.99;{'\n'}
                    char myLetter = 'D';{'\n'}
                    string myText = "Hello";{'\n'}
                    bool myBoolean = true;
                </pre>

                <h3 className="text-2xl font-bold mb-2">Displaying Variables:</h3>
                <p className="text-lg mb-4">
                    Use <strong>cout</strong> and the insertion operator (&lt;&lt;) to display variables:
                </p>
                <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                    int myAge = 35;{'\n'}
                    cout &lt;&lt; "I am " &lt;&lt; myAge &lt;&lt; " years old.";
                </pre>

                <h3 className="text-2xl font-bold mb-2">Adding Variables Together:</h3>
                <p className="text-lg mb-4">
                    You can add two variables using the <strong>+</strong> operator:
                </p>
                <pre className="bg-gray-800 p-4 rounded text-white">
                    int x = 5;{'\n'}
                    int y = 6;{'\n'}
                    int sum = x + y;{'\n'}
                    cout &lt;&lt; sum;
                </pre>
            </div>
        </div>
    );
}