import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import checkboxState from '../checkbox-state';

export function Sql5() {
    const navigate = useNavigate();

    function handle1() {
        navigate("/sql-4");
    }

    function handle2() {
        navigate("/sql-6");
    }
    const [isChecked, setIsChecked] = useState(checkboxState.page1);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
      checkboxState.page5 = event.target.checked;
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
                        <p className="text-lg">SQL Databases (5 / 11)</p>
                        <button onClick={handle2} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
                            Next
                        </button>
                    </div>
                    
                </div>
            </header>

            <div className="mt-24">
                {/* Step Title */}
                <h2 className="text-3xl font-bold mb-4">Step 5 - Using a Library to Connect and Store Data</h2>

                {/* Introduction Text */}
                <p className="text-lg mb-4">
                    In this step, we will explore two different ways of connecting to a PostgreSQL database:
                </p>

                {/* psql Section */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">1. psql</h3>
                    <p className="text-lg mb-4">
                        psql is a terminal-based front-end for PostgreSQL. It provides an interactive command-line interface to the database. 
                        However, for this tutorial, we won't be using psql as we will interact with the database directly from Node.js.
                    </p>

                    <h4 className="text-xl font-semibold mb-2">How to connect to your database using psql?</h4>
                    <p className="text-lg mb-4">
                        psql comes bundled with PostgreSQL. Here's an example of how to connect to your database:
                    </p>
                    <pre className="bg-gray-800 p-4 rounded text-white">
                        psql -h p-broken-frost-69135494.us-east-2.aws.neon.tech -d database1 -U 100xdevs
                    </pre>
                    <p className="text-lg mb-4">
                        Replace the placeholders with your actual credentials if you're using psql.
                    </p>
                </div>

                {/* pg Section */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">2. pg</h3>
                    <p className="text-lg mb-4">
                        pg is a Node.js library that allows you to interact with your PostgreSQL database programmatically from a backend application. 
                        It is similar to Mongoose but for PostgreSQL. We'll eventually install this in our Node.js app.
                    </p>
                </div>

                {/* Footer Info */}
                <p className="text-lg">
                    pg provides a simple interface to execute SQL queries, handle transactions, and connect to your Postgres instance directly from Node.js.
                </p>
            </div>
        </div>
    );
}
