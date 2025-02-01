import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Java2() {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    function handlePrev() {
        navigate("/java-1");
    }

    function handleNext() {
        navigate("/java-3");
    }

    function handleCheckboxChange() {
        setIsChecked(!isChecked);
    }

    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <header className="bg-gray-900 text-white py-4 px-6 fixed top-0 w-full z-10">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Java Syntax</h1>
                    <div className="flex items-center space-x-4">
                        <button onClick={handlePrev} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
                            Prev
                        </button>
                        <p className="text-lg">Java Syntax (2 / 4)</p>
                        <button onClick={handleNext} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
                            Next
                        </button>
                    </div>
                    
                </div>
            </header>

            <div className="mt-24">
                <h2 className="text-3xl font-bold mb-4">Understanding Java Syntax</h2>

                <p className="text-lg mb-4">
                    Every line of code in Java must be inside a class, and the class name should start with an uppercase letter. For example:
                </p>

                <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                    public class Main {'{'}{'\n'}
                    {'  '}public static void main(String[] args) {'{'}{'\n'}
                    {'    '}System.out.println("Hello World");{'\n'}
                    {'  }'}{'\n'}
                    {'}'}{'\n'}
                </pre>

                <p className="text-lg mb-4">
                    Note: The name of the Java file must match the class name and end with ".java". The output of this code should be:
                </p>

                <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                    Hello World{'\n'}
                </pre>

                <p className="text-lg mb-4">
                    The <code>main()</code> method is essential in every Java program. Any code inside <code>main()</code> will be executed.
                </p>

                <p className="text-lg mb-4">
                    The <code>System.out.println()</code> method is used to print a line of text. Here's a breakdown:
                </p>

                <ul className="list-disc list-inside mb-4">
                    <li><code>System</code> is a built-in Java class.</li>
                    <li><code>out</code> is an instance of <code>PrintStream</code> inside <code>System</code>.</li>
                    <li><code>println()</code> is a method used to print text.</li>
                </ul>

                <p className="text-lg mb-4">
                    Remember that every code statement must end with a semicolon (;).
                </p>

                <h3 className="text-2xl font-bold mb-2">Exercise:</h3>
                <p className="text-lg mb-4">
                    Insert the missing part of the code below to output "Hello World":
                </p>

                <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                    public class MyClass {'{'}{'\n'}
                    {'  '}public static void main(String[] args) {'{'}{'\n'}
                    {'    '}<span style={{ color: '#0f0' }}>System.out.println</span>("Hello World");{'\n'}
                    {'  }'}{'\n'}
                    {'}'}{'\n'}
                </pre>
            </div>
        </div>
    );
}