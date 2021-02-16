import styled from "styled-components";

const Flex = styled.div`
  display: flex;

  height: ${({ height }) => height};
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-self: ${({ alignSelf }) => alignSelf};
  justify-self: ${({ justifySelf }) => justifySelf};

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

export default Flex;
