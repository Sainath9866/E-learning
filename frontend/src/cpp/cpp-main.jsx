import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export function Cpp() {
    const navigate = useNavigate()
    const [checkedItems, setCheckedItems] = useState(Array(7).fill(false));

    // Function to handle checkbox changes
    const handleCheckboxChange = (index) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);
    };

    // Calculate progress percentage
    const calculateProgress = () => {
        const checkedCount = checkedItems.filter(item => item).length;
        return (checkedCount / checkedItems.length) * 100;
    };
    const info = ["1.Introduction", "2.Syntax", "3.Variable", "4.Data Types", "5.Operators", "6.Strings",
        "7.Loops"
    ]

    return (
        <div>
            <div>
                <br /><br />
                <div className="ml-[120px] w-4/5 bg-gray-200 rounded-full h-4 mb-4">
                    <div
                        className="bg-blue-500 h-4 rounded-full"
                        style={{ width: `${calculateProgress().toFixed(2)}%` }}
                    ></div>
                    <p className="ml-[370px] font-bold text-lg text-gray-600 mb-4">Progress: {calculateProgress().toFixed(2)}%</p>
                    <br /><br />
                </div>
            </div>

            <div>
                <br />
                {checkedItems.map((isChecked, index) => (
                    <div>
                        <div
                            key={index}
                            className='flex justify-between  ml-[120px] w-4/5 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105'
                        >
                            {/* Text/Label Column */}
                            <span className='w-1/3'>{info[index]}</span>

                            {/* Button Column */}
                            <button
                                onClick={() => navigate(`/cpp-${index + 1}`)}
                                className="w-1/6 p-2 bg-blue-500 rounded hover:bg-blue-800 transition-colors text-center"
                            >
                                Learn
                            </button>

                            {/* Checkbox Column */}
                            <div className='w-1/3 flex justify-end items-center'>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                                <label className='ml-2'>Mark as Done</label>
                            </div>
                            
                        </div>
                        <br />
                    </div>

                ))}
            </div>


        </div>

    )


}
