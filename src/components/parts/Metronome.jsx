import { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../utilities/Input";
import IconButton from "../utilities/IconButton";
import Card from "../presentational/Card";
import Flex from "../presentational/Flex";
import { Row, Column } from "../presentational/Grid";
import { isInvalidMetronomeValue } from "../../base/utilities";
import MetronomeClick from "../../assets/click.wav";

const Metronome = () => {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const [bpm, setBpm] = useState(80);
  const [intervalID, setIntervalID] = useState(null);

  const metronomeSound = new Audio(MetronomeClick);

  const startMetronome = () => {
    if (isInvalidMetronomeValue(bpm) || bpm === "" || bpm < 1) return;

    const tickFrequency = (60 / bpm) * 1000;
    const interval = setInterval(tickMetronome, tickFrequency);

    setPlaying(true);
    setIntervalID(interval);
  };

  const pauseMetronome = () => {
    clearInterval(intervalID);
    setPlaying(false);
  };

  const tickMetronome = () => {
    console.log(`Metronome ticked at ${bpm} BPM.`);
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
        <Column size="6">
          <Flex alignItems="center">
            <Input
              value={bpm}
              center
              width="3.5rem"
              noMargin
              onChange={onBpmChange}
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
