import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Java1() {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    
    function handleNext() {
        navigate("/java-2");
    }

    function handleCheckboxChange() {
        setIsChecked(!isChecked);
    }

    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <header className="bg-gray-900 text-white py-4 px-6 fixed top-0 w-full z-10">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Java Tutorial</h1>
                    <div className="flex items-center space-x-4">
                       
                        <p className="text-lg">Java Basics (1 / 4)</p>
                        <button onClick={handleNext} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
                            Next
                        </button>
                    </div>
                    
                </div>
            </header>

            <div className="mt-24">
                <h2 className="text-3xl font-bold mb-4">Introduction to Java</h2>

                <p className="text-lg mb-4">
                    Java is a popular programming language used for developing mobile apps, web apps, desktop apps, games, and more.
                    Our "Try it Yourself" editor makes it easy to learn Java. You can edit Java code and view the result directly in your browser.
                </p>

                <h3 className="text-2xl font-bold mb-2">Example Code:</h3>
                <p className="text-lg mb-4">
                    Here is a simple Java program that prints "Hello World":
                </p>

                <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                    public class Main {'\n'}
                    {'{'}{'\n'}
                    {'  '}public static void main(String[] args) {'{'}{'\n'}
                    {'    '}System.out.println("Hello World");{'\n'}
                    {'  }'}{'\n'}
                    {'}'}{'\n'}
                </pre>

                <p className="text-lg mb-4">
                    Click the "Run example" button to see how it works.
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