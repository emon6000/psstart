import React, { useState } from "react";

const FormHandle = () => {
  const [FormValue, setFomValue] = useState({
    fname: "",
    lname: "",
    post: "",
    gender: "",
  });
  const inputOnChnage = (name, value) => {
    setFomValue((FormValue) => ({ 
        ...FormValue, 
        [name]: value 
    }));
  };
  const FromSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(FormValue));
  }

  return (
    <div>
      <form onSubmit={FromSubmit}>
        <input
          type="text"
          value={FormValue.fname}
          name="fname"
          onChange={(e) => inputOnChnage(e.target.name, e.target.value)}
        />
        <br />
        <input
          type="text"
          value={FormValue.lname}
          name="lname"
          onChange={(e) => inputOnChnage(e.target.name, e.target.value)}
        />
        <br />
        <select
          name="post"
          value={FormValue.post}
          onChange={(e) => inputOnChnage(e.target.name, e.target.value)}
        >
          <option value="">Select Membership</option>
          <option value="free">Free</option>
          <option value="premium">Premium</option>
          <option value="enterprise">Enterprise</option>
        </select>
        <br />
        <input
          type="radio"
          name="gender"
          checked={FormValue.gender === "Male"}
          onChange={() => inputOnChnage("gender", "Male")}
        />
        Male
        <input
          type="radio"
          name="gender"
          checked={FormValue.gender === "Female"}
          onChange={() => inputOnChnage("gender", "Female")}
        />
        Female
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormHandle;
