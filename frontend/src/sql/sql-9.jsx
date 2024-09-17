import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import checkboxState from '../checkbox-state';

export function Sql9() {
    const navigate = useNavigate();

    function handle1() {
        navigate("/sql-8");
    }

    function handle2() {
        navigate("/sql-10");
    }
    const [isChecked, setIsChecked] = useState(checkboxState.page1);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
      checkboxState.page9 = event.target.checked;
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
                        <p className="text-lg">SQL Databases (9 / 11)</p>
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
                <h2 className="text-3xl font-bold mb-4">Step 9 - Creating a Simple Node.js App</h2>

                {/* Step Instructions */}
                <p className="text-lg mb-4">
                    In this step, we'll create a simple Node.js app with TypeScript, using the <code>pg</code> library to insert data securely into a PostgreSQL database.
                </p>

                {/* Project Setup */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Project Setup</h3>
                    <pre className="bg-gray-800 p-4 rounded text-white">
                        {`npm init -y
npx tsc --init

// Change tsconfig.json:
"rootDir": "./src",
"outDir": "./dist"

// Install necessary libraries:
npm install pg
npm install @types/pg`}
                    </pre>
                </div>

                {/* Creating the App */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Creating the Simple App</h3>
                    <p className="text-lg mb-4">
                        Here's an example of a simple Node.js app using the <code>pg</code> library to insert data into a PostgreSQL database securely. 
                        Notice how user-provided fields are safely parameterized to prevent SQL injection.
                    </p>
                    <pre className="bg-gray-800 p-4 rounded text-white">
                        {`import { Client } from 'pg';

// Function to insert user data into the database
async function insertUser(username, email, password) {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'mysecretpassword',
    });

    try {
        await client.connect(); // Ensure the client connects to the database
        const query = \`
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
        \`;
        const values = [username, email, password];
        await client.query(query, values);
        console.log('User inserted successfully!');
    } catch (err) {
        console.error('Error inserting user:', err);
    } finally {
        await client.end(); // Close the connection
    }
}

// Example usage
insertUser('newuser', 'newuser@example.com', 'password123').catch(console.error);
`}
                    </pre>
                </div>

                {/* Querying the Database Securely */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Fetching User Data Securely</h3>
                    <p className="text-lg mb-4">
                        The following function fetches a user's data from the database using their email. It uses parameterized queries to prevent SQL injection.
                    </p>
                    <pre className="bg-gray-800 p-4 rounded text-white">
                        {`import { Client } from 'pg';

// Async function to fetch user data from the database given an email
async function getUser(email) {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'mysecretpassword',
    });

    try {
        await client.connect(); // Ensure client connection is established
        const query = 'SELECT * FROM users WHERE email = $1';
        const values = [email];
        const result = await client.query(query, values);
        
        if (result.rows.length > 0) {
            console.log('User found:', result.rows[0]); // Output user data
            return result.rows[0]; // Return the user data
        } else {
            console.log('No user found with the given email.');
            return null; // Return null if no user was found
        }
    } catch (err) {
        console.error('Error during fetching user:', err);
        throw err; // Rethrow or handle error appropriately
    } finally {
        await client.end(); // Close the client connection
    }
}

// Example usage
getUser('user5@example.com').catch(console.error);
`}
                    </pre>
                </div>

                {/* SQL Injection Prevention */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Preventing SQL Injection</h3>
                    <p className="text-lg mb-4">
                        By using parameterized queries, you can avoid SQL injection attacks. Always avoid inserting user-provided strings directly into SQL queries.
                    </p>
                    <pre className="bg-gray-800 p-4 rounded text-white">
                        {`const query = 'SELECT * FROM users WHERE email = $1'; 
const values = [email];`}
                    </pre>
                </div>
            </div>
        </div>
    );
}
