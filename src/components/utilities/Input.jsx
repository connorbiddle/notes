import React from "react";
import styled from "styled-components";

const Input = ({ name, value, onChange, placeholder, large }) => {
  return (
    <StyledInput
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      large={large}
    />
  );
};

const StyledInput = styled.input`
  font-family: inherit;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 0.5rem 0;

  margin-bottom: ${({ theme, large }) =>
    large ? theme.spacing.md : theme.spacing.sm};
  font-weight: ${({ large }) => (large ? "bold" : "normal")};
  font-size: ${({ large }) => (large ? "1.5rem" : "1.125rem")};
`;

export default Input;
