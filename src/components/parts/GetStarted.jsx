import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MainTitle, Title } from "../presentational/Typography";
import Button from "../utilities/Button";

const GetStarted = () => {
  return (
    <StyledGetStarted>
      <MainTitle textAlign="center" light mBot={1}>
        Welcome to Notes!
      </MainTitle>
      <Title textAlign="center" light mBot={3}>
        Looks like you've got no routines saved yet.
      </Title>
      <Link to="/new">
        <Button color="success" icon="fas fa-caret-right" center>
          Get Started
        </Button>
      </Link>
    </StyledGetStarted>
  );
};

const StyledGetStarted = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);

  animation: ${({ theme }) => theme.animations.fadeInAlt} ease 1.25s;
`;

export default GetStarted;