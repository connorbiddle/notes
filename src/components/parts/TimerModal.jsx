import React, { useEffect, useState } from "react";
import Flex from "../presentational/Flex";
import { Title } from "../presentational/Typography";
import Modal from "../utilities/Modal";
import IconButton from "../utilities/IconButton";
import { toTimeString } from "../../base/utilities";
import Alarm from "../../assets/alarm.wav";

const TimerModal = ({ task, close }) => {
  const [alarm, setAlarm] = useState(new Audio(Alarm));
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
    alarm.play();
  };

  const closeTimer = () => {
    setIsPlaying(false);
    stopTimer();
    close();
    clearInterval(intervalID);
  };

  useEffect(() => {
    alarm.loop = true;

    return () => {
      clearInterval(intervalID);
      alarm.pause();
      setAlarm(null);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Modal condition={task !== null} close={closeTimer}>
      <Flex justifyContent="space-between" flexDirection="column" height="100%">
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          height="100%"
        >
          <Title textAlign="center" thin>
            Task
          </Title>
          <Title textAlign="center" mBot={3}>
            {task.name}
          </Title>
          <Title textAlign="center" thin>
            Time Left
          </Title>
          <Title textAlign="center">{toTimeString(timeLeft)}</Title>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <IconButton
            icon={`fas fa-${isPlaying ? "pause" : "play"}`}
            background={isPlaying ? "danger" : "success"}
            onClick={handleButtonPress}
            disabled={isFinished || task.duration <= 0}
          />
        </Flex>
      </Flex>
    </Modal>
  );
};

export default TimerModal;
