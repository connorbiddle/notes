import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 550px;

  @media (min-width: ${({ theme }) => theme.sizes.lg}) {
    max-width: 1050px;
  }
`;

export default Container;
