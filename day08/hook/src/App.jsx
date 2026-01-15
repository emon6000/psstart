import React, { useRef } from "react";
import UseRef from "./components/UseRef";
import UseState from "./components/UseState";
import Immutability from "./components/Immutability";
import FormManagementImm from "./components/FormManagementImm";
import UseEffect from "./components/UseEffect";
import CustomHook from "./components/CustomHook";
// import useFetch from "./hooks/useFetch";
const App = () => {
  let Red = useRef();
  const handleClick = () => {
    // Red.current.setAttribute("class","text-danger");
    Red.current.classList.remove("text-success");
    Red.current.classList.add("text-danger");
  };

  const mutableVariable = useRef(0);
  const increment = () => {
    mutableVariable.current += 1;
    console.log("Mutable Variable:", mutableVariable.current);
  };
  const decrement = () => {
    mutableVariable.current -= 1;
    console.log("Mutable Variable:", mutableVariable.current);
  };
  const reset = () => {
    mutableVariable.current = 0;
    console.log("Mutable Variable:", mutableVariable.current);
  };

  let ExpensiveApiData = useRef(null);
  const callApiData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    ExpensiveApiData.current = await response.json();
  };

  let myTag = useRef();
  const viewData = () => {
    myTag.current.innerText = JSON.stringify(ExpensiveApiData.current);
  };

  // const { data } = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      {/* {data && data.map((item) => <p key={item.id}>{item.title}</p>)} */}
      <br />
      {/* <CustomHook /> */}

      {/* <UseEffect /> */}
      <br />
      <FormManagementImm />
      <Immutability />
      <br />
      <button onClick={callApiData}>Click Me</button>
      <p ref={myTag}></p>
      <button onClick={viewData}>View Data</button>
      <br />
      <br />
      <p ref={Red} className="text-success">
        Hello World
      </p>
      <button onClick={handleClick}>Click</button>

      <br />
      {/* <p>Mutable Variable: {mutableVariable.current}</p> */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <br />
      <UseRef />
      <br />
      <UseState />
    </div>
  );
};

export default App;
