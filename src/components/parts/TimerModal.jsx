import React, { useEffect, useState } from "react";
import Flex from "../presentational/Flex";
import { Title } from "../presentational/Typography";
import Modal from "../utilities/Modal";
import { toTimeString } from "../../base/utilities";
import IconButton from "../utilities/IconButton";

const TimerModal = ({ task, close }) => {
  const [timeLeft, setTimeLeft] = useState(task.duration);
  const [isFinished, setIsFinished] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalID, setIntervalID] = useState(null);

  const TICK_FREQUENCY = 250; // Milliseconds apart

  const handleButtonPress = () => {
    if (isPlaying) {
      setIsPlaying(false);
      stopTimer();
    } else {
      setIsPlaying(true);
      startTimer();
    }
  };

  const startTimer = () => {
    const now = Date.now();
    const timer = setInterval(() => {
      tickTimer(now, timer);
    }, TICK_FREQUENCY);
    setIntervalID(timer);
    console.log("TIME STARTED:", now);
  };

  const stopTimer = () => {
    clearInterval(intervalID);
  };

  const tickTimer = (timeStarted, interval) => {
    const now = Date.now();
    const elapsed = (now - timeStarted) / 1000;
    const remaining = timeLeft - elapsed;

    if (remaining > 0) {
      setTimeLeft(remaining);
    } else {
      triggerAlarm(interval);
    }
  };

  const triggerAlarm = interval => {
    setIsPlaying(false);
    setIsFinished(true);
    clearInterval(interval);
    console.log("alarm!");
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalID);
    };
    // eslint-disable-next-line
  }, []);

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
            onClick={handleButtonPress}
            disabled={isFinished}
          />
        </Flex>
      </Flex>
    </Modal>
  );
};

export default TimerModal;
