import styled, { css } from "styled-components";

// Shared styles extend prop usage to all typography components.
const SHARED_STYLES = css`
  text-align: ${({ textAlign }) => textAlign && textAlign} !important;
  color: ${({ theme, light }) =>
    light ? theme.colors.light : theme.colors.dark} !important;

  margin-bottom: ${({ theme, mBot }) => {
    switch (mBot) {
      case 2:
        return theme.spacing.md;
      case 3:
        return theme.spacing.lg;
      case 4:
        return theme.spacing.xl;
      default:
        return theme.spacing.sm;
    }
  }} !important;
`;

export const MainTitle = styled.h1`
  font-size: 2.625rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
  ${SHARED_STYLES}
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;

  @media (min-width: ${({ theme }) => theme.sizes.sm}) {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  ${({ theme, centerUntilLg }) =>
    centerUntilLg &&
    `
      text-align: center;
      @media (min-width: ${theme.sizes.lg}) { text-align: left; }
    `}

  ${SHARED_STYLES}
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
