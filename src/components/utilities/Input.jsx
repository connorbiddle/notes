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
      onKeyDown={props.onKeyDown}
      onChange={onInputChange}
    />
  );
};

// Reused in TimeInput
export const inputStyles = css`
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

  font-size: ${({ large }) => (large ? "1.35rem" : "1rem")};
  font-weight: ${({ large }) => (large ? "bold" : "normal")};
  text-align: ${({ center }) => (center ? "center" : "left")};
  width: ${({ width }) => (width ? width : "100%")};

  @media (min-width: ${({ theme }) => theme.sizes.sm}) {
    font-size: ${({ large }) => (large ? "1.5rem" : "1.125rem")};
  }
`;

const StyledInput = styled.input`
  ${inputStyles}
`;

export default Input;
