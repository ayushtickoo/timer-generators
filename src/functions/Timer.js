import { v4 as uuidv4 } from "uuid";

export const validation = (inputValue, durations) => {
  if (inputValue === 0 || isNaN(inputValue)) {
    alert("Input should be greater than zero!");
    return false;
  } else if (durations.length === 10) {
    alert("Maximum limit reached. Delete any timer to proceed!");
    return false;
  }
  return true;
};

export const handleButtonClick = (
  e,
  durations,
  setDurations,
  inputValue,
  setInputValue
) => {
  switch (e.target.id) {
    case "add-timer":
      let isValid = validation(parseInt(inputValue, 10), durations);
      if (isValid) {
        let id = uuidv4();
        setDurations([...durations, { id: id, duration: inputValue }]);
      }
      setInputValue("");
      break;
    default:
      break;
  }
};

export const handleUnmount = (key, setDurations) => {
  setDurations((arr) => arr.filter((obj) => obj.id !== key));
};
