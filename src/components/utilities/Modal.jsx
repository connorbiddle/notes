import { useEffect } from "react";
import styled from "styled-components";
import Card from "../presentational/Card";
import IconButton from "../utilities/IconButton";

const Modal = ({ children, condition, close }) => {
  if (typeof condition == "undefined" || typeof close == "undefined")
    throw new Error("Modal component requires 'condition' & 'close' props.");

  useEffect(() => {
    const handleClose = e => {
      if (e.keyCode === 27) close();
    };

    window.addEventListener("keydown", handleClose);
    return () => window.removeEventListener("keydown", handleClose);
  }, [close]);

  return condition === true ? (
    <StyledModal>
      <StyledCard>
        <CloseButton
          onClick={close}
          type="button"
          icon="fas fa-times"
          color="darkGrey"
        />
        {children}
      </StyledCard>
    </StyledModal>
  ) : null;
};

const StyledModal = styled.section`
  animation: 0.3s ease-out ${({ theme }) => theme.animations.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  color: ${({ theme }) => theme.colors.dark};
  z-index: 999;
`;

const StyledCard = styled(Card)`
  position: relative;
  width: 450px;
  height: 325px;
  max-width: 90%;
  max-height: 90%;
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 0.85rem;
  right: 1.15rem;
`;

export default Modal;
