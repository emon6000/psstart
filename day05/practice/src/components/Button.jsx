import React from 'react';

const Button = ({ variant, label }) => {
    
    // logic to determine color based on variant
    let colorClass = "bg-blue-500"; // default
    if (variant === 'danger') colorClass = "bg-gray-500"; // Note: danger is usually red, but kept your gray
    if (variant === 'success') colorClass = "bg-green-500";

    return (
        <div>
            <button 
                className={`${colorClass} text-white px-4 py-2 rounded mb-2`} 
                onClick={() => alert(label)}
            >
                {/* I assume you wanted the label here, but kept 'hi' per your code */}
                hi 
            </button>
        </div>
    );
};

export default Button;