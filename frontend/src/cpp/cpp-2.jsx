import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Cpp2() {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    const handlePrev = () => {
        navigate("/cpp-1");
    };

    const handleNext = () => {
        navigate("/cpp-3");
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
                        <button onClick={handlePrev} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
                            Prev
                        </button>
                        <p className="text-lg">C++ Syntax (2 / 7)</p>
                        <button onClick={handleNext} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
                            Next
                        </button>
                    </div>

                    <div className="flex items-center space-x-4">
                        <label className="text-lg">
                            <input
                                type="checkbox"
                                id="cppSyntaxCheckbox"
                                name="cppSyntaxCheckbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            Mark as Done
                        </label>
                    </div>
                </div>
            </header>

            <div className="mt-24">
                <h2 className="text-3xl font-bold mb-4">C++ Syntax Explained</h2>

                <h3 className="text-2xl font-bold mb-2">Example Code:</h3>
                <pre className="bg-gray-800 p-4 rounded text-white">
                    #include &lt;iostream&gt;
                    <br />
                    using namespace std;
                    <br /><br />
                    int main() &#123;
                    <br />
                    &nbsp;&nbsp;cout &lt;&lt; "Hello World!";
                    <br />
                    &nbsp;&nbsp;return 0;
                    <br />
                    &#125;
                </pre>

                <h3 className="text-2xl font-bold mb-2">Explanation:</h3>
                <p className="text-lg mb-4">
                    Line 1: <code>#include &lt;iostream&gt;</code> is a header file library that lets us work with input and output objects, like <code>cout</code>.
                </p>
                <p className="text-lg mb-4">
                    Line 2: <code>using namespace std</code> allows us to use standard library objects without prefixing them with <code>std::</code>.
                </p>
                <p className="text-lg mb-4">
                    Line 3: C++ ignores white space, but we use blank lines for readability.
                </p>
                <p className="text-lg mb-4">
                    Line 4: <code>int main()</code> is the main function where the code execution begins.
                </p>
                <p className="text-lg mb-4">
                    Line 5: <code>cout &lt;&lt; "Hello World!";</code> outputs the text <code>Hello World!</code> to the console.
                </p>
                <p className="text-lg mb-4">
                    Line 6: <code>return 0;</code> ends the <code>main</code> function.
                </p>
                <p className="text-lg mb-4">
                    Line 7: The closing curly bracket <code>&#125;</code> marks the end of the <code>main</code> function.
                </p>

                <h3 className="text-2xl font-bold mb-2">Omitting Namespace</h3>
                <p className="text-lg mb-4">
                    If <code>using namespace std</code> is omitted, you can still use <code>std::cout</code> for output.
                </p>

                <pre className="bg-gray-800 p-4 rounded text-white">
                    #include &lt;iostream&gt;
                    <br /><br />
                    int main() &#123;
                    <br />
                    &nbsp;&nbsp;std::cout &lt;&lt; "Hello World!";
                    <br />
                    &nbsp;&nbsp;return 0;
                    <br />
                    &#125;
                </pre>
            </div>
        </div>
    );
}