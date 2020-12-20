import { darken } from "polished";
import React from "react";
import styled from "styled-components";
import Flex from "../presentational/Flex";

const Button = ({ children, onClick, icon, block, type, color, center }) => {
  const button = (
    <StyledButton onClick={onClick} block={block} type={type} color={color}>
      {children} {icon && <i className={icon} />}
    </StyledButton>
  );

  return center ? <Flex justifyContent="center">{button}</Flex> : button;
};

const StyledButton = styled.button`
  width: ${({ block }) => (block ? "100%" : "unset")};
  display: ${({ block }) => (block ? "block" : "inline-block")};
  color: ${({ theme }) => theme.colors.light};
  background: ${({ theme, color }) =>
    theme.colors[color] || theme.colors.primary};

  cursor: pointer;
  border-radius: 10px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.75rem 1.5rem;
  border: none;
  transition: background 250ms ease-out;
  text-decoration: none;
  line-height: 1.25;

  &:hover {
    background: ${({ theme, color }) =>
      darken(0.075, theme.colors[color] || theme.colors.primary)};
  }

  i {
    margin-left: 0.25rem;
  }
`;

export default Button;
