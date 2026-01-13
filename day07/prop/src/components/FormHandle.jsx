import React from "react";

const FormHandle = () => {
  //   const handleSubmit = ({ event, message }) => {
  //     event.preventDefault();
  //     alert(message);
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
    e.target.reset();
  };
  return (
    <div>
      <form
        // onSubmit={(e) => {
        //   handleSubmit({ event : e ,message: "Form Submitted" });
        // }}
        onSubmit={handleSubmit}
      >
        <input type="text" placeholder="Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormHandle;
