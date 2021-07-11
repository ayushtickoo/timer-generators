export const handleClick = (e, setNature, setTimerValue, duration, unmount) => {
  switch (e.target.innerHTML) {
    case "Play":
      setNature("play");
      break;
    case "Pause":
      setNature("pause");
      break;
    case "Reset":
      setNature("play");
      setTimerValue(duration);
      break;
    case "Stop":
      setNature("stop");
      setTimerValue(duration);
      break;
    case "Delete":
      unmount();
      break;
    default:
      break;
  }
  e.stopPropagation();
};
