import { useState } from "react";
import styled from "styled-components";
import { inputStyles } from "./Input";
import { toTimeString } from "../../base/utilities";
import TimeInputModal from "../parts/TimeInputModal";

const TimeInput = props => {
  const [modalActive, setModalActive] = useState(false);

  const openModal = () => setModalActive(true);
  const closeModal = () => setModalActive(false);

  return (
    <>
      <StyledTimeInput onClick={openModal} {...props}>
        {toTimeString(props.value)}
      </StyledTimeInput>
      <TimeInputModal
        condition={modalActive}
        close={closeModal}
        seconds={props.value}
        onChange={props.onChange}
        setDragDisabled={props.setDragDisabled}
      />
    </>
  );
};

const StyledTimeInput = styled.div`
  ${inputStyles}

  cursor: pointer;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: center;
`;

export default TimeInput;
