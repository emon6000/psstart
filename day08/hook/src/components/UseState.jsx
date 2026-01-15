import React, { useState }from 'react';

const UseState = () => {
    let [number, setNumber] = useState(0);
    let [muObj,setObj]=useState({
        key1:"x",
        key2:"value2",
        key3:"value3"
    });
    const changeVal=()=>{
        setObj(prevObj=>({
            ...prevObj,
            key1:"Changed Value",
            key4:"New Value"
        }));
        // setObj({
        //     key1:"Changed Value",
        //     key2:"value2",
        //     key3:"value3"
        // });
    }
    return (
        <>
        <p>{muObj.key1}</p>
        <p>{muObj.key2}</p>
        <p>{muObj.key3}</p>
        <p>{muObj.key4}</p>
        <button onClick={changeVal}>Change Obj</button>
        <br />
        <p>Number is {number}</p>
          <button onClick={()=> setNumber(number+1)}>Increment</button>  
          <button onClick={()=> setNumber(number-1)}>Decrement</button>
        </>
    );
};

export default UseState;