import React from "react";
import styled from "styled-components";

const Input = ({ value, onChange, name, placeholder }) => {
  return (
    <StyledInput
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

const StyledInput = styled.input`
  font-family: inherit;
  font-size: 1.5rem;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 0.5rem 0;
`;

export default Input;
