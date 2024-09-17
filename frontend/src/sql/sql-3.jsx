import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import checkboxState from '../checkbox-state';
export function Sql3() {
    const navigate = useNavigate();
    function handle1(){
        navigate("/sql-2");
    }
    function handle2(){
        navigate("/sql-4");
    }
    const [isChecked, setIsChecked] = useState(checkboxState.page1);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        checkboxState.page3 = event.target.checked;
      };
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
        <header className="bg-gray-900 text-white py-4 px-6 fixed top-0 w-full z-10">
                <div className="flex justify-between items-center">
                    {/* Left side: Title */}
                    <h1 className="text-2xl font-bold">DailyCode</h1>

                    {/* Right side: Prev, Current, and Next buttons */}
                    <div className="flex items-center space-x-4">
                        <button onClick={handle1}className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
                            Prev
                        </button>
                        <p className="text-lg">SQL Databases (3 / 11)</p>
                        <button onClick={handle2}className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
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
            <br /><br />
      <div className="mb-8">
        {/* Step Title */}
        <h2 className="text-3xl font-bold mb-4">Step 3 - Why SQL?</h2>
        
        {/* Introduction Text */}
        <p className="text-lg mb-4">
          SQL databases have a strict schema. They require you to:
        </p>

        {/* Steps for SQL */}
        <ol className="list-decimal list-inside text-lg space-y-2 mb-4">
          <li>Define your schema</li>
          <li>Put in data that follows that schema</li>
          <li>
            Update the schema as your app changes and perform 
            <span className="bg-red-600 text-white px-2 py-1 rounded ml-1">migrations</span>
          </li>
        </ol>
        <br />
        {/* Further Explanation */}
        <p className="text-lg mb-4">
          So there are 4 parts when using an SQL database (not connecting it to Node.js, just running it and putting data in it):
        </p>

        {/* List of SQL Steps */}
        <ol className="list-decimal list-inside text-lg space-y-2 mb-4">
          <li>Running the database.</li>
          <li>Using a library that lets you connect and put data in it.</li>
          <li>
            Creating a table and defining its 
            <span className="bg-gray-600 text-white px-2 py-1 rounded ml-1">schema</span>.
          </li>
          <li>Run queries on the database to interact with the data (Insert/Update/Delete).</li>
        </ol>
      </div>
    </div>
  );
}


