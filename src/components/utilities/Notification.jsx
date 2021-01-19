import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Notification = props => {
  useEffect(() => {
    setTimeout(removeNotification, props.duration || 5000);
  }, []);

  const removeNotification = () => {
    console.log(`Removing notification: ${props.id}`);
    // Remove the notification from the context here.
  };

  return (
    <StyledNotification {...props} duration={props.duration || 5000}>
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
  position: relative;
  padding: 1.25rem;
  background: #fff;
  margin-top: 0.5rem;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  border-radius: 3px;

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

export default Notification;
