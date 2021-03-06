import { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../utilities/Input";
import IconButton from "../utilities/IconButton";
import Card from "../presentational/Card";
import Flex from "../presentational/Flex";
import { Row, Column } from "../presentational/Grid";
import {
  AccurateInterval,
  isInvalidMetronomeValue,
} from "../../base/utilities";
import MetronomeClick from "../../assets/click.wav";

const Metronome = () => {
  const [bpm, setBpm] = useState(80);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const [timer, setTimer] = useState(null);

  const metronomeSound = new Audio(MetronomeClick);

  const startMetronome = () => {
    if (isInvalidMetronomeValue(bpm) || bpm === "" || bpm < 1) return;

    const tickFrequency = (60 / bpm) * 1000;
    const interval = new AccurateInterval(tickMetronome, tickFrequency);

    interval.run();
    setPlaying(true);
    setTimer(interval);
  };

  const pauseMetronome = () => {
    timer.stop();
    setPlaying(false);
  };

  const tickMetronome = () => {
    // console.log(`Metronome ticked at ${bpm} BPM.`);
    metronomeSound.currentTime = 0;
    metronomeSound.play();
  };

  const toggleVisibility = () => setVisible(old => !old);

  const onBpmChange = e => {
    if (isInvalidMetronomeValue(e.target.value)) return false;

    setBpm(e.target.value);

    if (playing) {
      pauseMetronome();
      startMetronome();
    }
  };

  const handleEnter = e => {
    if (e.keyCode !== 13) return;

    if (playing) {
      pauseMetronome();
    } else {
      startMetronome();
    }
  };

  useEffect(() => {
    if (playing) {
      pauseMetronome();
      startMetronome();
    }
    // eslint-disable-next-line
  }, [bpm]);

  return (
    <StyledMetronome className={visible && "visible"}>
      <OpenButton onClick={toggleVisibility}>
        Metronome <i className={`fas fa-chevron-up ${visible && "flip"}`} />
      </OpenButton>
      <Row>
        <Column size="6" noMargin>
          <Flex alignItems="center">
            <Input
              value={bpm}
              center
              width="3.5rem"
              noMargin
              onChange={onBpmChange}
              onKeyDown={handleEnter}
            />
            &nbsp;&nbsp;BPM
          </Flex>
        </Column>
        <Column size="6">
          <Flex alignItems="center" height="100%">
            <IconButton
              onClick={playing ? pauseMetronome : startMetronome}
              icon={playing ? "fas fa-pause" : "fas fa-play"}
              color={playing ? "danger" : "success"}
            />
          </Flex>
        </Column>
      </Row>
    </StyledMetronome>
  );
};

const StyledMetronome = styled(Card)`
  width: 12.5rem;
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 50%;
  padding: 1rem 1.5rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  transform: translate(-50%, 100%);
  transition: transform 0.3s ease;

  &.visible {
    transform: translate(-50%, 0);
  }
`;

const OpenButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 2rem;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.light};

  i {
    margin-left: 0.25rem;
    transition: transform 0.3s ease;
    &.flip {
      transform: rotate(180deg);
    }
  }
`;

export default Metronome;
