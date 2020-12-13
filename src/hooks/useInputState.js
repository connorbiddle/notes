import { useState } from "react";

const useInputState = defaultVal => {
  const [inputState, setInputState] = useState(defaultVal || "");

  const setInputStateFromField = e => setInputState(e.target.value);

  return [inputState, setInputStateFromField];
};

export default useInputState;
