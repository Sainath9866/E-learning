import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import checkboxState from '../checkbox-state';

export function Sql7() {
    const navigate = useNavigate();

    function handle1() {
        navigate("/sql-6");
    }

    function handle2() {
        navigate("/sql-8");
    }
    const [isChecked, setIsChecked] = useState(checkboxState.page1);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
      checkboxState.page7 = event.target.checked;
    };
    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <header className="bg-gray-900 text-white py-4 px-[150px] fixed top-0 w-full z-10">
                <div className="flex justify-between items-center">
                    {/* Left side: Title */}
                    <h1 className="text-2xl font-bold">DailyCode</h1>

                    {/* Right side: Prev, Current, and Next buttons */}
                    <div className="flex items-center space-x-4">
                        <button onClick={handle1} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
                            Prev
                        </button>
                        <p className="text-lg">SQL Databases (7 / 11)</p>
                        <button onClick={handle2} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
                            Next
                        </button>
                    </div>
                    
                </div>
            </header>

            <div className="mt-24">
                {/* Step Title */}
                <h2 className="text-3xl font-bold mb-4">Step 7 - Interacting with the Database</h2>

                {/* Introduction Text */}
                <p className="text-lg mb-4">
                    Now that we've created our table, let's see how to interact with the data inside it. There are four main operations you’ll want to perform:
                </p>

                {/* Insert Operation */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">1. INSERT</h3>
                    <p className="text-lg mb-4">
                        To insert data into the <code>users</code> table, use the following SQL statement:
                    </p>
                    <pre className="bg-gray-800 p-4 rounded text-white">
                        {`INSERT INTO users (username, email, password)
VALUES ('username_here', 'user@example.com', 'user_password');`}
                    </pre>
                    <p className="text-lg mb-4">
                        Notice that you don't have to specify the <code>id</code> field because it auto-increments.
                    </p>
                </div>

                {/* Update Operation */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">2. UPDATE</h3>
                    <p className="text-lg mb-4">
                        To update a user’s password, use this command:
                    </p>
                    <pre className="bg-gray-800 p-4 rounded text-white">
                        {`UPDATE users
SET password = 'new_password'
WHERE email = 'user@example.com';`}
                    </pre>
                </div>

                {/* Delete Operation */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">3. DELETE</h3>
                    <p className="text-lg mb-4">
                        To delete a user with a specific <code>id</code>, use this SQL command:
                    </p>
                    <pre className="bg-gray-800 p-4 rounded text-white">
                        {`DELETE FROM users
WHERE id = 1;`}
                    </pre>
                </div>

                {/* Select Operation */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">4. SELECT</h3>
                    <p className="text-lg mb-4">
                        To select and view data from the table, you can use the following SQL query:
                    </p>
                    <pre className="bg-gray-800 p-4 rounded text-white">
                        {`SELECT * FROM users
WHERE id = 1;`}
                    </pre>
                    <p className="text-lg mb-4">
                        This will retrieve all data for the user with <code>id = 1</code>.
                    </p>
                </div>

                {/* Try it out section */}
                <div className="mb-8">
                    <p className="text-lg">
                        If you have <code>psql</code> installed locally, try running these commands to interact with your database.
                    </p>
                </div>
            </div>
        </div>
    );
}
