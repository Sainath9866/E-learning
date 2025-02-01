import React, { useState } from 'react';

// Categorized SQL Questions (Easy, Medium, Hard)
const sqlQuestions = [
  // Easy Questions
  {
    question: "1. What does SQL stand for?",
    options: ["Structured Query Language", "Structured Question Language", "Strong Question Language", "Simple Query Language"],
    correctAnswer: "Structured Query Language",
    difficulty: "easy",
  },
  {
    question: "2. Which SQL command is used to retrieve data?",
    options: ["GET", "FETCH", "SELECT", "RETRIEVE"],
    correctAnswer: "SELECT",
    difficulty: "easy",
  },
  {
    question: "3. Which of the following is used to insert data into a database?",
    options: ["INSERT INTO", "UPDATE", "ADD", "CREATE"],
    correctAnswer: "INSERT INTO",
    difficulty: "easy",
  },
  {
    question: "4. Which SQL statement is used to update data in a database?",
    options: ["SAVE", "MODIFY", "UPDATE", "CHANGE"],
    correctAnswer: "UPDATE",
    difficulty: "easy",
  },
  // Medium Questions
  {
    question: "5. What does the WHERE clause do in SQL?",
    options: ["Specifies a condition for the query", "Sorts the data", "Groups the data", "None of the above"],
    correctAnswer: "Specifies a condition for the query",
    difficulty: "medium",
  },
  {
    question: "6. Which SQL keyword is used to remove duplicates from results?",
    options: ["UNIQUE", "DISTINCT", "REMOVE", "CLEAN"],
    correctAnswer: "DISTINCT",
    difficulty: "medium",
  },
  {
    question: "8. What SQL clause is used to sort the result-set?",
    options: ["SORT BY", "ORDER BY", "GROUP BY", "FILTER BY"],
    correctAnswer: "ORDER BY",
    difficulty: "medium",
  },
  {
    question: "9. Which operator is used to select values within a range?",
    options: ["IN", "BETWEEN", "LIKE", "ANY"],
    correctAnswer: "BETWEEN",
    difficulty: "medium",
  },
  {
    question: "10. How can you combine multiple SQL conditions?",
    options: ["WITH", "AND/OR", "JOIN", "ALL"],
    correctAnswer: "AND/OR",
    difficulty: "medium",
  },
  // Hard Questions
  {
    question: "11. What is a primary key in SQL?",
    options: ["A unique identifier for each record", "A field that can have NULL values", "A key to access records faster", "None of the above"],
    correctAnswer: "A unique identifier for each record",
    difficulty: "hard",
  },
  {
    question: "12. Which SQL function returns the number of rows in a result set?",
    options: ["SUM()", "COUNT()", "ROWS()", "MAX()"],
    correctAnswer: "COUNT()",
    difficulty: "hard",
  },
  {
    question: "13. What is the purpose of the HAVING clause in SQL?",
    options: ["To filter groups based on a condition", "To filter individual rows", "To limit results", "To join tables"],
    correctAnswer: "To filter groups based on a condition",
    difficulty: "hard",
  },
  {
    question: "14. What is a foreign key in SQL?",
    options: ["A key used to join tables", "A key to enforce referential integrity", "A unique identifier", "None of the above"],
    correctAnswer: "A key to enforce referential integrity",
    difficulty: "hard",
  },
  {
    question: "15. Which SQL statement is used to create a new table?",
    options: ["ADD TABLE", "MAKE TABLE", "CREATE TABLE", "INSERT TABLE"],
    correctAnswer: "CREATE TABLE",
    difficulty: "hard",
  },
  {
    question: "16. Which SQL keyword is used to retrieve only unique values?",
    options: ["UNIQUE", "DISTINCT", "DIFFERENT", "ONLY"],
    correctAnswer: "DISTINCT",
    difficulty: "hard",
  },
  {
    question: "17. Which SQL clause is used to group records by a specific column?",
    options: ["ORDER BY", "GROUP BY", "HAVING", "PARTITION BY"],
    correctAnswer: "GROUP BY",
    difficulty: "hard",
  },
  {
    question: "18. What is the use of the SQL JOIN clause?",
    options: ["To retrieve data from multiple tables", "To delete data from multiple tables", "To combine rows into one table", "None of the above"],
    correctAnswer: "To retrieve data from multiple tables",
    difficulty: "hard",
  },
  {
    question: "19. How do you rename a column in SQL?",
    options: ["RENAME COLUMN", "ALTER COLUMN", "CHANGE COLUMN", "MODIFY COLUMN"],
    correctAnswer: "ALTER COLUMN",
    difficulty: "hard",
  },
  {
    question: "20. Which function is used to calculate the average value of a numeric column?",
    options: ["SUM()", "COUNT()", "AVG()", "MAX()"],
    correctAnswer: "AVG()",
    difficulty: "hard",
  },
];

function Sql_test() {
  const [userAnswers, setUserAnswers] = useState(Array(sqlQuestions.length).fill(""));
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
      if (answer === sqlQuestions[index].correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">SQL Test Series</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        {sqlQuestions.map((question, index) => (
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
            <h2 className="text-2xl font-bold text-green-600">Your Score: {score} / {sqlQuestions.length}</h2>
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

export default Sql_test;
