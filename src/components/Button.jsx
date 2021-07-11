import React from "react";
import "../css/Button.css";

function Button({ text, type, disable }) {
  return (
    <button disabled={disable} id={type}>
      {text}
    </button>
  );
}

export default Button;
