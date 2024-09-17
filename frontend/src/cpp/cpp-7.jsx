import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Cpp7() {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    function handlePrev() {
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
                        <p className="text-lg">C++ Loops (7 / 7)</p>
                       
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
                <h2 className="text-3xl font-bold mb-4">C++ Loops</h2>

                <p className="text-lg mb-4">
                    Loops in C++ allow you to execute a block of code repeatedly as long as a specified condition is met. 
                    This is useful for saving time, reducing errors, and improving code readability.
                </p>

                <h3 className="text-2xl font-bold mb-2">While Loop Example</h3>
                <p className="text-lg mb-4">
                    The <code>while</code> loop runs a block of code as long as the condition is true. Here is an example:
                </p>

                <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                    int i = 0;{'\n'}
                    while (i &lt; 5) {'{'}{'\n'}
                    {'  '}cout &lt;&lt; i &lt;&lt; "\n";{'\n'}
                    {'  '}i++;{'\n'}
                    {'}'}{'\n'}
                </pre>

                <p className="text-lg mb-4">
                    Don't forget to update the variable inside the loop, otherwise it will never end!
                </p>

                <h3 className="text-2xl font-bold mb-2">Exercise:</h3>
                <p className="text-lg mb-4">
                    Fill in the missing parts to print the value of <code>i</code> as long as <code>i</code> is less than 6:
                </p>

                <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                    int i = 1;{'\n'}
                    <span style={{ color: '#0f0' }}>while</span> (i &lt; 6) {'{'}{'\n'}
                    {'  '}cout &lt;&lt; i &lt;&lt; "\n";{'\n'}
                    {'  '}i++;{'\n'}
                    {'}'}{'\n'}
                </pre>
            </div>
        </div>
    );
}