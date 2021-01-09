import styled from "styled-components";
import { useState } from "react";
import Input from "../utilities/Input";
import Card from "../presentational/Card";
import Flex from "../presentational/Flex";
import { Row, Column } from "../presentational/Grid";

const Metronome = () => {
  // const [playing, setPlaying] = useState(false);
  // const [visible, setVisible] = useState(false);
  const [bpm, setBpm] = useState(80);

  return (
    <StyledMetronome>
      <Row>
        <Column size="6">
          <Flex alignItems="center">
            <Input value={bpm} center width="3.5rem" noMargin />
            &nbsp;&nbsp;BPM
          </Flex>
        </Column>
        <Column size="6">Start</Column>
      </Row>
    </StyledMetronome>
  );
};

const StyledMetronome = styled(Card)`
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 1rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export default Metronome;
