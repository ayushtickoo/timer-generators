import React from "react";
import Text from "./Text";
import ButtonContainer from "./ButtonContainer";
import "../css/TimerCard.css";
import { handleClick } from "../functions/TimerCard";

function TimerCard({ duration, state, unmount }) {
  const [timerValue, setTimerValue] = React.useState(duration);
  const [nature, setNature] = React.useState(state);

  React.useEffect(() => {
    let id = setInterval(() => {
      setTimerValue((time) => time - 1);
    }, 1000);

    if (timerValue === 0 || nature === "pause" || nature === "stop") {
      clearInterval(id);
    }

    return () => clearInterval(id);
  }, [timerValue, nature]);

  return (
    <div
      className="timer-card"
      onClick={(e) => {
        handleClick(e, setNature, setTimerValue, duration, unmount);
      }}
    >
      <Text value={timerValue} />
      <ButtonContainer
        state={nature}
        disable={timerValue === 0 || nature === "stop"}
      />
    </div>
  );
}

export default TimerCard;
