import styled from "styled-components";

export const MainTitle = styled.h1`
  font-size: 2.625rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
`;

export const SmallText = styled.div`
  color: ${({ theme, light }) =>
    light ? theme.colors.light : theme.colors.dark};
  font-size: 1.125rem;
  font-weight: normal;
`;
