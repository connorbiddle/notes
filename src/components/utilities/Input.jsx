import React from "react";
import styled, { css } from "styled-components";
import useInputState from "../../hooks/useInputState";

const Input = ({ name, value, onChange, placeholder, large }) => {
  const [inputValue, setInputValue] = useInputState(value || "");

  const onInputChange = e => {
    if (onChange) onChange(e);
    setInputValue(e);
  };

  return (
    <StyledInput
      name={name}
      value={inputValue}
      onChange={onInputChange}
      placeholder={placeholder}
      large={large}
    />
  );
};

// Reused in TimeInput
export const inputStyles = css`
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

const StyledInput = styled.input`
  ${inputStyles}
`;

export default Input;
