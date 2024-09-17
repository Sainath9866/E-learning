import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import checkboxState from '../checkbox-state';

export function Sql10() {
    const navigate = useNavigate();

    function handlePrevious() {
        navigate("/sql-9");
    }

    function handleNext() {
        navigate("/sql-11");
    }
    const [isChecked, setIsChecked] = useState(checkboxState.page1);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        checkboxState.page10 = event.target.checked;
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
                        <p className="text-lg">MongoDB Relationships (10 / 11)</p>
                        <button onClick={handleNext} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
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
                <h2 className="text-3xl font-bold mb-4">Step 10 - Relationships and Transactions in MongoDB</h2>
                
                <p className="text-lg mb-4">
                    MongoDB is a NoSQL database that allows storing data in flexible, JSON-like documents. 
                    For example, if we want to store a user's details along with their address, we can store the address 
                    directly as a sub-document inside the user's document.
                </p>

                {/* MongoDB Schema Representation */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">MongoDB Document Example</h3>
                    <p className="text-lg mb-4">In MongoDB, user details and address can be stored in a single document like this:</p>
                    <pre className="bg-gray-800 p-4 rounded text-white">
                        {`{
    "_id": ObjectId("userId"),
    "username": "john_doe",
    "email": "john@example.com",
    "password": "hashedpassword123",
    "address": {
        "city": "New York",
        "country": "USA",
        "street": "123 Broadway St",
        "pincode": "10001"
    },
    "created_at": ISODate("2023-09-17T12:00:00Z")
}`}
                    </pre>
                </div>

                {/* Explanation of Relationships in MongoDB */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Storing Relationships in MongoDB</h3>
                    <p className="text-lg mb-4">
                        In MongoDB, you can store related data inside a single document as nested fields, avoiding the need 
                        for joining tables as in SQL. This is suitable for cases where the related data is frequently accessed together.
                    </p>
                    <p className="text-lg mb-4">
                        For example, in the above document, the <code>address</code> is embedded directly inside the <code>user</code> document.
                        MongoDB supports this kind of relationship natively, making it easier to work with nested data.
                    </p>
                </div>

                {/* Comparison to SQL */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Comparison to SQL</h3>
                    <p className="text-lg mb-4">
                        In SQL, we store the <code>address</code> in a separate table and use a foreign key to link it to the <code>users</code> table. 
                        However, in MongoDB, we embed the address directly, which can simplify data retrieval when related data is often needed together.
                    </p>
                </div>

                {/* MongoDB Code Example */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">MongoDB Code Example</h3>
                    <p className="text-lg mb-4">Below is an example of how to insert a user with an embedded address in MongoDB using Node.js:</p>
                    <pre className="bg-gray-800 p-4 rounded text-white">
                        {`const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function createUser() {
    try {
        await client.connect();
        const database = client.db('testdb');
        const users = database.collection('users');

        const newUser = {
            username: 'john_doe',
            email: 'john@example.com',
            password: 'hashedpassword123',
            address: {
                city: 'New York',
                country: 'USA',
                street: '123 Broadway St',
                pincode: '10001'
            },
            created_at: new Date()
        };

        const result = await users.insertOne(newUser);
        console.log('User inserted with ID:', result.insertedId);
    } catch (err) {
        console.error('Error creating user:', err);
    } finally {
        await client.close();
    }
}

createUser().catch(console.error);
`}
                    </pre>
                </div>

                {/* Transactions in MongoDB */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Transactions in MongoDB</h3>
                    <p className="text-lg mb-4">
                        MongoDB also supports transactions, allowing you to execute multiple operations as part of a single atomic transaction. 
                        However, transactions in MongoDB are typically used when working with multiple documents or collections.
                    </p>
                    <p className="text-lg mb-4">
                        Here's an example of using transactions in MongoDB with Node.js:
                    </p>
                    <pre className="bg-gray-800 p-4 rounded text-white">
                        {`async function createUserWithTransaction() {
    const session = client.startSession();

    try {
        session.startTransaction();

        const database = client.db('testdb');
        const users = database.collection('users');

        const newUser = {
            username: 'john_doe',
            email: 'john@example.com',
            password: 'hashedpassword123',
            address: {
                city: 'New York',
                country: 'USA',
                street: '123 Broadway St',
                pincode: '10001'
            },
            created_at: new Date()
        };

        await users.insertOne(newUser, { session });
        await session.commitTransaction();
        console.log('Transaction committed.');
    } catch (err) {
        await session.abortTransaction();
        console.error('Transaction aborted due to error:', err);
    } finally {
        session.endSession();
    }
}

createUserWithTransaction().catch(console.error);
`}
                    </pre>
                </div>
            </div>
        </div>
    );
}
