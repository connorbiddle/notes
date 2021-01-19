import React, { createContext } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import Notification from "../components/utilities/Notification";

const NotificationsContext = createContext();

const NotificationsProvider = ({ children }) => {
  // Implement reducer here.

  const notifications = [
    {
      id: uuid(),
      message: "This is a test success notification...",
      type: "success",
      duration: 3000,
    },
    {
      id: uuid(),
      message: "...this is a test danger notification...",
      type: "danger",
      duration: 5000,
    },
    {
      id: uuid(),
      message:
        "...and this is a test info notification, which also happens to be really long.",
      type: "primary",
      duration: 5000,
    },
  ];

  return (
    <NotificationsContext.Provider>
      {children}
      <NotificationWrapper>
        {notifications.map(notification => (
          <Notification key={notification.id} {...notification} />
        ))}
      </NotificationWrapper>
    </NotificationsContext.Provider>
  );
};

const NotificationWrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;

  @media (min-width: ${({ theme }) => theme.sizes.sm}) {
    left: unset;
    right: 1rem;
    width: 300px;
  }
`;

export default NotificationsProvider;
