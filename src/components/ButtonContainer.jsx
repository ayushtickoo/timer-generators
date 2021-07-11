import React from "react";
import Button from "./Button";
import "../css/ButtonContainer.css";

function ButtonContainer({ state, disable }) {
  return (
    <div id="button-container">
      <Button
        disable={disable && state !== "stop"}
        text={state === "play" ? "Pause" : "Play"}
        type="play-pause"
      />
      <Button text="Reset" type="reset" disable={disable} />
      <Button text={disable ? "Delete" : "Stop"} type="stop-delete" />
    </div>
  );
}

export default ButtonContainer;
