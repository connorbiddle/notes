import { useState } from "react";
import styled from "styled-components";
import Flex from "../presentational/Flex";
import { Row, Column } from "../presentational/Grid";
import Modal from "./Modal";
import Button from "./Button";
import { inputStyles } from "./Input";

const TimeInputModal = ({ condition, close, seconds, onChange }) => {
  const paddedSecs = seconds % 60 < 10 ? `0${seconds % 60}` : null;

  const [mins, setMins] = useState(Math.floor(seconds / 60));
  const [secs, setSecs] = useState(paddedSecs || seconds % 60);

  const changeMins = e => {
    if (isInvalidChange(e, "mins")) return;
    setMins(e.target.value);
  };

  const changeSecs = e => {
    if (isInvalidChange(e, "secs")) return;
    setSecs(e.target.value);
  };

  const isInvalidChange = (e, type) => {
    if (type === "mins" && e.target.value.length > 3) return true;
    if (
      type === "secs" &&
      (e.target.value.length > 2 || parseInt(e.target.value) > 59)
    )
      return true;

    if (
      isNaN(parseInt(e.nativeEvent.data)) &&
      e.nativeEvent.inputType !== "deleteContentBackward" &&
      e.nativeEvent.inputType !== "deleteContentBackward" &&
      e.nativeEvent.inputType !== "deleteWordBackward" &&
      e.nativeEvent.inputType !== "deleteWordForward"
    )
      return true;
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

  return (
    <Modal condition={condition} close={close}>
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
          <Column size={6}>
            <Button color="danger" icon="fas fa-times" block type="button">
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

  width: 7.5rem;
  font-size: 4rem;
  text-align: center;
`;

const Separator = styled.span`
  font-size: 3rem;
  padding: 0 1rem 0.75rem;
`;

export default TimeInputModal;
