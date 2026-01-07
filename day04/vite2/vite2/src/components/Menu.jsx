import React from 'react';

// const Menu = (string) => {
//     return (
//         <div>
//             <p>{string.name}</p>
//         </div>
//     );
// };
const Menu = ({name}) => {
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default Menu;