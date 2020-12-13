import { darken } from "polished";
import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick, icon, block, type, color }) => {
  return (
    <StyledButton onClick={onClick} block={block} type={type} color={color}>
      {children} {icon && <i className={icon} />}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: ${({ block }) => (block ? "100%" : "unset")};
  display: ${({ block }) => (block ? "block" : "inline-block")};

  cursor: pointer;
  color: ${({ theme }) => theme.colors.light};
  background: ${({ theme, color }) =>
    theme.colors[color] || theme.colors.primary};
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

  &:hover {
    background: ${({ theme, color }) =>
      darken(0.075, theme.colors[color] || theme.colors.primary)};
  }

  i {
    margin-left: 0.25rem;
  }
`;

export default Button;
