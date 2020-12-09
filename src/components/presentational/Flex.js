import styled from "styled-components";

const Flex = styled.div`
  display: flex;

  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

export default Flex;
