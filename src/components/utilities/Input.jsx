import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const Input = props => {
  const [inputValue, setInputValue] = useState(props.value || "");

  useEffect(() => setInputValue(props.value), [props.value]);

  const onInputChange = e => {
    let error = props.onChange(e) === false;
    if (!error) setInputValue(e.target.value);
  };

  const onClick = e => e.target.focus(); // Necessary for drag & drop.

  return (
    <StyledInput
      {...props}
      value={inputValue}
      onKeyDown={props.onKeyDown}
      onChange={onInputChange}
      onClick={onClick}
    />
  );
};

// Reused in TimeInput
export const inputStyles = css`
  cursor: pointer;
  font-family: inherit;
  display: block;
  border: none;
  background: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 0.5rem 0;

  &:focus {
    cursor: text;
  }

  margin-bottom: ${({ theme, large, noMargin }) => {
    if (noMargin) return 0;
    if (large) return theme.spacing.lg;
    return theme.spacing.md;
  }};

  font-weight: ${({ large }) => (large ? "bold" : "normal")};
  font-size: ${({ large }) => (large ? "1.5rem" : "1.125rem")};
  text-align: ${({ center }) => (center ? "center" : "left")};
  width: ${({ width }) => (width ? width : "100%")};
`;

const StyledInput = styled.input`
  ${inputStyles}
`;

export default Input;
