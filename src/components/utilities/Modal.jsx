import styled from "styled-components";
import Card from "../presentational/Card";

const Modal = ({ children, condition, close }) => {
  if (typeof condition == "undefined" || typeof close == "undefined")
    throw new Error("Modal component requires 'condition' & 'close' props.");

  return condition === true ? (
    <StyledModal>
      <StyledCard>
        <CloseButton onClick={close} type="button">
          <i className="fas fa-times" />
        </CloseButton>
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
`;

const StyledCard = styled(Card)`
  position: relative;
  width: 500px;
  height: 400px;
  max-width: 90%;
  max-height: 90%;
`;

const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  font-size: 1.25rem;
  background: none;
  border: none;
  top: 0.85rem;
  right: 1rem;

  opacity: 0.5;
  transition: opacity 0.3s ease-out;
  &:hover {
    opacity: 0.8;
  }
`;

export default Modal;
