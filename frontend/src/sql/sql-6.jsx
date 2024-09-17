import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import checkboxState from '../checkbox-state';

export function Sql6() {
    const navigate = useNavigate();

    function handle1() {
        navigate("/sql-5");
    }

    function handle2() {
        navigate("/sql-7");
    }
    const [isChecked, setIsChecked] = useState(checkboxState.page1);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
      checkboxState.page6 = event.target.checked;
    };

    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <header className="bg-gray-900 text-white py-4 px-6 fixed top-0 w-full z-10">
                <div className="flex justify-between items-center">
                    {/* Left side: Title */}
                    <h1 className="text-2xl font-bold">DailyCode</h1>

                    {/* Right side: Prev, Current, and Next buttons */}
                    <div className="flex items-center space-x-4">
                        <button onClick={handle1} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
                            Prev
                        </button>
                        <p className="text-lg">SQL Databases (6 / 11)</p>
                        <button onClick={handle2} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
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
                {/* Step Title */}
                <h2 className="text-3xl font-bold mb-4">Step 6 - Creating a Table and Defining its Schema</h2>

                {/* Introduction Text */}
                <p className="text-lg mb-4">
                    In SQL, tables are used to store structured data. A single database can contain multiple tables, similar to collections in MongoDB.
                </p>

                {/* SQL Command Section */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Creating a Table in SQL</h3>
                    <p className="text-lg mb-4">
                        To create a table in PostgreSQL, use the following SQL command:
                    </p>
                    <pre className="bg-gray-800 p-4 rounded text-white">
                        {`CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`}
                    </pre>
                    <p className="text-lg mb-4">
                        Let’s break down the command and understand each part of the schema.
                    </p>

                    {/* Explanation of Table Creation */}
                    <ul className="list-disc list-inside text-lg space-y-2 mb-4">
                        <li>
                            <strong>CREATE TABLE users:</strong> This initiates the creation of a new table called <code>users</code>.
                        </li>
                        <li>
                            <strong>id SERIAL PRIMARY KEY:</strong> The <code>id</code> column auto-increments with each new row and acts as a unique identifier.
                        </li>
                        <li>
                            <strong>username VARCHAR(50) UNIQUE NOT NULL:</strong> A string column for usernames. It must be unique and cannot be null.
                        </li>
                        <li>
                            <strong>email VARCHAR(255) UNIQUE NOT NULL:</strong> Stores email addresses. It must also be unique and cannot be null.
                        </li>
                        <li>
                            <strong>password VARCHAR(255) NOT NULL:</strong> A column for passwords that must not be null.
                        </li>
                        <li>
                            <strong>created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP:</strong> Automatically stores the time of user creation.
                        </li>
                    </ul>
                </div>

                {/* Try it out section */}
                <div className="mb-8">
                    <p className="text-lg">
                        If you have access to a PostgreSQL database, try running this command and then use:
                    </p>
                    <pre className="bg-gray-800 p-4 rounded text-white">
                        \dt;
                    </pre>
                    <p className="text-lg">To check if the table has been successfully created.</p>
                </div>
            </div>
        </div>
    );
}
