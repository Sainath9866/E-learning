import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import checkboxState from '../checkbox-state';

export function Sql8() {
    const navigate = useNavigate();

    function handle1() {
        navigate("/sql-7");
    }

    function handle2() {
        navigate("/sql-9");
    }
    const [isChecked, setIsChecked] = useState(checkboxState.page1);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
      checkboxState.page8 = event.target.checked;
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
                        <p className="text-lg">SQL Databases (8 / 11)</p>
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
                <h2 className="text-3xl font-bold mb-4">Step 8 - How to do queries from a Node.js app?</h2>

                {/* Introduction Text */}
                <p className="text-lg mb-4">
                    Postgres exposes a protocol that allows various libraries or clients to communicate with it. In the terminal, <code>psql</code> serves this purpose, but when working with a <code>Node.js</code> app, you can use Postgres clients like <code>pg</code>.
                </p>

                {/* PG Library */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">pg Library</h3>
                    <p className="text-lg mb-4">
                        One such non-blocking PostgreSQL client for Node.js is the <code>pg</code> library.
                    </p>
                    <a href="https://www.npmjs.com/package/pg" target="_blank" className="text-blue-500 underline">
                        https://www.npmjs.com/package/pg
                    </a>
                    <br />
                    <a href="https://node-postgres.com/" target="_blank" className="text-blue-500 underline">
                        Documentation - https://node-postgres.com/
                    </a>
                </div>

                {/* Connecting */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Connecting to Postgres</h3>
                    <pre className="bg-gray-800 p-4 rounded text-white">
                        {`import { Client } from 'pg'

const client = new Client({
  host: 'my.database-server.com',
  port: 5334,
  database: 'database-name',
  user: 'database-user',
  password: 'secretpassword!!',
})

client.connect()`}
                    </pre>
                </div>

                {/* Querying */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Querying the Database</h3>
                    <p className="text-lg mb-4">
                        You can run queries like selecting all users using the <code>pg</code> library as shown below:
                    </p>
                    <pre className="bg-gray-800 p-4 rounded text-white">
                        {`const result = await client.query('SELECT * FROM USERS;')
console.log(result)`}
                    </pre>
                </div>

                {/* Creating Users Table */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Creating a Users Table</h3>
                    <p className="text-lg mb-4">
                        Here’s an example of a function to create the <code>users</code> table in your database:
                    </p>
                    <pre className="bg-gray-800 p-4 rounded text-white">
                        {`import { Client } from 'pg'

const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
})

async function createUsersTable() {
    await client.connect()
    const result = await client.query(\`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    \`)
    console.log(result)
}

createUsersTable();`}
                    </pre>
                </div>
            </div>
        </div>
    );
}
