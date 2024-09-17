import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import checkboxState from '../checkbox-state';

export function Sql11() {
    const navigate = useNavigate();

    function handlePrevious() {
        navigate("/sql-10");
    }
    const [isChecked, setIsChecked] = useState(checkboxState.page1);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
      checkboxState.page11 = event.target.checked;
    };
    


    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <header className="bg-gray-900 text-white py-4 px-6 fixed top-0 w-full z-10">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">DailyCode</h1>
                    <div className="flex items-center space-x-4">
                        <button onClick={handlePrevious} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
                            Prev
                        </button>
                        <p className="text-lg">Joins in SQL (11 / 11)</p>
                        
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
                <h2 className="text-3xl font-bold mb-4">Step 11 - Joins</h2>

                <p className="text-lg mb-4">
                    Joining data from multiple tables is common when data is normalized into different tables. For example, fetching user details and their address involves a relationship between the users and addresses tables.
                </p>

                {/* Approach 1: Bad Example */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Approach 1 (Bad)</h3>
                    <p className="text-lg mb-4">
                        In the bad approach, we would run two separate queries and combine the results manually in our application code:
                    </p>
                    <pre className="bg-gray-800 p-4 rounded text-white">
                        {`const userQuery = 'SELECT * FROM users WHERE id = $1';
const addressQuery = 'SELECT * FROM addresses WHERE user_id = $1';

const user = await client.query(userQuery, [userId]);
const address = await client.query(addressQuery, [userId]);

return { ...user.rows[0], address: address.rows[0] };
`}
                    </pre>
                    <p className="text-lg mb-4">This is inefficient and can result in poor performance and complex logic.</p>
                </div>

                {/* Approach 2: Using Joins */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Approach 2 (Using Joins)</h3>
                    <p className="text-lg mb-4">
                        A better approach is to use an SQL join, which allows us to retrieve both user and address data in a single query:
                    </p>
                    <pre className="bg-gray-800 p-4 rounded text-white">
                        {`const query = \`
SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
INNER JOIN addresses ON users.id = addresses.user_id
WHERE users.id = $1;
\`;

const result = await client.query(query, [userId]);
return result.rows[0];
`}
                    </pre>
                    <p className="text-lg mb-4">
                        This approach is faster and results in cleaner code.
                    </p>
                </div>

                {/* Benefits of Joins */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Benefits of Using Joins</h3>
                    <ul className="list-disc list-inside mb-4 text-lg">
                        <li>Reduced Latency</li>
                        <li>Simplified Application Logic</li>
                        <li>Transactional Integrity</li>
                    </ul>
                </div>

                {/* Types of Joins */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Types of Joins</h3>
                    <p className="text-lg mb-4">Here are the different types of joins and their use cases:</p>

                    <div className="mb-4">
                        <h4 className="text-xl font-bold">1. INNER JOIN</h4>
                        <p className="text-lg mb-2">
                            Returns rows when there is at least one match in both tables.
                        </p>
                        <pre className="bg-gray-800 p-4 rounded text-white">
                            {`SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
INNER JOIN addresses ON users.id = addresses.user_id;
`}
                        </pre>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-xl font-bold">2. LEFT JOIN</h4>
                        <p className="text-lg mb-2">
                            Returns all rows from the left table, and the matched rows from the right table.
                        </p>
                        <pre className="bg-gray-800 p-4 rounded text-white">
                            {`SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
LEFT JOIN addresses ON users.id = addresses.user_id;
`}
                        </pre>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-xl font-bold">3. RIGHT JOIN</h4>
                        <p className="text-lg mb-2">
                            Returns all rows from the right table, and the matched rows from the left table.
                        </p>
                        <pre className="bg-gray-800 p-4 rounded text-white">
                            {`SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
RIGHT JOIN addresses ON users.id = addresses.user_id;
`}
                        </pre>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-xl font-bold">4. FULL JOIN</h4>
                        <p className="text-lg mb-2">
                            Returns rows when there is a match in one of the tables.
                        </p>
                        <pre className="bg-gray-800 p-4 rounded text-white">
                            {`SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
FULL JOIN addresses ON users.id = addresses.user_id;
`}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}
