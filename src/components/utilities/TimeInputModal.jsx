import { useState } from "react";
import styled from "styled-components";
import Flex from "../presentational/Flex";
import { Row, Column } from "../presentational/Grid";
import Modal from "./Modal";
import Button from "./Button";
import { inputStyles } from "./Input";

const TimeInputModal = ({ condition, close, seconds }) => {
  const [mins, setMins] = useState(Math.floor(seconds / 60));
  const [secs, setSecs] = useState(seconds % 60);

  const changeMins = e => setMins(e.target.value);
  const changeSecs = e => setSecs(e.target.value);

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
            // numbersOnly
          />
          <Separator>:</Separator>
          <CustomInput
            value={secs}
            onChange={changeSecs}
            // numbersOnly
          />
        </Flex>
        <Row>
          <Column size={6}>
            <Button color="danger" icon="fas fa-times" block type="button">
              Cancel
            </Button>
          </Column>
          <Column size={6}>
            <Button color="success" icon="fas fa-check" block type="button">
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
