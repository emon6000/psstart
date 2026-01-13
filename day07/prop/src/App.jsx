import React from "react";
import Greetings from "./components/Greetings";
import Welcome from "./components/Welcome";
import ButtonHandle from "./components/ButtonHandle";
import FormHandle from "./components/FormHandle";
import UseStateHook from "./components/UseStateHook";
import UseStateHandleForm from "./components/UseStateHandleForm";


const obj = { 
  name: "John", 
  age: 30, 
  city: "New York" 
};
const App = () => {
  return (
    <div>
      <Greetings title="Hello User" props="Hi" />

      <Welcome object={obj} />
      <ButtonHandle />

      <FormHandle />
      <UseStateHook />

      <UseStateHandleForm />
    </div>
  );
};

export default App;
