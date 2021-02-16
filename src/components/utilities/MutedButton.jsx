import { darken } from "polished";
import React from "react";
import styled from "styled-components";
import Flex from "../presentational/Flex";
import { Muted, SmallText } from "../presentational/Typography";

const MutedButton = props => {
  return (
    <StyledMutedButton {...props}>
      <SmallText>
        <Muted>
          <Flex alignItems="center">
            {props.children}&nbsp;
            {props.icon && <i className={props.icon} />}
          </Flex>
        </Muted>
      </SmallText>
    </StyledMutedButton>
  );
};

const StyledMutedButton = styled.button`
  cursor: pointer;
  font-family: inherit;
  background: none;
  border: none;

  ${Muted} {
    transition: color 200ms ease;
  }

  ${Muted}:hover {
    color: ${({ theme }) => darken(0.2, theme.colors.darkGrey)};
  }
`;

export default MutedButton;
