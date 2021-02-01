import styled from "styled-components";

// This grid system is designed mobile-first.
// The 'sizes' prop defines the base size (i.e. on mobile).
// 'sm', 'md' etc. define the width from that screen size and above.

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme, mTop }) => mTop && theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.sizes.sm}) {
    margin: 0 -${({ theme }) => theme.spacing.md};
    margin-bottom: ${({ theme, mBot }) => mBot && theme.spacing.md};
  }
`;

export const Column = styled.div`
  flex: ${({ size }) => size || "100%"};
  padding: 0 ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${({ theme }) => theme.sizes.sm}) {
    flex: ${props => props.sm};
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  @media (min-width: ${({ theme }) => theme.sizes.md}) {
    flex: ${props => props.md};
  }

  @media (min-width: ${({ theme }) => theme.sizes.lg}) {
    flex: ${props => props.lg};
  }

  @media (min-width: ${({ theme }) => theme.sizes.xl}) {
    flex: ${props => props.xl};
  }

  margin-bottom: ${({ noMargin }) => noMargin && 0};
`;
