import React from 'react';
import { useNavigate } from 'react-router-dom';
import checkboxState from '../checkbox-state';
import { useState } from 'react';
export function Sql2() {
    const navigate = useNavigate();
    function handle1(){
        navigate("/sql-1");
    }
    function handle2(){
        navigate("/sql-3");
    }
    const [isChecked, setIsChecked] = useState(checkboxState.page1);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
      checkboxState.page2 = event.target.checked;
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
                        <p className="text-lg">SQL Databases (2 / 11)</p>
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
            </header> <br /><br />
      <div className="mb-8">
        {/* Step Title */}
        <h2 className="text-3xl font-bold mb-4">Step 2 - Why not NoSQL</h2>
        <p className="text-lg mb-4">
          You might’ve used <span className="text-red-500">NoSQL</span> in prototyping since it’s great for bootstrapping a project fast.
          But as your app grows, this property makes it very easy for data to get <span className="text-red-500">corrupted</span>.
        </p>
      </div>

      {/* Schema Examples */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">What is schemaless?</h3>
        <p className="mb-4">Different rows can have different <span className="text-yellow-300">shapes (keys/types)</span></p>

        <div className="space-y-6">
          {/* Correct Schema */}
          <div className="bg-gray-800 p-4 rounded-md">
            <h4 className="text-green-500 text-lg font-bold mb-2">✔️</h4>
            <pre className="bg-gray-700 p-4 rounded-md text-sm overflow-auto">
              _id: ObjectId('65b3f3319e01786d275501c8') {'\n'}
              userId: ObjectId('65b3f3319e01786d275501c6') {'\n'}
              balance: 5885.8759769173974 {'\n'}
              __v: 0
            </pre>
          </div>

          {/* Incorrect Schemas */}
          <div className="bg-gray-800 p-4 rounded-md">
            <h4 className="text-red-500 text-lg font-bold mb-2">❌</h4>
            <pre className="bg-gray-700 p-4 rounded-md text-sm overflow-auto">
              _id: ObjectId('65b3f3469e01786d275501ce') {'\n'}
              userId: ObjectId('65b3f3469e01786d275501cc') {'\n'}
              <span className="text-red-500">amountBalance</span>: 720.3759487457523 {'\n'}
              __v: 0
            </pre>
          </div>

          <div className="bg-gray-800 p-4 rounded-md">
            <h4 className="text-red-500 text-lg font-bold mb-2">❌</h4>
            <pre className="bg-gray-700 p-4 rounded-md text-sm overflow-auto">
              _id: ObjectId('65b3f3499e01786d275501d3') {'\n'}
              userId: ObjectId('65b3f3499e01786d275501d1') {'\n'}
              <span className="text-red-500">balance</span>: "harkirat" {'\n'}
              __v: 0
            </pre>
          </div>
        </div>
      </div>

      {/* Problems Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Problems?</h3>
        <ul className="list-disc list-inside text-lg">
          <li>Can lead to inconsistent databases</li>
          <li>Can cause runtime errors</li>
          <li>Is too flexible for an app that needs strictness</li>
        </ul>
      </div>

      {/* Upsides Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Upsides?</h3>
        <ul className="list-disc list-inside text-lg">
          <li>Can be very fast</li>
          <li>Can change schema very easily</li>
        </ul>
      </div>

      {/* Final Note */}
      <div className="text-yellow-300 text-lg">
        <p>
          You might think that <span className="bg-yellow-500 text-black px-2 py-1 rounded">schemas</span> define strictness in the database,
          but they are not used to enforce a schema here.
        </p>
        <p className="mt-2">
          That strictness is present at the <span className="bg-yellow-500 text-black px-2 py-1 rounded">Node.js</span> level, not the DB level.
          You can end up with enormous data in the database that doesn’t follow that schema.
        </p>
      </div>
    </div>
  );
}


