import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Cpp6() {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    function handlePrev() {
        navigate("/cpp-5");
    }

    function handleNext() {
        navigate("/cpp-7");
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
                        <p className="text-lg">C++ Strings (6 / 7)</p>
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
                <h2 className="text-3xl font-bold mb-4">C++ Strings</h2>

                <p className="text-lg mb-4">
                    Strings in C++ are used for storing text or characters. A string is a collection of characters surrounded by double quotes. 
                    For example, <code>"Hello World"</code> is a string.
                </p>

                <h3 className="text-2xl font-bold mb-2">String Example</h3>
                <p className="text-lg mb-4">
                    You can create a string variable like this:
                </p>

                <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                    #include &lt;string&gt;{'\n'}
                    {'\n'}
                    string greeting = "Hello";{'\n'}
                </pre>

                <p className="text-lg mb-4">
                    Remember to include the <code>&lt;string&gt;</code> library at the top of your code to use the string type.
                </p>

                <h3 className="text-2xl font-bold mb-2">Exercise:</h3>
                <p className="text-lg mb-4">
                    Fill in the missing parts to create a string variable called <code>greeting</code> and assign it the value <code>"Hello"</code>:
                </p>

                <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                    <span style={{ color: '#0f0' }}>string</span> greeting <span style={{ color: '#0f0' }}>=</span> <span style={{ color: '#0f0' }}>"Hello"</span>;
                </pre>
            </div>
        </div>
    );
}