import { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import IconButton from "./IconButton";
import { NotificationsContext } from "../../context/NotificationsContext";

const Notification = props => {
  const [isClosing, setIsClosing] = useState(false);
  const [timerID, setTimerID] = useState(null);

  const { deleteNotification } = useContext(NotificationsContext);

  const startRemoveNotification = () => {
    if (isClosing) return;

    setIsClosing(true);
    clearTimeout(timerID);
    setTimeout(() => deleteNotification(props.id), 350);
  };

  useEffect(() => {
    const timer = setTimeout(startRemoveNotification, props.duration || 5000);
    setTimerID(timer);
    // eslint-disable-next-line
  }, []);

  const icons = {
    primary: "fas fa-info",
    success: "fas fa-check",
    danger: "fas fa-exclamation",
  };

  return (
    <StyledNotification
      {...props}
      duration={props.duration || 5000}
      className={isClosing && "closing"}
    >
      <i className={`tag ${icons[props.type]}`} />
      <CloseButton
        onClick={startRemoveNotification}
        icon="fa fa-times"
        color="darkGrey"
        large
      />
      <p>{props.message}</p>
      <div />
    </StyledNotification>
  );
};

const GrowBar = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`;

const StyledNotification = styled.div`
  animation: ${({ theme }) => theme.animations.notification} 350ms ease;
  position: relative;
  padding: 1.25rem;
  background: #fff;
  margin-top: 1.25rem;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  transition: transform ease 350ms;

  &.closing {
    transform: translateX(calc(100% + 1.5rem));
  }

  .tag {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.light};
    background: ${({ theme, type }) => theme.colors[type]};
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    font-size: 0.75rem;
    top: -0.625rem;
    left: -0.625rem;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  }

  p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
  }

  div {
    animation: ${GrowBar} ${({ duration }) => duration}ms linear forwards;

    position: absolute;
    bottom: 3px;
    left: 3px;
    right: 3px;
    height: 4px;
    transform: scaleX(0);
    transform-origin: left;
    background: ${({ theme, type }) => theme.colors[type]};
  }
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

export default Notification;
