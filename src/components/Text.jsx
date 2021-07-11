import React from "react";
import "../css/Text.css";

function Text({ value }) {
  return (
    <div id="text-container">
      {value}
      <span>s</span>
    </div>
  );
}

export default Text;
