import React from 'react';

const ButtonHandle = () => {
    function handleClick({message}) {
        alert(message);
        alert('Hello');
    }
    return (
        <div>
            <button onClick={()=>handleClick({message:'Hi'})}>Click Me</button>
            <br/>
            <button onClick={() => alert('Hi')}>Click Me</button>
        </div>
    );
};

export default ButtonHandle;