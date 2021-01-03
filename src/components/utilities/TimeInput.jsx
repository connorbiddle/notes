import { useState } from "react";
import styled from "styled-components";
import { inputStyles } from "./Input";
import { toTimeString } from "../../base/utilities";
import TimeInputModal from "./TimeInputModal";

const TimeInput = ({ value, onChange }) => {
  const [modalActive, setModalActive] = useState(false);

  const openModal = () => setModalActive(true);
  const closeModal = () => setModalActive(false);

  return (
    <>
      <StyledTimeInput onClick={openModal}>
        {toTimeString(value)}
      </StyledTimeInput>
      <TimeInputModal
        condition={modalActive}
        close={closeModal}
        seconds={value}
        onChange={onChange}
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
