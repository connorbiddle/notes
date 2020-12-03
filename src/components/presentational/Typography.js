import styled from "styled-components";

export const MainTitle = styled.h1`
  color: ${({ theme }) => theme.colors.light};
  font-size: 2.625rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: ${({ theme, mbot }) => mbot || theme.spacing.sm};

  @media (min-width: ${({ theme }) => theme.sizes.sm}) {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

export const SmallText = styled.div`
  color: ${({ theme, light }) =>
    light ? theme.colors.light : theme.colors.dark};
  text-align: ${({ textAlign }) => textAlign && textAlign};
  font-size: 1.125rem;
  font-weight: normal;
  line-height: 1.5;

  a {
    text-decoration: underline;
  }
`;

export const Muted = styled.span`
  color: ${({ theme }) => theme.colors.darkGrey};
`;
