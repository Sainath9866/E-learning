import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import checkboxState from '../checkbox-state';

export function Sql4() {
    const navigate = useNavigate();

    function handle1() {
        navigate("/sql-3");
    }

    function handle2() {
        navigate("/sql-5");
    }
    const [isChecked, setIsChecked] = useState(checkboxState.page1);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
      checkboxState.page4 = event.target.checked;
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
                        <p className="text-lg">SQL Databases (4 / 11)</p>
                        <button onClick={handle2} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
                            Next
                        </button>
                    </div>
                   
                </div>
            </header>

            <div className="mt-24">
                {/* Step Title */}
                <h2 className="text-3xl font-bold mb-4">Step 4 - Creating a Database</h2>

                {/* Instructions on Creating the Database */}
                <p className="text-lg mb-4">
                    You can start a PostgreSQL database in a few ways:
                </p>
                <ul className="list-disc list-inside text-lg mb-4">
                    <li>Using neondb</li>
                    <li>Using Docker locally</li>
                    <li>Using Docker on Windows</li>
                </ul>

                {/* Docker Command Example */}
                <div className="mb-8">
                    <pre className="bg-gray-800 p-4 rounded text-white">
                        docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
                    </pre>
                </div>

                {/* Connection String Example */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Connection String</h3>
                    <pre className="bg-gray-800 p-4 rounded text-white">
                        postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable
                    </pre>
                </div>

                {/* Explanation of Commands */}
                <p className="text-lg mb-4">
                    How to run PostgreSQL in Windows terminal (if you have Docker installed):
                </p>
                <ul className="list-decimal list-inside text-lg space-y-2 mb-4">
                    <li>Run the Docker application that helps in running commands in the terminal.</li>
                    <li>Start the Docker instance with the provided command if it's not already running.</li>
                    <li>If the image is not downloaded, it will download the first time.</li>
                    <li>Use the command <code className="bg-gray-600 text-white px-2 py-1 rounded">docker exec -it my-postgres psql -U postgres</code> to access the database.</li>
                    <li>Check the database using <code className="bg-gray-600 text-white px-2 py-1 rounded">\dt</code> to display all tables.</li>
                </ul>

                {/* Footer Info */}
                <p className="text-lg">
                    💡 The connection string is similar to the one used with Mongoose.
                </p>
            </div>
        </div>
    );
}
