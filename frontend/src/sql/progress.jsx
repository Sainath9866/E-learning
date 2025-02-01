import React from "react";
import { useState } from "react";
const ProgressTracker = () => {
    // Initializing an array of 11 checkboxes with false (unchecked) state
    const [checkedItems, setCheckedItems] = useState(Array(11).fill(false));

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

    const handleit = (index) =>{
        if(index==1){
            return "eeeee"
        }
    }

    return (
        <div>
            <h2>Progress: {calculateProgress().toFixed(2)}%</h2>
            <div>
                {checkedItems.map((isChecked, index) => (
                    <div className="flex">
                        <div>hlo {handleit(index)}</div>
                        <div key={index}>
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => handleCheckboxChange(index)}
                            />
                            <label>Step {index + 1}</label>
                        </div>
                    </div>

                ))}
            </div>
            <progress value={calculateProgress()} max="100"></progress>
        </div>
    );
};

export default ProgressTracker
