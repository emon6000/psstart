import React,{useState} from 'react';

const UseStateHook = () => {
    const [count,setCount] = useState(0);//initial state is 0
    const increment = () => {
        setCount(count+1);
    }
    const decrement = () => {
        setCount(count-1);
    }
    const reset = () => {
        setCount(0);
    }

    return (
        <div>
            <h1>Current Count ; {count}</h1>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default UseStateHook;