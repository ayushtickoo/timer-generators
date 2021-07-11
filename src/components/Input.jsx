import React from "react";
import "../css/Input.css";

function Input({ handleChange, value }) {
  return (
    <input
      id="input-box"
      type="number"
      name="number"
      placeholder="input time in seconds"
      value={value}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
    />
  );
}

export default Input;
