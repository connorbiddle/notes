import styled from "styled-components";

// This grid system is designed mobile-first.
// The 'sizes' prop defines the base size (i.e. on mobile).
// 'sm', 'md' etc. define the width from that screen size and above.

const GUTTER = "1rem";

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${GUTTER};
`;

export const Column = styled.div`
  flex: ${({ size }) => size || "100%"};
  padding: 0 ${GUTTER};

  @media (min-width: ${({ theme }) => theme.sizes.sm}) {
    flex: ${props => props.sm};
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
`;
