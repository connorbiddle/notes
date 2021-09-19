import { useEffect, useState } from "react";
import styled from "styled-components";
import Flex from "../presentational/Flex";
import { Row, Column } from "../presentational/Grid";
import Modal from "../utilities/Modal";
import Button from "../utilities/Button";
import { inputStyles } from "../utilities/Input";
import { isInvalidTimeChange } from "../../base/utilities";

const TimeInputModal = ({
  condition,
  close,
  seconds,
  setDragDisabled,
  onChange,
}) => {
  const paddedSecs = seconds % 60 < 10 ? `0${seconds % 60}` : null;

  const [mins, setMins] = useState(Math.floor(seconds / 60));
  const [secs, setSecs] = useState(paddedSecs || seconds % 60);

  const changeMins = e => {
    if (isInvalidTimeChange(e, "mins")) return;
    setMins(e.target.value);
  };

  const changeSecs = e => {
    if (isInvalidTimeChange(e, "secs")) return;
    setSecs(e.target.value);
  };

  const handleEnter = e => {
    if (e.keyCode === 13) onSubmit();
  };

  const onSubmit = e => {
    if (e) e.preventDefault();
    const [min, sec] = [parseInt(mins), parseInt(secs)];

    if (isNaN(min) || isNaN(sec)) {
      console.log("Values rejected!");
      return;
    }

    const totalSeconds = min * 60 + sec;
    onChange(totalSeconds);
    close();
  };

  const closeTimeModal = () => {
    setMins(Math.floor(seconds / 60));
    setSecs(paddedSecs || seconds % 60);
    close();
  };

  useEffect(() => {
    setDragDisabled(condition ? true : false);
  }, [condition, setDragDisabled]);

  return (
    <Modal condition={condition} close={closeTimeModal}>
      <Flex flexDirection="column" height="100%" justifyContent="space-between">
        <Flex
          alignItems="center"
          justifyContent="center"
          alignSelf="center"
          height="100%"
        >
          <CustomInput
            value={mins}
            onChange={changeMins}
            onKeyDown={handleEnter}
            placeholder="M"
          />
          <Separator>:</Separator>
          <CustomInput
            value={secs}
            onChange={changeSecs}
            onKeyDown={handleEnter}
            placeholder="S"
          />
        </Flex>
        <Row>
          <Column size={6} noMargin>
            <Button
              color="danger"
              icon="fas fa-times"
              block
              type="button"
              onClick={closeTimeModal}
            >
              Cancel
            </Button>
          </Column>
          <Column size={6}>
            <Button
              color="success"
              icon="fas fa-check"
              block
              type="button"
              onClick={onSubmit}
            >
              Confirm
            </Button>
          </Column>
        </Row>
      </Flex>
    </Modal>
  );
};

const CustomInput = styled.input`
  ${inputStyles}

  font-size: 3rem !important;
  width: 5.5rem;
  text-align: center;
`;

const Separator = styled.span`
  font-size: 3rem;
  padding: 0 0.5rem 0.75rem;
`;

export default TimeInputModal;
