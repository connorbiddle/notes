import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const Input = props => {
  const [inputValue, setInputValue] = useState(props.value || "");

  useEffect(() => setInputValue(props.value), [props.value]);

  const onInputChange = e => {
    let error = props.onChange(e) === false;

    if (!error) setInputValue(e.target.value);
  };

  return (
    <StyledInput
      {...props}
      value={inputValue}
      onChange={onInputChange}
      onKeyDown={props.onKeyDown}
    />
  );
};

// Reused in TimeInput
export const inputStyles = css`
  font-family: inherit;
  display: block;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 0.5rem 0;

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
