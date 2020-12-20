import styled, { css } from "styled-components";

const Card = styled.section`
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: ${({ mt }) => mt && mt};
  margin-bottom: ${({ mb }) => mb && mb};

  animation: ${({ theme, fadeIn }) =>
    fadeIn ? theme.animations.fadeIn : "none"};

  ${({ theme, fadeIn }) =>
    fadeIn &&
    css`
      animation: 1s ${theme.animations.fadeIn} ease;
    `}
`;

export default Card;
