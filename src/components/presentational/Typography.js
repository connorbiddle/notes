import styled, { css } from "styled-components";

// Shared styles extend prop usage to all typography components.
const SHARED_STYLES = css`
  text-align: ${({ textAlign }) => textAlign && textAlign} !important;
  color: ${({ theme, light }) =>
    light ? theme.colors.light : theme.colors.dark};

  margin-bottom: ${({ theme, mBot }) => {
    switch (mBot) {
      case 1:
        return theme.spacing.sm;
      case 2:
        return theme.spacing.md;
      case 3:
        return theme.spacing.lg;
      case 4:
        return theme.spacing.xl;
      default:
        return "0";
    }
  }} !important;
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;

  @media (min-width: ${({ theme }) => theme.sizes.sm}) {
    font-size: 2.625rem;
  }

  ${SHARED_STYLES}
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: ${({ thin }) => (thin ? "400" : "bold")};
  line-height: 1.3;

  ${SHARED_STYLES}

  ${({ theme, thin }) =>
    thin &&
    css`
      font-size: 1rem;
      font-weight: 400;
      color: ${theme.colors.darkGrey};
      text-transform: uppercase;
    `}

  @media (min-width: ${({ theme }) => theme.sizes.sm}) {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ thin }) => (thin ? "1.2rem" : "1.5rem")};
  }

  ${({ theme, centerUntilLg }) =>
    centerUntilLg &&
    `
      text-align: center;
      @media (min-width: ${theme.sizes.lg}) { text-align: left; }
    `}
`;

export const SmallText = styled.div`
  font-size: 1.125rem;
  font-weight: normal;
  line-height: 1.5;

  a {
    text-decoration: underline;
  }

  ${SHARED_STYLES}
`;

export const Muted = styled.span`
  color: ${({ theme }) => theme.colors.darkGrey};
`;
