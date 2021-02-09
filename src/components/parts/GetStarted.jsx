import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MainTitle, Title } from "../presentational/Typography";
import Button from "../utilities/Button";

const GetStarted = () => {
  return (
    <StyledGetStarted>
      <MainTitle textAlign="center" light mBot={3}>
        Welcome to Notes!
      </MainTitle>
      <Title textAlign="center" light mBot={4}>
        To get started, create your first practice routine.
      </Title>
      <Link to="/new">
        <Button color="success" icon="fas fa-caret-right" center>
          Create Routine
        </Button>
      </Link>
    </StyledGetStarted>
  );
};

const StyledGetStarted = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  width: calc(100% - 2rem);
  transform: translate(-50%, -50%);

  animation: ${({ theme }) => theme.animations.fadeInAlt} ease 1.25s;
`;

export default GetStarted;
