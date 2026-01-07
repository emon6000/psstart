import React from "react";
import Button from "./components/Button.jsx";

const App = () => {
  const variants = ["primary", "danger", "success"];
  const labels = ["Button Primary", "Button Danger", "Button Success"];
  const team = [
    { id: 1, name: "Emon", role: "Developer", admin: true },
    { id: 2, name: "Partha", role: "Teacher", admin: false },
    { id: 3, name: "Atik", role: "Manager", admin: false },
  ];
  const review = [5, 4, 3, 5, 2];
  return (
    //1st Part
    <div className="p-5 space-y-2">
      {variants.map((variant, index) => (
        <Button key={index} variant={variant} label={labels[index]} />
      ))}

      {team.map((member) => (
        <div
          key={member.id}
          className={`p-4 border ${
            member.admin ? "bg-yellow-100" : "bg-white"
          }`}
        >
          <h2 className="text-lg font-bold">{member.name}</h2>
          <p className="text-sm text-gray-600">{member.role}</p>
        </div>
      ))}


      {review.map((rating) => (
        rating >= 3 ? (
          <div key={rating} className="text-green-600">Positive Review: {rating} stars</div>
        ) : (
          <div key={rating} className="text-red-600">Negative Review: {rating} stars</div>
        )
      ))}


    </div>
  );
};

export default App;
