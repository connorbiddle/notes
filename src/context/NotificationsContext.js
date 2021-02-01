import React, { createContext, useReducer } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import Notification from "../components/utilities/Notification";

export const NotificationsContext = createContext();

const NotificationsProvider = ({ children, maxNumber }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_NOTIFICATION":
        const newState = [...state];
        if (newState.length >= (maxNumber || 1)) newState.shift();
        newState.push({ ...action.payload });
        return newState;
      case "DELETE_NOTIFICATION":
        return state.filter(notification => notification.id !== action.id);
      default:
        return state;
    }
  }, []);

  const addNotification = notification => {
    const newNotification = {
      type: "primary",
      duration: 5000,
      id: uuid(),
      ...notification,
    };

    dispatch({
      type: "ADD_NOTIFICATION",
      payload: newNotification,
    });
  };

  const deleteNotification = id => {
    dispatch({
      type: "DELETE_NOTIFICATION",
      id: id,
    });
  };

  return (
    <NotificationsContext.Provider
      value={{ addNotification, deleteNotification }}
    >
      {children}
      <NotificationWrapper>
        {state.map(notification => (
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
  z-index: 1001;

  @media (min-width: ${({ theme }) => theme.sizes.sm}) {
    left: unset;
    width: 300px;
  }
`;

export default NotificationsProvider;
