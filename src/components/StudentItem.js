import React from "react";

const StudentItem = ({ student }) => {
  const { name, age, color, email } = student;

  return (
    <div>
      <h3>{name}</h3>
      <h4>{email}</h4>
      <h4>{age}</h4>
      Color: <input type="text" value={color} />
    </div>
  );
};

export default StudentItem;
