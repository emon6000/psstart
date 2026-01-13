import React from "react";
import Welcome from "./Welcome";

const Greetings = ({ title, props }) => {
  return (
    <div>
      <h1>
        {title}, {props}
      </h1>
    </div>
  );
};

export default Greetings;
