import React, { useState } from 'react';

// Categorized Java Questions (Easy, Medium, Hard)
const javaQuestions = [
  // Easy Questions
  {
    question: "1. Which company developed Java?",
    options: ["Microsoft", "Apple", "Sun Microsystems", "Google"],
    correctAnswer: "Sun Microsystems",
    difficulty: "easy",
  },
  {
    question: "2. Which of the following is not a primitive type in Java?",
    options: ["int", "float", "string", "boolean"],
    correctAnswer: "string",
    difficulty: "easy",
  },
  {
    question: "3. Which of these is the correct syntax for main method in Java?",
    options: ["public static void main(String[] args)", "void static public main(String args)", "public main static void(String[] args)", "None of the above"],
    correctAnswer: "public static void main(String[] args)",
    difficulty: "easy",
  },
  {
    question: "4. How do you declare a constant in Java?",
    options: ["const int x", "final int x", "constant int x", "permanent int x"],
    correctAnswer: "final int x",
    difficulty: "easy",
  },
  // Medium Questions
  {
    question: "5. What is the default value of an instance variable in Java?",
    options: ["null", "0", "Depends on the variable type", "Not initialized"],
    correctAnswer: "Depends on the variable type",
    difficulty: "medium",
  },
  {
    question: "6. Which method must be implemented by a class that implements an interface?",
    options: ["All methods of the interface", "Only static methods", "Only default methods", "Any method of choice"],
    correctAnswer: "All methods of the interface",
    difficulty: "medium",
  },
  {
    question: "7. What is the purpose of the 'this' keyword in Java?",
    options: ["Refers to the current object", "Refers to the parent class", "Refers to the static method", "Refers to the class itself"],
    correctAnswer: "Refers to the current object",
    difficulty: "medium",
  },
  {
    question: "8. Which of the following is not an access modifier in Java?",
    options: ["public", "private", "protected", "internal"],
    correctAnswer: "internal",
    difficulty: "medium",
  },
  {
    question: "9. What is the purpose of the 'super' keyword in Java?",
    options: ["To refer to the parent class", "To create a new instance", "To call the constructor of the current class", "None of the above"],
    correctAnswer: "To refer to the parent class",
    difficulty: "medium",
  },
  // Hard Questions
  {
    question: "10. What is method overloading in Java?",
    options: ["Same method name with different parameters", "Same method name with same parameters", "Different method name with same parameters", "None of the above"],
    correctAnswer: "Same method name with different parameters",
    difficulty: "hard",
  },
  {
    question: "11. What is the purpose of the 'final' keyword in Java?",
    options: ["To prevent method overriding", "To prevent inheritance", "To declare constants", "All of the above"],
    correctAnswer: "All of the above",
    difficulty: "hard",
  },
  {
    question: "12. Which of these collections maintains the order of insertion?",
    options: ["HashSet", "TreeSet", "LinkedHashSet", "ArrayList"],
    correctAnswer: "LinkedHashSet",
    difficulty: "hard",
  },
  {
    question: "13. How do you handle exceptions in Java?",
    options: ["Using try-catch blocks", "Using if-else statements", "Using error codes", "None of the above"],
    correctAnswer: "Using try-catch blocks",
    difficulty: "hard",
  },
  {
    question: "14. What is the difference between '==' and 'equals()' in Java?",
    options: ["'==' compares reference, 'equals()' compares value", "'==' compares value, 'equals()' compares reference", "They are the same", "None of the above"],
    correctAnswer: "'==' compares reference, 'equals()' compares value",
    difficulty: "hard",
  },
  {
    question: "15. What is a constructor in Java?",
    options: ["A method that is called when an object is created", "A method that returns a value", "A method that can be inherited", "None of the above"],
    correctAnswer: "A method that is called when an object is created",
    difficulty: "hard",
  },
  {
    question: "16. Which of these keywords is used to define a class in Java?",
    options: ["class", "def", "new", "create"],
    correctAnswer: "class",
    difficulty: "hard",
  },
  {
    question: "17. What does the 'static' keyword indicate in Java?",
    options: ["Belongs to an instance", "Belongs to a class", "Belongs to a method", "Belongs to an object"],
    correctAnswer: "Belongs to a class",
    difficulty: "hard",
  },
  {
    question: "18. How can you create a singleton class in Java?",
    options: ["By creating multiple constructors", "By using a private constructor", "By using the static keyword", "By using public access modifier"],
    correctAnswer: "By using a private constructor",
    difficulty: "hard",
  },
  {
    question: "19. Which of the following can be a super class in Java?",
    options: ["Interface", "Abstract class", "Concrete class", "All of the above"],
    correctAnswer: "All of the above",
    difficulty: "hard",
  },
  {
    question: "20. What is the output of the following code: System.out.println(3 + 2 + '7');?",
    options: ["57", "32", "5", "Error"],
    correctAnswer: "57",
    difficulty: "hard",
  },
];

function Java_test() {
  const [userAnswers, setUserAnswers] = useState(Array(javaQuestions.length).fill(""));
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
      if (answer === javaQuestions[index].correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Java Test Series</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        {javaQuestions.map((question, index) => (
          <div
            key={index}
            className={`mb-6 p-4 border-2 rounded-lg shadow-md transition duration-300 hover:shadow-lg hover:border-blue-500 ${
              question.difficulty === 'easy' ? 'border-green-400' : question.difficulty === 'medium' ? 'border-yellow-400' : 'border-red-400'
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
            <h2 className="text-2xl font-bold text-green-600">Your Score: {score} / {javaQuestions.length}</h2>
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

export default Java_test;
