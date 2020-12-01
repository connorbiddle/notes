import React from "react";
import styled from "styled-components";
import { MainTitle, SmallText } from "./presentational/Typography";

const TitleBar = () => {
  return (
    <StyledTitleBar>
      <MainTitle>Notes</MainTitle>
      <SmallText light>
        First time? <a href="/">Read this</a>.
      </SmallText>
    </StyledTitleBar>
  );
};

const StyledTitleBar = styled.section`
  padding: 1.5rem 0;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.sizes.sm}) {
    text-align: left;
  }
`;

export default TitleBar;
