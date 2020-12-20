import styled from "styled-components";
import Card from "../presentational/Card";

const Metronome = () => {
  // const [playing, setPlaying] = useState(false);
  // const [visible, setVisible] = useState(false);
  // const [bpm, setBpm] = useState(80);

  return <StyledMetronome>Metronome</StyledMetronome>;
};

const StyledMetronome = styled(Card)`
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 0.85rem 1rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export default Metronome;
