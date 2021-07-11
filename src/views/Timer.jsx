import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import TimerCard from "../components/TimerCard";
import "../css/Timer.css";
import { handleButtonClick, handleUnmount } from "../functions/Timer";

function Timer() {
  const [durations, setDurations] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div
      id="timer-view"
      onClick={(e) =>
        handleButtonClick(e, durations, setDurations, inputValue, setInputValue)
      }
    >
      <p id="title">Timer Value:</p>
      <Input handleChange={setInputValue} value={inputValue} />
      <Button text="Add timer" type="add-timer" />
      {durations.length > 0 &&
        durations.map((obj) => (
          <TimerCard
            key={obj.id}
            duration={obj.duration}
            state="play"
            unmount={() => handleUnmount(obj.id, setDurations)}
          />
        ))}
    </div>
  );
}

export default Timer;
