import React, { useState } from 'react';

// Categorized C++ Questions (Easy, Medium, Hard)
const cppQuestions = [
    // Easy Questions
    {
        question: "1. What is C++ primarily known for?",
        options: ["Object-Oriented Programming", "Functional Programming", "Scripting", "Markup Language"],
        correctAnswer: "Object-Oriented Programming",
        difficulty: "easy",
    },
    {
        question: "2. Which operator is used for output in C++?",
        options: ["<<", ">>", "**", "::"],
        correctAnswer: "<<",
        difficulty: "easy",
    },
    {
        question: "3. Which of these is a valid comment in C++?",
        options: ["// Comment", "<!-- Comment -->", "# Comment", "% Comment"],
        correctAnswer: "// Comment",
        difficulty: "easy",
    },
    {
        question: "4. What is the correct extension of a C++ file?",
        options: [".c", ".cpp", ".java", ".py"],
        correctAnswer: ".cpp",
        difficulty: "easy",
    },
    // Medium Questions
    {
        question: "5. Which feature of C++ allows the same function name to be used for different types?",
        options: ["Inheritance", "Overloading", "Polymorphism", "Encapsulation"],
        correctAnswer: "Overloading",
        difficulty: "medium",
    },
    {
        question: "6. How do you declare an array in C++?",
        options: ["int arr[];", "array arr[];", "int arr[] = {}", "var arr[] = {};"],
        correctAnswer: "int arr[] = {};",
        difficulty: "medium",
    },
    {
        question: "7. What is the use of the 'new' keyword in C++?",
        options: ["To create an object", "To allocate memory dynamically", "To declare variables", "To return a value"],
        correctAnswer: "To allocate memory dynamically",
        difficulty: "medium",
    },
    {
        question: "8. Which of the following is not a storage class in C++?",
        options: ["register", "static", "auto", "mutable"],
        correctAnswer: "mutable",
        difficulty: "medium",
    },
    {
        question: "9. What is the size of an int in C++ on most systems?",
        options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
        correctAnswer: "4 bytes",
        difficulty: "medium",
    },
    // Hard Questions
    {
        question: "10. What is a virtual function in C++?",
        options: ["A function that always returns zero", "A function defined in a base class that can be overridden", "A function that is called during program shutdown", "A function that has no return type"],
        correctAnswer: "A function defined in a base class that can be overridden",
        difficulty: "hard",
    },
    {
        question: "11. What is the difference between deep copy and shallow copy in C++?",
        options: ["Deep copy copies everything, shallow copy only references", "Shallow copy copies everything, deep copy only references", "They are the same", "None of the above"],
        correctAnswer: "Deep copy copies everything, shallow copy only references",
        difficulty: "hard",
    },
    {
        question: "12. What is the default access specifier for a class in C++?",
        options: ["private", "protected", "public", "internal"],
        correctAnswer: "private",
        difficulty: "hard",
    },
    {
        question: "13. How are exceptions handled in C++?",
        options: ["Using if-else", "Using switch-case", "Using try-catch", "Using error codes"],
        correctAnswer: "Using try-catch",
        difficulty: "hard",
    },
    {
        question: "14. What is multiple inheritance in C++?",
        options: ["A class derived from more than one base class", "A class with multiple constructors", "A class with multiple methods", "None of the above"],
        correctAnswer: "A class derived from more than one base class",
        difficulty: "hard",
    },
    {
        question: "15. Which keyword is used to prevent inheritance of a class in C++?",
        options: ["static", "final", "const", "private"],
        correctAnswer: "final",
        difficulty: "hard",
    },
    {
        question: "16. What is the purpose of the `virtual` keyword in C++? ",
        options: ["To declare a function as virtual", "To enable polymorphism", "To optimize code performance", "Both a and b"],
        correctAnswer: "Both a and b",
        difficulty: "hard",
    },
    {
        question: "17. Which of the following is a feature of C++ that allows functions or classes to be reused? ",
        options: ["Inheritance", "Polymorphism", "Encapsulation", "All of the above"],
        correctAnswer: "All of the above",
        difficulty: "hard",
    },
    {
        question: "18. What is the main purpose of the `friend` keyword in C++? ",
        options: ["To allow a class to access private members of another class", "To create a private member function", "To declare global functions", "None of the above"],
        correctAnswer: "To allow a class to access private members of another class",
        difficulty: "hard",
    },
    {
        question: "19. In C++, what does RAII stand for? ",
        options: ["Resource Allocation Is Initialization", "Resource Allocation Is Instantiation", "Resource And Initialization Interaction", "Random Access Is Invalid"],
        correctAnswer: "Resource Allocation Is Initialization",
        difficulty: "hard",
    },
    {
        question: "20. Which of the following cannot be used to create a copy of an object in C++? ",
        options: ["Copy constructor", "Assignment operator", "Move constructor", "Default constructor"],
        correctAnswer: "Default constructor",
        difficulty: "hard",
    },

];

function Cpp_test() {
    const [userAnswers, setUserAnswers] = useState(Array(cppQuestions.length).fill(""));
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerChange = (questionIndex, selectedOption) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[questionIndex] = selectedOption;
        setUserAnswers(updatedAnswers);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let newScore = 0;
        userAnswers.forEach((answer, index) => {
            if (answer === cppQuestions[index].correctAnswer) {
                newScore++;
            }
        });
        setScore(newScore);
        setSubmitted(true);
    };

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">C++ Test Series</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
                {cppQuestions.map((question, index) => (
                    <div
                        key={index}
                        className={`mb-6 p-4 border-2 rounded-lg shadow-md transition duration-300 hover:shadow-lg hover:border-blue-500 ${question.difficulty === 'easy' ? 'border-green-400' : question.difficulty === 'medium' ? 'border-yellow-400' : 'border-red-400'
                            }`}
                    >
                        <h3 className={`text-xl font-semibold mb-3 ${question.difficulty === 'easy' ? 'text-green-600' : question.difficulty === 'medium' ? 'text-yellow-600' : 'text-red-600'}`}>
                            {question.question}
                        </h3>
                        {question.options.map((option, optionIndex) => (
                            <label key={optionIndex} className="block mb-2">
                                <input
                                    type="radio"
                                    name={`question-${index}`}
                                    value={option}
                                    checked={userAnswers[index] === option}
                                    onChange={() => handleAnswerChange(index, option)}
                                    className="mr-2"
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                ))}

                {!submitted && (
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                        Submit Test
                    </button>
                )}

                {submitted && (
                    <div className="mt-8 text-center">
                        <h2 className="text-2xl font-bold text-green-600">Your Score: {score} / {cppQuestions.length}</h2>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 mt-4"
                        >
                            Retake Test
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default Cpp_test;
