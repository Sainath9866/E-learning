import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Java3() {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    function handlePrev() {
        navigate("/java-2");
    }

    function handleNext() {
        navigate("/java-4");
    }

    function handleCheckboxChange() {
        setIsChecked(!isChecked);
    }

    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <header className="bg-gray-900 text-white py-4 px-6 fixed top-0 w-full z-10">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Java Output / Print</h1>
                    <div className="flex items-center space-x-4">
                        <button onClick={handlePrev} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
                            Prev
                        </button>
                        <p className="text-lg">Java Output / Print (3 / 4)</p>
                        <button onClick={handleNext} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
                            Next
                        </button>
                    </div>
                    
                </div>
            </header>

            <div className="mt-24">
                <h2 className="text-3xl font-bold mb-4">Printing Text in Java</h2>

                <p className="text-lg mb-4">
                    To output text or values in Java, you use the <code>println()</code> method. This method prints text to the console and adds a new line after the output:
                </p>

                <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                    System.out.println("Hello World!");{'\n'}
                    System.out.println("I am learning Java.");{'\n'}
                    System.out.println("It is awesome!");{'\n'}
                </pre>

                <p className="text-lg mb-4">
                    You can add as many <code>println()</code> methods as you like. Each call will output on a new line.
                </p>

                <h3 className="text-2xl font-bold mb-2">Double Quotes</h3>
                <p className="text-lg mb-4">
                    Text must be enclosed in double quotation marks (""). If you forget the double quotes, an error will occur:
                </p>

                <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                    System.out.println("This sentence will work!");{'\n'}
                    System.out.println(This sentence will produce an error);{'\n'}
                </pre>

                <h3 className="text-2xl font-bold mb-2">The <code>print()</code> Method</h3>
                <p className="text-lg mb-4">
                    The <code>print()</code> method is similar to <code>println()</code>, but it does not add a new line after the output. For example:
                </p>

                <pre className="bg-gray-800 p-4 rounded text-white mb-4">
                    System.out.print("Hello World! ");{'\n'}
                    System.out.print("I will print on the same line.");{'\n'}
                </pre>

                <p className="text-lg mb-4">
                    Note the extra space after "Hello World!" for better readability.
                </p>

                <p className="text-lg mb-4">
                    In this tutorial, we will use <code>println()</code> as it makes the output easier to read.
                </p>
            </div>
        </div>
    );
}