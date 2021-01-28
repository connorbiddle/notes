import React, { useEffect, useState } from "react";
import Flex from "../presentational/Flex";
import { Title } from "../presentational/Typography";
import Modal from "./Modal";
import { toTimeString } from "../../base/utilities";
import IconButton from "./IconButton";

const TimerModal = ({ task, close }) => {
  const [timeLeft] = useState(task.duration);
  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalID, setIntervalID] = useState(null);

  const TICK_FREQUENCY = 200; // Milliseconds apart

  const togglePlaying = () => {
    if (isPlaying) {
      setIsPlaying(false);
      stopTimer();
    } else {
      setIsPlaying(true);
      startTimer();
    }
  };

  const startTimer = () => {
    const timer = setInterval(tickTimer, TICK_FREQUENCY);
    setIntervalID(timer);
  };

  const stopTimer = () => {
    clearInterval(intervalID);
  };

  const tickTimer = () => {
    // Calculate time since timer last started. Use to update timeLeft.
    console.log("Tick!");
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalID);
    };
  });

  return (
    <Modal condition={task !== null} close={close}>
      <Flex justifyContent="space-between" flexDirection="column" height="100%">
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          height="100%"
        >
          <Title textAlign="center" mBot={2}>
            {task.name}
          </Title>
          <Title textAlign="center" thin>
            {toTimeString(timeLeft)}
          </Title>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <IconButton
            icon={`fas fa-${isPlaying ? "pause" : "play"}`}
            background={isPlaying ? "danger" : "success"}
            onClick={togglePlaying}
          />
        </Flex>
      </Flex>
    </Modal>
  );
};

export default TimerModal;
