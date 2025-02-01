import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import checkboxState from '../checkbox-state';

export function Sql1() {
    const navigate =  useNavigate();

    function handle(){
        navigate("/sql-2")
    }
    const [isChecked, setIsChecked] = useState(checkboxState.page1);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    checkboxState.page1 = event.target.checked;
  };
   

    return (
        <div className="App bg-gray-900 text-white">
            {/* Fixed Header */}
            <header className="px-[150px] bg-gray-900 text-white py-4  fixed top-0 w-full z-10">
                <div className="flex justify-between items-center">
                    {/* Left side: Title */}
                    <h1 className="text-2xl font-bold">DailyCode</h1>


                    {/* Right side: Prev, Current, and Next buttons */}
                    <div className="flex items-center space-x-4">
                      
                        <p className="text-lg">SQL Databases (1 / 11)</p>
                        <button onClick={handle}className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
                            Next
                        </button>
                    </div>

                   
                </div>
            </header>


            {/* Main Content */}
            <div className="pt-24 px-6">
                <h2 className="text-3xl font-bold mt-4">Step 1 - Types of Databases</h2>

                <div className="bg-gray-800 text-white p-6 rounded-md mt-4">
                    <h3 className="text-lg font-semibold">💡 What all we'll learn today -</h3>
                    <p className="mt-2">
                        <strong>Simple</strong> - SQL vs NoSQL, how to create Postgres Databases, How to do CRUD on them <br />
                        <strong>Advance</strong> - Relationships, Joins, Transactions
                    </p>
                </div>

                <div className="mt-6">
                    <p className="text-lg">There are a few types of databases, all service different types of use-cases</p>

                    <h4 className="text-2xl font-semibold mt-4">NoSQL Databases</h4>
                    <ul className="list-disc list-inside mt-2">
                        <li>
                            Store data in a <span className="bg-red-600 text-white px-2 py-1 rounded">schema-less</span> fashion. Extremely lean and fast way to store data.
                        </li>
                        <li className="mt-2">Examples: MongoDB, etc.</li>
                    </ul>
                </div>

                <div>

                    <h4 className="text-2xl font-semibold mt-4">Graph databases </h4>
                    <ul className="list-disc list-inside mt-2">
                        <li>
                            Data is stored in the form of a graph. Specially useful in cases where <span className="bg-red-600 text-white px-2 py-1 rounded">relationships</span> need to be stored (social networks)
                        </li>
                        <li className="mt-2">Examples - Neo4j</li>
                    </ul>
                </div>


                <div>
                    <h4 className="text-2xl font-semibold mt-4">Vector databases </h4>
                    <ul className="list-disc list-inside mt-2">
                        <li>
                            Stores data in the form of vectors
                        </li>
                        <li>Useful in Machine learning</li>
                        <li className="mt-2">Examples - Pinecone</li>
                    </ul>
                </div>


                <div>
                    <h4 className="text-2xl font-semibold mt-4">SQL databases </h4>
                    <ul className="list-disc list-inside mt-2">
                        <li>
                            Stores data in the form of rows
                        </li>
                        <li>Most full stack applications will use this</li>
                        <li className="mt-2">Examples - MySQL, Postgres</li>
                    </ul>
                </div>

                {/* Video Section */}
                <div className="mt-6">
                    <h4 className="text-2xl font-semibold mt-4">Learn More with this Video</h4>
                    <video className="mt-4 w-full rounded-lg shadow-lg" controls>
                        <source src="your-video-url.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
}


