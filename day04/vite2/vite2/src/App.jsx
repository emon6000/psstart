import React from "react";
import Home from "./components/home";
import Menu from "./components/Menu";
import Child from "./components/Child";
import Function from "./components/function";
const App = () => {

  const submitData =(event)=>{
    event.preventDefault();
    alert("Form submitted");
  }

  
  const message = "Hello";
  const istrue = true;
  const fruits = ["apple", "banana", "cherry"];

  const data = {
    title: "My Title",
    content: "My Content",
  };

  const handleClick = () => {
    alert("Button clicked!");
  };

  const LoginStatus = (status) => {
    if (status) {
      return <h2>Logged In</h2>;
    }
    return <h2>Logged Out</h2>;
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <h1 style={{ color: "blue" }}>{message}</h1>
      <p>Hello</p>
      <button onClick={() => alert("Button clicked!")}>Click me</button>
      {istrue ? <button>True</button> : <button>False</button>}
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      {LoginStatus(true)}

      <Home />
      <p>home</p>
      <Menu name="Bangladesh" />
      <Child title={data.title} content={data.content} />
      <Function onClickBtn={handleClick} />

      <button onClick={() => alert("Hello hi")}>Hey</button>

      <form onSubmit={submitData}>
        <input type="text" placeholder="Write here" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
