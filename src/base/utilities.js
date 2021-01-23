// Convert numeric seconds value to formatted time string
export const toTimeString = seconds => {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;

  if (sec < 10) sec = `0${sec}`; // Pad zeroes

  return `${min}:${sec}`;
};

// Check if an input event is of a deletion type
export const isDeleteEvent = e => {
  return (
    e.nativeEvent.inputType === "deleteContentBackward" ||
    e.nativeEvent.inputType === "deleteContentForward" ||
    e.nativeEvent.inputType === "deleteWordBackward" ||
    e.nativeEvent.inputType === "deleteWordForward"
  );
};

// Check if the TimeInput's change is valid
export const isInvalidTimeChange = (e, type) => {
  if (type === "mins" && e.target.value.length > 2) return true;

  if (
    type === "secs" &&
    (e.target.value.length > 2 || parseInt(e.target.value) > 59)
  )
    return true;

  // nativeEvent returns appended character - not entire input value
  if (isNaN(parseInt(e.nativeEvent.data)) && !isDeleteEvent(e)) return true;
};

export const isInvalidMetronomeValue = value => {
  console.log(value);
  const tempo = parseInt(value);
  return (value !== "" && isNaN(tempo)) || tempo < 0 || tempo > 500;
};
